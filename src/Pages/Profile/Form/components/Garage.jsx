// Form/components/Garage.js
import React, { useState } from "react";
import classes from "./Modal.module.css";
import Modal from "./Modal";
import VehicleModal from "./VehicleModal";

const Garage = () => {
  const [garage, setGarage] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleAddVehicle = (vehicleData) => {
    setGarage([...garage, vehicleData]);
    setIsModalOpen(false);
  };

  const handleDeleteVehicle = (index) => {
    setGarage(garage.filter((_, i) => i !== index));
  };

  return (
    <div>
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
        <VehicleModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
      )}
    </div>
  );
};

export default Garage;
