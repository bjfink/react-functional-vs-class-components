import React, { PureComponent } from 'react';
import MemoListItem from '../../@components/ListItem';

export default class ClassList extends PureComponent {
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
