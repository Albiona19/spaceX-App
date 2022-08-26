import { Link } from 'react-router-dom';
export default function Error(){
    return(
        <>
            <section className='error-page'>
                <h1 className='color-blue'>Error | The requested resource could not be found</h1>
                <Link to = "/" className="btn">
                    &larr; Back To Homepage
                </Link>
   
            </section>
        
        </>
    )
}