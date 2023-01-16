import Head from 'next/head';
import React from 'react';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import CourseExperienceSection from '@/sections/CourseExperienceSection';
import RegisterSection from '@/sections/RegisterSection';
import TopMenuBar from '@/components/TopMenuBar';
import SocialsNav from '@/components/SocialsNav';
import Image from 'next/image';
import styles from '@/styles/pages/index.module.scss';

export default function Home() {
    return (
        <>
            <Head>
                <title>Product Factory</title>
                <meta name='description' content='Product Factory homepage' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <header className={styles.indexHeader}>
                <TopMenuBar />
            </header>
            <main className={styles.indexMain}>
                <div className={styles.indexMain__header}>
                    <HeroSection />
                </div>
                <AboutSection />
                <CourseExperienceSection />
                <RegisterSection />
            </main>
            <footer className={styles.indexFooter}>
                <div className={styles.indexFooter__contentWrapper}>
                    <SocialsNav iconSize={28} />
                    <Image
                        src={'/assets/company-logo-black.svg'}
                        width={165}
                        height={70}
                        alt={'Product Factory logo'}
                        className={styles.indexFooter__companyLogo}
                    />
                    <p className={styles.indexFooter__additionalInfo}>
                        Contact Number: 0912-1234567
                    </p>
                </div>
            </footer>
        </>
    );
}
