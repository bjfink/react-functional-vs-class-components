import React, { Fragment } from 'react';

const ListItem = ({item}) => {
  return (
    <Fragment>
      {item.name}
      <br/>
      {item.address && `${item.address.streetNum} ${item.address.street}`}
      <br />
      <br />
    </Fragment>
  )
}

export default ListItem;
