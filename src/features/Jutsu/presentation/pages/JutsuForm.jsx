import React, { useEffect } from "react";
import { observer } from "mobx-react";
import "./JutsuForm.css";

const JutsuForm = observer(({ viewModel }) => {
  useEffect(() => {
    // Obtener los jutsus al cargar el componente
    viewModel.fetchJutsus();
  }, [viewModel]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await viewModel.doCreateJutsu();
  };

  return (
    <div className="jutsu-form-container">
      <h1 className="jutsu-title">Jutsu Registry</h1>
      <form onSubmit={handleSubmit} className="jutsu-form">
        <input
          type="text"
          placeholder="Name"
          value={viewModel.name}
          onChange={(e) => viewModel.onChangeName(e.target.value)}
          className="jutsu-input"
        />
        <input
          type="text"
          placeholder="Jutsu Type"
          value={viewModel.jutsuType}
          onChange={(e) => viewModel.onChangeJutsuType(e.target.value)}
          className="jutsu-input"
        />
        <input
          type="text"
          placeholder="Nature"
          value={viewModel.nature}
          onChange={(e) => viewModel.onChangeNature(e.target.value)}
          className="jutsu-input"
        />
        <input
          type="text"
          placeholder="Difficulty Level"
          value={viewModel.difficultyLevel}
          onChange={(e) => viewModel.onChangeDifficultyLevel(e.target.value)}
          className="jutsu-input"
        />
        <input
          type="text"
          placeholder="Created By"
          value={viewModel.createdBy}
          onChange={(e) => viewModel.onChangeCreatedBy(e.target.value)}
          className="jutsu-input"
        />
        <button type="submit" className="jutsu-submit">Guardar Jutsu</button>
        {viewModel.error && <p className="jutsu-error">{viewModel.error}</p>}
        {viewModel.isValid && <p className="jutsu-success">Jutsu guardado exitosamente!</p>}
      </form>

      {/* Muestra la lista de jutsus obtenidos del back */}
      <div className="jutsu-list-container">
        <h2 className="jutsu-subtitle">Jutsus Creados</h2>
        <ul className="jutsu-list">
          {viewModel.jutsus.map((jutsu, index) => (
            <li key={index} className="jutsu-item">
              <strong>{jutsu.name || "Sin nombre"}</strong> - {jutsu.jutsu_type || "Sin tipo"}, {jutsu.nature || "Sin naturaleza"}, {jutsu.difficulty_level || "Sin nivel de dificultad"}, Creado por: {jutsu.created_by || "Desconocido"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default JutsuForm;