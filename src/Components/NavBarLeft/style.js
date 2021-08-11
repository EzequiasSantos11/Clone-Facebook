import styled from 'styled-components';

export const StyleNavBarLeft = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 998;
  top: 0;
  left:0;
  padding-top: 4rem;
  width: 20rem;
  height: 100vh;
  overflow: hidden;
  .wrraper{
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all .5s;
    .separator{
      display: flex;
      content: "";
      height: 40px;
      width: 80%;
      color: black;
      background-color: black;
      margin: 10px auto;
      border: 1px solid;
      opacity: 0.3;
    }
    ::-webkit-scrollbar{
      position: absolute;
      background-color: rgba(0, 0, 0,0.1);
      top: 0;
      width: 14px;
    }
    ::-webkit-scrollbar-thumb{
      background: rgba(0,0,0,0.3);
      border-radius: 20px;
      width: 50%;
      height: 20px;
    }
    -webkit-font-smoothing: antialiased;
    overscroll-behavior-y: none;
  }
  .cabecalho{
    display: flex;
    align-items: center;
    padding: 15px 0;
    padding-left: 10px;
    margin-top: 10px;
    margin-left: 15px;
    width: 100%;
    border-radius: 25px;
    :hover{
      cursor: pointer;
      background: rgba(0, 0, 0, 0.1);
    }
    
    h1{
      font-size: 1.4rem;
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
    height: 80px;
    margin-left: 15px;
    padding: 30px 0;
    padding-left: 10px;
    height: 40px;
    width: 100%;
    border-radius: 25px;
    i{
      font-size: 1.5rem;
      margin-right: 20px;
    }
    
    :hover{
      cursor: pointer;
      background: rgba(0, 0, 0, 0.1);
    }
    h1{
      font-size: 1.4rem;
    }
  }
  :hover .wrraper{
    overflow-y: visible;
    transition: all .5s;
  }
  .userPhoto{
    height: 40px;
    width: 40px;
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
`;
