import React from 'react';
import styles from '../styles/NotificationBell.module.css';
import { Bell } from 'lucide-react';

export default function NotificationBell({ count }) {
  return (
    <div className={styles.container}>
      <Bell size={24} />
      {count > 0 && <span className={styles.badge}>{count}</span>}
    </div>
  );
}