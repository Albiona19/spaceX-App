import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

export default function SingleDragons() {
    const [singleDragons, setSingleDragon] = useState([])
    const {id} = useParams()


    useEffect(()=>{
        const fetchSingleDragons = async ()=>{
            const res = await fetch(`https://api.spacexdata.com/v4/dragons/${id}`)
            const data = await res.json()

            setSingleDragon(data)
        }
        fetchSingleDragons()

    },[id])

  return (
    <section className='py-32 max-width'>
        <h1 className='heading text-white'>
            Single Page Dragons
        </h1>
    </section>
  )
}
