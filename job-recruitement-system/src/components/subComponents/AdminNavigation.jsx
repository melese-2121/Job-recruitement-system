import { Container, Navbar, Nav } from "react-bootstrap";

function AdminNavigation() {
  // Styles
  const styles = {
    container: {
      fontSize: "20px",
      marginLeft: "35%",
    },
  };

  return (
    <Container style={styles.container} fluid>
      <Navbar>
        <Nav className="me-auto">
          <Nav.Link href="/admin">Home </Nav.Link>
          <Nav.Link href="/admin/companies/add">Add </Nav.Link>
          <Nav.Link href="/admin/companies/see">See </Nav.Link>
          <Nav.Link href="/admin/companies/req">News</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default AdminNavigation;
