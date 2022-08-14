import {useState, useEffect} from 'react'
import { Link, useParams} from 'react-router-dom'
import { LoadingState } from '../components'


export default function SingleDragons() {
    const [singleDragon, setSingleDragons] = useState([])
    const {id} = useParams();


    useEffect(()=>{
        const fetchSingleDragons = async ()=>{
            const res = await fetch(`https://api.spacexdata.com/v4/dragons/${id}`)
            const data = await res.json()

            setSingleDragons(data)
        }
        fetchSingleDragons()

    },[id])

  return (
    <>
    {!singleDragon ? <LoadingState/> :     <section className='py-32 max-width'>
       <article>
        <h1>{singleDragon.name}</h1>
        <h2>First Flight Date: {singleDragon.first_flight}</h2>
         <div>
            <ul>
                <li>Type : {singleDragon.type}</li>
                <li>Crew :{singleDragon.crew_capacity}   </li>
                <li>Dry Mass : {singleDragon.dry_mass_kg} kg</li>
                <li>Active : {singleDragon.active}</li>
                <li><a href={singleDragon.wikipedia} rel="noreferrer" target="_blank" className='btn'>Wikipedia</a></li>
            </ul>

            {/* <ul>
                <h3>Heat shield details</h3>
                <li>Material : {singleDragon.heat_shield.material}</li>
                <li>Size :{singleDragon.heat_shield.size_meters}m</li>
                <li>Temperature : {singleDragon.heat_shield.temp_degrees} degress</li>
                <li>Dev Partner : {singleDragon.heat_shield.dev_partner}</li>
                <li></li>
            </ul> */}
        
        <p>{singleDragon.description}</p> 
</div> */}
        <div>
            {/* Metric Units */}
              {/* <ul>
                  <li>
                    Launch Payload Mass: {singleDragon.launch_payload_mass.kg}kg
                  </li>
                  <li>
                    Return Payload Mass: {singleDragon.return_payload_mass.kg}kg
                  </li>
                  <li>
                    Pressurized Capsule Payload Volume:{''}
                    {singleDragon.pressurized_capsule.payload_volume.cubic_meters}
                  </li>
                  <li>
                    Height With Trunk: {singleDragon.height_w_trunk.meters}m
                  </li>
                  <li>
                    Launch Payload Volume:{''}
                    {singleDragon.launch_payload_vol.cubic_meters} 
                  </li>
                  <li>
                    Return Payload Volume:{''}
                    {singleDragon.return_payload_vol.cubic_meters}
                  </li>
                  <li>
                    Trunk Volume: {singleDragon.trunk.trunk_volume.cubic_meters}
                    
                  </li>
                  <li>Diameter: {singleDragon.diameter.meters}m</li>
                </ul>  */}
          {/* Imperial Units */}
         
           <ul>
                  <li>
                    {/* Launch Payload Mass: {singleDragon.launch_payload_mass.lb}lb */}
                  </li>
                  <li>
                    {/* Return Payload Mass: {singleDragon.return_payload_mass.lb}kg */}
                  </li>
                  <li>
                    Pressurized Capsule Payload Volume:{''}
                    {/* {singleDragon.pressurized_capsule.payload_volume.cubic_feet} */}
                  </li>
                  <li>
                    {/* Height With Trunk: {singleDragon.height_w_trunk.feet}m */}
                  </li>
                  <li>
                    Launch Payload Volume:{''}
                    {/* {singleDragon.launch_payload_vol.cubic_feet}  */}
                  </li>
                  <li>
                    Return Payload Volume:{''}
                    {/* {singleDragon.return_payload_vol.cubic_feet} */}
                  </li>
                  <li>
                    {/* Trunk Volume: {singleDragon.trunk.trunk_volume.cubic_feet} */}
                    
                  </li>
                  {/* <li>Diameter: {singleDragon.diameter.feet}m</li> */}
                </ul> 
        </div> 

       </article>

       <article>
        <img src={singleDragon.flickr_images } alt={singleDragon.name}/>
       </article>
    </section>}
    </>
  )
  }
