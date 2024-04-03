import { NextResponse } from "next/server";
import { executeQuery } from "../../../conn/conn";
import { client } from "../../../middelware/redisFile";
import { S3Client, GetObjectCommand, PutObjectCommand, ListObjectsCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"


const s3Client = new S3Client({
  region : "ap-southeast-2",
  credentials:{
      accessKeyId : process.env.ID,
      secretAccessKey :process.env.KEY
  }
})

// Get All Chossing Point
export async  function GET(req){
    const redisdata = await client.get("projectLanguage");
    if(!redisdata){
        const query =  `Select * from project_languages`
        const data = await executeQuery(query);
     
        if(data.length > 0) {
        const value =  await JSON.stringify(data)
        await client.set("projectLanguage", value);
          return NextResponse.json({data},{success : true}, {status : 200})
        }
        else return NextResponse.json({message : "Data Empty"},{success : false}, {status : 206})
    }else{ 
     const value = await JSON.parse(redisdata)
  
     return NextResponse.json({data : value}, { success : true}, {status : 200})
}
}



export async  function POST(req){
  // const {arrayOfTech,arrayOfCategory} = await req.json();
  // console.log("40  ",arrayOfTech);
  // console.log("41  ",arrayOfCategory);
  const redisdata = await client.get("project");
  if(!redisdata){
  const already =  `Select list.project_link, list.name, list.project_technologie,  list.project_description, list.id from jtcindia_projects.project_lists as list Left Join jtcindia_projects.project_languages as language On language.id = list.project_language  WHERE deleted_by = '0'`
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
     
        const getUrl = new GetObjectCommand({
          Bucket :"jtcporject",
          Key: key
      })

      const s3Link  = await getSignedUrl(s3Client,getUrl)
       data[index][`image`] =  String(s3Link)
      
      const languageId = data[index].project_technologie
     
      const langguageName = `Select technology from jtcindia_projects.project_technologies WHERE id IN (${languageId}) `
      const executeQueryApi = await executeQuery(langguageName);
      if(executeQueryApi.length > 0){
     data[index]["project_technologie"] = executeQueryApi;
      }
      
    }
    const value =  await JSON.stringify(data)
    await client.set("project", value);
    return NextResponse.json({data }, { success : true}, {status : 200})
  }else{ 
    const value = await JSON.parse(redisdata)
 
    return NextResponse.json({data : value}, { success : true}, {status : 200})
}
}


export async  function PATCH(req){
  const {id} = await req.json();
  const redisdata = await client.get(`techNologye${id}`);
  if(!redisdata){
   let findProj = ''
   let findTech = ''
    if(id != 'All')  findProj = `&& project_language = ${id}`
    if(id != 'All')  findTech = `&& FIND_IN_SET(${id}, language_id) > 0`
    // const query =  `Select tech.technology , project.project_category as name  from  project_lists  as project  Join   project_technologies as tech On tech.id = project.project_technologie   ${findProj}`
    const queryProject = `Select DISTINCT project_category as category  from  project_lists WHERE deleted_by = '0' ${findProj}`
      const dataProject = await executeQuery(queryProject);
    const queryTech = `Select DISTINCT technology  from   project_technologies  WHERE deleted_by = '0' ${findTech} `
      const dataTech = await executeQuery(queryTech);
     const data = [{project : dataProject, technology : dataTech}]
      if(data.length > 0) {
      const value =  await JSON.stringify(data)
      await client.set(`viode${id}`, value);
        return NextResponse.json({data},{success : true}, {status : 200})
      }
      else return NextResponse.json({message : "Data Empty"},{success : false}, {status : 206})
  }else{ 
   const value = await JSON.parse(redisdata)
   return NextResponse.json({data : value}, { success : true}, {status : 200})
}
}


