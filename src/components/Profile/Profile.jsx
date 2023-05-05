import React, { useState } from 'react';
import { Container, Row, Col, Image, Card, Button, Modal } from 'react-bootstrap';
import Rating from 'react-rating';
import logo from '../../assets/Logo.png';

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // dodana zmienna isAdmin

  const name = 'John';
  const surname = 'Doe';
  const imageUrl = logo;
  const rating = 4.5;

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container className="mt-3">
      <Row>
        <Col sm={3}>
          <Image src={imageUrl} roundedCircle fluid  style={{ cursor: 'pointer' }} />
        </Col>
        <Col sm={9}>
          <Card>
            <Card.Body>
              <Card.Title>{name} {surname}</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum lacus eu libero consequat, ac consequat leo suscipit. Duis sagittis turpis sit amet ante dapibus pharetra.
              </Card.Text>
              <Rating
                emptySymbol="far fa-star fa-lg"
                fullSymbol="fas fa-star fa-lg"
                fractions={2}
                initialRating={rating}
                readonly
                className="mr-1"
              />
              {rating.toFixed(1)}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name} {surname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={imageUrl} roundedCircle fluid />
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum lacus eu libero consequat, ac consequat leo suscipit. Duis sagittis turpis sit amet ante dapibus pharetra.
          </Card.Text>
          <Rating
            emptySymbol="far fa-star fa-lg"
            fullSymbol="fas fa-star fa-lg"
            fractions={2}
            initialRating={rating}
            readonly
            className="mr-1"
          />
          {rating.toFixed(1)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          {isAdmin && <Button variant="primary">Edit profile</Button>} {/* wyświetlenie dodatkowej opcji tylko dla administratorów */}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Profile;
