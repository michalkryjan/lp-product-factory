import Head from 'next/head';
import React from 'react';
import HeadingWithBg from '@/components/HeadingWithBg';
import defaults from '@/styles/base/defaults.module.scss';
import TopMenuBar from '@/components/TopMenuBar';
import Hero from '@/sections/Hero';

export default function Home() {
    return (
        <>
            <Head>
                <title>Product Factory</title>
                <meta name='description' content='Product Factory homepage' />
                <meta name='viewport' content='bgWidth=device-bgWidth, initial-scale=1' />
            </Head>
            <body>
                <header className={defaults.pageHeader}>
                    <TopMenuBar />
                    <Hero />
                </header>
                <main>
                    <article>
                        <HeadingWithBg
                            as={'h2'}
                            text={'Course Experience'}
                            bgSrc={'/assets/heading-backgrounds/Experience.svg'}
                            bgWidth={612}
                            bgHeight={159}
                        />
                    </article>
                </main>
            </body>
        </>
    );
}
