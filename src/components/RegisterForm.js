import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '@/styles/components/RegisterForm.module.scss';
import Image from 'next/image';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [requestError, setRequestError] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);

    useEffect(() => {
        if (invalidEmail) {
            if (isEmailValid(email)) {
                setInvalidEmail(false);
            }
        }
    }, [email]);

    const isEmailValid = email => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const submitForm = event => {
        event.preventDefault();
        if (isEmailValid(email)) {
            setSuccess(true);
            axios
                .post('here goes Product Factory API URL', {
                    form: 'Product Design - Request a list of Headings',
                    email: email
                })
                .then(response => {
                    response.status === 200 ? setSuccess(true) : setRequestError(true);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            setInvalidEmail(true);
        }
    };

    return (
        <form onSubmit={submitForm} method={'post'} className={styles.registerForm} noValidate>
            <label htmlFor={'email'} className={styles.registerForm__label}>
                Please enter your email address to receive course titles, the topics will be emailed
                to you.
            </label>
            <div className={styles.registerForm__inputsWrapper}>
                <input
                    type='email'
                    id={'email'}
                    name={'email'}
                    value={email}
                    onChange={handleEmailChange}
                    className={styles.registerForm__input}
                />
                <input
                    type='submit'
                    value={'Register'}
                    className={styles.registerForm__submit}
                    disabled={success}
                />
            </div>
            <div className={styles.registerForm__messagePlaceholder}>
                {invalidEmail ? (
                    <p className={`${styles.registerForm__msg} ${styles.registerForm__msgError}`}>
                        Invalid email format. Please try again.
                    </p>
                ) : null}
                {requestError ? (
                    <p className={`${styles.registerForm__msg} ${styles.registerForm__msgError}`}>
                        There was an error sending your email address to the server. Please try
                        again later.
                    </p>
                ) : null}
                {success ? (
                    <p className={`${styles.registerForm__msg} ${styles.registerForm__msgSuccess}`}>
                        <Image
                            src={'/assets/icons/checked-icon-green.svg'}
                            width={27}
                            height={27}
                            alt={'Success icon'}
                        />
                        Your email has been successfully registered, headlines will be sent to you
                        soon.
                    </p>
                ) : null}
            </div>
        </form>
    );
};

export default RegisterForm;
