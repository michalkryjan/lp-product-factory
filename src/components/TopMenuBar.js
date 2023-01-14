import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '/src/styles/components/TopMenuBar.module.scss';

const TopMenuBar = () => {
    return (
        <div className={styles.topMenuBar}>
            <nav className={styles.topMenu} aria-label='Main Menu'>
                <ul>
                    <li className={`${styles.topMenu__item} ${styles.topMenu__itemLogo}`}>
                        <Link href={'#start'}>
                            <Image
                                className={styles.topMenu__logo}
                                src={'/assets/company-logo.svg'}
                                width={122}
                                height={52}
                            />
                        </Link>
                    </li>
                    <li className={`${styles.topMenu__item} ${styles.topMenu__itemDefault}`}>
                        <Link className={styles.topMenu__link} href={'#'}>
                            Projects
                        </Link>
                    </li>
                    <li className={`${styles.topMenu__item} ${styles.topMenu__itemDefault}`}>
                        <Link className={styles.topMenu__link} href={'#'}>
                            Partners
                        </Link>
                    </li>
                    <li className={`${styles.topMenu__item} ${styles.topMenu__itemDefault}`}>
                        <Link className={styles.topMenu__link} href={'#'}>
                            FAQ
                        </Link>
                    </li>
                    <li className={`${styles.topMenu__item} ${styles.topMenu__itemDefault}`}>
                        <Link className={styles.topMenu__link} href={'#'}>
                            Masters
                        </Link>
                    </li>
                    <li className={`${styles.topMenu__item} ${styles.topMenu__itemDefault}`}>
                        <Link className={styles.topMenu__link} href={'#'}>
                            Classes
                        </Link>
                    </li>
                    <li className={`${styles.topMenu__item} ${styles.topMenu__itemDefault}`}>
                        <Link className={styles.topMenu__link} href={'#'}>
                            Course Experience
                        </Link>
                    </li>
                    <li className={`${styles.topMenu__item} ${styles.topMenu__itemDefault}`}>
                        <Link className={styles.topMenu__link} href={'#'}>
                            About us
                        </Link>
                    </li>
                    <li className={`${styles.topMenu__item} ${styles.topMenu__itemCta}`}>
                        <Link className={styles.topMenu__ctaBtn} href={'#start'}>
                            Register
                        </Link>
                    </li>
                </ul>
            </nav>
            <button className={styles.topMenuBar__hamburger} aria-label='Main Menu'>
                <svg
                    viewBox='0 0 100 100'
                    width='60'
                    height='60'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        className='hamburger__line hamburger__line--1'
                        d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
                    />
                    <path className='hamburger__line hamburger__line--2' d='M 20,50 H 80' />
                    <path
                        className='hamburger__line hamburger__line--3'
                        d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
                    />
                </svg>
            </button>
        </div>
    );
};

export default TopMenuBar;
