import React from 'react'
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
                </ul>
            </div>
        </section>
        <section className="project-category">
            <div className="container">
                <div className="ecom-head">
                    <h2 className="top-head">Choose Projects and <span>Technology</span></h2>
                    <div className="tabs">
                        <div className="tab-button active">basic projects</div>
                        <div className="tab-button">advanced projects</div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Page;