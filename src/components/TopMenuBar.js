import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import Hamburger from '@/components/Hamburger';
import styles from '@/styles/components/TopMenuBar.module.scss';

const TopMenuBar = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [scrollPositionY, setScrollPositionY] = useState(0);
    const scrollDirection = useScrollDirection();

    useEffect(() => {
        const handleScrollY = () => {
            setScrollPositionY(window.scrollY);
        };
        handleScrollY();
        window.addEventListener('scroll', handleScrollY);
        return () => {
            window.removeEventListener('scroll', handleScrollY);
        };
    }, []);

    return (
        <div
            className={`${styles.topMenuBar} ${
                scrollPositionY >= 35 ? styles.topMenuBarStickyTop : ''
            } ${
                scrollPositionY > 127
                    ? scrollDirection === 'up'
                        ? styles.topMenuBarVisible
                        : styles.topMenuBarHidden
                    : ''
            }`}>
            <nav className={styles.topMenu} aria-label='Main Menu'>
                <ul>
                    <li className={`${styles.topMenu__item} ${styles.topMenu__itemLogo}`}>
                        <Link href={'#start'}>
                            <Image
                                className={styles.topMenu__logo}
                                src={'/assets/company-logo-white.svg'}
                                width={122}
                                height={52}
                                alt={'Product Factory logo'}
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
                        <Link className={styles.topMenu__ctaBtn} href={'#register'} scroll={false}>
                            Register
                        </Link>
                    </li>
                </ul>
            </nav>
            <Hamburger
                isOpened={isMenuOpened}
                onClick={() => {
                    setIsMenuOpened(prev => !prev);
                }}
                className={styles.topMenuBar__hamburger}
            />
        </div>
    );
};

export default TopMenuBar;
