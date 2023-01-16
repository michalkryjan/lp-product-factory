import React from 'react';
import styles from '@/styles/components/Hamburger.module.scss';

const Hamburger = ({ isOpened, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.hamburger} ${className} ${
                isOpened ? styles.hamburgerOpened : ''
            }`}>
            <div className={styles.hamburger__iconLeft}></div>
            <div className={styles.hamburger__iconRight}></div>
        </button>
    );
};

export default Hamburger;
