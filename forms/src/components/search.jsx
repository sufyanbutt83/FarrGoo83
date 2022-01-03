// import React, { useState } from "react";
// import './search.css';
// //import searchResult from "./searchResult";

// const Search =()=>{
//     const [image , setImage] = useState("");
//     const InputEvent = (event) => {
//         const data = event.target.value;
//         console.log(data);
//         setImage(data);
//     };
//     return (
//         <div>
//              <div className="searchbar">
//                  <input type="text" placeholder="Search Anything"
//                  value={image}
//                  onChange={InputEvent}
//                   />
//                  </div>  
                 
//                 {image === "" ? null : <img src={image} alt =" Images" name={image}/>}
                 
//         </div>
//     );
// }

// export default Search;