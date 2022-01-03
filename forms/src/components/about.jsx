import {useEffect,useState} from "react";


const About = () => {
   const [userData , setUserData] = useState({});
   const callAboutUs = async () => {
    const response = await fetch('/home');
    console.log("----------------------about us ");
    const data = await response.json();
    console.log(data);
    setUserData(data);
    
    
 }
 useEffect(() =>{
     callAboutUs();
 },[]);
  
    return(
        <div>
           <h1>Hello{userData.name}</h1> 
        </div>
    );
}

export default About;