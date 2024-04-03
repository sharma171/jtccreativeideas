import { NextResponse } from "next/server";
import { executeQuery } from "../../../conn/conn";
import { client } from "../../../middelware/redisFile";
import { S3Client, GetObjectCommand, PutObjectCommand, ListObjectsCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"


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