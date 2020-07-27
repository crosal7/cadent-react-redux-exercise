import React from 'react';
import PropTypes from 'prop-types';

export const ListTable = (props) => {
  const getItemIndex = (itemId) => {
    const result = props.groceryList.findIndex((obj) => {
      return obj.id === itemId;
    });
    return result;
  };

  const deleteItem = (itemId) => {
    const itemIndex = getItemIndex(itemId);
    const item = props.groceryList[itemIndex];

    if (props.selected.id === item.id) {
      props.deselectItem(item);
    }

    props.removeItem(itemIndex, 1);
  };

  const selectItem = (itemId) => {
    const itemIndex = getItemIndex(itemId);
    const item = props.groceryList[itemIndex];

    props.selectItem(item);
  };

  const deselectItem = (itemId) => {
    const itemIndex = getItemIndex(itemId);
    const item = props.groceryList[itemIndex];

    if (props.selected.id === item.id) {
      props.deselectItem(item);
    }
  };

  return (
    <table className='listTable'>
      <thead></thead>
      <tbody>
        {props.groceryList.map((listitem) => {
          return (
            <tr key={listitem.id}>
              <td>
                <p>{listitem.name}</p>
              </td>
              <td>
                <button className='button' onClick={() => deleteItem(listitem.id)}>
                  Remove Item
                </button>

                <button className='button' onClick={() => selectItem(listitem.id)}>
                  Select Item
                </button>

                <button className='button' onClick={() => deselectItem(listitem.id)}>
                  Deselect Item
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

ListTable.propTypes = {
  removeItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  deselectItem: PropTypes.func.isRequired
};

export default ListTable;
