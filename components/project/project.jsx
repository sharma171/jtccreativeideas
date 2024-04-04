
import Image from 'next/image'
import Link from 'next/link'

const Project = ({project}) => {
 
  
  return (
    <>
             <ul className="project-cards">
                           {project && project.flatMap((el, i) =>(
                            
                             <li key={i}>
                             <div className="card-inner">
                                {/* <img src={el.image}/> */}
                                <Link href={`/${el.project_link}`} className="text-link">
                                 <Image src={`https://jtcporject.s3.ap-southeast-2.amazonaws.com/${el.image}`} width={400} height={400} className="thumb"/>
                                 </Link>

                                 <div className="info">

                                     <div className="tech-info">
                                         {el.project_technologie && el.project_technologie.map((ab) =>(
                                            <span>{ab.technology}</span>
                                         ))}
                                         
                                     </div>
                                     <Link href={`/${el.project_link}`} className="text-link">
                                         <h3 className="heading">
                                            {el.name}
                                         </h3>
                                     </Link>
                                     <p className="cardpara">
                                        {el.project_description}
                                     </p>
                                     {/* <div className="card-button">
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
                             </div>
                         </li>
                           ))}                    
                        </ul>  
                       
    </>
  )
}

export default Project
