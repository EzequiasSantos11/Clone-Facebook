import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 550px;
  margin-top: 80px;
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

    .userPhoto{
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
    .cabecalho{
      display: flex;
      align-items: center;
      height: 60px;
      width: 100%;
      padding: 20px;
      position: relative;
      .text-cab{
        margin-left: 10px;
        h1{
          font-size: 20px;
          margin-bottom: 3px;
        }
        p{
          font-size: 1rem;
        }
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
      height: 100%;
      object-fit: cover;
    }
    .separator{
     display: flex;
     content: "";
     height: 2px;
     width: 90%;
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
      padding: 0 15px;
      .esq{
        display: flex;
        justify-content: center;
        align-items: center;
        i{
          font-size: 14px;
          margin: 0 3px;
        }
        span{
          font-size: 16px;
        }
      }
      .dir{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        margin: 0;
        span{
          font-size: 14px;
          line-height: 1.5rem;
        }
      } 
      
    }

    .curti{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      width: 100%;
      padding: 0 10px;
      i{
        font-size: 18px;
        margin-right: 5px;
      }
      button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70%;
        width: 50%;
        border: none;
        background: transparent;
        border-radius: 8px;
        font-size: 16px;
        :hover{
          cursor: pointer;
          background: rgba( 0, 0, 0, 0.2);
        }
      }
    }
  }
`;
