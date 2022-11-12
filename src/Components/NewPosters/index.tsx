import React from 'react';
import { ContainerPost } from './style';

export function NewPosters(){
 return (
  <ContainerPost>
   <div className="New-post">
    <div className="cabecalho-newPost">
     <img src="/assets/Kiba.jfif" alt="userPotho" />
     <button className="textNew">No que você está pensando?</button>
    </div>
    <span id="separator"></span>
    <div className="options-newPoster">
     <button id="btn-video-life">
      <i className="fas fa-video"></i>
      Vídeo ao vivo
     </button>
     <button id="btn-video-foto">
      <i className="far fa-images"></i>
      Foto/Vídeo
     </button>
     <button id="btn-sent-action">
      <i className="far fa-smile-beam"></i>
      Sentimento/Atividade
     </button>
    </div>
   </div>
    
  </ContainerPost>
 );
}