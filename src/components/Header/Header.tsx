"use client";

import { FC, Fragment, useState } from "react";
import styles from "@/components/Header/HeaderStyles.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { DEFAULT__LINKS } from "@/constants/default-links";
import { Burger } from "../Burger/Burger";
import { NavigationPanel } from "../NavigationPanel/NavigationPanel";
import { BurgerButton } from "../UI components/BurgerButton/BurgerButton";
import { useScrollObserver } from "@/hooks/useScrollObserver";

const Header: FC = () => {
  const pathname = usePathname();
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const { isScrolledNav } = useScrollObserver();

  const handleToggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <Fragment>
      <header
        className={`${styles.header} ${
          isScrolledNav ? styles.header__active : ""
        }`}>
        <div className={styles.empty__blockBg}>
          <svg
            className={styles.light__logo}
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="80"
            color="#fff"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
              clipRule="evenodd"></path>
          </svg>
          <div className={styles.empty__links}>
            <Link
              style={{
                color: pathname === DEFAULT__LINKS.HELP ? "#737373" : "",
              }}
              className={`${styles.empty__link} ${styles.decoration__line}`}
              href={DEFAULT__LINKS.HELP}>
              Help
            </Link>
            <Link
              style={{
                color: pathname === DEFAULT__LINKS.STORE ? "#737373" : "",
              }}
              className={styles.empty__link}
              href={DEFAULT__LINKS.STORE}>
              Store
            </Link>
          </div>
        </div>
        <div className={styles.header__container}>
          <div className={styles.header__logo}>
            <Link href={DEFAULT__LINKS.LOGO} className={styles.header__logo}>
              <strong>Clothings</strong>
              store
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                  clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
          <div className={styles.navPanel}>
            <NavigationPanel />
            <BurgerButton isActive={isMenuActive} onClick={handleToggleMenu} />
          </div>
        </div>
      </header>
      {isMenuActive && <Burger onClose={handleToggleMenu} />}
    </Fragment>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
