import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../src/assets/Logo.png";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { showCart, setShowCart, totalQty } = useStateContext();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src={logo} height={50} alt="logo" />
      </Link>
      <ul className={styles.nav_links}>
        <Link href="#">
          <li>Female</li>
        </Link>
        <Link href="#">
          <li>Male</li>
        </Link>
        <Link href="#">
          <li>Kids</li>
        </Link>
        <Link href="/products">
          <li>All Products</li>
        </Link>
      </ul>

      <div className={styles.search_bar}>
        <CiSearch />
        <input
          type="text"
          placeholder="What you looking for"
          onChange={(event) => {}}
        />
      </div>

      {showCart ? (
        <Link href="/cart">
          <button className={styles.cart} onClick={() => setShowCart(false)}>
            <CgShoppingCart size={22} />
            <span className={styles.cart_item_qty}>{totalQty}</span>
          </button>
        </Link>
      ) : (
        <button className={styles.cart} onClick={() => setShowCart(true)}>
          <CgShoppingCart size={22} />
          <span className={styles.cart_item_qty}>{totalQty}</span>
        </button>
      )}

      <div className={styles.navbar_smallscreen}>
        <RiMenu3Line
          color="black"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className={styles.navbar_smallscreen_overlay}>
            <Link href="/">
              <Image
                className={styles.logo_small}
                src={logo}
                height={50}
                alt="logo"
              />
            </Link>
            <RiCloseLine
              color="black"
              fontSize={27}
              className={styles.close_icon}
              onClick={() => setToggleMenu(false)}
            />
            <ul className={styles.navbar_smallscreen_links}>
              <Link href="/cart">
                <button
                  className={styles.cart_small_screen}
                  onClick={() => setShowCart(false)}
                >
                  <CgShoppingCart size={22} />
                  <span className={styles.cart_item_qty}>{totalQty}</span>
                </button>
              </Link>
              <Link href="#">
                <li>Female</li>
              </Link>
              <Link href="#">
                <li>Male</li>
              </Link>
              <Link href="#">
                <li>Kids</li>
              </Link>
              <Link href="/products">
                <li>All Products</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
