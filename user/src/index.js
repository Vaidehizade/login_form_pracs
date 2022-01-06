import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import BasicForm from "./BasicForm"
// function Greeting(){

//   return (
//     <div>
//       <Name/>
//      {/* <Email/>
//      <Password/> */}
//      <Submit/>
//     </div>

//   )
// }

// const Name = () =>{
//   return (<h3><ul>Username:</ul>
//      <ul>Email-id:</ul>
//      <ul>Password:</ul>
//   </h3>);
// }

// // const Email = () =>
// // {
// //   return (<h3><li><ul></ul>Email-id</li></h3>);
// // }

// // const Password = () =>
// // {
// //   return (<h3><li><ul>Password</ul></li></h3>);
// // }

// const Submit = () =>{
  
//   return(
//     <button onClick={Greeting}>Submit</button>
//   )
// }

// function Booklist() {

//   return(
//      <section>
//        <Book/>
//      </section>
//   )
// }

// const Book = () =>{

//   return (
//      <>
//     <img src="https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UL320_.jpg" alt="The Alchemist"></img>
//     <h2>The Alchemist</h2>
//     <h4>Paulo Coelho</h4>
//     </>

//   )
// }


ReactDOM.render(<BasicForm/>,document.getElementById('root'))
