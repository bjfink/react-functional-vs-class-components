import React from 'react';
import MemoListItem from '../../@components/ListItem';

const MemoFunctionalList = ({itemsList}) => {
  return (
    <div>
      {itemsList.map(item => (
        <MemoListItem item={item} />
      ))}
    </div>
  )
}

export default React.memo(MemoFunctionalList);
