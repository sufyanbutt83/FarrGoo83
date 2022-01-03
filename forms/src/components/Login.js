import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { Navbar, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './login-.css';


const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const loginUser = async (e) => {
		e.preventDefault();
		const res = await fetch('/login', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			credentials: 'include',
			body: JSON.stringify({
				email, password
			})
		});

		const data = await res.json();
		console.log(data);

		if (res.status === 400 || !data) {
		  console.log("Invalid Credentials");
		}
		else {
			console.log("login SuccessFully");
			navigate('/');
		}
	}



	return (
		<div className="hub">
			<section id="form-3">
				<div className="container ">
					<div className="row login-row">

						<div className="col-md-6 col-sm-12 pic-sec">

						</div>
						<div className="col-md-6 col-sm-12 col-login-2">
							<img src="./farrgo-removebg-preview.png" width="200px" alt="" />
							<h4>Log in</h4>

							<form method="POST">

								<div className="form-group">
									<label for="Email">Email</label>
									<input type="email" name="email" id="email" className="form-control"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="email"
										required></input>
								</div>
								<div className="form-group">
									<label for="password">Password</label>
									<input type="password" name="password" id="password" className="form-control"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										placeholder="password"
										required></input>
								</div>
								<div className="feilds">
									<div className="form-group">
										<input type="submit" value="Login"
											onClick={loginUser}
											className="btn float-right login_btn"></input>
									</div>
								</div>
								<div className="card-footer">
									<div className="d-flex justify-content-center links">
										Don't have an account?<Link to="/SignUp">Sign Up</Link>
									</div>
									<div className="d-flex justify-content-center">
										<a href="#">Forgot your password?</a>
									</div>
								</div>

							</form>

						</div>
					</div>
				</div>
			</section>

		</div>
	)
}

export default Login
