//rfce
import React, { useState } from "react";
// install "react-router-dom", then
import { Link } from "react-router-dom";

// npm install react-router-dom

function Navbar() {
  // "[]" sets a State
  //   "false" is an initial value
  //   https://youtu.be/I2UBjN5ER4s?t=1116
  const [click, setClick] = useState(false);
  // https://youtu.be/I2UBjN5ER4s?t=1180
  const handleClick =
    //arrow function
    () =>
      setClick(
        // will switch to the opposite e.g. true>false>true
        !click
      );
  //   https://youtu.be/I2UBjN5ER4s?t=1334
  // "setClick" equals to "false"
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* VS Code trick
          Type "Link" then press TAB then, 
          it becomes <Link></Link> */}

          {/* to="/" (PATH"*/}
          <Link to="/" className="navbar-logo">
            WBST
            {/* VS Code trick
          Type "i.fab.fa-typo3" then press TAB then, 
          it becomes "<i className="fab fa-typo3"></i>" */}
            {/* i stands for FontAwesome logo
          "fav fa-typo 3" is a heart logo 
          https://fontawesome.com/v5.15/icons/typo3*/}
            <i className="fab fa-typo3" />
          </Link>
          {/* onClick >>> https://youtu.be/I2UBjN5ER4s?t=1153 */}
          <div className="menu-icon" onClick={handleClick}>
            {/* if you "Click" it, className will be changed to "fas fa-times"
              If you "Click" it once more again,className will be changed to "fas fa-bars"  https://youtu.be/I2UBjN5ER4s?t=1098*/}
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* HOME */}

            <li className="nav-item">
              {/* https://youtu.be/I2UBjN5ER4s?t=1334 */}
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            {/* SERVICES */}

            <li className="nav-item">
              {/* https://youtu.be/I2UBjN5ER4s?t=1334 */}
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            {/* PRODUCTS */}

            <li className="nav-item">
              {/* https://youtu.be/I2UBjN5ER4s?t=1334 */}
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            {/* SIGN UP */}

            <li className="nav-item">
              {/* https://youtu.be/I2UBjN5ER4s?t=1334 */}
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
