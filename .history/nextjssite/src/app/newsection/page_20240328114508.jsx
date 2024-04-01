import React from 'react'
import "./page.css"
import Headicon from "./after-head-icon.svg"
import Image from 'next/image'
import Link from 'next/link'
import Projimg1 from './images/projsection1.png'
import Projimg2 from './images/projsection2.png'
import Projimg3 from './images/projsection3.png'
const Page = () => {
    return(
        <>
        <section className="projects">
            <div className="container">
                <div className="col-flex main-head">
                    <h5 class="small-head">Innovations in Computing</h5>
                    <h3 className="bghead">Projects Empowering <span>Coders
                        <Image src={Headicon}></Image></span></h3>
                </div>
                <ul className="col-flex project-cards">
                    <li>
                        <Link href="/newsection">
                            <div className="project-cards">
                                <Image src={Projimg1} alt={project}></Image>
                                <div className="info">
                                    <div className="tech-info">

                                    </div>
                                    <h3 className="heading">
                                    Hotel Management System Project in HTML CSS
                                    </h3>
                                    <p className="info">
                                        In this application we believe in the power of collective kindness to transform lives and communities.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}
export default Page;