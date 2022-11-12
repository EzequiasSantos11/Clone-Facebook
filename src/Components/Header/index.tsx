import { Container } from './style';

export function Header (){

 return(
  <Container>
   <div className="sque">
    <i className="fab fa-facebook"></i>
   </div>
   <div className="center">
    <input type="search" name="search" id="" />
   </div>
   <div className="dir">
    <i className="fas fa-th"/>
    <i className="fab fa-facebook-messenger"/>
    <i className="fas fa-bell"/>
    <i className="fas fa-sort-down"/>
   </div>
  </Container>
 );
}