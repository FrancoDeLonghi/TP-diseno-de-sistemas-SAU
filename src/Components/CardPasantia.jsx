import React from 'react';
import styles from '../styles/CardPasantia.module.css';

export default function CardPasantia({ titulo, empresa, onPostular }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.titulo}>{titulo}</h2>
      <p className={styles.empresa}>{empresa}</p>
      <button className={styles.boton} onClick={onPostular}>Postular</button>
    </div>
  );
}