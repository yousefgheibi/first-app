import styled from './navbar.module.css';

function Navbar() {

  let title ="وبلاگ"


    return (
      <div className={styled.header}>
        <h3>{title}</h3>
        <ul>
          <li>لیست مقالات</li>
          <li>ساخت مقاله</li>
          <li>درباره</li>
        </ul>
      </div>
    )
  }

  export default Navbar;