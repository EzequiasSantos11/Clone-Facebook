import styled from 'styled-components';

export const StylePosterRandom = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 100%;
 min-height: 600px;
 width: 100%;
 max-width: 600px;
 margin: 0 auto;
 margin-top: 40px;
 border-radius: 20px;
 box-shadow: 0 0  1px  2px rgba( 0, 0, 0, 0.2);
 .fa-thumbs-up{
  color: blue;
 }
 .fa-heart{
  color: red;
 }
 
 .wrraper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  background: white;
  padding: 0;
 }
 .userPhoto{
  height: 55px;
  width: 55px;
  
  border-radius: 50%;
 }
 .cabecalho{
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  position: relative;
  .text-cab{
   h1{
    font-size: 1.5rem;
    margin-bottom: 3px;
   }
   p{font-size: 1rem;}
   margin-left: 20px;
  }
  .fa-globe-americas{
   opacity: 0.7;
  }
  .fa-ellipsis-h{
   position: absolute;
   right: 40px;
   font-size: 1.5rem;
   padding: 3px;
   border-radius: 50%;
   :hover{
    background: rgba( 0, 0, 0, 0.2);
    cursor: pointer;
   }
  }

 }
 .fotoPostada{
  width: 100%;
 }
 .separator{
  display: flex;
  content: "";
  height: 2px;
  width: 100%;
  color: black;
  background-color: black;
  margin: 0 auto;
  margin-bottom: 3px;
  border: 1px solid;
  opacity: 0.3;
 }
 .infoCurt{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  padding: 0 20px;
  .esq{
   display: flex;
   align-items: center;
   i{
    font-size: 1.3rem;
    margin: 0 3px;
   }
   span{
    font-size: 1.3rem;
    margin-right: 5px;
   }
  }
  .dir{
   display: flex;
   margin: 0;
   span{
    font-size: 1.3rem;
    line-height: 1.5rem;
    margin-left: 5px;
   }
  }
  
  }
  .curti{
   display: flex;
   align-items: center;
   justify-content: space-around;
   height: 100%;
   width: 99%;
   i{
    margin-right: 10px;
   }
   button{
    font-size: 1.4rem;
    height: 60px;
    width: 100%;
    margin: 10px auto;
    border: none;
    background: transparent;
    border-radius: 20px;
    :hover{
     cursor: pointer;
     background: rgba( 0, 0, 0, 0.2);
    }
   }
  }
 }
`;
