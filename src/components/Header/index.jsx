import { Container } from "./styles";
export function Header({ handleScrollElement }) {
  return (
    <Container>
      <h1>Renato.</h1>

      <nav>
        <ul>
          <li>
            <a onClick={() => handleScrollElement("home")}>HOME</a>
          </li>
          <li>
            <a onClick={() => handleScrollElement("projects")}>PROJETOS</a>
          </li>
          <li>
            <a onClick={() => handleScrollElement("about")}>SOBRE</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
