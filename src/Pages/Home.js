import React from 'react'
import { Link } from 'react-router-dom'
import { Item } from '../Data/Data'
import { Slide } from '../Data/Data'
import Data from '../Data/Data'
import Product from '../Data/Product'
import { Featured } from '../Data/Data'
import { Deal } from '../Data/Data'

export default function Home() {
  var one=Product.filter((q)=>q.cat==1)
  var two=Product.filter((q)=>q.cat==12)
  var three=Product.filter((q)=>q.cat==13)
  var four=Product.filter((q)=>q.cat==14)
  var five=Product.filter((q)=>q.cat==15)
  var six=Product.filter((q)=>q.cat==50)
  var seven=Product.filter((q)=>q.cat==51)
  var eight=Product.filter((q)=>q.cat==11)
  return (
    <>
    <div className='container-fluid py-2'>
        <div className='row shadow p-3 mb-5 bg-body rounded'>
            <div className='col-lg-3 '>
                {Item.map((e)=>(
            <ul class="list-group w-80 justify-align-left bhagat ">
  <li  class="list-group-item fs-6 "><img width="10" src={e.image}/><span className='fs-7'>&nbsp;&nbsp;<Link className='link-dark text-decoration-none ' to={`/cat/${e.id}`}>{e.title}</Link></span></li>
</ul>
))}
            </div>
          <div className='col-lg-7'>
            
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  {Slide.map((g)=>(
    <div className="carousel-item active" data-bs-interval={10000}>
      <img width="100" height="450" src={g.image} className="d-block w-100" alt="..." />
    </div>
    ))}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


          </div>
          <div className='col-lg-2 '>
            <img width="100%" src='https://www.okdam.com/public/images/upload/banner/outdoor-play-equipment-new.jpg'/><br/>
            <img  width="100%" height="250vh" src='https://www.okdam.com/public/images/upload/banner/okdam-right-offer-new.jpg'/>
          </div>
        </div>
    </div>

    {/* <Appliance */}

    <div className='container'>
        <div className='row '>
          <div className='simple'>
            <h2>FEATURED COLLECTIONS</h2>
            </div>
             {Featured.map((d)=>(
            <div className='col-lg-2 text-center border border-success p-2 border-opacity-10 zoom'>
            <Link to={`/cat/${d.id}`}><img  width="150" src={d.image}/></Link> 
                <p>{d.title}</p>

            </div>
            ))}
        </div>
    </div>
    {/* <div className='container'>
        <h2>Home & Kitchen Appliances</h2>
       
        <div className='row'>
        {soul.map((k)=>(
            <div className='col-lg-4'>
            <img src={k.img}/>
            <p>{k.title}</p>
            </div>
              ))}  
        </div>
    
    </div> */}

    <div className='container py-2'>
      <div className='row'>
        <img width="100" src='https://www.okdam.com/public/images/upload/banner/swimming-pool-new.jpg'/>
      </div>
    </div>

    {/* Appliance  */}
 
    <div className='container py-2'>
      <div className='simple'>
      <h2 className='simple'>DEAL OF THE DAY </h2>
      </div>
    <div className='row py-2'>
      {two.slice(0,6).map((z)=>(
       <div className='col-lg-2'>
    <div className="card shadow p-3 mb-5 bg-body rounded " style={{width: '15rem'}}>
  <img width="100" src={z.img} className="card-img-top kkk zoom" alt="..." />
  <div className="card-body">
    <p className="card-title ddd text-center"><Link className='link-dark text-decoration-none' to={`/details/${z.id}`}>{z.title}</Link></p>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>

       
        </div>
   
   ))}
      </div>
         
    </div>

    {/* Fitness and outdoor */}
    <div className='container'>
      <div className='simple'>
      <h2>TRENDING PRODUCT</h2>
      </div>
      <div className='row py-2'>
        {three.slice(0,6).map((z)=>(
        <div className='col-lg-2'>
      <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: '15rem'}}>
  <img width="100" src={z.img} className="card-img-top kkk zoom" alt="..." />
  <div className="card-body">
    <p className="card-text ddd "><Link className='link-dark text-decoration-none' to={`/details/${z.id}`}>{z.title}</Link></p>
  </div>
</div>

        </div>
        ))}
      </div>
    </div>

    {/* security and software */}
    <div className='container'>
      <div className='simple'>
      <h2>FEATURED PRODUCT</h2>
      </div>
      <div className='row py-2'>
        {four.slice(0,6).map((z)=>(
        <div className='col-lg-2'>
      <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: '15rem'}}>
  <img width="100" src={z.img} className="card-img-top kkk zoom" alt="..." />
  <div className="card-body">
    <p className="card-text ddd "><Link className='link-dark text-decoration-none' to={`/details/${z.id}`}>{z.title}</Link></p>
  </div>
</div>

        </div>
        ))}
      </div>
    </div>

  {/* Top selling product */}
  <div className='container'>
    <div className='simple'>
      <h2>TOP SELLING PRODUCT</h2>
      </div>
      <div className='row py-2'>
        {five.slice(0,6).map((z)=>(
        <div className='col-lg-2'>
      <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: '15rem'}}>
  <img width="100" src={z.img} className="card-img-top kkk zoom" alt="..." />
  <div className="card-body">
    <p className="card-text ddd "><Link className='link-dark text-decoration-none' to={`/details/${z.id}`}>{z.title}</Link></p>
  </div>
</div>

        </div>
        ))}
      </div>
    </div>

{/* New arrival */}

<div className='container'>
  <div className='simple'>
      <h2>NEW ARRIVAL</h2>
      </div>
      <div className='row py-2'>
        {six.slice(0,6).map((z)=>(
        <div className='col-lg-2'>
      <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: '15rem'}}>
  <img width="100" src={z.img} className="card-img-top kkk zoom" alt="..." />
  <div className="card-body">
    <p className="card-text ddd "><Link className='link-dark text-decoration-none' to={`/details/${z.id}`}>{z.title}</Link></p>
  </div>
</div>

        </div>
        ))}
      </div>
    </div>

    {/* Top brand */}

    <div className='container'>
      <div className='simple'>
      <h2>TOP BRAND</h2>
      </div>
      <div className='row py-2'>
        {seven.slice(0,6).map((z)=>(
        <div className='col-lg-2'>
      <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: '15rem'}}>
<Link  to={`/cat/${z.id}`}> <img width="100" src={z.img} className="card-img-top kkk" alt="..." /></Link> 
</div>

        </div>
        ))}
      </div>
    </div>

    {/* All categories */}
    <div className='container'>
    <div className='row'>
       <h1>All Categories</h1>
        <p>Outdoor Toys & AccessoriesOutdoor Multi Play StationGarden SlidesTrampolineTricyclesSwimming PoolGrass Carpet and MatKids Electric VehiclesKids Scooters ToysBaby Playards</p>
      
      </div>
    </div>

    </>
  )
}
