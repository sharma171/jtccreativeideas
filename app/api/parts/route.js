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
export async  function PATCH(req){
    const {id} = await req.json()
 
    const redisdata = await client.get(`part${id}`);
    if(!redisdata){
    const query =  `Select point.project_topic,topic.id,topic.topic, point.point_heading, point.point_details from project_topic_point as point Left join project_topics as topic On point.project_topic=topic.id WHERE FIND_IN_SET(${id},point.project_id) > 0`
    const data = await executeQuery(query)
    console.log(data);
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