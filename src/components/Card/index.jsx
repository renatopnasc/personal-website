import { Container, Button } from "./styles";

export function Card() {
  return (
    <Container>
      <img src="src/assets/images/projectImg.png" alt="" />
      <div>
        <h1>Real estate Template</h1>

        <p className="projectDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <span>Ultrices lorem non feugiat egestas amet.</span>
        </p>

        <p>Website</p>

        <Button>view work</Button>
      </div>
    </Container>
  );
}
