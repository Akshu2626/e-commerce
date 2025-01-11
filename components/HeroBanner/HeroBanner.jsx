import React from "react";
import Image from "next/image";
import { CgShoppingCart } from "react-icons/cg";
import headerImg from "../../src/assets/header.png";
import featured1 from "../../src/assets/Featured1.png";
import featured2 from "../../src/assets/Featured2.png";
import featured3 from "../../src/assets/Featured3.png";
import featured4 from "../../src/assets/Featured4.png";
import Link from "next/link";
import styles from "./HeroBanner.module.css"

const HeroBanner = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_left_side}>
        <div className={styles.header_content}>
          <h1>An Industrial Take on Streetwear</h1>
          <p>
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Link href="/products">
            <button className={styles.btn} type="button">
              <CgShoppingCart size={26} /> Start Shopping
            </button>
          </Link>
        </div>

        <div className={styles.header_featured}>
          <Image src={featured1} width={100} height={35} alt="img" />
          <Image src={featured2} width={100} height={35} alt="img" />
          <Image src={featured3} width={100} height={35} alt="img" />
          <Image src={featured4} width={100} height={35} alt="img" />
        </div>
      </div>

      <div className={styles.header_right_side}>
        <div className={styles.header_circle}>
          <Image
            className={styles.header_img}
            src={headerImg}
            width={650}
            height={650}
            alt="header image"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroBanner;
