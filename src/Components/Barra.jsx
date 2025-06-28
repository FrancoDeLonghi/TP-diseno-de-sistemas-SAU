import React from 'react';
import styles from '../styles/Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/perfil', label: 'Perfil' },
  { to: '/logout', label: 'Salir' }
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} activeClassName={styles.active} className={styles.link}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}