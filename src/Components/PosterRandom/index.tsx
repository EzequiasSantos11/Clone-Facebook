import { Container } from './style';

export function PosterRandom() {
  return (
    <Container>
      <div className="wrraper">
        <div className="cabecalho">
          <img src="/assets/kiba.jfif" alt="userPhoto" className="userPhoto" />
          <div className="text-cab">
            <h1>Nome Usuário</h1>
            <p>4 h. <i className="fas fa-globe-americas"></i></p>

          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <img src="/assets/kibaPoster.jpg" alt="fotoPostada" className="fotoPostada" />
        <span className="separator"></span>
        <div className="infoCurt">
          <div className="esq">
            <i className="fas fa-thumbs-up"></i>
            <i className="fas fa-heart"></i>
            <span>100 k</span>
          </div>
          <div className="dir">
            <span>300 Comentários</span>
            <span>500 Compartilhamentos</span>
          </div>
        </div>
        <span className="separator"></span>
        <div className="curti">
          <button>
            <i className="fas fa-thumbs-up"></i>
            Curtir
          </button>
          <button>
            <i className="far fa-comment-alt"></i>
            Comentar
          </button>
          <button>
            <i className="far fa-share-square"></i>
            Compartilhar
          </button>
        </div>
      </div>
    </Container>
  );
}