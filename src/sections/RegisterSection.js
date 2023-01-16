import React from 'react';
import Image from 'next/image';
import styles from '@/styles/sections/RegisterSection.module.scss';
import RegisterForm from '@/components/RegisterForm';

const RegisterSection = () => {
    return (
        <section className={styles.registerSection} id={'register'}>
            <div className={styles.registerSection__contentWrapper}>
                <div className={styles.registerSection__textWrapper}>
                    <h2 className={styles.registerSection__title}>Request a list of headings</h2>
                    <RegisterForm />
                </div>
                <div className={styles.registerSection__imgWrapper}>
                    <Image
                        src={'/assets/form-bg-inner.svg'}
                        width={273}
                        height={235}
                        className={`${styles.registerSection__img} ${styles.registerSection__imgInner}`}
                        alt={'Opened mail'}
                    />
                    <Image
                        src={'/assets/form-bg-outer.svg'}
                        width={780}
                        height={663}
                        className={`${styles.registerSection__img} ${styles.registerSection__imgOuter}`}
                        alt={'Opened mail'}
                    />
                </div>
            </div>
        </section>
    );
};

export default RegisterSection;
