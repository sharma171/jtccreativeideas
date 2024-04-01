import React from 'react'
import "./page.css"
import Headicon from "./after-head-icon.svg"
import Image from 'next/image'
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
                        <Link href="/#">
                            
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}
export default Page;