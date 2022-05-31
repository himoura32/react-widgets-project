import { useState } from 'react';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Accordian from './components/Accordian';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
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
  const [selected, setSelected] = useState(options[0]);

  return (
    <>
      <div className='ui container'>
        <Header />
        <Route path='/'>
          <Accordian items={items} />
        </Route>
        <Route path='/list'>
          <Search />
        </Route>
        <Route path='/dropdown'>
          <Dropdown
            label='Select a color'
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />
        </Route>
        <Route path='/translate'>
          <Translate />
        </Route>
      </div>
    </>
  );
}

export default App;
