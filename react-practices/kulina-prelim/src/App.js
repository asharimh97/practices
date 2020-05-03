import React, { useState, useMemo } from 'react';
import './App.css';
import AddressBar from './components/AddressBar';
import { generateStartDay } from './utils/helper';
import DateList from './components/DateList';
import AppContext from './context/AppContext';
import ButtonTimeslot from './components/ButtonTimeslot';
import ListFood from './components/ListFood';
import Cart from './components/Cart';
import ModalLocation from './components/ModalLocation';

function App() {
  const startDate = generateStartDay();
  const appState = {
    activeDate: startDate,
    timeslot: "lunch",
    cart: []
  };
  const [state, setState] = useState(appState);
  const [address, setAddress] = useState("Tokopedia Tower");
  const [showModal, setShowModal] = useState(false);

  const appContextValue = useMemo(() => ({
    state,
    setState
  }), [state, setState]);

  const handleSetAddress = addr => {
    setAddress(addr);
    setShowModal(false);
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <div className="container">
        <AddressBar 
          onShowAddressModal={() => setShowModal(true)} 
          currentAddress={address} 
        />
        <DateList startDate={startDate} activeDate={state.activeDate} />

        <ButtonTimeslot />
        <ListFood />
        <Cart />

        <ModalLocation
          visible={showModal}
          onCloseModal={() => setShowModal(false)} 
          onSelectAddress={handleSetAddress}
        />
      </div>
    </AppContext.Provider>
  );
}

export default App;
