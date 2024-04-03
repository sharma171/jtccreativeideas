'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import "../newsection/page.css"
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from "next/navigation";
import { projectTopics, singleProject } from "../../apis/apis";
import Project from "../../components/project/project";



const Page = () => {
    const [activeItem, setActiveItem] = useState(1);
    const handleItemClick = (item) => {
        if (activeItem !== item) {
            setActiveItem(item);
          }
    };


    const {project} = useParams()
    const [state, setState] = useState([])
    const [topics, setTopics] = useState([])
   const getPrjectData = async() => {
const {data} =  await singleProject(project)

return data && setState(data)
   }

const allTopic =  async(id) => {
    const {data} =  await projectTopics(id)
    console.log(data);
    return data && setTopics(data)

}


   useEffect(() => {
getPrjectData()
   },[project])
 
    return(
        <>
            {/* <SiteHeader /> */}
            <section className="det-page">
                <div className="container">
                    <div className="top-navigation">
                        <Link href="/" className="link">Home
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.58398 3L7.58398 6L4.58398 9" stroke="#605F5F" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        <Link href="/newsection" className="link">Projects
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.58398 3L7.58398 6L4.58398 9" stroke="#605F5F" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                        <Link href={`/${project}`} className="link active">{project}</Link>
                    </div>
                    <div className="detailed-inner row">
  
                       {state && state.map((el, i) =>{ 
                        allTopic(el.id)
                        return(
                        <>
                         <div className="col-md-6 lhs">
                            <div className="carousel-product">
                                <div className="slide1 slides">
                                    {/* <Image src='/images/slide1.png'  width={500} height={500} className="thumb" alt="slideImages"/>
                                     */}
                                  <video loop muted autoPlay width="320" height="240" controls preload="auto" className="video-thumb">      <source src={el.video3} type="video/mp4" />      <track        src={el.video3}        kind="subtitles"        srcLang="en"        label="English"      />      Your browser does not support the video tag.    </video>   
                                </div>
                                {[0,1,2,3].map((ab) =>{
                                     if(el[`image${ab}`])
                                     return   (
                                <div className="slide2 slides">
                                    <Image src={el[`image${ab}`]}   width={620} height={340}  className="thumb" alt={el[`image${ab}`]}/>
                                </div>

                                )}
                                )}
                               
                                <div className="navigation">
                                    <div className="prev">
                                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="41" height="41" rx="20.5" fill="white"/>
                                            <path d="M14 20H28" stroke="#6C7275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M14 20L20 26" stroke="#6C7275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M14 20L20 14" stroke="#6C7275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="next">
                                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="41" y="41" width="41" height="41" rx="20.5" transform="rotate(-180 41 41)" fill="white"/>
                                            <path d="M27 21L13 21" stroke="#141718" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M27 21L21 15" stroke="#141718" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M27 21L21 27" stroke="#141718" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 rhs">
                            <div className="product-info">
                                <div className="review">
                                    <div className="stars">
                                        <span className="star-filled">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#F59E0B"/>
                                            </svg>
                                        </span>
                                        <span className="star-filled">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#F59E0B"/>
                                            </svg>
                                        </span>
                                        <span className="star-filled">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#F59E0B"/>
                                            </svg>
                                        </span>
                                        <span className="star-filled">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#F59E0B"/>
                                            </svg>
                                        </span>
                                        <span className="star-filled">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 1.30198L9.53708 4.99757C9.68109 5.34381 10.0067 5.58038 10.3805 5.61034L14.3702 5.9302L11.3305 8.53405C11.0457 8.77801 10.9213 9.16078 11.0083 9.52554L11.937 13.4188L8.52125 11.3325C8.20124 11.137 7.79876 11.137 7.47875 11.3325L4.063 13.4188L4.99169 9.52554C5.0787 9.16078 4.95433 8.778 4.66954 8.53405L1.6298 5.9302L5.61951 5.61034C5.9933 5.58038 6.31891 5.34381 6.46292 4.99757L8 1.30198Z" stroke="#F59E0B"/>
                                            </svg>

                                        </span>
                                    </div>
                                    <div className="text">11 Reviews</div>
                                </div>
                                <h2 className="det-head">{el.name}</h2>
                                <p className="tech-pointers"><strong>Technology Used</strong> : {el.project_technologie}</p>
                                <p className="tech-pointers"><strong>Project Name</strong> : {el.name}</p>
                                <p className="tech-pointers"><strong>Total Number of Modules</strong> : {el.project_module}</p>
                                <p className="tech-pointers"><strong>Description</strong> : {el.project_description}</p>
                            </div>
                        </div>
                        </>
                       )})}
                        <div className="col-md-6 lhs">
                            <div className="infotab">
                                <div className="tabhead">
                                    <div className={`tabnav ${activeItem === 1 ? 'active' : 'hide'}`} onClick={() => handleItemClick(1)} >Overview</div>
                                    <div className={`tabnav ${activeItem === 2 ? 'active' : 'hide'}`} onClick={() => handleItemClick(2)} >Techscape</div>
                                    <div className={`tabnav ${activeItem === 3 ? 'active' : 'hide'}`} onClick={() => handleItemClick(3)} >Installation</div>
                                    <div className={`tabnav ${activeItem === 4 ? 'active' : 'hide'}`} onClick={() => handleItemClick(4)} >Modules</div>
                                </div>
                                <div className={`info-content ${activeItem === 1 ? 'active' : 'hide'}`}>
                                    <p className="tech-pointers"><strong>Project Name</strong> : Employee Record Management System (ERMS)</p>
                                    <p className="tech-pointers"><strong>Language Used</strong> : Php</p>
                                    <p className="tech-pointers"><strong>Database</strong> : My SQL</p>
                                    <p className="tech-pointers"><strong>User Interface Design</strong> : HTML, AJAX,JQUERY,JAVASCRIPT</p>
                                    <p className="tech-pointers"><strong>Web Browser</strong> : Mozilla, Google Chrome, IE8, OPERA</p>
                                    <p className="tech-pointers"><strong>Software</strong> : XAMPP / WAMP / Mamp/ Lamp (anyone)</p>
                                    <p className="tech-pointers"><strong>Employee Record Management System project divided in two modules</strong> : User Module, Admin Module</p>
                                    <p className="tech-pointers"><strong>Problem solved by this Project?</strong> : By using this project, company can manage all data online. This project will reduce the paperwork for the company.</p>
                                    <p className="tech-pointers"><strong>What project does and its working?</strong> : Employee Record Management System project used to manage the data of the employees such as personal details, education details, work exp, etc. This project will reduce the paperwork for the company. Through this project, the company can manage all data online.</p>
                                </div>
                                <div className={`info-content ${activeItem === 2 ? 'active' : 'hide'}`}>
                                    <p className="tech-pointers"><strong>Project Name</strong> : payment Recovery System (ERMS)</p>
                                    <p className="tech-pointers"><strong>Language Used</strong> : Php</p>
                                    <p className="tech-pointers"><strong>Database</strong> : My SQL</p>
                                    <p className="tech-pointers"><strong>User Interface Design</strong> : HTML, AJAX,JQUERY,JAVASCRIPT</p>
                                    <p className="tech-pointers"><strong>Web Browser</strong> : Mozilla, Google Chrome, IE8, OPERA</p>
                                    <p className="tech-pointers"><strong>Software</strong> : XAMPP / WAMP / Mamp/ Lamp (anyone)</p>
                                    <p className="tech-pointers"><strong>Employee Record Management System project divided in two modules</strong> : User Module, Admin Module</p>
                                    <p className="tech-pointers"><strong>Problem solved by this Project?</strong> : By using this project, company can manage all data online. This project will reduce the paperwork for the company.</p>
                                    <p className="tech-pointers"><strong>What project does and its working?</strong> : Employee Record Management System project used to manage the data of the employees such as personal details, education details, work exp, etc. This project will reduce the paperwork for the company. Through this project, the company can manage all data online.</p>
                                </div>
                                <div className={`info-content ${activeItem === 3 ? 'active' : 'hide'}`}>
                                    <p className="tech-pointers"><strong>Project Name</strong> : Student Record Management System (ERMS)</p>
                                    <p className="tech-pointers"><strong>Language Used</strong> : Php</p>
                                    <p className="tech-pointers"><strong>Database</strong> : My SQL</p>
                                    <p className="tech-pointers"><strong>User Interface Design</strong> : HTML, AJAX,JQUERY,JAVASCRIPT</p>
                                    <p className="tech-pointers"><strong>Web Browser</strong> : Mozilla, Google Chrome, IE8, OPERA</p>
                                    <p className="tech-pointers"><strong>Software</strong> : XAMPP / WAMP / Mamp/ Lamp (anyone)</p>
                                    <p className="tech-pointers"><strong>Employee Record Management System project divided in two modules</strong> : User Module, Admin Module</p>
                                    <p className="tech-pointers"><strong>Problem solved by this Project?</strong> : By using this project, company can manage all data online. This project will reduce the paperwork for the company.</p>
                                    <p className="tech-pointers"><strong>What project does and its working?</strong> : Employee Record Management System project used to manage the data of the employees such as personal details, education details, work exp, etc. This project will reduce the paperwork for the company. Through this project, the company can manage all data online.</p>
                                </div>
                                <div className={`info-content ${activeItem === 4 ? 'active' : 'hide'}`}>
                                    <p className="tech-pointers"><strong>Project Name</strong> : Employee Record Management System (ERMS)</p>
                                    <p className="tech-pointers"><strong>Language Used</strong> : Php</p>
                                    <p className="tech-pointers"><strong>Database</strong> : My SQL</p>
                                    <p className="tech-pointers"><strong>User Interface Design</strong> : HTML, AJAX,JQUERY,JAVASCRIPT</p>
                                    <p className="tech-pointers"><strong>Web Browser</strong> : Mozilla, Google Chrome, IE8, OPERA</p>
                                    <p className="tech-pointers"><strong>Software</strong> : XAMPP / WAMP / Mamp/ Lamp (anyone)</p>
                                    <p className="tech-pointers"><strong>Employee Record Management System project divided in two modules</strong> : User Module, Admin Module</p>
                                    <p className="tech-pointers"><strong>Problem solved by this Project?</strong> : By using this project, company can manage all data online. This project will reduce the paperwork for the company.</p>
                                    <p className="tech-pointers"><strong>What project does and its working?</strong> : Employee Record Management System project used to manage the data of the employees such as personal details, education details, work exp, etc. This project will reduce the paperwork for the company. Through this project, the company can manage all data online.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 rhs">
                            <div className="product-info">
                                <div className="col-divider"></div>
                                <h3 className="keypoints-head">This Project includes:</h3>
                                <div className="keypoints">
                                    <div className="ptrs">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.75 4.99125C3.75 4.30625 4.30625 3.75 4.99125 3.75H25.0088C25.6938 3.75 26.25 4.30625 26.25 4.99125V25.0088C26.2497 25.3378 26.1188 25.6534 25.8861 25.8861C25.6534 26.1188 25.3378 26.2497 25.0088 26.25H4.99125C4.66205 26.25 4.34633 26.1192 4.11355 25.8864C3.88077 25.6537 3.75 25.3379 3.75 25.0088V4.99125ZM13.2775 10.5188C13.2023 10.4686 13.1148 10.4397 13.0245 10.4353C12.9342 10.4308 12.8443 10.451 12.7646 10.4936C12.6848 10.5362 12.618 10.5996 12.5714 10.6771C12.5249 10.7546 12.5002 10.8433 12.5 10.9337V19.0662C12.5002 19.1567 12.5249 19.2454 12.5714 19.3229C12.618 19.4004 12.6848 19.4638 12.7646 19.5064C12.8443 19.549 12.9342 19.5692 13.0245 19.5647C13.1148 19.5603 13.2023 19.5314 13.2775 19.4812L19.3763 15.4163C19.4446 15.3704 19.5006 15.3085 19.5393 15.2359C19.578 15.1633 19.5982 15.0823 19.5982 15C19.5982 14.9177 19.578 14.8367 19.5393 14.7641C19.5006 14.6915 19.4446 14.6296 19.3763 14.5837L13.2775 10.5188Z" fill="#36528A"/>
                                        </svg>
                                        Detailed Installation video
                                    </div>
                                    <div className="ptrs">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.875 2.5H3.125C2.77982 2.5 2.5 2.80526 2.5 3.18182V9.31819C2.5 9.69475 2.77982 10 3.125 10H26.875C27.2202 10 27.5 9.69475 27.5 9.31819V3.18182C27.5 2.80526 27.2202 2.5 26.875 2.5Z" fill="#36528A" stroke="black" strokeLinejoin="round"/>
                                            <path d="M26.875 20H3.125C2.77982 20 2.5 20.3053 2.5 20.6818V26.8182C2.5 27.1947 2.77982 27.5 3.125 27.5H26.875C27.2202 27.5 27.5 27.1947 27.5 26.8182V20.6818C27.5 20.3053 27.2202 20 26.875 20Z" fill="#36528A" stroke="black" strokeLinejoin="round"/>
                                            <path d="M8.75 10V15.0052L21.25 15.0108V20" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M11.25 23.75H18.75" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M11.25 6.25H18.75" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        Readme & Dependencies Files
                                    </div>
                                    <div className="ptrs">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.625 26.875L15 22.5L19.375 26.875M15 2.5V5M11.25 15V17.5M15 12.5V17.5M18.75 10V17.5M27.5 5.75V21.75C27.5 21.8485 27.4806 21.946 27.4429 22.037C27.4052 22.128 27.35 22.2107 27.2803 22.2803C27.2107 22.35 27.128 22.4052 27.037 22.4429C26.946 22.4806 26.8485 22.5 26.75 22.5H3.25C3.05109 22.5 2.86032 22.421 2.71967 22.2803C2.57902 22.1397 2.5 21.9489 2.5 21.75V5.75C2.5 5.55109 2.57902 5.36032 2.71967 5.21967C2.86032 5.07902 3.05109 5 3.25 5H26.75C26.9489 5 27.1397 5.07902 27.2803 5.21967C27.421 5.36032 27.5 5.55109 27.5 5.75Z" stroke="#36528A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        Presentation PPT available
                                    </div>
                                    <div className="ptrs">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.01875 25C6.46042 25 5.98417 24.8033 5.59 24.41C5.19667 24.0167 5 23.5404 5 22.9813V7.01875C5 6.46042 5.19667 5.98417 5.59 5.59C5.98333 5.19667 6.45958 5 7.01875 5H12.8937C12.7804 4.3625 12.9333 3.78625 13.3525 3.27125C13.7717 2.75708 14.3208 2.5 15 2.5C15.6958 2.5 16.2533 2.75708 16.6725 3.27125C17.0908 3.78625 17.2354 4.3625 17.1063 5H22.9813C23.5396 5 24.0158 5.19667 24.41 5.59C24.8033 5.98333 25 6.45958 25 7.01875V22.9813C25 23.5396 24.8033 24.0158 24.41 24.41C24.0167 24.8033 23.5404 25 22.9813 25H7.01875ZM7.01875 23.75H22.9813C23.1729 23.75 23.3492 23.67 23.51 23.51C23.67 23.3492 23.75 23.1729 23.75 22.9813V7.01875C23.75 6.82708 23.67 6.65083 23.51 6.49C23.3492 6.33 23.1729 6.25 22.9813 6.25H7.01875C6.82708 6.25 6.65083 6.33 6.49 6.49C6.33 6.65083 6.25 6.82708 6.25 7.01875V22.9813C6.25 23.1729 6.33 23.3492 6.49 23.51C6.65083 23.67 6.82708 23.75 7.01875 23.75ZM9.375 20.3375H16.875V19.0875H9.375V20.3375ZM9.375 15.625H20.625V14.375H9.375V15.625ZM9.375 10.9125H20.625V9.6625H9.375V10.9125ZM15 5.55375C15.2708 5.55375 15.495 5.46542 15.6725 5.28875C15.85 5.11208 15.9383 4.88792 15.9375 4.61625C15.9375 4.34542 15.8487 4.12167 15.6712 3.945C15.4937 3.76833 15.27 3.67917 15 3.6775C14.7292 3.6775 14.5054 3.76625 14.3288 3.94375C14.1521 4.12125 14.0633 4.345 14.0625 4.615C14.0625 4.88583 14.1513 5.11 14.3288 5.2875C14.5063 5.465 14.73 5.55458 15 5.55375Z" fill="#36528A"/>
                                        </svg>
                                        Project report and Synopsis
                                    </div>
                                </div>
                                
                                <div className="col-divider"></div>
                                <div className="project-box">
                                    <h3 className="keypoints-head">Download Project Bundle</h3>
                                    <input type="text" placeholder="Name" name="name7" id="name7" required=""></input>
                                    <div className="input-box mb--20">
                                        <input type="tel" id="phone7" className="phone-input" name="phone"
                                            placeholder="Mobile Number" required></input>
                                    </div>
                                    <div className="t-and-c">
                                        <label><input id="checkbox-7" type="checkbox" required=""></input></label>
                                        <label htmlFor="checkbox-7"> I have reviewed all <Link href="termsandcondition.html" target="_blank"> Terms and
                                                                    Conditions</Link>.</label>
                                    </div>
                                    <Link href="#" className="button">Download Project</Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-6 lhs">
                            <div className="infotab">
                                <div className="tabhead">
                                    <div className="tabnav active">Overview</div>
                                    <div className="tabnav">Techscape</div>
                                    <div className="tabnav">Installation</div>
                                    <div className="tabnav">Modules</div>
                                </div>
                                <div className="info-content">
                                    <p className="tech-pointers"><strong>Project Name</strong> : Employee Record Management System (ERMS)</p>
                                    <p className="tech-pointers"><strong>Language Used</strong> : Php</p>
                                    <p className="tech-pointers"><strong>Database</strong> : My SQL</p>
                                    <p className="tech-pointers"><strong>User Interface Design</strong> : HTML, AJAX,JQUERY,JAVASCRIPT</p>
                                    <p className="tech-pointers"><strong>Web Browser</strong> : Mozilla, Google Chrome, IE8, OPERA</p>
                                    <p className="tech-pointers"><strong>Software</strong> : XAMPP / WAMP / Mamp/ Lamp (anyone)</p>
                                    <p className="tech-pointers"><strong>Employee Record Management System project divided in two modules</strong> : User Module, Admin Module</p>
                                    <p className="tech-pointers"><strong>Problem solved by this Project?</strong> : By using this project, company can manage all data online. This project will reduce the paperwork for the company.</p>
                                    <p className="tech-pointers"><strong>What project does and its working?</strong> : Employee Record Management System project used to manage the data of the employees such as personal details, education details, work exp, etc. This project will reduce the paperwork for the company. Through this project, the company can manage all data online.</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="more-detailed">
                            <div className="more-nav">
                                <div className="tab-nav active">Similar Projects</div>
                                <div className="tab-nav">Related Courses</div>
                            </div>
                            <Project/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page;