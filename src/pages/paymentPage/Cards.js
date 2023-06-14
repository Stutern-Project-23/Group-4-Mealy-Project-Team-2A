import React, { useState } from 'react';

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [cardNumber, setCardNumber] = useState('');
  
    const handleAddCard = () => {
      if (cardNumber.length <= 16) {
        const newCard = { number: cardNumber };
        setCards([...cards, newCard]);
        setCardNumber('');
      } else {
        alert('Invalid card number!');
      }
    };
  
    const handleDeleteCard = (index) => {
      const updatedCards = cards.filter((_, i) => i !== index);
      setCards(updatedCards);
    };
  
    const renderCardNumber = (number) => {
      const lastFourDigits = number.slice(-4);
      const maskedNumber = '**** **** **** ' + lastFourDigits;
      return maskedNumber;
    };
  
    return (
      <div>
        <h1>Manage Cards</h1>
        <div>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="**** **** 2527"
          />
  <button onClick={handleAddCard}>
          <span>+</span> Add new Debit card
        </button>        </div>
        <div>
          {cards.map((card, index) => (
            <div key={index}>
              <span>{renderCardNumber(card.number)}</span>
              <button onClick={() => handleDeleteCard(index)}>
              <span className="delete-icon-placeholder">&#128465;</span>                
            </button>            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default Cards