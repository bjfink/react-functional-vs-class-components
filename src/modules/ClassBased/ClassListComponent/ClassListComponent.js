import React, { Component } from 'react';
import MemoListItem from '../../@components/ListItem';

export default class ClassList extends Component {
  render() {
    const { itemsList } = this.props;
    return (
      <div>
      {itemsList.map(item => (
        <MemoListItem item={item} />
      ))}
      </div>
    )
  }
}
