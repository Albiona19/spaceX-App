import { useState, useEffect } from "react"
export default function Homepage() {
    const [company, setCompany] = useState (null)

    useEffect(()=>{
        const fetchCompany = async() => {
            const res = await fetch("https://api.spacexdata.com/v4/company")
            const data = res.json()
            setCompany(data)
        
        }
        fetchCompany()
    }, [])
  return (
    <>
    {!company ? <LoadingState /> : <section className='showcase'> 
    
        <div className='overlay'>
            <article>
                <h1 className='heading'>
                    All the SpaceX Data in one place
                </h1>
                <article>
                    <h2>headerquartes</h2>
                    <ul>
                        <li>{company.headerquartes.adress}</li>
                        <li>{company.headerquartes.city}</li>
                        <li>{company.headerquartes.state}</li>
                    </ul>
                </article>
                <article>
                    <h2>Useful Links</h2>
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
                      

                    </ul>
                </article>
                <article>
                    <h2>About</h2>
                    <ul>
                        <li>{company.name}</li>
                        <li>{company.founder}</li>
                        <li>{company.founded}</li>
                        <li>{company.employees}</li>
                        <li>{company.vehicles}</li>
                        <li>{company.launch_sites}</li>
                        <li>{company.test_sites}</li>
                        <li>{company.ceo}</li>
                        <li>{company.cto}</li>
                        <li>{company.coo}</li>
                        <li>{company.cto_propulsion}</li>
                        <li>{company.valution.toLocaleString()}</li>

                    </ul>
                </article>
                <p>{company.summary}</p>
            </article>

        </div>
    </section>}
    </>
    )
}
