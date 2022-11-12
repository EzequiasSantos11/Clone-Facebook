import styled from 'styled-components';


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: 5rem;
  z-index: 9999;
  background-color: white;
  padding: 0 40px;
  position: fixed;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  top: 0;
  .fa-facebook{
    font-size: 2.8rem;
    cursor: pointer;
    color: blue;
  }
  .center{
    display: flex;
    width: 40%;
    input{
      width: 100%;
      height: 34px;
      border-radius: 8px;
      border: 1px solid #999;
    }
  }
  .dir i{
    font-size: 1.2rem;
    padding: 10px;
    background-color:rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    cursor: pointer;
  }
 
`;