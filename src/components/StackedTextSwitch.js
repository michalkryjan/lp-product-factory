import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/StackedTextSwitch.module.scss';

const StackedTextSwitch = ({
    menuOptions,
    contentLists,
    initialActiveLayerId = 0,
    decorationImgSrc,
    imgWidth,
    imgHeight,
    imgAlt,
    ariaLabel
}) => {
    const [activeLayerId, setActiveLayerId] = useState(initialActiveLayerId);

    return (
        <>
            <menu className={styles.stackedTextSwitchMenu} aria-label={ariaLabel}>
                {menuOptions.map((option, id) => {
                    return id === activeLayerId ? (
                        <li key={id}>
                            <button
                                disabled
                                className={`${styles.stackedTextSwitchMenu__btn} ${styles.stackedTextSwitchMenu__btnActive}`}>
                                {option}
                            </button>
                        </li>
                    ) : (
                        <li key={id}>
                            <button
                                onClick={() => setActiveLayerId(id)}
                                className={styles.stackedTextSwitchMenu__btn}>
                                {option}
                            </button>
                        </li>
                    );
                })}
            </menu>
            <div className={styles.stackedTextSwitch}>
                {decorationImgSrc ? (
                    <Image
                        src={decorationImgSrc}
                        width={imgWidth}
                        height={imgHeight}
                        alt={imgAlt}
                        className={styles.stackedTextSwitch__decorationImg}
                    />
                ) : null}
                <div className={styles.stackedTextSwitch__layersWrapper}>
                    {contentLists.map((contentList, id) => {
                        return id === activeLayerId ? (
                            <section
                                key={id}
                                className={`${styles.stackedTextSwitch__layer} ${styles.stackedTextSwitch__layerActive}`}>
                                {contentList.map((paragraph, id) => {
                                    return (
                                        <p key={id} className={styles.stackedTextSwitch__text}>
                                            {paragraph}
                                        </p>
                                    );
                                })}
                            </section>
                        ) : (
                            <section key={id} className={styles.stackedTextSwitch__layer}>
                                {contentList.map((paragraph, id) => {
                                    return (
                                        <p key={id} className={styles.stackedTextSwitch__text}>
                                            {paragraph}
                                        </p>
                                    );
                                })}
                            </section>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default StackedTextSwitch;
