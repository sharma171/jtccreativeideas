'use client'
import React, { useState } from 'react';
import SiteHeader from "../components/header/header";
import "../newsection/page.css"
import Image from 'next/image'
import Link from 'next/link'
import SlideImg1 from "./images/slide 1.png"
import SlideImg2 from "./images/slide 2.png"
import SlideImg3 from "./images/slide 3.png"
import SlideImg4 from "./images/slide 4.png"

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
                        <div className="col-md-6 lhs">
                            <div className="carousel-product">
                                <div className="slide1 slides">
                                    <Image src={SlideImg1} className="thumb" alt="slideImages"></Image>
                                </div>
                                <div className="slide2 slides">
                                    <Image src={SlideImg2} className="thumb" alt="slideImages"></Image>
                                </div>
                                <div className="slide3 slides">
                                    <Image src={SlideImg3} className="thumb" alt="slideImages"></Image>
                                </div>
                                <div className="slide4 slides">
                                    <Image src={SlideImg4} className="thumb" alt="slideImages"></Image>
                                </div>
                                <div className="navigation">
                                    <div className="prev">
                                        <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_d_147_223)">
                                            <rect x="16" y="8" width="41" height="41" rx="20.5" fill="white"/>
                                            <path d="M30 28H44" stroke="#6C7275" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M30 28L36 34" stroke="#6C7275" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M30 28L36 22" stroke="#6C7275" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <filter id="filter0_d_147_223" x="0" y="0" width="73" height="73" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="8"/>
                                            <feGaussianBlur stdDeviation="8"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0364401 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_147_223"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_147_223" result="shape"/>
                                            </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="next">
                                    <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_147_218)">
                                        <rect x="57" y="49" width="41" height="41" rx="20.5" transform="rotate(-180 57 49)" fill="white"/>
                                        <path d="M43 29L29 29" stroke="#141718" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M43 29L37 23" stroke="#141718" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M43 29L37 35" stroke="#141718" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_d_147_218" x="0" y="0" width="73" height="73" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="8"/>
                                        <feGaussianBlur stdDeviation="8"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0364401 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_147_218"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_147_218" result="shape"/>
                                        </filter>
                                        </defs>
                                    </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 rhs"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page;