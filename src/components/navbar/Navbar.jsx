import styled from './navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar(props) {

    return (
      <div className={styled.header}>
      <div className="container d-flex align-items-center">
        <h3>{props.title}</h3>
        <ul>
          <li><Link to="/">لیست مقالات</Link></li>
          <li><Link to="/about-us">درباره</Link></li>
        </ul>
      </div>
      </div>
    )
  }

  export default Navbar;