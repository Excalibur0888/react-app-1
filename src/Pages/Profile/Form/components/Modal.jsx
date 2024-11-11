// Modal.js
import React, { useState } from "react";
import modalClasses from "./Modal.module.css";
import ProfileInput from "./ProfileInput"; 

const Modal = ({ onClose, onSave }) => {
  const [vehicleData, setVehicleData] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    registrationNumber: "",
    enginePower: "",
  });

  const isFormValid = Object.values(vehicleData).every((field) => field.trim() !== "");

  const handleChange = (name, value) => {
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
    <div className={modalClasses.modalOverlay}>
      <div className={modalClasses.modalContent}>
        <h2>Добавить транспортное средство</h2>
        
        <ProfileInput
          label="Марка:"
          type="text"
          value={vehicleData.brand}
          onChange={(e) => handleChange("brand", e.target.value)}
          customClasses={modalClasses}
        />
        
        <ProfileInput
          label="Модель:"
          type="text"
          value={vehicleData.model}
          onChange={(e) => handleChange("model", e.target.value)}
          customClasses={modalClasses}
        />
        
        <ProfileInput
          label="Год выпуска:"
          type="number"
          value={vehicleData.year}
          onChange={(e) => handleChange("year", e.target.value)}
          customClasses={modalClasses}
        />
        
        <ProfileInput
          label="Цвет:"
          type="text"
          value={vehicleData.color}
          onChange={(e) => handleChange("color", e.target.value)}
          customClasses={modalClasses}
        />
        
        <ProfileInput
          label="Регистрационный номер:"
          type="text"
          value={vehicleData.registrationNumber}
          onChange={(e) => handleChange("registrationNumber", e.target.value)}
          customClasses={modalClasses}
        />
        
        <ProfileInput
          label="Стоковая мощность двигателя (лс):"
          type="number"
          value={vehicleData.enginePower}
          onChange={(e) => handleChange("enginePower", e.target.value)}
          customClasses={modalClasses}
        />

        <button
          className={modalClasses.saveButton}
          onClick={handleSave}
          disabled={!isFormValid}
        >
          Сохранить
        </button>
        
        <button className={modalClasses.closeButton} onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default Modal;
