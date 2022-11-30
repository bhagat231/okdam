import React from 'react'
import Data from '../Data/Data'
import Home from '../Pages/Home'
import { Routes, Route, Link } from "react-router-dom";
import Cat from '../Pages/Cat';
import Single from '../Pages/Single';
import { Item } from '../Data/Data';
import Login from '../Data/Login';


export default function Header() {
  return (
    <>
   <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel"><h2>Catalog</h2></h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
    {Item.map((x)=>(
    <ul class="list-group bhagat baudh ">
      
  <li class="list-group-item ">
    <li class="list-group-item"><img width="10" src={x.image}/><span className='fs-7'>&nbsp;&nbsp;<Link className='link-dark text-decoration-none' to={`/cat/${x.id}`}>{x.title}</Link></span></li>
    </li>
  
</ul>
))}
      
    </div>
  </div>
</div>
 <nav className="navbar navbar-expand-lg  ">
  <div className="container abc ">

  <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  <Link className="navbar-brand" to="/"><i class="bi bi-list text-white  ps-5 fs-2"></i></Link>
</button> 
  <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><img className='ms-5' width="150" src='https://www.okdam.com/public/images/okdam-new-logo.png'/></Link>
        </li>
      </ul>
      <form className="one" role="search">
       <input className="form-control me-2 " type="search"   
         placeholder="" aria-label="Search" />
           <p class="bi three bi-search px-2 gap-2">&nbsp;Search & Product</p>
      </form>
      <div className="collapse navbar-collapse d-flex flex-column align-items-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item  d-flex align-items-center d-column">
          <a className="nav-link link-light " href="#"><i class="bi bi-person  fs-3  "></i></a>
          <div className='text-light'>
            <p className='d-flex flex-column align-items-center my-1'><Link className='link-light text-decoration-none' to="/log">Login</Link></p>
          </div>
        </li>
        <li className="nav-item px-4 d-flex align-items-center  ">
          <a  className="nav-link link-light  " href="#">
            <i class="bi bi-minecart-loaded two  fs-3 "></i></a>
          <div>
            <p className='text-light flex-column align-items-center my-2'>cart</p>
          </div>
        </li>
        </ul>
        </div>
    </div>
  </div>
</nav>
{/* 2nd bar */}
<nav className="navbar navbar-expand-lg bg-primary navbar-light  ">
  <div className="container-fluid d-flex flex-column align-items-center">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
      <li className="nav-item ">
          <Link className="nav-link link-light " to="/"><p class="bi bi-house-add">&nbsp;&nbsp;Home</p></Link>
        </li>
        {Data.map((d)=>(
        <li className="nav-item bbb larisha  ">
          <Link className="nav-link link-light   " to={`/cat/${d.id}`}><p class="bi bi-house-add px-2">&nbsp;&nbsp;{d.catName}</p></Link>
        </li>
        ))}
      </ul>
    </div>
  </div>
</nav>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:cid" element={<Cat />} />
        <Route path="/details/:id" element={<Single />} />
        <Route path="/log" element={<Login />} />
      </Routes>



    </>
  )
}
