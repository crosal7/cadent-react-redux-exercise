import React from 'react';
import PropTypes from 'prop-types';

export const ListInputs = ({ addItem }) => {
  const createItem = () => {
    const item = {
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground'
    };

    addItem(item);
  };

  return (
    <div>
      <button className='addItemButton' onClick={createItem}>
        Add Random Item
      </button>
    </div>
  );
};

ListInputs.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default ListInputs;
