import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/SocialsNav.module.scss';

const SocialsNav = ({ vertical = false, iconSize, className }) => {
    return (
        <nav
            className={`${styles.socialsNav} ${
                vertical ? styles.socialsNavVertical : styles.socialsNavHorizontal
            } ${className}`}>
            <ul>
                <li>
                    <Link href={'#'} rel={'nofollow'} target={'_blank'}>
                        <Image
                            src={'/assets/socials/facebook.svg'}
                            width={iconSize}
                            height={iconSize}
                            className={styles.socialsNav__icon}
                            alt={'Facebook logo'}
                        />
                    </Link>
                </li>
                <li>
                    <Link href={'#'} rel={'nofollow'} target={'_blank'}>
                        <Image
                            src={'/assets/socials/twitter.svg'}
                            width={iconSize}
                            height={iconSize}
                            className={styles.socialsNav__icon}
                            alt={'Twitter logo'}
                        />
                    </Link>
                </li>
                <li>
                    <Link href={'#'} rel={'nofollow'} target={'_blank'}>
                        <Image
                            src={'/assets/socials/instagram.svg'}
                            width={iconSize}
                            height={iconSize}
                            className={styles.socialsNav__icon}
                            alt={'Instagram logo'}
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default SocialsNav;
