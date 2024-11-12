import styled from './navbar.module.css';

function Navbar() {
    return (
      <div className={styled.header}>
        <ul>
          <li>لیست مقالات</li>
          <li>ساخت مقاله</li>
          <li>درباره</li>
        </ul>
      </div>
    )
  }

  export default Navbar;