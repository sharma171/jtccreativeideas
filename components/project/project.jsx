import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { allProject, projectLanguages, projectList } from '../../apis/apis';

const Project = () => {
    const [project, setProjects] = useState([])
    const projects = async() => {
      
        const {data} =  await allProject()
        return data &&  setProjects(data)  
    }

    useEffect(() => {
    projects()
},[])
  return (
    <>
   



                            <ul className="project-cards">
                           {project && project.flatMap((el, i) =>(
                            
                             <li key={i}>
                             <div className="card-inner">
                                {/* <img src={el.image}/> */}
                                <Link href={el.project_link} className="text-link">
                                    <Image src={el.image} width={400} height={400} className="thumb"/>
                                    <div className="info">

                                        <div className="tech-info">
                                            {el.project_technologie && el.project_technologie.map((ab) =>(
                                                <span>{ab.technology}</span>
                                            ))}
                                            
                                        </div>
                                        
                                            <h3 className="heading">
                                                {el.name}
                                            </h3>
                                        
                                        <p className="cardpara">
                                            {el.project_description}
                                        </p>
    {/*                                      
                                        <div className="card-button">
                                            <a href="" className="bot-button">
                                                <Image src='./images/Download-icon.svg' width={20} height={20} alt='icon'/>
                                                Download
                                            </a>
                                            <a href="" className="bot-button">
                                                <Image src='./images/view-icon.svg' width={20} height={20} alt='icon'/>
                                                View
                                            </a>
                                        </div> */}
                                    </div>
                                 </Link>
                             </div>
                         </li>
                           ))}                    
                        </ul>  
                       
    </>
  )
}

export default Project
