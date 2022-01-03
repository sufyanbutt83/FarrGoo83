import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import { keys } from "@material-ui/core/styles/createBreakpoints";
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import HomePage from "./home";
import "./search.css"

const Ads = () => {
    const navigate = useNavigate();
    const [ads, getAds] = useState([]);
    const [search, setSearch] = useState('');
    const [searcha, setSearcha] = useState('');

    const getUser = async () => {
        try {
            const response = await fetch('/rideDetails', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            getAds(await response.json());

            const data = response.body;
            console.log("=============ads");
            console.log(data);

            if (response.status !== 200) {
                const error = new Error(response.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            navigate('/login');
        }
    }
    useEffect(() => {
        getUser();
    }, []);
    return (
        <div>
            <HomePage />
            <div className="search">
            <div className="searchbar">
                <input type="text" placeholder="Departure"
                    onChange={event => { setSearch(event.target.value) }}
                />
            
                <input type="text" placeholder="Destination"
                    onChange={event => { setSearcha(event.target.value) }}
                />
            </div>
            </div>


            <div className=" mt-5 ">
                <div className="row text-center">
                    {ads.filter((val) => {
                        if (search === "" && searcha === "") {
                            return val;
                        }
                        else if (val.departure.toLowerCase().includes(search.toLowerCase()) && val.destination.toLowerCase().includes(searcha.toLowerCase())) {
                            return val;
                        }
                    }).map((element) => {
                        return (
                            <div key={element.id}>
                                <div className="card p-3">
                                    <div className="ml-3 w-100">
                                        <h3 className="mb-0 mt-0 ">{element.userName.toUpperCase()}</h3>
                                        <div className="back">
                                            <section class="services" id="services">
                                                <div className="box row ">
                                                    <div className="col-md-4 ">
                                                        <h5>Departure:<span>{element.departure}</span></h5>
                                                        <h5>Destination:<span>{element.destination}</span></h5>
                                                        <h5>Arrival Date:<span>{element.date}</span></h5>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h5>Contact Number : <span>{element.number}</span></h5>
                                                        <h5>MeetupPoint :<span>{element.meetupPoint}</span></h5>
                                                        <h5>Registration: <span>{element.registration}</span></h5>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h5>MeetingTime : <span>{element.time}</span></h5>
                                                        <h5>Charges : <span>{element.charges}</span></h5>
                                                        {/* <h5>Destination : <span>{d.destination}</span></h5> */}
                                                    </div>
                                                    <div className="button mt-2 d-flex flex-row align-items-center"><button className="btn btn-sm btn-success w-100 ml-3">Request</button> </div>


                                                </div>

                                            </section>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })

                    }

                </div>
            </div>
        </div>
    );
}
export default Ads;