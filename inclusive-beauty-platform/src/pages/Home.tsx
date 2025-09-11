import { useState } from 'react';
import { ServiceCard } from '../components/ServiceCard';
import React from 'react';

interface Service {
  name: string;
  price: number;
  provider: string;
  isNew: boolean;
  location: string;
}

interface HomeProps {
  services?: Service[];
}

const Home = ({ services }: HomeProps) => {
  return (
    <div className='flex flex-col gap-5 mt-14 mb-14'>
      {services?.map((service: Service) => (
        <ServiceCard
          serviceName={service.name}
          price={service.price}
          serviceProvider={service.provider}
          isServiceNew={service.isNew}
          location={service.location}
        />
      ))}
    </div>
  );
};
export default Home;
