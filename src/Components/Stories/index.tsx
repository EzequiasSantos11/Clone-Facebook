import { ContainerStories } from './style';
import { StoriesRandom } from '../StoriesRandom';

export function Stories(){
 return(
  <ContainerStories>
   <div className="addStorie">
    <img src="/assets/kiba.jfif" alt="photoPerfil"/>
    <span>+</span>
    <h1>Criar Storie</h1>
   </div>
   <div className="more-stories">
    <i className="fas fa-arrow-circle-right"/>
   </div>
   <StoriesRandom/>
   <StoriesRandom/>
   <StoriesRandom/>
  </ContainerStories>
 );
}