// import Link from 'next/link';
import Image from 'next/image'; 
import "./hero.css";
import "./orbit.css";
// import HeroImg from "./heroImage.svg";
import Logo from "./header/logo.webp";
import Automation from "../public/orbitimage/automation.svg";
import Webdev from "../public/orbitimage/webdevelopment.svg";
import Salesforce from "../public/orbitimage/saleforce.svg";
import Javascript from "../public/orbitimage/javascript.svg";
import Reactimg from "../public/orbitimage/react.svg";
import Kubernotes from "../public/orbitimage/kubernotes.svg";
const HomePage = () => {
    return (
        <div className="hero-section">
            <div className="container">
                <div className="row-flex hero-pad space-between-row">
                    <div className="herocta align-items-center-column column-flex col-flex-start">
                        <div className="top-subhead">
                        World Class Placement Oriented Programs
                        </div>
                        <div className="hero-heading">
                        Accelerate Your Career Growth<br></br> & <strong>Upskill Your CV</strong>
                        </div>
                        <button className="hero-cta-btn">
                            <span>Explore Our Featured Courses</span>
                            <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.05C0.47533 6.05 0.05 6.47533 0.05 7C0.05 7.52467 0.47533 7.95 1 7.95V6.05ZM18.6718 7.67175C19.0427 7.30075 19.0427 6.69925 18.6718 6.32825L12.626 0.282485C12.255 -0.0885124 11.6535 -0.0885124 11.2825 0.282485C10.9115 0.653484 10.9115 1.25499 11.2825 1.62599L16.6565 7L11.2825 12.374C10.9115 12.745 10.9115 13.3465 11.2825 13.7175C11.6535 14.0885 12.255 14.0885 12.626 13.7175L18.6718 7.67175ZM1 7.95H18V6.05H1V7.95Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <div className="herofig">
                        <div className="orbitfig">
                            <div className="centerlogo">
                                <Image src={Logo} alt="" className="logo" />
                            </div>
                            <div className="first-orbit">
                                <span className="firstItem"></span>
                                <span className="secondItem"></span>
                                <span className="thirdItem"><Image src={Automation} alt="" className="smaller-icon" /></span>
                            </div>
                            <div className="second-orbit">
                                <span className="firstItem"></span>
                                <span className="secondItem"></span>
                                <span className="thirdItem"><Image src={Webdev} alt="" className="mid-icon" /></span>
                                <span className="fourthItem"><Image src={Salesforce} alt="" className="mid-icon" /></span>
                            </div>
                            <div className="third-orbit">
                                <span className="firstItem"></span>
                                <span className="secondItem"></span>
                                <span className="thirdItem"><Image src={Reactimg} alt="" className="large-icon" /></span>
                                <span className="fourthItem"><Image src={Javascript} alt="" className="large-icon" /></span>
                                <span className="fifthItem"><Image src={Kubernotes} alt="" className="large-icon" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;