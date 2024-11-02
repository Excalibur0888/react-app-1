import React, { useState, useEffect } from "react";
import classes from "./Modal.module.css";
import Modal from "./Modal";
import VehicleModal from "./VehicleModal";

const Garage = ({ vehicles, onGarageUpdate }) => {
  const [garage, setGarage] = useState(vehicles || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    setGarage(vehicles || []);
  }, [vehicles]);

  const handleAddVehicle = (vehicleData) => {
    const updatedGarage = [...garage, vehicleData];
    setGarage(updatedGarage);
    onGarageUpdate(updatedGarage);
    setIsModalOpen(false);
  };

  const handleDeleteVehicle = (index) => {
    const updatedGarage = garage.filter((_, i) => i !== index);
    setGarage(updatedGarage);
    onGarageUpdate(updatedGarage);
  };

  return (
    <div className={classes.garage}>
      <h2>Гараж</h2>
      <button className={classes.addButton} onClick={() => setIsModalOpen(true)}>
        Добавить ТС
      </button>
      <ul className={classes.garageList}>
        {garage.map((vehicle, index) => (
          <li
            key={index}
            className={classes.vehicleItem}
            onClick={() => setSelectedVehicle(vehicle)}
          >
            {vehicle.brand} {vehicle.model} ({vehicle.year})
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteVehicle(index);
              }}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} onSave={handleAddVehicle} />
      )}
      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </div>
  );
};

export default Garage;