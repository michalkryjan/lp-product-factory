import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import TopMenuNav from '@/components/TopMenuNav';
import Hamburger from '@/components/Hamburger';
import styles from '@/styles/components/TopMenuBar.module.scss';

const TopMenuBar = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [mobileVersion, setMobileVersion] = useState(false);
    const [scrollPositionY, setScrollPositionY] = useState(0);
    const scrollDirection = useScrollDirection();

    useEffect(() => {
        const setMobileVersionIfNeeded = () => {
            if (window.innerWidth <= 768) {
                setMobileVersion(true);
                setIsMenuOpened(false);
            } else {
                setIsMenuOpened(true);
            }
        };
        const handleScrollY = () => {
            setScrollPositionY(window.scrollY);
        };
        handleScrollY();
        setMobileVersionIfNeeded();
        window.addEventListener('scroll', handleScrollY);
        window.addEventListener('resize', setMobileVersionIfNeeded);
        return () => {
            window.removeEventListener('scroll', handleScrollY);
            window.removeEventListener('scroll', setMobileVersionIfNeeded);
        };
    }, []);

    return (
        <div
            className={`${styles.topMenuBar} ${
                scrollPositionY >= 35 ? styles.topMenuBarStickyTop : ''
            } ${
                scrollPositionY > 127
                    ? scrollDirection === 'up'
                        ? styles.topMenuBarVisibleDesktop
                        : styles.topMenuBarHiddenDesktop
                    : ''
            }`}>
            <div className={styles.topMenuBar__contentWrapper}>
                <Link
                    href={'#start'}
                    scroll={false}
                    onClick={() => {
                        mobileVersion ? setIsMenuOpened(false) : null;
                    }}>
                    <Image
                        className={styles.topMenuBar__logo}
                        src={'/assets/company-logo-white.svg'}
                        width={122}
                        height={52}
                        alt={'Product Factory logo'}
                    />
                </Link>
                <TopMenuNav
                    mobileVersion={mobileVersion}
                    isOpened={isMenuOpened}
                    onLinkClick={() => {
                        mobileVersion ? setIsMenuOpened(false) : null;
                    }}
                />
                <Hamburger
                    isOpened={isMenuOpened}
                    onClick={() => {
                        setIsMenuOpened(prev => !prev);
                    }}
                    className={styles.topMenuBar__hamburger}
                />
            </div>
        </div>
    );
};

export default TopMenuBar;
