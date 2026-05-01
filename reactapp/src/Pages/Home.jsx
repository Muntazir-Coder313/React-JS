import React from 'react'

import Hunza from "../Img/Hunza.jpg";
import Skardu from "../Img/Skardu.jpg";
import Naran from "../Img/Naran.jpg";
import Swat from "../Img/Swat.jpg";
import Murree from "../Img/Murree.jpg";
import Fairy from "../Img/Fairy Meadows.jpg";
import Neelum from "../Img/Neelum Valley.jpg";
import Gwadar from "../Img/Gwadar.jpg";
// import About from './About';
import Cards from '../Practice/Cards';

const Home = () => {
  const tours = [
    { id: 1, title: "Hunza Valley", image: Hunza, location: "Gilgit Baltistan" },
    { id: 2, title: "Skardu", image: Skardu, location: "Baltistan" },
    { id: 3, title: "Naran Kaghan", image: Naran, location: "KPK" },
    { id: 4, title: "Swat Valley", image: Swat, location: "KPK" },
    { id: 5, title: "Murree", image: Murree, location: "Punjab" },
    { id: 6, title: "Fairy Meadows", image: Fairy, location: "GB" },
    { id: 7, title: "Neelum Valley", image: Neelum, location: "AJK" },
    { id: 8, title: "Gwadar", image: Gwadar, location: "Balochistan" },
  ];

  return (
    <>
    {/* <About data={C}/> */}
    <Cards data={tours}/>
    </>
  );
};  

export default Home