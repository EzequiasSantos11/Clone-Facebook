import styled from 'styled-components';

export const StyleNavBarRight = styled.div`
 position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 998;
  top: 0;
  right: 5px;
  padding-top: 4rem;
  width: 20rem;
  height: 100vh;
  overflow: hidden;
  transition: all 1s;
  .wrraper{
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 2rem 20px 0 0;
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
    .head-patrocinio{
      font-size: 1.5rem;
      font-weight: 600;
      margin: 1rem 0;
      color: gray;
    }
    .patrocinio{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 6px 0;
      padding: 5px;
      border-radius: 20px;
      .patrocinio-text{
        font-size: 1rem;
      }
      img{
        height: 120px;
        width: 120px;
        margin-right: 15px;
        border-radius: 10px;
      }
      :hover{
        cursor: pointer;
        background: rgba(999, 999, 999,0.3);
      }
    }

  }
  :hover .wrraper{
    overflow-y: visible;
    transition: all 1s;
  }
  .cabecalho{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 360px;
    width: 270px;
    margin: 0 10px;
    padding: 10px 15px;
    border-radius: 25px;
    background: white;
    position: relative;
    .fa-times-circle{
      position: absolute;
      right: 10px;
      top: -15px;
      font-size: 2rem;
    }
    .int{
      display: flex;
      margin: 0;
      padding: 0 ;
      width: 100%;
      img{
        height: 50px;
        width: 50px;
        margin: 10px;
        border-radius: 50%;
      }
    }
    :hover{
      cursor: pointer;
      background: rgba(999, 999, 999, 0.8);
    }

    h1{
      font-size: 1.4rem;
      margin: 1rem 0;
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
