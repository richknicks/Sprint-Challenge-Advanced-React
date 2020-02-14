import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from './components/Nav';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders Nav component without crashing", ()=>{
  render(<Nav />)
});