import React from 'react';
import { StyleHome } from './styles';
import NewPosters from '../../Components/Posters';
import Stories from '../../Components/Stories';
import PosterRandom from '../../Components/Posters/PosterRandom';

const Home: React.FC =()=>{
 return(
  <StyleHome>
   <div className="wrraper">
    <Stories/>
    <NewPosters/>
    <PosterRandom />
    <PosterRandom/>
    <PosterRandom/>
    <PosterRandom/>
    <PosterRandom/>
    <PosterRandom/>
    <PosterRandom/>
    <PosterRandom/>
   </div>
  </StyleHome>
 );
}
export default Home; 