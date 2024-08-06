import React from 'react'
import sai1 from './assets/sai1.jpg'
import './components/travel.css'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import {  FaArrowRight, FaCalendarAlt, FaHotel, FaSort, FaSortDown, FaUser } from 'react-icons/fa';
import appstore from './assets/appstore.png';
import travelagency from './assets/travelagency.png'
import credCrads from './assets/credCrads.png'

const Travel = () => {
  return (
   <>
   {/* header */}
        <header className='p-3'>
            <div className='container d-flex justify-content-between align-items-center'>
                <div className='logo'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2p1EBRBXytnwryJnEKuVSS9B34_I6evj2qQ&s" className='card-img-top rounded-circle mx-3' style={{width:"75px",objectFit:"cover"}} alt="logo"/>
                </div>
                <div className='search-bar'>
                     <input type='text' className='form-control' placeholder='search...'/>
                </div>
                <div className='account-info'>
                <i class="fa-regular fa-heart fa-fade  fs-4"></i>
                <i class="fa-solid fa-bell fa-shake mx-2 fs-4"></i>
                <img src={sai1} className='card-img-top rounded-circle mx-2' style={{width:"45px",objectFit:"cover"}} alt="logo"/>  
                               
                  <span>Sai</span>
                </div>
            </div>
        </header>
        {/* header end */}

       {/* nav 2 */}


<nav className="navbar navbar-expand-lg ">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
        <div className='navbar-nav mx-auto '>
        <a className="nav-link" aria-current="page" href="#"><button className='btn btn1 px-5 w-100'>Flight</button></a>
            <a className="nav-link " aria-current="page" href="#"><button className='btn btn1  active1 px-5  w-100'>Hotel</button></a>
            <a className="nav-link " aria-current="page" href="#"><button className='btn btn1 px-4  w-100'>Holiday-Pakages</button></a>
            <a className="nav-link " aria-current="page" href="#"><button className='btn btn1 px-5  w-100'>Trains</button></a>
            <a className="nav-link " aria-current="page" href="#"><button className='btn btn1 px-5  w-100'>Buses</button></a>
       </div>
      
    </div>
  </div>
</nav>
    {/* second row */}
      <div className='container'>
          <div className='row my-5 marnrow3'>
              <h2>Where Is Your Next Dream Project? </h2>
              <p className='lead'>Find Exclusive Rewards In Every Corner Of the World!</p>

              {/* second row3  */}
          <Form className='mt-5'>
            <Row className='align-items-center'>
                <Col md={2}>
                <Form.Group  controlId="formGridPlace">
                  <Form.Label>Place</Form.Label>
                  <InputGroup>
                  <InputGroup.Text><FaHotel/></InputGroup.Text>
                  <Form.Control type='text' placeholder='Getenberg'></Form.Control>
                  </InputGroup>
                </Form.Group>
                </Col>

                <Col md={2}>
                <Form.Group  controlId="formGridVIP">
                  <Form.Label>VIP</Form.Label>
                  <Form.Control as="select">
                    <option>Long Lasting</option>
                    <option>Short Stay</option> 
                  </Form.Control>
                </Form.Group>
                </Col>

                <Col md={4}>
                <Form.Group  controlId="formGridPassengers">
                  <Form.Label>Passengers - Room Condition</Form.Label>
                  <InputGroup>
                  <InputGroup.Text><FaUser/></InputGroup.Text>
                  <Form.Control type='text' placeholder='2 Adults - 3 Childeren &emsp; &emsp; Two Rooms'></Form.Control>
                  <InputGroup.Text><FaSortDown/></InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                </Col>

                <Col md={3}>
                <Form.Group  controlId="formGridCheckIn">
                  <Form.Label>CheckIn-CheckOut</Form.Label>
                  <InputGroup>
                  <InputGroup.Text><FaCalendarAlt/></InputGroup.Text>
                  <Form.Control type='text' placeholder='18 May 2024 - 23 May 2024'></Form.Control>
                  </InputGroup>
                </Form.Group>
                </Col>

                <Col md={1} className='d-flex align-items-end'>
                <Form.Label></Form.Label>
                <Button variant="dark" type="submit" className='mt-4 px-4 py-2 rounded'>Search</Button>
                </Col>

            </Row>
          </Form>
          </div>
      </div>
      {/* second row end */}

     {/* thrid row backround img start */}
     <div className='bgImg text-center py-5'>
            <div className='container my-5 '>
              <h1 className='fw-bolder '>Why Choose Us?</h1>
                <button className='btn btn-outline-light bg-white text-dark px-5 my-2 mb-5'>Explore More <i class="fa-solid fa-angle-right"></i>
                </button>
                <h6 className='display-3 my-5 h6bottom text-white'>Exclusive Hotel Search!</h6>
            </div>
     </div>

     <div className='container my-5'>
          <h3>Special Offers</h3>
          <div className='row my-4'>
            <div className='col-md-3 card1'>
              <div class="card">
                <img src="https://w0.peakpx.com/wallpaper/485/712/HD-wallpaper-the-eiffel-tower-france-trams-sky-water-bridge-river-la-tour-eiffel-blue-seine.jpg" class="card-img spclofferimgs content-fit" alt="parisimg"/>
                <div class="card-img-overlay">
                <button className='btn btn-light'>Loyalty Discounts <FaArrowRight/></button>
                 </div>
              </div>   
            </div>

            <div className='col-md-6 card1'>
              <div class="card">
                <img src="https://static.wanderon.in/wp-content/uploads/2023/07/top-min-31.jpg" class="card-img spclofferimgs2" alt="parisimg"/>
                <div class="card-img-overlay">
                <button className='btn btn-light'> Early-Booking Discounts <FaArrowRight/></button>
                 </div>
              </div>   
            </div>

             <div className='col-md-3 card1'>
              <div class="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRaclyxC_TobQOAGfX6WqyjASa9AI8bVHBVQ&s " class="card-img spclofferimgs" alt="parisimg"/>
                <div class="card-img-overlay">
                <button className='btn btn-light'>Last Minute Deals <FaArrowRight/></button>
                 </div>
              </div>   
            </div>
          </div>

          <div className='row my-4'>
            <div className='col-md-3 card1'>
              <div class="card" >
                <img src="https://miro.medium.com/v2/resize:fit:700/0*5c5RdLDp2R6jAq0u.jpg" class="card-img spclofferimgs" alt="parisimg"/>
                <div class="card-img-overlay">
                <button className='btn btn-light'>Family Packages <FaArrowRight/></button>
                 </div>
              </div>   
            </div>

            <div className='col-md-6 card1'>
              <div class="card">
                <img src="https://c.ndtvimg.com/2018-12/7r5tu6hg_virat-anushka-anniversary-_625x300_11_December_18.jpg" class="card-img spclofferimgs2" alt="parisimg"/>
                <div class="card-img-overlay content">
                <button className='btn btn-light'>Birthday Or Anniversary Specials <FaArrowRight/></button>
                 </div>
              </div>   
            </div>

             <div className='col-md-3 card1'>
              <div class="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Rekonpv7cv6DnJ660qIS-Pa-m-3UsKTCFw&s" class="card-img spclofferimgs" alt="parisimg"/>
                <div class="card-img-overlay">
                <button className='btn btn-light'>Referal Programs <FaArrowRight/></button>
                 </div>
              </div>   
            </div>
          </div>

     </div>
    {/* for Bedroom */}


<div className="container-fluid bgribbon ">  
  <div className="container">
    <h2>Explore In And Out</h2>
    <div className="row my-3">
      <img src="https://paulwaldeninteriors.com/wp-content/uploads/How-to-Choose-the-Right-Wallpaper-for-Redecorating-Your-Luxury-Bedroom.jpg" alt="Luxury Bedroom"/>
    </div>
  </div>
</div>

<div className="container-fluid bghotel py-5 mt-5">  
  <div className="container my-5 py-5">
    <div className="row">
      <div className="col-md-4 my-5">
        <div className="card card2 text-white">
          <img src="https://e1.pxfuel.com/desktop-wallpaper/878/112/desktop-wallpaper-beautiful-girls-beautiful-girls-beautiful-girls-pic-foreign-girl.jpg" className="card-img-top rounded-circle mx-auto" style={{width: "150px", height: "150px", objectFit: "cover"}} alt="Lucy Vinnis"/>
          <div className="card-body">
            <h5 className="card-title">
              <img src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg" alt="USA Flag" style={{width: "40px", height: "40px", marginRight: "8px"}} />
              Lucy Vinnis
            </h5>
            <p className="card-text">Returning to this hotel is always a delight - their loyalty program showers us with exclusive discounts and amazing perks!</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 my-5">
        <div className="card card2 text-white">
          <img src="https://img.freepik.com/premium-photo/perfect-smile-handsome-guy-portrait-facial-hair-skin-care-concept-handsome-face-handsome-man-unshaven-face-stylish-hair-caucasian-man-urban-background-bearded-man-casual-style_474717-5574.jpg" className="card-img-top rounded-circle mx-auto" style={{width: "150px", height: "150px", objectFit: "cover"}} alt="Uzeen Josh"/>
          <div className="card-body">
            <h5 className="card-title">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzwOFJ8N2S4RZZATasWSUWxLhX4Bukg9JBA&s" alt="Russia Flag" style={{width: "40px", height: "40px", marginRight: "8px"}} />
              Uzeen Josh
            </h5>
            <p className="card-text">Accessing easy set 24 extraordinary special offers makes every journey even more unforgettable.</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 my-5">
        <div className="card card2 text-white">
          <img src="https://img.indiaforums.com/article/900x900/7/7053-dont-want-to-always-play-a-foreign-girl-kristina-akheeva.jpg" className="card-img-top mx-auto rounded-circle" style={{width: "150px", height: "150px", objectFit: "cover"}} alt="Elisa Victoria"/>
          <div className="card-body">
            <h5 className="card-title">
              <img src="https://images-cdn.ubuy.co.in/6354e025388a5f3522253c4a-usa-flag-american-us-3x5-ft-flags-with.jpg" alt="UK Flag" style={{width: "40px", height: "40px", marginRight: "8px"}} />
              Elisa Victoria
            </h5>
            <p className="card-text">Weekends here are pure bliss with their carefully crafted packages, and the extended stay discounts make relaxation even more enticing.</p>
          </div>
        </div>
      </div>
    </div> 
  </div>
</div>




{/* pr code for hotel  */}
{/* 
     <div className='maain p-5'>
      <div className='container'>
      <div class="card" style={{width:"18rem",position:'relative'}}>
  <div style={{position:'absolute',bottom:'80%',left:'30%'}}>
  <img class="card-img-top" src="https://img.freepik.com/premium-photo/perfect-smile-handsome-guy-portrait-facial-hair-skin-care-concept-handsome-face-handsome-man-unshaven-face-stylish-hair-caucasian-man-urban-background-bearded-man-casual-style_474717-5574.jpg" alt="Card image cap" style={{borderRadius:'50%',width:'100px',zIndex:'10'}} />
  </div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
     </div>

   </div>  */}


<div className='container'>
    <div className='row py-5'>
      <div className='col-md-10'>
          <h4>Go Further With The Idris Travel Agency</h4>
            <p>Enjoy Saving On Choosen Hotels And Flights When You Book Thorough The Idris Website Additionally .<br/>
            Earn One Key Cash For Every Booking Mode Through The App.</p>
      
      </div>
        <div className="col-md-2">
            <img src={appstore}/>
        </div>
    </div>


    <div className='row liststyle'>
        <div className="col-md-4 mb-3 footer_logo">
            <img  src={travelagency} width="250px" alt="logo" />
        </div>    
        <div className="col-md-2 mt-4">
           
              <p className='fw-bolder'>Quick Links</p>
              <p>Flights</p>
              <p>Buses</p>
              <p>Trains</p>
              <p>Pakages</p>
              <p>Login/SignUp</p>
        
        </div>

        <div className="col-md-2 mt-4">

                <p className='fw-bolder'>We Offer</p>
                <p>Booking Flights</p>
                <p>Booking Hotels</p>
                <p>Booking Trains</p>
                <p>Booking Buses</p>     
       
       </div>

       <div className="col-md-2 mt-4">
                <p className='fw-bolder'>Activities</p>
                <p>Tour Leading</p>
                <p>Crusing and Sailing</p>
                <p>Campaning</p>
                <p>Kayaking</p>         
       </div>

       <div className="col-md-2 mt-4">
                  <p className='fw-bolder'>Service</p>
                  <p>Privacy and security</p>
                  <p>Travel Insurance</p>
      </div>
    </div>

      <div className='row d-flex justify-content-between'>
          <div className='col-md-4'>
              <img src={credCrads} width="350px" />
          </div>

          <div className='row col-md-4'>
            <div className='d-flex justify-content-center mt-2'>
              <div className=' px-2'>
              <i class="fa-brands fa-linkedin-in"></i>
              </div>
              <div className=' px-2'>
              <i class="fa-brands fa-telegram"></i>
              </div>

              <div className=' px-2'>
              <i class="fa-brands fa-twitter"></i>
              </div>

              <div className=' px-2'>
              <i class="fa-brands fa-facebook-f"></i>
              </div>

              <div className=' px-2'>
              <i class="fa-brands fa-square-instagram"></i>
              </div>
            </div>  
          </div>

          <div className='col-md-4'>
          <label>Email</label><br/>
              <form className='input-group'>
                <input  type="text" className='form-control' placeholder='Enter Your Email'/>
                <input type="button"  value="Subscribe" className=' btn bgbtn'/>
              </form>
          </div>
      </div>

</div>



  {/* footer */}
  <div className='footer p-2 footerbg text-white d-flex justify-content-around clsfoot mt-'>
              <h5>&reg; Copyright Idris Travel Agency</h5>
              <h5><i class="fa-regular fa-envelope"></i> Idris TravelAgency@gmail.com</h5>
              <h5><i class="fa-solid fa-phone-volume"></i> +919505670400</h5>
  </div>
   </>
  )
}
export default Travel