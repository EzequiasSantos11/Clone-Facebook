import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  background: black;
  border-radius: 20px;
  position: relative;

  .RandomStories{
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    cursor: pointer;
  }
  .RandomStories:hover .background-storie{
    transform: scale(1.01);
    opacity: 0.7;
  }
  #user{
    position: absolute;
    margin: 10px;
    height: 54px;
    width: 54px;
    padding: 5px;
    border-radius: 50%;
    background: blue;
    z-index: 2;
  }
  h1{
    font-size: 1.5rem;
    color: white;
    bottom: 2rem;
    z-index: 2;
  }
  .background-storie{
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.8;
    z-index: 1;
    border-radius: 20px;
  }
`;