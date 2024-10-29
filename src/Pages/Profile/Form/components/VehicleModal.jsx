// Form/components/VehicleModal.js
import React from "react";
import classes from "./Modal.module.css";

const VehicleModal = ({ vehicle, onClose }) => {
  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <h2>Информация о транспортном средстве</h2>
        <ul className={classes.vehicleInfo}>
          <li><strong>Марка:</strong> {vehicle.brand}</li>
          <li><strong>Модель:</strong> {vehicle.model}</li>
          <li><strong>Год выпуска:</strong> {vehicle.year}</li>
          <li><strong>Цвет:</strong> {vehicle.color}</li>
          <li><strong>Регистрационный номер:</strong> {vehicle.registrationNumber}</li>
          <li><strong>Стоковая мощность двигателя:</strong> {vehicle.enginePower}</li>
        </ul>
        <button className={classes.closeButton} onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default VehicleModal;
