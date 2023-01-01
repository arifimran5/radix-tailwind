import Dropdown from './components/Dropdown';
import Dialog from './components/Dialog';

function App() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500'>
      <div className='pt-4 ml-4 '>
        <div className='wrapper'>
          <h1 className='heading'>1. Dropdown</h1>
          <Dropdown />
        </div>
        <div className='wrapper'>
          <h1 className='heading'>2. Dialog</h1>
          <Dialog />
        </div>
      </div>
    </main>
  );
}

export default App;
