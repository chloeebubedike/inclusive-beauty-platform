import { useState } from 'react';
import { ServiceCard } from '../components/ServiceCard';

export function Home() {
  return (
    <div className='flex flex-col gap-5'>
      <ServiceCard
        serviceName='classic sew in (middle/side part'
        price='£125'
        serviceProvider='stephanie lebby hair'
      />
      <ServiceCard
        serviceName='hydro-bonding'
        price='£120'
        serviceProvider='stephanie lebby hair'
      />
      <ServiceCard
        serviceName='boho knotless braids'
        price='£180'
        serviceProvider='marla mae hair'
      />
    </div>
  );
}
