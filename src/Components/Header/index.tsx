import React from 'react';
import { StyleHeader } from './style';

const Header: React.FC=()=>{
 var icon = window.document.querySelector(".cent .fas");
 console.log(icon)

 return(
  <StyleHeader>
   <div className="sque">
    <i className="fab fa-facebook"></i>
    <i className="fas fa-search"/>
   </div>
   <div className="cent">
    <i className="fas fa-home"/>
    <i className="fas fa-tv"/>
    <i className="fas fa-users"/>
    <i className="fas fa-headset"/>
   </div>
   <div className="dir">
    <i className="fas fa-th"/>
    <i className="fab fa-facebook-messenger"/>
    <i className="fas fa-bell"/>
    <i className="fas fa-sort-down"/>
   </div>
  </StyleHeader>
 );
}
export default Header;