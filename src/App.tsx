import Dropdown from './components/Dropdown';
import Dialog from './components/Dialog';
import RadioGroup from './components/RadioGroup';
import CheckBox from './components/CheckBox';

function App() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-green-700 text-white'>
      <div className='pt-4 ml-4 '>
        <div className='wrapper'>
          <h1 className='heading'>1. Dropdown</h1>
          <Dropdown />
        </div>
        <div className='wrapper'>
          <h1 className='heading'>2. Dialog</h1>
          <Dialog />
        </div>
        <div className='wrapper'>
          <h1 className='heading'>3. Radio Group</h1>
          <RadioGroup />
        </div>
        <div className='wrapper'>
          <h1 className='heading'>4. CheckBox</h1>
          <CheckBox />
        </div>
      </div>
    </main>
  );
}

export default App;
