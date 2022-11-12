import { Container } from './style';


export function NavBarLeft() {
  return (
    <Container>
      <div className="wrraper">
        <div className="cabecalho">
          <img src="/assets/kiba.jfif" alt="userPhoto" className="userPhoto" />
          <h1>Nome do usuário</h1>
        </div>
        <div className="option">
          <i className="fas fa-user-friends"></i>
          <h2>Seus Amigos</h2>
        </div>
        <div className="option">
          <i className="fas fa-users"></i>
          <h2>Seus Grupos</h2>
        </div>
        <div className="option">
          <i className="fas fa-store-alt"></i>
          <h2>Marketpleace</h2>
        </div>
        <div className="option">
          <i className="fas fa-tv"></i>
          <h2>Watch</h2>
        </div>
        <div className="option">
          <i className="fas fa-calendar-check"></i>
          <h2>Eventos</h2>
        </div>
        <div className="option">
          <i className="fas fa-history"></i>
          <h2>Lembranças</h2>
        </div>
        <div className="option">
          <i className="fas fa-sort-down"></i>
          <h2>Ver Mais</h2>
        </div>
        <span className="separator"></span>

        <div className="cabecalho atalho">
          <h1>Seus atalhos</h1>
          <a href="#">Editar</a>
        </div>
        <div className="option">
          <img src="/assets/kiba.jfif" alt="atalho" className="userPhoto" />
          <h2>Grupo</h2>
        </div>
        <div className="option">
          <img src="/assets/kiba.jfif" alt="atalho" className="userPhoto" />
          <h2>Página</h2>
        </div><div className="option">
          <img src="/assets/kiba.jfif" alt="atalho" className="userPhoto" />
          <h2>Grupo</h2>
        </div>
        <footer>
          Ezequias Santos<br />
          Front-end Developer<br />
          Facebook-Clone<br />
        </footer>
      </div>
    </Container>
  );
}
