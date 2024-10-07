import { useEffect, useState } from 'react';

// Modal component to show bid details
const BidModal = ({ car, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <button onClick={onClose} style={modalStyles.closeButton}>Cerrar</button>
        <h2>{car.name}</h2>
        <img src={car.image} alt={car.name} style={{ width: '100%', height: 'auto' }} />
        <p><strong>Odometer:</strong> {car.odometer} miles</p>
        <p><strong>Current Bid:</strong> ${car.currentBid}</p>
        <p><strong>Condition:</strong> {car.condition}</p>
        <p><strong>Fuel:</strong> {car.fuel}</p>
        <p><strong>Transmission:</strong> {car.transmission}</p>
        <p><strong>VIN:</strong> {car.vin}</p>

        <div style={{ marginTop: '20px' }}>
          <label htmlFor="bidAmount">Place Your Bid: </label>
          <input 
            type="number" 
            id="bidAmount"
            min={car.currentBid} 
            defaultValue={car.currentBid} 
            style={{ padding: '5px', marginRight: '10px' }} 
          />
          <button style={modalStyles.bidButton}>Bid Now</button>
        </div>
      </div>
    </div>
  );
};

const CarInventory = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null); // Car selected for bidding
  const [isModalOpen, setModalOpen] = useState(false); // Modal state

  useEffect(() => {
    // Simulación de la API con datos de ejemplo
    const carsData = [
      {
        id: 1,
        name: '2018 KIA FORTE LX',
        odometer: '50,714',
        currentBid: '1,800',
        condition: 'Clean Title',
        fuel: 'Gas',
        transmission: 'Automatic',
        vin: '3KPFKA7ZJE******',
        image: 'https://via.placeholder.com/300x200.png?text=KIA+FORTE+LX',
      },
      {
        id: 2,
        name: '2020 Chevrolet Tahoe C1500',
        odometer: '123,593',
        currentBid: '10,400',
        condition: 'Clean Title',
        fuel: 'Gas',
        transmission: 'Automatic',
        vin: '1GNSKCKJXLR******',
        image: 'https://via.placeholder.com/300x200.png?text=Chevrolet+Tahoe+C1500',
      },
      // Agregar más vehículos según sea necesario
    ];

    setCars(carsData);
  }, []);

  const handleBidNowClick = (car) => {
    setSelectedCar(car); // Set the selected car for bidding
    setModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCar(null); // Clear the selected car when closing modal
  };

  return (
    <div>
      <h1>Inventario de Coches</h1>
      {cars.length === 0 ? (
        <p>No hay coches disponibles</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Imagen</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Nombre</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Odómetro</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Condición</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Puja actual</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <img src={car.image} alt={car.name} style={{ width: '150px', height: '100px', objectFit: 'cover' }} />
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{car.name}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{car.odometer} miles</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{car.condition}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>${car.currentBid}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <button 
                    onClick={() => handleBidNowClick(car)} 
                    style={{ padding: '5px 10px', backgroundColor: 'blue', color: 'white' }}>
                    Bid Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal for bidding */}
      {selectedCar && (
        <BidModal 
          car={selectedCar} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

// Simple styles for the modal
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    float: 'right',
  },
  bidButton: {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    marginTop: '10px',
    cursor: 'pointer',
  }
};

export default CarInventory;
