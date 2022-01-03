import React from 'react'
import HomePage from '../components/home'
import "./STYLES.css"
const Home1 = () => {
    return (

        <div>
            <HomePage />
            <section className="aboutme">
                <div>
                    <div className="row" style={{ "backgroundColor": "white" }}>
                        <div className=" col-lg-6  col-sm-12 ">
                            <p className="para">Hello there. . .</p>
                            <h1 className="banner-h">
                                Farrgo!
                            </h1>
                            <h3 className="para-2"> You can book a<span className="deve"> Person |</span></h3>
                            <p className="para-3">The namics of how  users interact with interactive elements within a users
                                interface flowchart based on container proportion</p>
                            <button className="btn btn-1">SignUp</button>
                            <button className="btn btn-2">Sign in</button>
                        </div>
                        <div className=" column col-lg-6 col-sm-0">
                            <img className="img-1" src="/fargo.jpg" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div >
                    <div className="row home-row">
                        <div className="col-lg-6 col-about-1">
                            <h1 className="header">
                                ABOUT US
                            </h1>
                            <p className="para-3"> This App Help You Make Some Money While Travelling  </p>
                            <img className="img-2" src="/gargo2.jpg" />
                        </div>
                        <div className="col-lg-6 col-about-2">
                            <h3>Your <span className="des">Package </span>will be at your door step in very  <span className="des">Cheap</span> Prices</h3>
                            <p className="para-4">
                                This app will connect the people
                                who want to send any package to the travelers who are willing to carry the package. This will
                                help both, the sender and the traveler. The traveler can make some money by delivering
                                packages and the sender can send the package in an efficient and cheaper way</p>

                            <div className="row row-pres">
                                <div className="col-lg-6  ">
                                    <h1></h1>
                                    <pre>lorem     | lorem</pre>
                                    <pre>lorem     | lorem</pre>

                                </div>
                                <div className="col-lg-6  ">
                                    <pre>lorem     |lorem </pre>
                                    <pre>lorem     | lorem</pre>

                                </div>
                            </div>
                            <button className="btn btn-1 "  >Sign Up </button>


                        </div>



                    </div>
                </div>
            </section>
            <section >
                <div className="aboutme col-about-1">
                    <h1 className=" header1">
                        Services
                    </h1>
                    <p className="para-3"> App that makes your life easier </p>
                    <div className="row ro1 service-content">
                        <div className="col-lg-4">
                            <div className="box1">
                                <h5>Travelling</h5>
                                <p>Make your Travelling easy and make you earn money out of it.
                                    Make your Travelling easy and make you earn money out of it.
                                </p>
                            </div>

                        </div>
                        <div className="col-lg-8">

                            <div className="box1">


                                <h5>Security</h5>
                                <p>Full Security of the packages that you want in your country
                                    Full Security of the packages that you want in your country
                                </p>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="box1">
                                <h5>Saves time</h5>
                                <p> This app helps you to get packages in shortest time span
                                    This app helps you to get packages in shortest time span
                                </p>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="box1">
                                <h5>Saves time</h5>
                                <p> This app helps you to get packages in shortest time span
                                    This app helps you to get packages in shortest time span
                                </p>
                            </div>

                        </div>
                       



                    </div>


                </div>
            </section>
            <footer id="footer">
                <div className="container2">
                    <div className="row home-row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-3" >
                                    <h5>Top Products</h5>
                                    <p>Managed Website</p>
                                    <p>Managed Reputation</p>
                                    <p> Power Tools</p>
                                    <p>Marketing Service</p>
                                </div>
                                <div className="col-md-3">
                                    <h5>Quick Links</h5>
                                    <p>Jobs</p>
                                    <p>Brand Assets</p>
                                    <p>Investor Brands</p>
                                    <p>Investor Relations</p>
                                </div>
                                <div className="col-md-3">
                                    <h5>Features</h5>
                                    <p>Jobs</p>
                                    <p>Brand Assets</p>
                                    <p>Investor Brands</p>
                                    <p>Investor Relations</p>


                                </div>
                                <div className="col-md-3">
                                    <h5>Top Products</h5>
                                    <p>guides</p>
                                    <p>Experts</p>
                                    <p>Research</p>
                                    <p>Agencies</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5>
                                Newsletter
                            </h5>
                            <p> You can trust us . we only send promo offers</p>

                            <div className="content">
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                    <span className="input-group-btn">
                                        <button className="btn" type="submit">Subscribe Now</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row home-row">
                        <div className="col-md-8 ">
                            <p className="footer-p">Copy right <span>&copy</span> 2021 All rights reserved | This is <span>&hearts;</span> by
                                <span style={{ "color": "green" }}> farrgo</span></p>
                        </div>
                        <div className="col-md-4">

                            {/* <div className="icons-2">
                            <i className="fab fa-twitter fa-2x"></i>
                            <i className="fab fa-facebook fa-2x "></i>
                            <i className="fab fa-linkedin-in fa-2x"></i>
                            <i className="fab fa-pinterest-p fa-2x"></i>
                        </div> */}

                        </div>
                    </div>

                </div>
            </footer>






        </div>
    )
}

export default Home1
