import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/HeadingWithBg.module.scss';

const HeadingWithBg = ({ as, text, bgSrc, bgAlt, bgWidth, bgHeight, headingModifierClass }) => {
    const Heading = as;

    return (
        <div className={styles.headingWithBg}>
            <Heading className={`${styles.headingWithBg__heading} ${headingModifierClass}`}>
                {text}
            </Heading>
            <Image
                className={styles.headingWithBg__bg}
                src={bgSrc}
                alt={bgAlt}
                width={bgWidth}
                height={bgHeight}
            />
        </div>
    );
};

export default HeadingWithBg;
