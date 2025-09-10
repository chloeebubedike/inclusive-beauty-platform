import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar bg-base-100 shadow-lg sticky top-0 z-50'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          the thread
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>favourites</Link>
          </li>
          <li>
            <Link to='/contact'>contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
