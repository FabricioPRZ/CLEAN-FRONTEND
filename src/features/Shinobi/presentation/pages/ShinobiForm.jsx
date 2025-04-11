import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import "./ShinobiForm.css";

const ShinobiForm = observer(({ viewModel }) => {
  useEffect(() => {
    viewModel.fetchShinobis();
  }, [viewModel]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await viewModel.doCreateShinobi();
  };

  return (
    <div className="shinobi-form-container">
      <h1 className="shinobi-title">Shinobi Registry</h1>
      <form onSubmit={handleSubmit} className="shinobi-form">
        <input
          type="text"
          placeholder="Name"
          value={viewModel.name}
          onChange={(e) => viewModel.onChangeName(e.target.value)}
          className="shinobi-input"
        />
        <input
          type="text"
          placeholder="Clan"
          value={viewModel.clan}
          onChange={(e) => viewModel.onChangeClan(e.target.value)}
          className="shinobi-input"
        />
        <input
          type="text"
          placeholder="Position"
          value={viewModel.position}
          onChange={(e) => viewModel.onChangePosition(e.target.value)}
          className="shinobi-input"
        />
        <input
          type="text"
          placeholder="Village"
          value={viewModel.village}
          onChange={(e) => viewModel.onChangeVillage(e.target.value)}
          className="shinobi-input"
        />
        <input
          type="text"
          placeholder="Special Hability"
          value={viewModel.specialHability}
          onChange={(e) => viewModel.onChangeSpecialHability(e.target.value)}
          className="shinobi-input"
        />
        <button type="submit" className="shinobi-submit">Guardar Shinobi</button>
        {viewModel.error && <p className="shinobi-error">{viewModel.error}</p>}
        {viewModel.isValid && <p className="shinobi-success">Shinobi guardado exitosamente!</p>}
      </form>

      <div className="navigation-container">
        <Link to="/jutsu-form" className="navigation-button">Ir al Formulario de Jutsu</Link>
      </div>

      {/* Mostrar la lista de shinobis obtenidos del back*/}
      <div className="shinobi-list-container">
        <h2 className="shinobi-subtitle">Shinobis Creados</h2>
        <ul className="shinobi-list">
          {viewModel.shinobis.map((shinobi, index) => (
            <li key={index} className="shinobi-item">
              <strong>{shinobi.name || "Sin nombre"}</strong> - {shinobi.clan || "Sin clan"}, {shinobi.position || "Sin posición"}, {shinobi.village || "Sin aldea"}, Habilidad especial: {shinobi.special_hability || "Sin habilidad especial"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default ShinobiForm;