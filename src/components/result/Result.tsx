import React from 'react';
import LOGO from '../../assets/logo.svg';
import PASSPORT from '../../assets/passport.svg';
import styles from './result.module.scss';

interface ResultProps {}

const Result: React.FC<ResultProps> = () => {
  return (
    <div className={styles.result}>
      <header>
        <img src={LOGO} alt="logo" className={styles.result__logo} />
        <div>
          <h1>FREMONT COLLEGE OF EDUCATION</h1>
          <p>
            <span>No.5 Raymond Osuman Street, PMB 2191</span>
            <span>Maitama, Abuja, Nigeria.</span>
          </p>
          <h2>Post Graduate Diploma in Education</h2>
          <p>Student First Semester Statement Of Result</p>
        </div>
        <img
          src={PASSPORT}
          alt="passport"
          className={styles.result__passport}
        />
      </header>
      <main className={styles.resultBody}>
        <div className={styles.resultBody__top}>
          <div className={styles.resultBody__top__left}>
            <div>
              <p>Matric No:</p>
              <span>Chukwuma James Nnamdi</span>
            </div>
            <div>
              <p>Level:</p>
              <span>100 level</span>
            </div>
          </div>
          <div className={styles.resultBody__top__right}>
            <div>
              <p>Reg No:</p>
              <span>FCE/PGDE/2021/002</span>
            </div>
            <div>
              <p>Session:</p>
              <span>2022/2023</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Result;
