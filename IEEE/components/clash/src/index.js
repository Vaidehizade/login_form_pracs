import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import './index.css';
import './Page/Login';


function Bar() {
  return (
    <React.Fragment className="container-fluid bdr">
     <Navb/>
     <Cmt/>
     {/* <Login/> */}
    </React.Fragment>
   )

}

const Navb = () =>{
  return (
    <>
      <div class="container-fluid bdr">PICT IEEE <br></br>Student Branch<i class="fas fa-heart"></i></div>
       <i class="fas fa-heart"></i>
    </>
  )
};


const Cmt = () =>{
return(
  <h1>Welcome!</h1>
  )
}

      


ReactDOM.render(<Bar/>,document.getElementById('root'))

