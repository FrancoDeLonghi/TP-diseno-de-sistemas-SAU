import React from 'react';
import styles from '../styles/Header.module.css';
import NotificationBell from './NotificationBell';

export default function Header({ title }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>SAU</div>
      <h1 className={styles.title}>{title}</h1>
      <NotificationBell count={3} />
    </header>
  );
}