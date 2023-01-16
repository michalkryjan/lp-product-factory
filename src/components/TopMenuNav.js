import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/TopMenuNav.module.scss';

const TopMenuNav = ({ mobileVersion, isOpened, onLinkClick }) => {
    return (
        <nav
            className={`${styles.topMenuNav} ${
                mobileVersion ? (isOpened ? styles.topMenuNavVisibleMobile : '') : ''
            }`}
            aria-label='Main Menu'>
            <ul>
                <li className={styles.topMenuNav__item}>
                    <Link className={styles.topMenuNav__link} href={'#'} onClick={onLinkClick}>
                        Projects
                    </Link>
                </li>
                <li className={styles.topMenuNav__item}>
                    <Link className={styles.topMenuNav__link} href={'#'} onClick={onLinkClick}>
                        Partners
                    </Link>
                </li>
                <li className={styles.topMenuNav__item}>
                    <Link className={styles.topMenuNav__link} href={'#'} onClick={onLinkClick}>
                        FAQ
                    </Link>
                </li>
                <li className={styles.topMenuNav__item}>
                    <Link className={styles.topMenuNav__link} href={'#'} onClick={onLinkClick}>
                        Masters
                    </Link>
                </li>
                <li className={styles.topMenuNav__item}>
                    <Link className={styles.topMenuNav__link} href={'#'} onClick={onLinkClick}>
                        Classes
                    </Link>
                </li>
                <li className={styles.topMenuNav__item}>
                    <Link
                        className={styles.topMenuNav__link}
                        href={'#courseExperience'}
                        scroll={false}
                        onClick={onLinkClick}>
                        Course Experience
                    </Link>
                </li>
                <li className={styles.topMenuNav__item}>
                    <Link
                        className={styles.topMenuNav__link}
                        href={'#aboutUs'}
                        scroll={false}
                        onClick={onLinkClick}>
                        About us
                    </Link>
                </li>
                <li>
                    <Link
                        className={styles.topMenuNav__ctaBtn}
                        href={'#register'}
                        scroll={false}
                        onClick={onLinkClick}>
                        Register
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default TopMenuNav;
