import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import {  FaUserCircle } from "react-icons/fa";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose , IoIosBasket ,IoLogoWhatsapp } from "react-icons/io";
import { TbMenu2,TbDeviceMobile  } from "react-icons/tb";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddenLink";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        e<span>TRUG</span>
      </h2>
    </Link>
  </div>
);

const contacts=(
<section>
  <div className={styles["header-top"]}>
  <span><TbDeviceMobile  size={22} color="rgba(0, 255, 106, 0.572)" /> </span><span><p>9502930797</p> </span>
  <span><IoLogoWhatsapp  size={22} color="rgba(0, 255, 106, 0.572)" /> </span> <span><p>9502930797</p> </span>           
  
  </div>
</section>
 
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setdisplayName] = useState("");
  const [scrollPage, setScrollPage] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  const hideMenu = () => {
    setShowMenu(false);
  };
  const logoutUser = () => {
    // signOut(auth)
    //   .then(() => {
    //     toast.success("Logout successfully.");
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //   });
  };
  const cart = (  
    <span className={styles.cart}>
      <NavLink to="/cart"  className={activeLink}>
        Trug
        <IoIosBasket size={20} />
        0
      </NavLink>
    </span>
  );

  return (


    <header className={scrollPage ? `${styles.fixed}` : null}>
        <div className={styles.header}>
          {logo}
          {contacts}
          <nav
            className={
              showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
            }
           >
            <div
              className={
                showMenu
                  ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                  : `${styles["nav-wrapper"]}`
              }
              onClick={hideMenu} 
            ></div>

             

          

            <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>
                  {logo}
                <IoMdClose size={22} color="#fff" onClick={hideMenu} />
              
               
              </li>
              <li>
                <NavLink to="/" className={activeLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={activeLink}>
                  Contact Us
                </NavLink>
              </li>
              <li>
              <div className={styles["header-right"]} onClick={hideMenu}>
                <span className={styles.links}>
                 </span>
                 {cart}
              </div>
              </li>
              
              
            </ul>

            
            
       
          </nav>

          <div className={styles["menu-icon"]}>
              <div className={styles["header-right"]} onClick={hideMenu}>
                <span className={styles.links}>
                 </span>
                 {cart}
              </div>
            <TbMenu2 size={50} onClick={toggleMenu} />
          </div>
        </div>
      </header>

  )
}

export default Header