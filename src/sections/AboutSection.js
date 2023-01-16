import React from 'react';
import HeadingWithBg from '@/components/HeadingWithBg';
import styles from '@/styles/sections/AboutSection.module.scss';
import headingStyles from '@/styles/components/HeadingWithBg.module.scss';
import SocialsNav from '@/components/SocialsNav';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className={styles.aboutSection}>
            <Image
                src={'/assets/about-decoration.svg'}
                width={670}
                height={386}
                className={styles.aboutSection__decorationImg}
                alt={'Product Factory - decoration badge'}
            />
            <div className={styles.aboutSection__header}>
                <HeadingWithBg
                    as={'h2'}
                    text={'About us'}
                    bgSrc={'/assets/heading-backgrounds/About.svg'}
                    bgWidth={351}
                    bgHeight={140}
                    bgAlt={'About'}
                />
                <SocialsNav iconSize={28} vertical className={styles.aboutSection__socialsNav} />
            </div>
            <p className={styles.aboutSection__text}>
                Today, given the economic and labor market conditions, the best and least risky way
                to invest is to invest in personal assets and skills. UI / UX Product Design Course
                covers all aspects of product design from product thinking and design to
                user-centric research and product research and business vision and digital marketing
                to product designers and creators, designing the end-user experience and interface
                of the product and how to deliver it. Includes.
            </p>
        </section>
    );
};

export default AboutSection;
