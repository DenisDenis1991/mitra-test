import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { NavDropdown, Nav, Container } from 'react-bootstrap';
import { AppRoute } from '../../const';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <header
      style={{padding: '20px 0 20px 0'}}
    >
      <Container>
        <div className="mb-2"
          style={{display: 'flex', justifyContent: 'right'}}
        >
          <DropdownButton
            as={ButtonGroup}
            key={'start'}
            id={`dropdown-button-drop-start`}
            drop={'start'}
            variant="secondary"
            title={`Menu`}
          >
            <LinkContainer to={AppRoute.AboutMe}>
              <NavDropdown.Item eventKey="4.1">Обо мне</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to={AppRoute.Posts}>
              <NavDropdown.Item to={AppRoute.Posts} eventKey="4.2">Посты</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item eventKey="4.3" className="d-flex align-items-center gap-23">
              <svg className="me-10" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z" fill="#000" fillOpacity=".4"/>
              </svg>
              <Nav.Link href="mailto: i.denisdenis1991@gmail.com">i.denisdenis1991@gmail</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4"><h2>Машутинский Денис</h2></NavDropdown.Item> 
          </DropdownButton>
        </div>
      </Container>
    </header>
  );
}

export default Header;