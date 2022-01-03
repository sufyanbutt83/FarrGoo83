import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from "./home"
import axios from "axios"
//import { keys } from "@material-ui/core/styles/createBreakpoints";

import "./service.css"
const MyRide = () => {
    const navigate = useNavigate();
    const [ads, getAds] = useState([]);
    // const [search, setSearch] = useState('');
    // const [searcha, setSearcha] = useState('');
    const getUser = async () => {
        try {
            const response = await fetch('/myRide', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });


            const data = await response.json();
            console.log("=============ads");
            console.log(data);
            getAds(data);

            if (!response.status === 200) {
                const error = new Error(response.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            navigate('/login');
        }
    }

    const deleteRide = async (id) => {
        axios.delete(`/delete/${id}`).then(() => {
            getUser(
                ads.filter((item) => {
                    return item._id !== id;
                })
            )
        })

    }

    useEffect(() => {
        getUser();
        deleteRide();
    },[]);


    return (
        <div className="App">
            <HomePage />
            <h1>Your Posted Flights</h1>
            {ads.map((item) =>
                <div key={item.id}>
                    <div className=" card p-2">
                        {/* <div className="d-flex align-items-center"> */}
                        {/* <div className="ml-3 w-100"> */}
                        {/* <h4 className=" btn-success mb-0 mt-0">{item.loginName}</h4> */}
                        <div>{item.detials.map((d) =>

                            <div className="back">
                                <section class="services" id="services">
                                    <div className="box row">
                                        <div className="col-md-4">
                                            <h5>Departure:<span>{d.departure}</span></h5>
                                            <h5>Destination:<span>{d.destination}</span></h5>
                                            <h5>Arrival Date:<span>{d.date}</span></h5>
                                        </div>
                                        <div className="col-md-4">
                                            <h5>Contact Number : <span>{d.number}</span></h5>
                                            <h5>MeetupPoint :<span>{d.meetupPoint}</span></h5>
                                            <h5>Registration: <span>{d.registration}</span></h5>
                                        </div>
                                        <div className="col-md-4">
                                            <h5>MeetingTime : <span>{d.time}</span></h5>
                                            <h5>Charges : <span>{d.charges}</span></h5>
                                            {/* <h5>Destination : <span>{d.destination}</span></h5> */}
                                        </div>
                                        <div className="button align-items-center"><button className="btn btn-sm btn-success w-100 ml-2"
                                            onClick={() => {
                                                deleteRide(item._id);
                                            }}
                                             >Delete</button> </div>




                                    </div>


                                </section>

                            </div>

                        )}</div>


                        {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            )}
        </div>
    )
}
export default MyRide;