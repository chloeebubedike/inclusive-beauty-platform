import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar bg-base-100 shadow-lg sticky top-0 z-50'>
      <div className='flex-1 '>
        <div className='flex flex-row'>
          <div class='w-10 rounded-full'>
            <img
              class='w-10 h-10 rounded-full'
              alt='Tailwind CSS Navbar component'
              src='logo-light.png'
            />
          </div>
          <Link to='/' className='btn btn-ghost normal-case text-xl'>
            the thread
          </Link>
        </div>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/about'>favourites</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
