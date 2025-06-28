import React from 'react';
import CardPasantia from './CardPasantia';
import styles from '../styles/ListaPasantias.module.css';

export default function ListaPasantias({ pasantias, onPostular }) {
  return (
    <div className={styles.grid}>
      {pasantias.map((p) => (
        <CardPasantia
          key={p.id}
          titulo={p.titulo}
          empresa={p.empresa}
          onPostular={() => onPostular(p.id)}
        />
      ))}
    </div>
  );
}