import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <Container fluid="lg">
        <Navbar.Brand href="#">Pokedash</Navbar.Brand>
        <Form className="form-inline">
          <FormControl type="text" placeholder="Search" />
          <Button variant="success">Buscar</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header