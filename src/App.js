import React from "react";
import './App.css';

function App() {

   let puppies = [
    {
      name: 'chaow-chaow',
      breed: "Golden Retrival",
      Description: "Looking cute at the begining and sweet with behaviour and very harmless",
      image: "https://photos.app.goo.gl/3d4o5rgEtKzVfAzg8."
    },
    {
      name: "Tommy",
      breed: "Golden Retrival",
      Description: "Looking cute at the begining and moderate harmful and behave like no-one is there",
      image: "https://photos.google.com/photo/AF1QipPr2DoJgmQp-lCvv9321DwLaujhLF0XobcYngcg"
    },
   ];

    return (
  <div>
    <h1>Hello Dogg</h1>
   <ul>
    {
      puppies.map((puppy, index) => (
       
          <li key={index}>
            <h1> {puppy.name} </h1>
            <img src={puppy.image} alt= {puppy.name} width="200px" height="200px" />
          </li>
      ))
    }
   </ul>
  </div>
  )
}

export default App;
