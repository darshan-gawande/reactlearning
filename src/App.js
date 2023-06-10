import React from "react";
import { ReactDOM } from "react";
import './App.css';

function App() {

   let puppies = [
    {
      name: 'chaow-chaow',
      breed: "Golden Retrival",
      Description: "Looking cute at the begining and sweet with behaviour and very harmless",
      image: "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=8"
    },
    {
      name: "Tommy",
      breed: "Golden Retrival",
      Description: "Looking cute at the begining and moderate harmful and behave like no-one is there",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
    }
   ];

    return (
  <div>
    <h1>Hello Dogggggg</h1>
   <ul>
    {
      puppies.map((puppy, index) => (
       
          <li key={index}>
            <h1> {puppy.name} </h1>
            <img src={puppy.image} alt= {puppy.name} width={"200px"} height={"200px"}  />
          </li>
      ))
    }
   </ul>
  </div>
  )
}

export default App;
