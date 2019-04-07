import React from 'react';
import MemoListItem from '../../@components/ListItem';

const FunctionalList = ({itemsList}) => {
  return (
    <div>
      {itemsList.map(item => (
        <MemoListItem item={item} />
      ))}
    </div>
  )
}

export default FunctionalList;
