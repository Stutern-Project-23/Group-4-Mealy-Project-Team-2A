  import React, { useState, useEffect } from 'react';
  import mastercardLogo from '../../../assets/Mastercard.png';
  import { RiDeleteBin6Fill } from 'react-icons/ri';

  const Cards = () => {
    const [cards, setCards] = useState([]);
    const [cardNumber, setCardNumber] = useState('');
    const [showInput, setShowInput] = useState(false);

    useEffect(() => {
      
    }, []);

    const handleAddCard = () => {
      if (cardNumber.length <= 16) {
        const newCard = { number: cardNumber };
        setCards([...cards, newCard]);
        setCardNumber('');
        setShowInput(false);
      } else {
        alert('Invalid card number!');
      }
    };

    const handleDeleteCard = (index) => {
      const updatedCards = [...cards];
      updatedCards.splice(index, 1);
      setCards(updatedCards);
    };

    const renderCardNumber = (number) => {
      const lastFourDigits = number.slice(-4);
      const maskedNumber = '**** **** **** ' + lastFourDigits;
      return maskedNumber;
    };

    const handleAddAnotherCard = () => {
      setShowInput(true);
    };

    const showDivs = cards.length === 0; // Check if all new cards have been deleted

    return (
      <div className="wallet-card bg-white-600 p-8 w-full mt-24 shadow-xl rounded-2xl my-6">
        <div className="mx-8">
          <h1 className="font-bold my-2 mx-2 sm:my-8 sm:mx-8 text-lg ml-8">Manage Cards</h1>
          <div>
            {!showInput && showDivs && (
              <div>
                <div className="border-2 border-orange-600 p-6 m-6 sm:w-2/3 flex items-center gap-x-6">
                  <img src={mastercardLogo} alt="Mastercard Logo" className="w-8 h-8 mr-2" />
                  <div className="placeholder-black font-bold text-2xl flex-grow">
                    **** **** 2527
                  </div>
                  <RiDeleteBin6Fill
                    className="text-orange-600 ml-2 cursor-pointer rounded-full border border-orange-600"
                    size={24}
                    onClick={() => handleDeleteCard(cards.length)}
                  />
                </div>
                <div className="border-2 border-orange-600 p-6 m-6 sm:w-2/3 flex items-center gap-x-6">
                  <img src={mastercardLogo} alt="Mastercard Logo" className="w-8 h-8 mr-2" />
                  <div className="placeholder-black font-bold text-2xl flex-grow">
                    **** **** 4312
                  </div>
                  <RiDeleteBin6Fill
                    className="text-orange-600 ml-2 cursor-pointer rounded-full border border-orange-600"
                    size={24}
                    onClick={() => handleDeleteCard(cards.length + 1)}
                  />
                </div>
              </div>
            )}
            {!showInput && cards.map((card, index) => (
              <div key={index} className="border-2 border-orange-600 p-6 m-6 sm:w-2/3 flex items-center gap-x-6">
                <img src={mastercardLogo} alt="Mastercard Logo" className="w-8 h-8 mr-2" />
                <div className="placeholder-black fontApologies for the incomplete response. Here's the remaining part of the code:

  ```jsx
  -bold text-2xl flex-grow">
                  {renderCardNumber(card.number)}
                </div>
                <RiDeleteBin6Fill
                  className="text-orange-600 ml-2 cursor-pointer rounded-full border border-orange-600"
                  size={24}
                  onClick={() => handleDeleteCard(index)}
                />
              </div>
            ))}
            {showInput && (
              <div>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="border-2 border-orange-600 p-6 m-6 sm:w-2/3"
                  placeholder="Enter card number"
                />
                <button className="w-8 h-8 rounded-full bg-orange-600 font-light text-3xl text-white flex justify-center items-center mx-8 pb-2" onClick={handleAddCard}>
                  <span className="text-center">+</span>
                </button>
              </div>
            )}
          </div>
          {!showInput && (
            <button onClick={handleAddAnotherCard}>
              <div className="flex items-center ml-8">
                <div className="w-8 h-8 rounded-full bg-orange-600 font-light text-3xl text-white flex justify-center items-center m-2 pb-2">
                  <span className="text-center">+</span>
                </div>
                <div className="font-bold text-lg">Add another Debit card</div>
              </div>
            </button>
          )}
        </div>
      </div>
    );
  };

  export default Cards;
