import React, { useState } from "react";
import classes from "./Modal.module.css";

const Modal = ({ onClose, onSave }) => {
  const [vehicleData, setVehicleData] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    registrationNumber: "",
    enginePower: "",
  });

  // Проверка, заполнены ли все поля
  const isFormValid = Object.values(vehicleData).every((field) => field.trim() !== "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (isFormValid) {
      onSave(vehicleData);
  	  onClose();
    }
  };

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <h2>Добавить транспортное средство</h2>
        <div className={classes.inputbox}>
          <label>Марка:</label>
          <input type="text" name="brand" value={vehicleData.brand} onChange={handleChange} />
        </div>
        <div className={classes.inputbox}>
          <label>Модель:</label>
          <input type="text" name="model" value={vehicleData.model} onChange={handleChange} />
        </div>
        <div className={classes.inputbox}>
          <label>Год выпуска:</label>
          <input type="number" name="year" value={vehicleData.year} onChange={handleChange} />
        </div>
        <div className={classes.inputbox}>
          <label>Цвет:</label>
          <input type="text" name="color" value={vehicleData.color} onChange={handleChange} />
        </div>
        <div className={classes.inputbox}>
          <label>Регистрационный номер:</label>
          <input
            type="text"
            name="registrationNumber"
            value={vehicleData.registrationNumber}
            onChange={handleChange}
          />
        </div>
        <div className={classes.inputbox}>
          <label>Стоковая мощность двигателя (лс):</label>
          <input
            type="number"
            name="enginePower"
            value={vehicleData.enginePower}
            onChange={handleChange}
          />
        </div>
        <button
          className={classes.saveButton}
          onClick={handleSave}
          disabled={!isFormValid}
        >
          Сохранить
        </button>
        <button className={classes.closeButton} onClick={onClose}>
				✖
        </button>
      </div>
    </div>
  );
};

export default Modal;
