import React, { useState } from "react"
import { useNavigate,Link } from 'react-router-dom';


import './login-.css';


const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "", email: "", password: "", cpassword: ""
  });
  let name, value;


  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })
  }
  const PostData = async (e) => {
    e.preventDefault();
    const { username, email, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password, cpassword })
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("invalid Registration");
      console.log("Invalid Registration");

    } else {
      window.alert("Registration Successfull");
      console.log("Registration successfull");
      navigate('/login');

    }
  }
  return (
    <div className="hub">
      <section id="form-3" >
        <div className="container">
          <div className=" row signuprow">

            <div className="col-md-7 pic-sec">

            </div>
            <div className="col-md-5 col-sm-12 col-sign-2">
              <img src="./farrgo-removebg-preview.png" width="200px" alt="" />

              <h4>Sign up</h4>
              <form method="POST">
                <div className="form-group">
                  <label for="Name">Name</label>
                  <input type="text" name="username" id="name" className="form-control" placeholder="username"
                    value={user.username}
                    onChange={handleInputs}>
                  </input>
                </div>
                <div className="form-group">
                  <label for="Email">Email</label>
                  <input type="email" name="email" id="email" className="form-control"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="email"></input>
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input type="password" name="password" id="password" className="form-control"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="password"></input>
                </div>
                <div className="form-group">
                  <label for="confirm-password">confirm Password</label>
                  <input type="password" name="cpassword" id="cpassword" className="form-control"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder=" Comfirm password"></input>
                </div>


                <div className="feilds">
                  <div className="form-group">
                    <input type="submit" name="signUp" id="signUp" value="SignUp"
                      onClick={PostData} className="btn float-right login_btn"></input>
                  </div>
                </div>

                <div className="card-footer">
									<div className="d-flex justify-content-center links">
										Already have an account?<Link to="/login">Log in</Link>
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

export default Signup
