import './Menu.css';
import logo from '../../assets/Logo.png';
import Profile from '../Profile/Profile';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Menu = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="menu-container">
      <div className="d-flex align-items-start">
        <img src={logo} alt="Logo" className="img-fluid img-logo" />
      </div>
      <h1 className="mt-4 mb-4 green-text">Top 100 Movies of All Time</h1>
      <div className="btn-group">
        <button type="button" className="btn btn-success btn-lg" onClick={handleClick}>
          Profil
        </button>
        <button type="button" className="btn btn-success btn-lg">
          Ulubione
        </button>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Profil użytkownika</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Profile />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Menu;
