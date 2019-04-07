import React, { Component } from 'react';
import './App.css';
import ClassListComponent from './modules/ClassBased/ClassListComponent';
import ClassListPureComponent from './modules/ClassBased/ClassListPureComponent';
import FunctionalList from './modules/Functional/FunctionialList';
import MemoFunctionalList from './modules/Functional/MemoFunctionialList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      itemsList: [
        {
          name: 'Tom',
          address: {
            streetNum: 111,
            street: 'main',
          }
        },
        {
          name: 'Venessa',
          address: {
            streetNum: 222,
            street: 'main',
          }
        },
        {
          name: 'Mike',
          address: {
            streetNum: 333,
            street: 'main',
          }
        },
        {
          name: 'Tessa',
          address: {
            streetNum: 444,
            street: 'main',
          }
        },
      ]
    }

    this.increment = this.increment.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  increment() {
    this.setState(state => ({ counter: state.counter + 1 }));
  }

  onChange(e) {
    const streetNum = e.target.value;
    this.setState(state => {
      const tom = state.itemsList.find(item => item.name === 'Tom');
      tom.address = {
        ...tom.address,
        streetNum,
      };

      const items = state.itemsList.filter(item => item.name !== 'Tom');

      return({
        itemsList: [
          ...items,
          tom,
        ]
      })
    })
  }

  render() {
    const { counter, itemsList } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          This is a test of Class vs Functional components
        </header>
        {counter}
        <br />
        <button onClick={this.increment}> Increment Counter</button>
        <br />
        <input type="text" onChange={this.onChange} placeholder="set Tom's street #" />
        <br />
        <h2>Class Based (Component)</h2>
        <ClassListComponent itemsList={itemsList} />
        <br />
        <br />
        <h2>Class Based (PureComponent)</h2>
        <ClassListPureComponent itemsList={itemsList} />
        <br />
        <br />
        <h2>Functional</h2>
        <FunctionalList itemsList={itemsList} />
        <br />
        <br />
        <h2>Memo Functional</h2>
        <MemoFunctionalList itemsList={itemsList} />
      </div>
    );
  }
}

export default App;
