import React, { Component } from 'react';
import './charSheet.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class CharSheet extends Component {
  state = {
    characters: [],
    isLoading: true,
  };

  async componentDidMount() {
    try {
      const response = await fetch('https://ded-companion.onrender.com/characters');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data)
      this.setState({
        characters: data,
        isLoading: false,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading, characters } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className='card_container'>
        {characters.map((character, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>{character.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default CharSheet;