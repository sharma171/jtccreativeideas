'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import "./login.css"
import SiteHeader from "../components/header/header";

const Page = () => {
    return(
        <>
            <SiteHeader />
            <section className="login-section">
                <div className="container">
                    <div className="user-section">
                        <h1 className="main-head">
                            My Account
                        </h1>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="login-bg">
                                    <h3 className="login-head">Login</h3>
                                    <form>
                                        <span className="label-span">Username or Email Address *</span>
                                        <input type="email" className="login-input" />
                                        <span className="label-span">Password *</span>
                                        <input type="email" className="login-input" />
                                        <div className="button-row">
                                            <button className="submit-button">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="10" cy="10" r="10" fill="white"/>
                                                    <path d="M9 6L13 10L9 14" stroke="#0e00e6" stroke-width="1.34" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                Log in
                                            </button>
                                            <div className="rem-button">
                                                <input type="checkbox" className="checkbox" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="login-bg">
                                    <h3 className="login-head">Register Now!</h3>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Page