import React, { useState } from 'react';
import InternshipCard from './InternshipCard';
import Filters from './Filters';

const InternshipList = () => {
  const [filterArea, setFilterArea] = useState('Todas');
  const [filterModality, setFilterModality] = useState('Todas');
  
  // Datos estáticos para las pasantías
  const internships = [
    {
      id: 1,
      title: "Pasante de Ingeniería de Software",
      company: "Innovadores Tecnológicos Inc.",
      area: "Ingeniería de Software",
      modality: "Remoto",
      duration: "6 meses",
      startDate: "15/08/2023",
      requirements: ["Conocimientos en HTML, CSS, JavaScript", "Experiencia con React", "Inglés intermedio"]
    },
    {
      id: 2,
      title: "Pasante de Marketing",
      company: "Audiencias Creativas Co.",
      area: "Marketing",
      modality: "Híbrido",
      duration: "4 meses",
      startDate: "01/09/2023",
      requirements: ["Conocimientos en SEO/SEM", "Manejo de redes sociales", "Creatividad"]
    },
    {
      id: 3,
      title: "Pasante de Ciencia de Datos",
      company: "Análisis Basado en Datos",
      area: "Ciencia de Datos",
      modality: "Presencial",
      duration: "8 meses",
      startDate: "10/09/2023",
      requirements: ["Conocimientos en Python", "Experiencia con SQL", "Inglés avanzado"]
    },
    {
      id: 4,
      title: "Pasante de Gestión de Productos",
      company: "Procesos de Productos LLC",
      area: "Gestión de Productos",
      modality: "Remoto",
      duration: "6 meses",
      startDate: "20/08/2023",
      requirements: ["Habilidades de comunicación", "Pensamiento analítico", "Inglés intermedio"]
    }
  ];

  // Filtrar pasantías según selección
  const filteredInternships = internships.filter(internship => {
    return (filterArea === 'Todas' || internship.area === filterArea) &&
           (filterModality === 'Todas' || internship.modality === filterModality);
  });

  return (
    <div className="internship-list-container">
      <div className="list-header">
        <h2>Todas las Pasantías</h2>
        <div className="actions">
          <button className="new-offer-btn">+ Crear Nueva Oferta</button>
        </div>
      </div>
      
      <div className="content-wrapper">
        <div className="internships-grid">
          {filteredInternships.map(internship => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
        
        <Filters 
          filterArea={filterArea}
          setFilterArea={setFilterArea}
          filterModality={filterModality}
          setFilterModality={setFilterModality}
        />
      </div>
    </div>
  );
};

export default InternshipList;