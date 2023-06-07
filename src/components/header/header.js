// import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { NavDropdown } from 'react-bootstrap';
import { AppRoute } from '../../const';

function Header() {
  return (
    <header>
      <div className="mb-2">
            <DropdownButton
              as={ButtonGroup}
              key={'start'}
              id={`dropdown-button-drop-start`}
              drop={'start'}
              variant="secondary"
              title={`Menu`}           
            >

        <NavDropdown.Item href={AppRoute.Posts} eventKey="4.1">Посты</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </DropdownButton>
            

      </div>
    </header>
  );
}

export default Header;