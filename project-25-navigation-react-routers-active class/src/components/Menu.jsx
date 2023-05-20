import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink
        // style={({ isActive }) =>
        //   isActive ? { color: 'red', textDecoration: 'none' } : {}
        // }
        // className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink
        // style={({ isActive }) =>
        //   isActive ? { color: 'red', textDecoration: 'none' } : {}
        // }
        // className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        // style={({ isActive }) =>
        //   isActive ? { color: 'red', textDecoration: 'none' } : {}
        // }
        // className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to="contacts"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;
