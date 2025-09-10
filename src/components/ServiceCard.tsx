import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  serviceName: string;
  price: string;
  serviceProvider: string;
}
export const ServiceCard = ({
  serviceName,
  price,
  serviceProvider,
}: ServiceCardProps) => {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!isActive);

  const handleBookNow = () => {
    navigate('/service');
  };

  return (
    <div className='flex flex-col'>
      <div className='card card-border bg-base-100 w-full max-w-lg'>
        <div className='card-body'>
          <h2 className='card-title'>{serviceName}</h2>
          <p>from {price}</p>
          <p>{serviceProvider}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary' onClick={handleBookNow}>
              book now
            </button>
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
        </div>
      </div>
    </div>
  );
};
