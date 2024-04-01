'use client'
import React, { useState } from 'react';
import SiteHeader from "../components/header/header";
import "../newsection/page.css"
import Image from 'next/image'
import Link from 'next/link'
import SlideImg1 from "./images/slide 1.svg"
import SlideImg2 from "./images/slide 2.svg"
import SlideImg3 from "./images/slide 3.svg"
import SlideImg4 from "./images/slide 4.svg"

const Page = () => {
    return(
        <>
            <SiteHeader />
            <section className="det-page">
                <div className="container">
                    <div className="top-navigation">
                        <Link href="#" className="link">Home
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.58398 3L7.58398 6L4.58398 9" stroke="#605F5F" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Link>
                        <Link href="#" className="link">Projects
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.58398 3L7.58398 6L4.58398 9" stroke="#605F5F" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Link>
                        <Link href="#" className="link active">CMS</Link>
                    </div>
                    <div className="detailed-inner row">
                        <div className="col-md-7 lhs">
                            <div className="carousel-product">
                                <div className="slide1">
                                    <Image src={SlideImg1}></Image>
                                </div>
                                <div className="slide2">
                                    <Image src={SlideImg2}></Image>
                                </div>
                                <div className="slide3">
                                    <Image src={SlideImg3}></Image>
                                </div>
                                <div className="slide4">
                                    <Image src={SlideImg4}></Image>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 rhs"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page;