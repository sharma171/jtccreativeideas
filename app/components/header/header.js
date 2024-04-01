// To inform next js, this is a client component 
"use client";
import { useState } from "react"; 
import Link from 'next/link';
import Image from 'next/image'; 
import CallIcon from "./call-icon.svg";
import ChatIcon from "./chat-icon.svg";
import Logo from "./logo.webp";
import Javascriptlogo from "./header-javascript-icon.svg";
import WebDevIcon from "./web-devicon.svg";
import SalesForceIcon from "./salesforce-icon.svg";
import "./header.css";


const SiteHeader = () => {
    // State to manage which tab is active
    const [activeTab, setActiveTab] = useState('tabOne');

    // Event handler for tab mouse enter
    const handleTabMouseEnter = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="header">
            <div className="container">
                <div className="inner-header row-flex space-between-row align-items-center-row ">
                    <div className="brand">
                        <Link href="/dashboard">
                            <Image src={Logo} alt="logo" className="logo" />
                        </Link>
                    </div>
                    <nav className="nav-menu">
                        <ul className="row-flex">
                            <li><Link href="/dashboard" className="headlinks">Home</Link></li>
                            <li><Link href="/dashboard" className="headlinks">About Us</Link></li>
                            <li>
                                <Link href="/dashboard" className="headlinks">Courses</Link>
                                <div className="mega-menu row-flex">
                                    <div className="column-flex course-hover">
                                        <ul>
                                            <li id="tabOne" onMouseEnter={() => handleTabMouseEnter('tabOne')}><Link href="/dashboard">Assured Job Courses</Link></li>
                                            <li id="tabTwo" onMouseEnter={() => handleTabMouseEnter('tabTwo')}><Link href="/dashboard">Featured Courses</Link></li>
                                            <li id="tabThree" onMouseEnter={() => handleTabMouseEnter('tabThree')}><Link href="/dashboard">Recomended Courses</Link></li>
                                            <li id="tabFour" onMouseEnter={() => handleTabMouseEnter('tabFour')}><Link href="/dashboard">Course Categories</Link></li>
                                            <li id="tabFive" onMouseEnter={() => handleTabMouseEnter('tabFive')}><Link href="/dashboard">Course Tutorials</Link></li>
                                        </ul>
                                    </div>
                                    <div className="row-flex hover-results" id="contentOne" style={{ display: activeTab === 'tabOne' ? 'flex' : 'none' }}>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Full Stack Java Developer</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Assured Placements</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={WebDevIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={SalesForceIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Salesforce</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row-flex hover-results" id="contentTwo" style={{ display: activeTab === 'tabTwo' ? 'flex' : 'none' }}>
                                        <div className="course-card">
                                                <Link href="/dashboard" className="cardlinks column-flex">
                                                    <Image src={WebDevIcon} alt="Javascript" className="courseIcon" />
                                                    <h3>Java Certification Training</h3>
                                                    <div className="details row-flex">
                                                        <span className="info">Class Starts 19 Feb</span>
                                                        <span className="time">9 months</span>
                                                    </div>
                                                </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={SalesForceIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Salesforce</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Full Stack Java Developer</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Assured Placements</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row-flex hover-results" id="contentOne" style={{ display: activeTab === 'tabThree' ? 'flex' : 'none' }}>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Full Stack Java Developer</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Assured Placements</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={WebDevIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={SalesForceIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Salesforce</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row-flex hover-results" id="contentOne" style={{ display: activeTab === 'tabFour' ? 'flex' : 'none' }}>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={WebDevIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Full Stack Java Developer</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Assured Placements</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={SalesForceIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Salesforce</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row-flex hover-results" id="contentOne" style={{ display: activeTab === 'tabFive' ? 'flex' : 'none' }}>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Full Stack Java Developer</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Assured Placements</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={Javascriptlogo} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={WebDevIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Java Certification Training</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="course-card">
                                            <Link href="/dashboard" className="cardlinks column-flex">
                                                <Image src={SalesForceIcon} alt="Javascript" className="courseIcon" />
                                                <h3>Salesforce</h3>
                                                <div className="details row-flex">
                                                    <span className="info">Class Starts 19 Feb</span>
                                                    <span className="time">9 months</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><Link href="/dashboard" className="headlinks">Tutorial</Link></li>
                            <li><Link href="/dashboard" className="headlinks">Hire from Us</Link></li>
                            <li><Link href="/dashboard" className="headlinks">Join Us</Link></li>
                            <li><Link href="/dashboard" className="headlinks">Blog</Link></li>
                        </ul>
                    </nav>
                    <div className="row-flex head-buttons">
                        <div className="cta-buttons">
                            <Link href="" className="white-button">
                                <Image src={CallIcon} alt="callicon" className="icon" />
                                +91-999-0699-111
                            </Link>
                        </div>
                        <div className="cta-buttons">
                            <Link  href="">
                                <Image src={ChatIcon} alt="chaticon" className="icon" />
                                Enquire Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SiteHeader
