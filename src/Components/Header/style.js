import styled from 'styled-components';


export const StyleHeader = styled.header`
 position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 100%;
  background-color: white;
  height: 4rem;
  .sque{
    display: flex;
    align-items: center;
  }
  .fa-facebook{
  font-size: 2.8rem;
  margin-right: 1rem;
  margin-left: 20px;
  cursor: pointer;
  color: blue;
 }
 .fa-search{
  font-size: 1.6rem;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
 }
 .cent i{
  font-size: 2rem;
  margin: 0;
  padding: 10px 30px;
  border-radius: 15px;
 }
 .cent i:hover{
  cursor: pointer;
  background-color:rgba(0, 0, 0, 0.1);
 }
 .cent i .active{
   background-color: blue;
 }
 .dir i{
  font-size: 1.2rem;
  margin: 0 10px;
  padding: 10px;
  background-color:rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  cursor: pointer;
 }
 .dir{
  margin-right: 10px;
 }
 
`;