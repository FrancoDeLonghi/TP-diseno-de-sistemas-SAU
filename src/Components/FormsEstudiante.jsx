import React, { useState } from 'react';
import styles from '../styles/FormEstudiante.module.css';

export default function FormEstudiante({ initialData = {}, onSubmit }) {
  const [data, setData] = useState(initialData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <form className={styles.form} onSubmit={(e) => { e.preventDefault(); onSubmit(data); }}>
      <label className={styles.label}>
        Nombre:
        <input className={styles.input} name="nombre" value={data.nombre || ''} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Email:
        <input className={styles.input} name="email" value={data.email || ''} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        CV (URL):
        <input className={styles.input} name="cv" value={data.cv || ''} onChange={handleChange} />
      </label>
      <button className={styles.boton} type="submit">Guardar</button>
    </form>
  );
}