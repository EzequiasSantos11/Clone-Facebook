import React from 'react';
import { StyleNavBarRight } from './style';
import ReactPlayer from 'react-player'

const NavBarRight: React.FC = () => {

 return (
  <StyleNavBarRight>
   <div className="wrraper">
    <div className="cabecalho">
     <i className="fas fa-times-circle" />
     <div className="int">
      <img src="/assets/kiba.jfif" alt="userPhoto" />
      <h1>Informações de perfil</h1>
     </div>
     <ReactPlayer
      loop={true}
      width="90%"
      height="200px"
      url='https://youtu.be/_ZCw58xDcFo' />
     <h1>Nome do usuário</h1>
    </div>
    <span className="separator"></span>
    <p className="head-patrocinio">Patrocinio</p>
     <div className="patrocinio">
      <img src="/assets/kiba.jfif" alt="atalho" />
      <div className="patrocinio-text">
       <h2>Nome da empresa</h2>
       <p>descrição da empresa, descrição basica</p>
      </div>
     </div>
     <div className="patrocinio">
      <img src="/assets/kiba.jfif" alt="atalho" />
      <div className="patrocinio-text">
       <h2>Nome da empresa</h2>
       <p>descrição da empresa, descrição basica</p>
      </div>
     </div>
     <span className="separator"></span>
    <div className="opitions">
     <div className="option">
      <img src="/assets/kiba.jfif" alt="atalho" className="userPhoto" />
      <h2>Grupo</h2>
     </div>
     <div className="option">
      <img src="/assets/kiba.jfif" alt="atalho" className="userPhoto" />
      <h2>Grupo</h2>
     </div>
     <div className="option">
      <img src="/assets/kiba.jfif" alt="atalho" className="userPhoto" />
      <h2>Grupo</h2>
     </div>
     <div className="option">
      <img src="/assets/kiba.jfif" alt="atalho" className="userPhoto" />
      <h2>Grupo</h2>
     </div>
     <div className="option">
      <img src="/assets/kiba.jfif" alt="atalho" className="userPhoto" />
      <h2>Grupo</h2>
     </div>
    </div>
   </div>

  </StyleNavBarRight>
 );
}
export default NavBarRight;