import { NextResponse } from "next/server";
import { executeQuery } from "../../../conn/conn";
import { client } from "../../../middelware/redisFile";
import { S3Client, GetObjectCommand, ListObjectsCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

const s3Client = new S3Client({
  region : "ap-southeast-2",
  credentials:{
      accessKeyId : process.env.ID,
      secretAccessKey :process.env.KEY
  }
})


export async  function PATCH(req){
    const {id} = await req.json()
 
    const redisdata = await client.get(`part${id}`);
    if(!redisdata){
    const query =  `Select point.project_topic,topic.id,topic.topic, point.point_heading, point.point_details from project_topic_point as point Left join project_topics as topic On point.project_topic=topic.id WHERE FIND_IN_SET(${id},point.project_id) > 0`
    const data = await executeQuery(query)
    if(data.length > 0){
        const value =  await JSON.stringify(data)
        await client.set(`part${id}`, value);
          return NextResponse.json({data},{success : true}, {status : 200})
        }
        else return NextResponse.json({message : "Data Empty"},{success : false}, {status : 206})
    }else{ 
     const value = await JSON.parse(redisdata)
  
     return NextResponse.json({data : value}, { success : true}, {status : 200})
    }
}

export async  function POST(req){
    const {folder} = await req.json()


    const getUrl = new ListObjectsCommand({
      Bucket :"jtcporject",
      Prefix: `${folder}/project/`
  })
  const url  = await s3Client.send(getUrl)
  const key = url && url.Contents && url.Contents[0].Key
        const getZip = new GetObjectCommand({
          Bucket :"jtcporject",
          Key: key
      })
      const s3Link  = await getSignedUrl(s3Client,getZip)

  return  NextResponse.json({data : s3Link}, { success : true}, {status : 200});
   

}

export async function PUT(req) {
  const {arrayOfTech,arrayOfCategory} = await req.json()
  const redisdata = await client.get(`project${[...arrayOfTech, ...arrayOfTech]}`);
  if(!redisdata){
    let technologyFilter = ``
    if(arrayOfTech.length > 0){
      technologyFilter = `&&  list.project_technologie IN (${arrayOfTech})`
    }
    let categoryFilter = ``
    if(arrayOfCategory.length > 0){
      const category = arrayOfCategory && arrayOfCategory.map((el) => `'${el}'`)
      categoryFilter = `&& list.project_category IN (${category})`
    }

  const already =  `Select list.project_link, language.language,list.name,list.project_module, list.meta_tags, list.meta_keywords, list.meta_description, list.meta_title, list.project_technologie,  list.project_description, list.id from jtcindia_projects.project_lists as list Left Join jtcindia_projects.project_languages as language On language.id = list.project_language  WHERE deleted_by = '0' ${technologyFilter} ${categoryFilter}  `
  const data = await executeQuery(already)
  if(data.length == 0)  return NextResponse.json({message : "Project Not Found" }, { success : false}, {status : 200})
  for (let index = 0; index < data.length; index++) {
    const link = data[index].project_link
      const command = new ListObjectsCommand({
        Bucket :"jtcporject",
        Prefix: `${link}/files/` 
    })
    const url  = await s3Client.send(command)
    const key = url && url.Contents && url.Contents[1].Key
     data[index][`image`] =  String(key)
    
    const languageId = data[index].project_technologie
   
    const langguageName = `Select technology from jtcindia_projects.project_technologies WHERE id IN (${languageId}) `
    const executeQueryApi = await executeQuery(langguageName);
    if(executeQueryApi.length > 0){
   data[index]["project_technologie"] = executeQueryApi;
    }
    
  }
  const value =  await JSON.stringify(data)
  await client.set(`project${[...arrayOfTech ,...arrayOfTech]}`, value);
  return NextResponse.json({data }, { success : true}, {status : 200})
}else{ 
  const value = await JSON.parse(redisdata)

  return NextResponse.json({data : value}, { success : true}, {status : 200})
}}
