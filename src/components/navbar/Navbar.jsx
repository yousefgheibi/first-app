import styled from './navbar.module.css';

function Navbar(props) {

    return (
      <div className={styled.header}>
      <div className="container d-flex align-items-center">
        <h3>{props.title}</h3>
        <ul>
          <li>لیست مقالات</li>
          <li>ساخت مقاله</li>
          <li>درباره</li>
        </ul>
      </div>
      </div>
    )
  }

  export default Navbar;