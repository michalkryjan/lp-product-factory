import Head from 'next/head';
import React from 'react';
import HeadingWithBg from '@/components/HeadingWithBg';
import defaults from '@/styles/base/defaults.module.scss';
import TopMenuBar from '@/components/TopMenuBar';

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
                    <section className={defaults.bigContentCard}>
                        <div>
                            <hgroup>
                                <h1>Product Design Course</h1>
                                <h2>Product Factory</h2>
                            </hgroup>
                            <p>
                                Learn how design thinking, user research, business vision and
                                marketing, and finally designing and creating real digital products
                                for real users.
                            </p>
                        </div>
                        {/*<div>*/}
                        {/*    <Image src={''} alt={''} />*/}
                        {/*</div>*/}
                    </section>
                </header>
                <main className={defaults.mainContent}>
                    <article className={defaults.bigContentCard}>
                        <HeadingWithBg
                            as={'h2'}
                            text={'Course Experience'}
                            bgImageSrc={'/assets/heading-backgrounds/Experience.svg'}
                            width={612}
                            height={159}
                        />
                    </article>
                </main>
            </body>
        </>
    );
}
