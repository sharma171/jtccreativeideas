'use client'
import React, { useState } from 'react';
import "./page.css"
import Headicon from "./after-head-icon.svg"
import Image from 'next/image'
import Link from 'next/link'
import Projimg1 from './images/projsection1.png'
import Projimg2 from './images/projsection2.png'
import Projimg3 from './images/projsection3.png'
import Downloadicon from './images/Download-icon.svg'
import Viewicon from './images/view-icon.svg'
const Page = () => {
    const [filterActive, setfilterActive] = useState(false);

    const toggleFilter = () => {
        setfilterActive(!filterActive);
        console.log("tullu");
    }
    return(
        <>
        <section className="projects">
            <div className="container">
                <div className="col-flex main-head">
                    <h5 className="small-head">Innovations in Computing</h5>
                    <h3 className="bghead">Projects Empowering <span>Coders
                        <Image src={Headicon}></Image></span></h3>
                </div>
                <ul className="project-cards">
                    <li>
                        
                        <div className="card-inner">
                            <Image src={Projimg1} alt="project" className="thumb"></Image>
                            <div className="info">
                                <div className="tech-info">
                                    <span>Html</span>
                                    <span>Css</span>
                                    <span>Js</span>
                                </div>
                                <Link href="/newsection" className="text-link">
                                    <h3 className="heading">
                                        Hotel Management System Project in HTML CSS
                                    </h3>
                                </Link>
                                <p className="cardpara">
                                    In this application we believe in the power of collective kindness to transform lives and communities.
                                </p>
                                <div className="card-button">
                                    <a href="" className="bot-button">
                                        <Image src={Downloadicon} alt='icon'></Image>
                                        Download
                                    </a>
                                    <a href="" className="bot-button">
                                        <Image src={Viewicon} alt='icon'></Image>
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        
                            <div className="card-inner">
                                <Image src={Projimg2} alt="project" className="thumb"></Image>
                                <div className="info">
                                    <div className="tech-info">
                                        <span>Html</span>
                                        <span>Css</span>
                                        <span>Js</span>
                                    </div>
                                    <Link href="/newsection" className="text-link">
                                        <h3 className="heading">
                                            Hotel Management System Project in HTML CSS
                                        </h3>
                                    </Link>
                                    <p className="cardpara">
                                        In this application we believe in the power of collective kindness to transform lives and communities.
                                    </p>
                                    <div className="card-button">
                                        <a href="" className="bot-button">
                                            <Image src={Downloadicon} alt='icon'></Image>
                                            Download
                                        </a>
                                        <a href="" className="bot-button">
                                            <Image src={Viewicon} alt='icon'></Image>
                                            View
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </li>
                    <li>
                        
                            <div className="card-inner">
                                <Image src={Projimg3} alt="project" className="thumb"></Image>
                                <div className="info">
                                    <div className="tech-info">
                                        <span>Html</span>
                                        <span>Css</span>
                                        <span>Js</span>
                                    </div>
                                    <Link href="/newsection" className="text-link">
                                        <h3 className="heading">
                                            Hotel Management System Project in HTML CSS
                                        </h3>
                                    </Link>
                                    <p className="cardpara">
                                        In this application we believe in the power of collective kindness to transform lives and communities.
                                    </p>
                                    <div className="card-button">
                                        <a href="" className="bot-button">
                                            <Image src={Downloadicon} alt='icon'></Image>
                                            Download
                                        </a>
                                        <a href="" className="bot-button">
                                            <Image src={Viewicon} alt='icon'></Image>
                                            View
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </li>
                </ul>
            </div>
        </section>
        <section className="project-category">
            <div className="container">
                <div className="ecom-head">
                    <h2 className="top-head">Choose Projects and <span>Technology</span></h2>
                    <div className="tab-row">
                        <div className="mobile-filter">
                            <div className="icon-tophead" onClick={toggleFilter}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 7H6M6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7ZM3 17H9M18 17H21M18 17C18 18.6569 16.6569 20 15 20C13.3431 20 12 18.6569 12 17C12 15.3431 13.3431 14 15 14C16.6569 14 18 15.3431 18 17ZM15 7H21" stroke="#1E3792" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                                <h3 className="head">
                                    Filter
                                </h3>
                            </div>
                        </div>
                        <div className="height-divider"></div>
                        <div className="tabs">
                            <div className="tab-button active">All</div>
                            <div className="tab-button">Basics</div>
                            <div className="tab-button">Javascript</div>
                        </div>
                    </div>
                    
                </div>
                <div class="row ecompad">
                    <div class={`col-md-4 ecom-filter ${filterActive ? 'active' : ''}`}>
                        <div className="overflow-cont">
                            <div className="icon-tophead">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 7H6M6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7ZM3 17H9M18 17H21M18 17C18 18.6569 16.6569 20 15 20C13.3431 20 12 18.6569 12 17C12 15.3431 13.3431 14 15 14C16.6569 14 18 15.3431 18 17ZM15 7H21" stroke="#1E3792" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                                <h3 className="head">
                                    Filter
                                </h3>
                            </div>
                            <div className="filter-head">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="white"/>
                                    <path id="one" d="M6.5 10H13.5" stroke="#121212" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path id="two" d="M10 13.6L10 6.59998" stroke="#121212" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h3 className="head">Choose Technology</h3>
                            </div>
                            <ul className="filter-techlist">
                                <li><label htmlFor="checklist1">HTML</label><input type="checkbox" id="checklist1" /></li>
                                <li><label htmlFor="checklist2">CSS</label><input type="checkbox" id="checklist2" /></li>
                                <li><label htmlFor="checklist3">JQuery</label><input type="checkbox" id="checklist3" /></li>
                                <li><label htmlFor="checklist3">CMS</label><input type="checkbox" id="checklist3" /></li>
                                <li><label htmlFor="checklist3">Code Ignitor</label><input type="checkbox" id="checklist3" /></li>
                                <li><label htmlFor="checklist3">Php</label><input type="checkbox" id="checklist3" /></li>
                            </ul>
                            <div className="filter-head">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="white"/>
                                    <path id="one" d="M6.5 10H13.5" stroke="#121212" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path id="two" d="M10 13.6L10 6.59998" stroke="#121212" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h3 className="head">Choose Domain</h3>
                            </div>
                            <ul className="filter-techlist">
                                <li><label htmlFor="checklist1">Hotel Management System</label><input type="checkbox" id="checklist1" /></li>
                                <li><label htmlFor="checklist2">News Cms</label><input type="checkbox" id="checklist2" /></li>
                                <li><label htmlFor="checklist3">Payments Apps</label><input type="checkbox" id="checklist3" /></li>
                                <li><label htmlFor="checklist3">Property Management System</label><input type="checkbox" id="checklist3" /></li>
                                <li><label htmlFor="checklist3">Nodejs based Projects</label><input type="checkbox" id="checklist3" /></li>
                                <li><label htmlFor="checklist3">Employee Management System</label><input type="checkbox" id="checklist3" /></li>
                            </ul>
                            <div className="done-button"></div>
                        </div>
                    </div>
                    <div class="col-md-8 ecom-content">
                        <ul className="project-cards">
                            <li>
                                
                                <div className="card-inner">
                                    <Image src={Projimg1} alt="project" className="thumb"></Image>
                                    <div className="info">
                                        <div className="tech-info">
                                            <span>Html</span>
                                            <span>Css</span>
                                            <span>Js</span>
                                        </div>
                                        <Link href="/newsection" className="text-link">
                                            <h3 className="heading">
                                                Hotel Management System Project in HTML CSS
                                            </h3>
                                        </Link>
                                        <p className="cardpara">
                                            In this application we believe in the power of collective kindness to transform lives and communities.
                                        </p>
                                        <div className="card-button">
                                            <a href="" className="bot-button">
                                                <Image src={Downloadicon} alt='icon'></Image>
                                                Download
                                            </a>
                                            <a href="" className="bot-button">
                                                <Image src={Viewicon} alt='icon'></Image>
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                
                                    <div className="card-inner">
                                        <Image src={Projimg2} alt="project" className="thumb"></Image>
                                        <div className="info">
                                            <div className="tech-info">
                                                <span>Html</span>
                                                <span>Css</span>
                                                <span>Js</span>
                                            </div>
                                            <Link href="/newsection" className="text-link">
                                                <h3 className="heading">
                                                    Hotel Management System Project in HTML CSS
                                                </h3>
                                            </Link>
                                            <p className="cardpara">
                                                In this application we believe in the power of collective kindness to transform lives and communities.
                                            </p>
                                            <div className="card-button">
                                                <a href="" className="bot-button">
                                                    <Image src={Downloadicon} alt='icon'></Image>
                                                    Download
                                                </a>
                                                <a href="" className="bot-button">
                                                    <Image src={Viewicon} alt='icon'></Image>
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                            </li>
                            <li>
                                
                                    <div className="card-inner">
                                        <Image src={Projimg3} alt="project" className="thumb"></Image>
                                        <div className="info">
                                            <div className="tech-info">
                                                <span>Html</span>
                                                <span>Css</span>
                                                <span>Js</span>
                                            </div>
                                            <Link href="/newsection" className="text-link">
                                                <h3 className="heading">
                                                    Hotel Management System Project in HTML CSS
                                                </h3>
                                            </Link>
                                            <p className="cardpara">
                                                In this application we believe in the power of collective kindness to transform lives and communities.
                                            </p>
                                            <div className="card-button">
                                                <a href="" className="bot-button">
                                                    <Image src={Downloadicon} alt='icon'></Image>
                                                    Download
                                                </a>
                                                <a href="" className="bot-button">
                                                    <Image src={Viewicon} alt='icon'></Image>
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                            </li>
                            <li>
                                
                                <div className="card-inner">
                                    <Image src={Projimg1} alt="project" className="thumb"></Image>
                                    <div className="info">
                                        <div className="tech-info">
                                            <span>Html</span>
                                            <span>Css</span>
                                            <span>Js</span>
                                        </div>
                                        <Link href="/newsection" className="text-link">
                                            <h3 className="heading">
                                                Hotel Management System Project in HTML CSS
                                            </h3>
                                        </Link>
                                        <p className="cardpara">
                                            In this application we believe in the power of collective kindness to transform lives and communities.
                                        </p>
                                        <div className="card-button">
                                            <a href="" className="bot-button">
                                                <Image src={Downloadicon} alt='icon'></Image>
                                                Download
                                            </a>
                                            <a href="" className="bot-button">
                                                <Image src={Viewicon} alt='icon'></Image>
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                
                                    <div className="card-inner">
                                        <Image src={Projimg2} alt="project" className="thumb"></Image>
                                        <div className="info">
                                            <div className="tech-info">
                                                <span>Html</span>
                                                <span>Css</span>
                                                <span>Js</span>
                                            </div>
                                            <Link href="/newsection" className="text-link">
                                                <h3 className="heading">
                                                    Hotel Management System Project in HTML CSS
                                                </h3>
                                            </Link>
                                            <p className="cardpara">
                                                In this application we believe in the power of collective kindness to transform lives and communities.
                                            </p>
                                            <div className="card-button">
                                                <a href="" className="bot-button">
                                                    <Image src={Downloadicon} alt='icon'></Image>
                                                    Download
                                                </a>
                                                <a href="" className="bot-button">
                                                    <Image src={Viewicon} alt='icon'></Image>
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                            </li>
                            <li>
                                
                                    <div className="card-inner">
                                        <Image src={Projimg3} alt="project" className="thumb"></Image>
                                        <div className="info">
                                            <div className="tech-info">
                                                <span>Html</span>
                                                <span>Css</span>
                                                <span>Js</span>
                                            </div>
                                            <Link href="/newsection" className="text-link">
                                                <h3 className="heading">
                                                    Hotel Management System Project in HTML CSS
                                                </h3>
                                            </Link>
                                            <p className="cardpara">
                                                In this application we believe in the power of collective kindness to transform lives and communities.
                                            </p>
                                            <div className="card-button">
                                                <a href="" className="bot-button">
                                                    <Image src={Downloadicon} alt='icon'></Image>
                                                    Download
                                                </a>
                                                <a href="" className="bot-button">
                                                    <Image src={Viewicon} alt='icon'></Image>
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                            </li>
                            <li>
                                
                                <div className="card-inner">
                                    <Image src={Projimg1} alt="project" className="thumb"></Image>
                                    <div className="info">
                                        <div className="tech-info">
                                            <span>Html</span>
                                            <span>Css</span>
                                            <span>Js</span>
                                        </div>
                                        <Link href="/newsection" className="text-link">
                                            <h3 className="heading">
                                                Hotel Management System Project in HTML CSS
                                            </h3>
                                        </Link>
                                        <p className="cardpara">
                                            In this application we believe in the power of collective kindness to transform lives and communities.
                                        </p>
                                        <div className="card-button">
                                            <a href="" className="bot-button">
                                                <Image src={Downloadicon} alt='icon'></Image>
                                                Download
                                            </a>
                                            <a href="" className="bot-button">
                                                <Image src={Viewicon} alt='icon'></Image>
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                
                                    <div className="card-inner">
                                        <Image src={Projimg2} alt="project" className="thumb"></Image>
                                        <div className="info">
                                            <div className="tech-info">
                                                <span>Html</span>
                                                <span>Css</span>
                                                <span>Js</span>
                                            </div>
                                            <Link href="/newsection" className="text-link">
                                                <h3 className="heading">
                                                    Hotel Management System Project in HTML CSS
                                                </h3>
                                            </Link>
                                            <p className="cardpara">
                                                In this application we believe in the power of collective kindness to transform lives and communities.
                                            </p>
                                            <div className="card-button">
                                                <a href="" className="bot-button">
                                                    <Image src={Downloadicon} alt='icon'></Image>
                                                    Download
                                                </a>
                                                <a href="" className="bot-button">
                                                    <Image src={Viewicon} alt='icon'></Image>
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                            </li>
                            <li>
                                
                                    <div className="card-inner">
                                        <Image src={Projimg3} alt="project" className="thumb"></Image>
                                        <div className="info">
                                            <div className="tech-info">
                                                <span>Html</span>
                                                <span>Css</span>
                                                <span>Js</span>
                                            </div>
                                            <Link href="/newsection" className="text-link">
                                                <h3 className="heading">
                                                    Hotel Management System Project in HTML CSS
                                                </h3>
                                            </Link>
                                            <p className="cardpara">
                                                In this application we believe in the power of collective kindness to transform lives and communities.
                                            </p>
                                            <div className="card-button">
                                                <a href="" className="bot-button">
                                                    <Image src={Downloadicon} alt='icon'></Image>
                                                    Download
                                                </a>
                                                <a href="" className="bot-button">
                                                    <Image src={Viewicon} alt='icon'></Image>
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Page;