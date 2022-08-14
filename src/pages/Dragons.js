import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


export default function Dragons() {
    const [dragons, setDragons] = useState([])

    useEffect(()=>{
        const fetchDragons = async () =>{
            const res = await fetch("https://api.spacexdata.com/v4/dragons")
            const data = await res.json()
            setDragons(data)
        }
        fetchDragons()
    },[])
  return (
    <>
    <section className='py-32'>
        <h1 className='heading text-center mb-10'>
            Dragons
        </h1>
        <div className='max-width grid grid-cols-1 gap-5 md:grid-cols-2 px-5'>
            {dragons.map(({
                id,
                name,
                flickr_images,
                description
            }) => (
                <Link to="" key={id}>
                    <article>
                        <img src={flickr_images[0]} alt={name} className="h-96 object-cover"/>
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <Link to="" className="btn">Read More &rarr;</Link>
                    </article>
                </Link>
            )
            
            
            )}
        
        
        
        </div>
    </section>
    
    
    
    
    </>
  )
}
