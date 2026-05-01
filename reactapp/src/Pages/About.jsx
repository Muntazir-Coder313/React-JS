import React from 'react'
import Cards from '../Practice/Cards'

import Hunza from "../Img/Hunza.jpg";
import Skardu from "../Img/Skardu.jpg";
import Naran from "../Img/Naran.jpg";
import Swat from "../Img/Swat.jpg";
import Murree from "../Img/Murree.jpg";
import Fairy from "../Img/Fairy Meadows.jpg";
import Neelum from "../Img/Neelum Valley.jpg";
import Gwadar from "../Img/Gwadar.jpg";

import Watch from "../Img/Watch.jpg";
import Shoes from "../Img/Shoes.jpg";
import Mobile from "../Img/Mobile.jpg";
import Laptop from "../Img/Laptop.jpg";
import Car from "../Img/Car.jpg";
import Bike from "../Img/Bike.jpg";
import Computer from "../Img/Computer.jpg";
import Ipad from "../Img/Ipad.jpg";



function About() {
    const datas = [
          { id: 1, title: "Watch ", image: Watch, location: "Kuwait" },
          { id: 2, title: "Shoes", image: Shoes, location: "Canada" },
          { id: 3, title: "Mobile", image: Mobile, location: "Europe" },
          { id: 4, title: "Laptop", image: Laptop, location: "USA" },
          { id: 5, title: "Car", image: Car, location: "UK" },
          { id: 6, title: "Bike", image: Bike, location: "Korea" },
          { id: 7, title: "Computer", image: Computer, location: "China" },
          { id: 8, title: "Ipad", image: Ipad, location: "Japnan" },
    ];  
  return (
    <>
    <Cards data={datas}/>
    </>
  )
}

export default About