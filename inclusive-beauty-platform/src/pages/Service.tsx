import React from 'react';
import { ServiceCard } from '../components/ServiceCard';

const Service = () => {
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-col gap-10'>
        <div className='text-center lg:text-left'>
          <div className='flex flex-row items-center gap-5 '>
            <h1 className='text-5xl font-bold'>Marla mae hair</h1>
            <button
              className='btn btn-primary'
              onClick={() =>
                window.open(
                  'https://marlamaehair.com/?v=7885444af42e',
                  '_blank'
                )
              }
            >
              see more
            </button>
          </div>
          <p className='py-6'>
            Discover Marla Mae Hair, London’s go-to for exquisite braiding
          </p>
          <div className='stats shadow'>
            <div className='stat'>
              <div className='stat-figure text-primary'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='inline-block h-8 w-8 stroke-current'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  ></path>
                </svg>
              </div>
              <div className='stat-title'>years of experience</div>
              <div className='stat-value text-primary'>10+</div>
              <div className='stat-desc'>over a decade in the industry</div>
            </div>

            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='inline-block h-8 w-8 stroke-current'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  ></path>
                </svg>
              </div>
              <div className='stat-title'>happy clients</div>
              <div className='stat-value text-secondary'>300+</div>
              <div className='stat-desc'>trusted by hundreds across London</div>
            </div>

            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <div className='avatar avatar-online'>
                  <div className='w-16 rounded-full'>
                    <img src='https://media.glamour.com/photos/6671adac0ad81f4553b9a4d7/master/w_2580%2Cc_limit/Goddess%2520braids%2520on%2520this%2520beauty%2520%2520%2C%2C%2520I%2520love%2520the%2520colour%2520mix!!%2520#explorepage%2520#goddessbraids%2520#bohobraids%2520#knotlessbraids%2520#ukhairstylist%2520#blackgirlhairstyles.jpg' />
                  </div>
                </div>
              </div>
              <div className='stat-value'>20</div>
              <div className='stat-title'>unique styles</div>
            </div>
          </div>
        </div>
        {/* <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <div className='card-body'>
            <fieldset className='fieldset'>
              <label className='label'>Email</label>
              <input type='email' className='input' placeholder='Email' />
              <label className='label'>Password</label>
              <input type='password' className='input' placeholder='Password' />
              <div>
                <a className='link link-hover'>Forgot password?</a>
              </div>
              <button className='btn btn-neutral mt-4'>Login</button>
            </fieldset>
          </div>
        </div> */}
        <div className='flex flex-row gap-3'>
          <ServiceCard
            serviceName='fulani braids'
            price={100}
            serviceProvider='marla mae hair'
          />{' '}
          <ServiceCard
            serviceName='braided ponytail'
            price={60}
            serviceProvider='marla mae hair'
          />{' '}
          <ServiceCard
            serviceName='smedium knotless braids'
            price={135}
            serviceProvider='marla mae hair'
            isServiceNew={true}
          />{' '}
        </div>
      </div>
    </div>
  );
};

export default Service;
