import Head from 'next/head';
import React from 'react';
import defaults from '@/styles/base/defaults.module.scss';
import TopMenuBar from '@/components/TopMenuBar';
import Hero from '@/sections/Hero';
import CourseExperience from '@/sections/CourseExperience';

export default function Home() {
    return (
        <>
            <Head>
                <title>Product Factory</title>
                <meta name='description' content='Product Factory homepage' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <body>
                <header className={defaults.pageHeader}>
                    <TopMenuBar />
                    <Hero />
                </header>
                <main className={defaults.mainContent}>
                    <CourseExperience />
                </main>
            </body>
        </>
    );
}
