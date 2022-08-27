import { useState, useEffect } from "react"
import {LoadingState} from "../components"
export default function Homepage() {
    const [company, setCompany] = useState (null)

    useEffect(()=>{
        const fetchCompany = async() => {
            const res = await fetch("https://api.spacexdata.com/v4/company")
            const data = await res.json()
            setCompany(data)
        
        }
        fetchCompany()
    }, [])
  return (
 

    <>
        {!company ? <LoadingState /> : <section className="showcase">
        <div className='overlay'>
            <article className="container">
                <h1 className='heading text-center capitalize'>
                    All the SpaceX Data in one place
                </h1>
                <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-3 max-w-3xl mx-auto lg:gap-20 px-5">
                <article>
                    <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">About</h2>
                    <ul className="text-sm opacity-75">
                        <li>{company.name} was founded by</li>
                        <li>{company.founder} in the year</li>
                        <li> {company.founded}</li>
                        <li>it has {company.employees} employees,</li>
                        <li> {company.vehicles} vehicles,</li>
                        <li>{company.launch_sites} launch sites,</li>
                        <li>{company.test_sites} launch sites,</li>
                        <li>and {company.ceo} test sites and</li>
                        <li>is valued at{company.valuation.toLocaleString()} B</li>

                    </ul>
                </article>
                
                <article>
                    <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">Headquarters</h2>
                    <ul>
                        <li>{company.headquarters.address}</li>
                        <li>{company.headquarters.city}</li>
                        <li>{company.headquarters.state}</li>
                    </ul>
                </article>
                <article>
                    <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider"> Useful Links</h2>
                    <ul>
                        <li>
                            <a href={company.links.website}>
                                Website
                            </a>
                        </li>
                        <li>
                            <a href ={company.links.flickr}>
                                Flickr
                            </a>
                        </li>
                        <li>
                            <a href ={company.links.twitter}>
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href ={company.links.elon_twitter}>
                               Elon Twitter
                            </a>
                        </li>
                      

                    </ul>
                </article>
                
                
        

               </div>
               <p className="max-w-6xl mt-8 mx-auto text-center pt-2 background-color: rgba(0, 0, 0, 0.5);">{company.summary}</p>
        </article>
        </div>
    </section>}
</>
    )
}
