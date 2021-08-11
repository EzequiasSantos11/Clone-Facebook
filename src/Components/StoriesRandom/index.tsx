import React from 'react';
import { StyleStoreisRandom } from './style';
const StoriesRandom: React.FC =()=>{
 return(
  <StyleStoreisRandom>
   <div className="RandomStories">
    <img src="/assets/kiba.jfif" alt="user" id="user" />
    <img src="/assets/kiba.jfif" alt="storie" className="background-storie" />
    <h1>Name User</h1>
   </div>  
  </StyleStoreisRandom>
 );
}

export default StoriesRandom;