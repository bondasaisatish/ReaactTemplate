// import React from 'react'
// import './HomePage.css'

// const HomePage = () => {
//   return (
//     <div>HomePage</div>
//   )
// }

// export default HomePage;


import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
    return (
        <>
            <header className="bg-dark text-white p-3">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src="https://marketplace.canva.com/EAFvvrEdW20/1/0/1600w/canva-blue-and-yellow-illustrative-travel-agency-logo-TWAjs1N3SXo.jpg" alt="Logo"  width={"80px"} height={"70px"} style={{borderRadius:"30%"}}/>
                    </div>
                    <div className="search-bar">
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <div className="account-info">
                        <span>My Account</span>
                    </div>
                </div>
            </header>

            <nav className="bg-light py-2">
                <div className="container d-flex justify-content-around">
                    <button className="btn btn-outline-primary">Flight</button>
                    <button className="btn btn-outline-primary">Hotel</button>
                    <button className="btn btn-outline-primary">Holiday Packages</button>
                    <button className="btn btn-outline-primary">Trains</button>
                    <button className="btn btn-outline-primary">Buses</button>
                </div>
            </nav>

            <div className="hero-section text-center text-secondary py-5" style={{ backgroundImage: 'url(hero.jpg)', backgroundSize: 'cover' }}>
                <h1>Where Is Your Next Dream Place?</h1>
                <p>Find Exclusive Genius Rewards in Every Corner Of The World!</p>
                <div className="search-form mt-4">
                    <div className="container">
                        <form className="form-inline justify-content-center">
                            <input type="text" className="form-control mr-2" placeholder="Place" />
                            <select className="form-control mr-2">
                                <option>VIP</option>
                                <option>Long Lasting</option>
                            </select>
                            <input type="text" className="form-control mr-2" placeholder="Passengers - Room Condition" />
                            <input type="text" className="form-control mr-2" placeholder="Check-in - Check-out" />
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <h2 className="text-center mb-4">Special Offers</h2>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="https://w0.peakpx.com/wallpaper/485/712/HD-wallpaper-the-eiffel-tower-france-trams-sky-water-bridge-river-la-tour-eiffel-blue-seine.jpg" className="card-img-top" alt="Loyalty Discounts" />
                            <div className="card-body">
                                <h5 className="card-title">Loyalty Discounts</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Rekonpv7cv6DnJ660qIS-Pa-m-3UsKTCFw&s" className="card-img-top" alt="Early Booking Discounts" />
                            <div className="card-body">
                                <h5 className="card-title">Early Booking Discounts</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRaclyxC_TobQOAGfX6WqyjASa9AI8bVHBVQ&s" className="card-img-top" alt="Last-Minute Deals" />
                            <div className="card-body">
                                <h5 className="card-title">Last-Minute Deals</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="https://miro.medium.com/v2/resize:fit:700/0*5c5RdLDp2R6jAq0u.jpg" className="card-img-top" alt="Family Packages" />
                            <div className="card-body">
                                <h5 className="card-title">Family Packages</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="https://blissfulplans.com/wp-content/uploads/2020/06/indian-weddings-thailand-scaled.webp" className="card-img-top" alt="Birthday or Anniversary Specials" />
                            <div className="col-md-4 mb-3">
                                <h5 className="card-title">Birthday or Anniversary Specials</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8o2v3o6-IywgGfdPhQm_fHr9EOmcY76biWQ&s" className="card-img-top" alt="Referral Programs" />
                            <div className="card-body">
                                <h5 className="card-title">Referral Programs</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <h2 className="text-center mb-4">Explore In And Out</h2>
                <div className="row">
                    <div className="col-md-12">
                        <img src="explore.jpg" className="img-fluid" alt="Explore" />
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <h2 className="text-center mb-4">Testimonials</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="lucy.jpg" className="card-img-top" alt="Lucy Vinnis" />
                            <div className="card-body">
                                <h5 className="card-title">Lucy Vinnis</h5>
                                <p className="card-text">Relaxing at the hotels is always a delight - their loyalty program ensures exclusive discounts and amazing perks!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="uzeen.jpg" className="card-img-top" alt="Uzeen Josh" />
                            <div className="card-body">
                                <h5 className="card-title">Uzeen Josh</h5>
                                <p className="card-text">Accessing loyalty-exclusive anniversary specials makes each celebration point more unforgettable.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="elisa.jpg" className="card-img-top" alt="Elisa Victoria" />
                            <div className="card-body">
                                <h5 className="card-title">Elisa Victoria</h5>
                                <p className="card-text">Weekends here are pure bliss with extraordinary curated packages. Outstanding loyalty discounts make relaxation even more enticing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-dark text-white py-4">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="footer-logo.png" alt="Footer Logo" />
                            <p className="mt-3">Enjoy savings on chosen hotels and flights when you book through the Idris website. Additionally, earn one key cash for every booking made through the app.</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li>Flights</li>
                                <li>Buses</li>
                                <li>Trains</li>
                                <li>Packages</li>
                                <li>Login/Signup</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>We Offer</h5>
                            <ul className="list-unstyled">
                                <li>Booking Flights</li>
                                <li>Booking Hotels</li>
                                <li>Booking Trains</li>
                                <li>Booking Buses</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Activities</h5>
                            <ul className="list-unstyled">
                                <li>Tour Leading</li>
                                <li>Cruising & Sailing</li>
                                <li>Camping</li>
                                <li>Kayaking</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p className="mb-0">© Copyright Idris Travel Agency</p>
                </div>
            </footer>
        </>
    );
};

export default HomePage;