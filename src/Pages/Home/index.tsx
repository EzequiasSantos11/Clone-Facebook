import React from 'react';
import { Container } from "../../styles/HomeStyles";
import { NewPosters } from '../../Components/NewPosters';
import { Stories } from '../../Components/Stories';
import { PosterRandom } from '../../Components/PosterRandom';
import { Header } from '../../Components/Header';
import { NavBarRight } from '../../Components/NavBarRight';
import { NavBarLeft } from '../../Components/NavBarLeft';

export default function Home(){
 return(
  <Container>
    <Header/>
    <NavBarRight/>
    <NavBarLeft/>
    <div className="wrapper">
      <Stories/>
      <NewPosters/>
      <PosterRandom />
      <PosterRandom/>
    </div>
  </Container>
 );
}