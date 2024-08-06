import React from 'react';
import sai from '../assets/sai.jpeg'
import sai1 from '../assets/sai1.jpg'
// import FontAwesomeIcon from '@fontawesome/react-fontawesome'
// import {faMagnifyingGlass} from '@fontawesome/free-solid-svg-icons'
import './HomePage.css'
const HomePage1 = () => {
  return (
    <>
    <div>
        {/* nav start */}
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2p1EBRBXytnwryJnEKuVSS9B34_I6evj2qQ&s' width="7%"/>
                    <div className='mx-5'>
                        <form className='w-100'>
                            <input type='text' placeholder='Search' className='px-3 py-2' style={{ width: '120%', borderRadius: '10px', position: 'relative' }} />
                            <div style={{position:"absolute", top:"38%",left:"30%"}}>
                                {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </form>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto" style={{display:'flex',alignItems:'center',gap:'20px'}}>
                            <li class="nav-item">
                            <i class="fa-regular fa-heart fs-5 fa-shake" ></i>
                            </li>
                            <li class="nav-item">
                            <i class="fa-solid fa-bell fa-shake fs-5"></i>
                            </li>
                            <li class="nav-item">
                               <img src={sai1} width="45px" style={{borderRadius:"50%"}}/>
                            </li>
                            <li class="nav-item">
                                <div style={{display:'flex',flexDirection:'column',}}>
                                    <a>My Account</a>
                                    <a style={{fontSize:"13px"}}>Edit</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* nav end */}
            {/* second nav bar start */}
            <div className='container d-flex justify-content-center py-1'>
                <button className='btn btn-outline-primary  text-dark py-2 px-5 mx-3 '   style={{borderRadius:"85px"}}>Flight</button>
                <button className='btn btn-outline-primary  text-white bg-black py-2 px-5 mx-3'  style={{borderRadius:"85px",}}>Hotel</button>
                <button className='btn btn-outline-primary  text-dark py-2 px-5 mx-3'  style={{borderRadius:"85px"}}>Holiday Pakages</button>
                <button className='btn btn-outline-primary  text-dark py-2 px-5 mx-3'  style={{borderRadius:"85px"}}>Trains</button>
                <button className='btn btn-outline-primary  text-dark py-2 px-5 mx-3'  style={{borderRadius:"85px"}}>Buses</button>
            </div>
            {/* second nav bar end */}
            {/* third row start */}
            <div class="container">
                <div class="row col-md-5 my-4 ">
                    <h3 class="fw-bolder">Where Is Your Next Dream Place?</h3>
                    <h6>Find Exclusive Genius Rewards In Every Corner In the World!</h6>
                </div>
            </div>
          {/* third row end*/}
      {/* 4th row start */}
            <div className='container'>
              <div className='row'>
                <div className='col-md-2'>
                    <label className="fw-bold" placeholder="outernberg">Place</label>
                    <input type='text'></input>
                </div>
                <div className='col-md-2'>
                     <label className="fw-bold">VI</label>
                     <select>
                          <option>LongLasting</option>
                     </select>
                </div>
                <div className='col-md-2'>
                     <label className="fw-bold">Passengers-Room Condition</label>
                    <input type='text'></input>
                </div>
                <div className='col-md-2'>
                    <label className="fw-bold">Place</label>
                    <input type='text'/>
                </div>

              </div>
            </div>
            {/* 4hth row end*/}

            {/* <div className='container-fluid d-flex justify-content-center align-Items-center'>
                <div className='himg'>
                      <h2>Why Choose Us?</h2>
                      <button type="button" class="btn btn-light px-3">Explore More ></button>
                      <h1 className='text-white'>Exclusive Hotel Search!</h1>
                </div>
            </div> */}
          
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="himg">
                    <h2>Why Choose Us?</h2>
                    <button type="button" className="btn btn-light px-3">Explore More ></button>
                    <h1 className="text-white">Exclusive Hotel Search!</h1>
                </div>
            </div>

    </div>
    </>
  )
}

export default HomePage1