import Accordian from './components/Accordian';
import Search from './components/Search';
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

function App() {
  return (
    <div className='ui container'>
      <Search />
      {/* <Accordian items={items} /> */}
    </div>
  );
}

export default App;
