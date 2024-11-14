import { Fragment } from 'react';
import styled from './navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar(props) {

  return (
    <Fragment>
      <div className={styled.header}>
        <div className="container d-flex align-items-center">
          <h3>{props.title}</h3>
          <ul>
          <li><Link to="/create-article">ساخت مقاله</Link></li>
            <li><Link to="/">لیست مقالات</Link></li>
            <li><Link to="/about-us">درباره ما</Link></li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar;