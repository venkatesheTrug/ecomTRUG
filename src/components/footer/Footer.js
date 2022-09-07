

import React from "react";
import styles from "./Footer.module.scss";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return <div className={styles.footer}>Copyright &copy; {year} e<span>TRUG </span> eCommerce Solutions Pvt Ltd</div>;
};

export default Footer;
