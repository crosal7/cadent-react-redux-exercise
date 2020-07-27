import React from 'react';

const ListSelection = (props) => {
  if (props.isSelected) {
    return <div className='listSelection'>{props.selected.name}</div>;
  } else {
    return <div className='listSelection'>Select an item</div>;
  }
};

export default ListSelection;
