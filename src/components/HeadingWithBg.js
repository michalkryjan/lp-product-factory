import React from 'react';
import Image from 'next/image';
import styles from '/src/styles/components/HeadingWithBg.module.scss';

const HeadingWithBg = ({ as, text, bgImageSrc, bgImageAlt, width, height }) => {
    const Heading = as;

    return (
        <div className={styles.headingWithBg}>
            <Heading className={styles.headingWithBg__heading}>{text}</Heading>
            <Image
                className={styles.headingWithBg__bg}
                src={bgImageSrc}
                alt={bgImageAlt}
                width={width}
                height={height}
            />
        </div>
    );
};

export default HeadingWithBg;
