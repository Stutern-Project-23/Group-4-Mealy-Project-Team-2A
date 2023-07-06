import React, { useState, useEffect } from 'react';

const EWallet = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    fetchBalanceFromAPI()
      .then((fetchedBalance) => setBalance(fetchedBalance))
      .catch((error) => console.error(error));
  }, []);

  const fetchBalanceFromAPI = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const fetchedBalance = 4100;
        resolve(fetchedBalance);
      }, 2000);
    });
  };

  const handleAddMoney = () => {
    addMoneyToAPI()
      .then(() => fetchBalanceFromAPI())
      .then((fetchedBalance) => setBalance(fetchedBalance))
      .catch((error) => console.error(error));
  };

  const addMoneyToAPI = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  return (
    <div className="wallet-card p-8 bg-white-600 shadow-xl rounded-2xl w-full my-6">
      <div className="mx-8">
        <h2 className="font-bold my-2 mx-2 sm:my-8 sm:mx-8 text-xl">Available Balance</h2>
        {balance !== null ? (
          <p className="font-bold my-2 mx-2 pb-2 sm:my-8 sm:mx-8 text-3xl">#{balance}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="flex justify-center sm:justify-end mx-4">
        <button className="add-money-btn px-5 self-center" onClick={handleAddMoney}>
          <div className="w-8 h-8 rounded-full bg-orange-600 font-light text-3xl text-white flex justify-center items-center m-2 pb-2 mx-8">
            <span className="text-center">+</span>
          </div>
          <div className="font-bold text-lg">Add Money</div>
        </button>
      </div>
    </div>
  );
};

export default EWallet;

