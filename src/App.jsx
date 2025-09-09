import { useState } from 'react';
import './App.css';

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!isActive);

  return (
    <div className='min-h-screen min-w-screen bg-base-100 flex items-center justify-center gap-4'>
      <button
        className={`btn btn-square ${
          isActive ? 'bg-primary text-white' : 'bg-base-200'
        }`}
        onClick={toggleActive}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
          />
        </svg>
      </button>
    </div>
  );
}

export default App;
