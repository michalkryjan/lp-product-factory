import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/HeadingWithBg.module.scss';

const HeadingWithBg = ({
    as,
    text,
    bgSrc,
    bgAlt,
    bgWidth,
    bgHeight,
    bgPriority = false,
    headingClass
}) => {
    const Heading = as;

    return (
        <div className={styles.headingWithBg}>
            <Heading className={`${styles.headingWithBg__heading} ${headingClass}`}>{text}</Heading>
            <Image
                className={styles.headingWithBg__bg}
                src={bgSrc}
                alt={bgAlt}
                width={bgWidth}
                height={bgHeight}
                priority={bgPriority}
            />
        </div>
    );
};

export default HeadingWithBg;
