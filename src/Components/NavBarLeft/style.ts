import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 95vh;
  width: 15rem;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 5rem;
  .wrraper{
    display: flex;
    height: 100%;
    flex-direction: column;
    overflow: auto;
    transition: all .5s;
    flex-shrink: 0;
    ::-webkit-scrollbar{
      position: absolute;
      background-color: transparent;
      top: 0;
      width: 14px;
    }
    ::-webkit-scrollbar-thumb{
      background: transparent;
      border-radius: 20px;
      width: 50%;
      height: 20px;
    }
    -webkit-font-smoothing: antialiased;
    overscroll-behavior-y: none;
    .separator{
      display: flex;
      content: "";
      height: 40px;
      width: 60%;
      color: black;
      background-color: black;
      margin: 10px auto;
      border: 1px solid;
      opacity: 0.3;
    }
    
    .cabecalho{
      display: flex;
      align-items: center;
      padding: 10px;
      padding-left: 10px;
      margin-top: 10px;
      margin-left: 10px;
      width: 90%;
      border-radius: 25px;
      :hover{
        cursor: pointer;
        background: rgba(0, 0, 0, 0.1);
      }
      
      h1{
        font-size: 20px;
      }
    }
    .atalho{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 10px 20px;
      margin: 10px 0;
      h1{
        font-size: 1.6rem;
        opacity: 0.5;
      }
      a{
        font-size: 1.3rem;
        display: none;
      }
      :hover a{
        display: flex;
      }
  
    }
    
    .option{
      display: flex;
      align-items: center;
      height: 40px;
      padding: 10px;
      border-radius: 10px;
      margin: 8px 20px;
      i{
        font-size: 1.2rem;
        margin-right: 15px;
      }
      
      :hover{
        cursor: pointer;
        background: rgba(0, 0, 0, 0.1);
      }
      h2{
        font-size: 1rem;
      }
    }
   
    .userPhoto{
      height: 35px;
      width: 35px;
      margin-right: 10px;
      border-radius: 50%;
    }
    footer{
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      padding: 10px 20px;
      margin: 10px 0;
    }
  }
  :hover .wrraper{
    overflow-y: visible;
    transition: all 1s;
    ::-webkit-scrollbar{
      background: rgba(0, 0, 0, 0.1);
    }
    ::-webkit-scrollbar-thumb{
      background: rgba(0, 0, 0, 0.3);
    }
  }

`;
