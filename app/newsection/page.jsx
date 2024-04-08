'use client'
import React, { useEffect, useState } from 'react';
import "./page.css"

import { allFiltewr, allProject, projectLanguages, projectList } from '../../apis/apis';
import Project from '../../components/project/project';
import Image from 'next/image'
const Page = () => {
    const [filterActive, setfilterActive] = useState(true);
    const [domainActive, setdomainActive] = useState(true);
    const [selectedTech, setSelectedITech] = useState([])
    const [selectedCat, setSelectedCat] = useState([])

    const [project, setProjects] = useState([])

    const toggleFilter = () => {
        setfilterActive(!filterActive);
    }
    const toggleDomain = () => {
        setdomainActive(!filterActive);
    }
    const [state, setState] = useState([])
    const [tech, setTech] = useState([])
  

    const allData = async() =>{
        const {data} = await projectLanguages()
        getLists(0)
        return data && setState(data)
       
    }
    
    const getLists = async(id) => {
        const {data} =  await projectList(id)
   return data &&  setTech(...data) 
    }

    
	function checkboxTechnology(e){
		let isSelected = e.target.checked;
    
		let value = parseInt(e.target.value);
		if( isSelected ){
			setSelectedITech( [...selectedTech, value ] )

		}else{
			setSelectedITech((prevData)=>{
				return prevData.filter((id)=>{
					return id!==value
				})
			})
		}

	}
    
	function checkboxCategory(e){
      
		let isSelected = e.target.checked;
		let value = e.target.value
		if( isSelected ){
			setSelectedCat( [...selectedCat, value ] )
        }else{
			setSelectedCat((prevData)=>{
				return prevData.filter((id)=>{
					return id!==value
				})
			})
		} 
	}


    const filterData = async () => {
        const {data}  = await allFiltewr(selectedTech, selectedCat);
        return data && setProjects(data);
    }

    const projects = async() => {
        const {data} =  await allProject()
        return data &&  setProjects(data)  
    }

    
useEffect(() => {
    filterData()
},[selectedTech, selectedCat])
   
    useEffect(() =>{
        allData()
        projects()
    },[])

    return(
        <>
     <section className="projects">
            <div className="container">
             <div className="col-flex main-head">
                    <h5 className="small-head">Innovations in Computing</h5>
                    <h3 className="bghead">Projects Empowering <span>Coders
                        <Image src='/after-head-icon.svg' width={10} height={10}></Image></span></h3>
                </div>
              
                <Project project={project}/>

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
                                    <path d="M3 7H6M6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7ZM3 17H9M18 17H21M18 17C18 18.6569 16.6569 20 15 20C13.3431 20 12 18.6569 12 17C12 15.3431 13.3431 14 15 14C16.6569 14 18 15.3431 18 17ZM15 7H21" stroke="#1E3792" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                                <h3 className="head">
                                    Filter
                                </h3>
                            </div>
                        </div>
                        <div className="height-divider"></div>
                        <div className="tabs">
                            <div className="tab-button active" onClick={(e) => getLists('All')}>All</div>
                            {state && state.map((el) => (
                                <div className="tab-button" onClick={(e) => getLists(el.id)}>{el.language}</div>

                            ))}
                           
                        </div>
                     
                    </div>
                    
                </div>
                <div className="row ecompad">
                    <div className={`col-md-4 ecom-filter ${filterActive ? 'active' : ''}`}>
                        <div className="icon-tophead">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 7H6M6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7ZM3 17H9M18 17H21M18 17C18 18.6569 16.6569 20 15 20C13.3431 20 12 18.6569 12 17C12 15.3431 13.3431 14 15 14C16.6569 14 18 15.3431 18 17ZM15 7H21" stroke="#1E3792" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            <h3 className="head">
                                Filter
                            </h3>
                        </div>
                        <div className="overflow-cont">
                            <div className={`filter-head ${filterActive ? 'active' : ''}`} onClick={toggleFilter}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="white"/>
                                    <path id="one" d="M6.5 10H13.5" stroke="#121212" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path id="two" d="M10 13.6L10 6.59998" stroke="#121212" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <h3 className="head">Choose Technology</h3>
                            </div>
                            <ul className={`filter-techlist ${filterActive ? 'active' : ''}`}>
                                {tech && tech.technology && tech.technology.map((el) =>(
                                    <li><label htmlhtmlFor="checklist2" >{el.technology}</label><input type="checkbox"  checked={ selectedTech.includes( el.id ) } value={el.id} onChange={checkboxTechnology}     /></li>

                                ))}
                                       </ul>
                            <div className={`filter-head ${domainActive ? 'active' : ''}`} onClick={toggleDomain}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="white"/>
                                    <path id="one" d="M6.5 10H13.5" stroke="#121212" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path id="two" d="M10 13.6L10 6.59998" stroke="#121212" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <h3 className="head">Choose Domain</h3>
                            </div>
                            <ul className={`filter-techlist ${domainActive ? 'active' : ''}`}>
                                {tech && tech.project && tech.project.map((el) =>(

                                <li><label htmlhtmlFor="checklist3">{el.category}</label><input type="checkbox"  checked={ selectedCat.includes( el.category ) }  value={el.category} onChange={checkboxCategory}  /></li>
                                ))}
                                </ul>
                        </div>
                        <div className="done-button"  style={{cursor : 'pointer'}}>
                            Done
                        </div>
                    </div>
                    <div className="col-md-8 ecom-content">
                 <Project project={project}/>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Page;