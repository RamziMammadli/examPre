import React from "react";
import styles from "./Header.module.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigation = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.containerTop}>
        <div className={styles.containerTopA}>
          <div>
            <h1 style={{ color: "orange", fontSize: 24 }}>INVEST</h1>
          </div>
          <div className={styles.topRight}>
            <div style={{ display: "flex", gap: 10 }}>
              <p className={styles.ptext}>BTC</p>
              <p className={styles.ptext}>BTC</p>
              <p className={styles.ptext}>BTC</p>
            </div>
            <div style={{ display: "flex", gap: 7 }}>
              <button className={styles.logreg}>Register</button>
              <button className={styles.logreg}>Login</button>
            </div>
            <div className={styles.bars}>
              <FaBars color="white" size={30}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.containerBottomA}>
          <div className={styles.nav}>
            <button onClick={() => navigation('/')}>Home</button>
            <button onClick={() => navigation('/basket')}>Basket</button>
            <button onClick={() => navigation('/wishlist')}>Wishlist</button>
            <button>Home</button>
            <button>Home</button>
            <button>Home</button>
          </div>
          <div className={styles.contactBox}>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <FaPhoneVolume />
              <span>+994 55 878 07 01</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <MdOutlineMail />
              <span>remzimemmedli95@gmail.com</span>
            </div>
            <CiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
