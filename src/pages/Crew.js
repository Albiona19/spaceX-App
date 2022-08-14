import {useState, useEffect} from 'react'
import { Loading } from '../components'

export default function Crew() {
    const [crew, setCrew] = useState ([])

    useEffect(()=>{
        const fetchCrew = async () => {
            const res = await fetch('https://api.spacexdata.com/v4/crew')
            const data = await res.json()
            setCrew(data)
        }
        fetchCrew()
    },[])
  return (
    <>
    {!crew ? <Loading/> :
    <section className='py-32'>
    <h1></h1>
    </section>
  
}

</>
