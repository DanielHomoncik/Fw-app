import React from 'react';
import { Container, ListGroup, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import logo from '../../assets/Logo.png';
import './Top100List.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

library.add(fasStar, farStar);

const Top100List = () => {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      imageUrl: logo,
      rating: 4.5,
      description: "A classic tale of redemption and hope.",
    },
    {
      id: 2,
      title: "The Godfather",
      imageUrl: logo,
      rating: 3.8,
      description: "A powerful family drama set in the world of organized crime.",
    },
    {
      id: 3,
      title: "The Dark Knight",
      imageUrl: logo,
      rating: 4.2,
      description: "The Caped Crusader faces off against his greatest nemesis.",
    },
    {
      id: 4,
      title: "The Godfather",
      imageUrl: logo,
      rating: 3.8,
      description: "A powerful family drama set in the world of organized crime.",
    },
    {
      id: 5,
      title: "The Dark Knight",
      imageUrl: logo,
      rating: 4.2,
      description: "The Caped Crusader faces off against his greatest nemesis.",
    },
    // dodaj pozostałe filmy
  ];

  return (
	<Container className="Container">
	  <ListGroup>
		{movies.map((movie) => (
		<ListGroup.Item key={movie.id} className="d-flex flex-row align-items-center">
		<Card.Img variant="top" src={movie.imageUrl} style={{ maxWidth: '100px', marginRight: '40px' }} />
		<div className="movie-info">
		  <div className="movie-title">
			<Card.Title>{movie.title}</Card.Title>
		  </div>
		  <div className="movie-description">{movie.description}</div>
		  <Rating
			emptySymbol={<FontAwesomeIcon icon={['far', 'star']} size="lg" />}
			fullSymbol={<FontAwesomeIcon icon={['fas', 'star']} size="lg" />}
			fractions={2}
			initialRating={movie.rating}
			readonly
			className="movie-rating"
		  />
		</div>
	  </ListGroup.Item>
	  
	   
		))}
	  </ListGroup>
	</Container>
  );
  
};

export default Top100List;
