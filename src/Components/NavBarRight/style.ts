import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 20rem;
  height: 100vh;
  overflow: hidden;
  transition: all 1s;
  position: fixed;
  background: rgba(0,0,0,0.1);
  right: 0;
  .wrraper{
    display: flex;
    height: 100%;
    flex-direction: column;
    overflow: auto;
    transition: all .5s;
    padding-top: 2rem;
    flex-shrink: 0;
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
    .head-patrocinio{
      font-size: 1.5rem;
      font-weight: 600;
      width: 80%;
      margin: 1rem auto;
      color: gray;
    }
   
    .patrocinio{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      margin: 6px auto;
      padding: 5px;
      border-radius: 20px;
      flex-shrink: 0;

      .patrocinio-text{
        h2{
          font-size: 20px;
          margin-bottom: 8px;
        }
        p{
          font-size: 14px;
          width: 70%;
        }
      }
      img{
        height: 80px;
        width: 80px;
        margin-right: 10px;
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
    ::-webkit-scrollbar{
      background: rgba(0, 0, 0, 0.1);
    }
    ::-webkit-scrollbar-thumb{
      background: rgba(0, 0, 0, 0.3);
    }
  }
  .cabecalho{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 260px;
    width: 70%;
    margin: 0 auto;
    border-radius: 10px;
    background: white;
    position: relative;
    flex-shrink: 0;

    .fa-times-circle{
      position: absolute;
      right: -10px;
      top: -15px;
      font-size: 2rem;
    }
    .int{
      display: flex;
      margin: 0;
      padding: 0 ;
      width: 100%;
      img{
        height: 40px;
        width: 40px;
        margin: 10px;
        border-radius: 50%;
      }
    }
    :hover{
      cursor: pointer;
      background: rgba(999, 999, 999, 0.8);
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
    flex-shrink: 0;

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
    flex-shrink: 0;

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
    flex-shrink: 0;

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
