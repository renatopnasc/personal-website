import { Container, Button } from "./styles";

export function Card({ title, description, photo, link }) {
  return (
    <Container>
      <img src={photo} alt="" />
      <div>
        <h1>{title}</h1>

        <p className="projectDescription">{description}</p>

        <p>Website</p>

        <Button href={link} target="_blank">
          view work
        </Button>
      </div>
    </Container>
  );
}
