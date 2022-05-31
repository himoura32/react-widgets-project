import { useState } from 'react';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Accordian from './components/Accordian';
import Translate from './components/Translate';
import './components/App.css';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The color Red',
    value: 'red',
  },
  {
    label: 'The color Green',
    value: 'green',
  },
  {
    label: 'The Shade of Blue',
    value: 'blue',
  },
];

function App() {

  return (
    <div className='ui container'>
      <Translate />
      {/* <Search /> */}
      {/* <Accordian items={items} /> */}
    </div>
  );
}

export default App;
