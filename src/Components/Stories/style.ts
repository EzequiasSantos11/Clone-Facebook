import styled from 'styled-components';


export const ContainerStories = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 15rem;
  width: 100%;
  max-width: 650px;
  border: none;
  position: relative;
  margin: 40px 0;
  .addStorie{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100%;
    border-radius: 20px;
    position: relative;
    background: white;
    cursor: pointer;
    box-shadow: 0 0 3px 5px rgba(0, 0, 0, 0.2);
    &:hover{
      background: rgba(0, 0, 0, 0.1);
    }
  }
 .addStorie:hover img{
    transform: scale(1.01);
  }
 .addStorie img{
    position: absolute;
    top: 0;
    margin-bottom: 10px;
    height: 70%;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
 
  span{
    position: absolute;
    bottom: 2.5rem;
    font-size: 2rem;
    font-weight: 600;
    color: white;
    width: 30%;
    padding: 5px;
    background-color: blue;
    border: 5px solid white;
    border-radius: 60%;
  }
  h1{
    font-size: 1.3rem;
    margin: 0 5px;
    position: absolute;
    bottom: 0.9rem;
  }
  .more-stories{
    position: absolute;
    right: -10px;
    z-index: 998;
    background: black;
    border-radius: 50%;
    cursor: pointer;
  }
  .fa-arrow-circle-right{
    font-size: 3rem;
    color: white;
  }
`;