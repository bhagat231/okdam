import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Product from '../Data/Product'



export default function Cat() {
    let{cid}=useParams();
    var displayPost=Product.filter((a)=>a.cat==cid)
    var three=Product.filter((q)=>q.cat==13)
  
  return (
    <>
    <div className='container py-2 '>
      <div className='row py-4 ms-0'>
        {displayPost.map((z)=>(
        <div className='col-lg-6'>
          <div className='simple'>
          <h5>{z.cap}</h5>
          <p>{z.top}</p>
          </div>
        </div>
        ))}
        {/* <div className='col-lg-4  '>
        <div className='row'>
          <div className='col-lg-2'>
           <form>
                </form>

            </div>
          </div>
          <div className='row'>
            <div className='col-lg-2'>
            <button className='btn btn-primary'>sort</button>
                  <button className='btn btn-primary my-2'>Reset</button>
            </div>
          </div>
        
              
                  </div> */}
                </div>
                </div>
  
  
   <div className='container py-3'>
    <div className='row'>
        <div className='col-lg-12'>
            <div className='row'>
                {displayPost.map((e)=>(
                <div className='col-lg-3 my-3'>
       <div className="card py-2 " style={{width: '18rem'}}>
 <Link to={`/details/${e.id}`}><img width="100" src={e.img} className="card-img-top kkk zoom " alt="" /></Link> 
  <div className="card-body">
    <h5 className="card-title ddd">{e.title}</h5>
    <p className="card-text">{e.brand}</p>
    <p className="card-text"><h3>{e.price}</h3></p>
    <a href="#" className="btn btn-info">ADD TO CART</a>
    <a href="#" className="btn btn-info mx-2">BUY NOW</a>
  </div>
</div>

                </div>
                ))}
            </div>
        </div>
    </div>
   </div>

   {/* you may also like this */}

   <div className='container'>
    <div className='simple'>
      <h2>you may also like </h2>
      </div>
      <div className='row py-2'>
        {three.slice(0,6).map((z)=>(
        <div className='col-lg-2'>
      <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: '15rem'}}>
 <Link to={`/details/${z.id}`}> <img width="100" src={z.img} className="card-img-top kkk zoom" alt="..." /></Link>
  <div className="card-body">
    <p className="card-text ddd "><Link className='link-dark text-decoration-none' to={`/details/${z.id}`}>{z.title}</Link></p>
  </div>
</div>

        </div>
        ))}
      </div>
    </div>

   

    
    </>
  )
}
