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
    let arrayOfTech = [];
    let arrayOfCategory = [];
    
    const getSeletedTechnology = async (value) => {
        const index = arrayOfTech.indexOf(value);
        const updatedTechArray = [...arrayOfTech]; // Create a copy of arrayOfTech
        
        if (index >= 0) 
           { updatedTechArray.splice(index, 1);
            const { data } = await allFiltewr(updatedTechArray, arrayOfCategory);
            
           return data && setProjects(data);
        }
        else 
           { updatedTechArray.push(value);
        
        const { data } = await allFiltewr(updatedTechArray, arrayOfCategory);
      return  data && setProjects(data);
    }
    }
    
    const getSeletedCategory = async (value) => {
        const index = arrayOfCategory.indexOf(value);
        const updatedCategoryArray = [...arrayOfCategory]; // Create a copy of arrayOfCategory
        if (index >= 0) 
          {  updatedCategoryArray.splice(index, 1);
            
        const { data } = await allFiltewr(arrayOfTech, updatedCategoryArray);
       return data && setProjects(data);
    }
        else 
        {    updatedCategoryArray.push(value);
            
        const { data } = await allFiltewr(arrayOfTech, updatedCategoryArray);
       return data && setProjects(data);
        }
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
//                         <input type="checkbox" checked={ selectedTech.includes( item.id ) } value={item.id} onChange={checkboxHandler}    />

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




  


// import { useState } from "react";

// const List = () =>{
//     const [data, setData] = useState(
//         [
//             {
//               "userId": 1,
//               "id": 1,
//               "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//               "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//             },
//             {
//               "userId": 1,
//               "id": 2,
//               "title": "qui est esse",
//               "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//             },
//             {
//               "userId": 1,
//               "id": 3,
//               "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//               "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//             },
//             {
//               "userId": 1,
//               "id": 4,
//               "title": "eum et est occaecati",
//               "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//             },
//             {
//               "userId": 1,
//               "id": 5,
//               "title": "nesciunt quas odio",
//               "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
//             },
//             {
//               "userId": 1,
//               "id": 6,
//               "title": "dolorem eum magni eos aperiam quia",
//               "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
//             },
//             {
//               "userId": 1,
//               "id": 7,
//               "title": "magnam facilis autem",
//               "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
//             },
//             {
//               "userId": 1,
//               "id": 8,
//               "title": "dolorem dolore est ipsam",
//               "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
//             },
//             {
//               "userId": 1,
//               "id": 9,
//               "title": "nesciunt iure omnis dolorem tempora et accusantium",
//               "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
//             },
//             {
//               "userId": 1,
//               "id": 10,
//               "title": "optio molestias id quia eum",
//               "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
//             },
//             {
//               "userId": 2,
//               "id": 11,
//               "title": "et ea vero quia laudantium autem",
//               "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
//             },
//             {
//               "userId": 2,
//               "id": 12,
//               "title": "in quibusdam tempore odit est dolorem",
//               "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
//             },
//             {
//               "userId": 2,
//               "id": 13,
//               "title": "dolorum ut in voluptas mollitia et saepe quo animi",
//               "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
//             },
//             {
//               "userId": 2,
//               "id": 14,
//               "title": "voluptatem eligendi optio",
//               "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
//             },
//             {
//               "userId": 2,
//               "id": 15,
//               "title": "eveniet quod temporibus",
//               "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
//             }
//         ]
//     )

// 	const [selectedTech, setSelectedITech] = useState([])
	

// 	function checkboxHandler(e){
// 		let isSelected = e.target.checked;
// 		let value = parseInt(e.target.value);

// 		if( isSelected ){
// 			setSelectedITech( [...selectedTech, value ] )
// 		}else{
// 			setSelectedITech((prevData)=>{
// 				return prevData.filter((id)=>{
// 					return id!==value
// 				})
// 			})
// 		}
// 	}


// 	function checkAllHandler(){
		

// 		if( data.length === selectedTech.length ){
// 			setSelectedITech( [] )
// 		}else{
// 			const postIds = data.map((item)=>{
// 				return item.id
// 			})

// 			setSelectedITech( postIds )
// 		}
// 	}


	

//     return(
//         <>
//         <div className="container">
//             <div className="left">
//                 {data.map((item,index)=><div className="card" key={index}>
//                     <label>
						
//                         <input type="checkbox" checked={ selectedTech.includes( item.id ) } value={item.id} onChange={checkboxHandler}    />
//                     </label>
//                     <h1>Id: {item.id}</h1>
//                     <h2>{item.title}</h2>
//                     <p>{item.body}</p>
//                 </div>)}
//             </div>
//             <div className="right">
//                 <div className="results">
//                     <div>
//                         <button type="button" onClick={checkAllHandler} >{ data.length === selectedTech.length ? 'Uncheck All' : 'Check all' }</button>
//                     </div>

//                     <h3>Result will print here: {selectedTech.toString()} </h3>

//                 </div>
//             </div>
//             </div>
//         </>
        
//     )
// }

// export default List;