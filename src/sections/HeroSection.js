import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeadingWithBg from '@/components/HeadingWithBg';
import heroStyles from '@/styles/sections/HeroSection.module.scss';
import headingStyles from '@/styles/components/HeadingWithBg.module.scss';

const HeroSection = () => {
    return (
        <section className={heroStyles.hero} id={'start'}>
            <div className={heroStyles.hero__textWrapper}>
                <hgroup>
                    <h1 className={heroStyles.hero__title}>Product&nbsp;Design&nbsp;Course</h1>
                    <HeadingWithBg
                        as={'h2'}
                        text={'Product Factory'}
                        bgSrc={'/assets/heading-backgrounds/UI_UX.svg'}
                        bgWidth={550}
                        bgHeight={126}
                        bgAlt={'UI UX'}
                        bgPriority={true}
                        headingClass={headingStyles.headingWithBg__headingHero}
                    />
                </hgroup>
                <p className={heroStyles.hero__text}>
                    Learn how design thinking, user research, business vision and marketing, and
                    finally designing and creating real digital products for real users.
                </p>
                <Link href={'#register'} className={heroStyles.hero__ctaBtn} scroll={false}>
                    Start Register
                </Link>
            </div>
            <div className={heroStyles.hero__imgWrapper}>
                <Image
                    src={'/assets/hero-img.svg'}
                    width={500}
                    height={550}
                    alt={'Product Design Course - Product Factory - 30 August'}
                    className={heroStyles.hero__img}
                    priority
                />
            </div>
        </section>
    );
};

export default HeroSection;
