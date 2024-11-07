import React from 'react';
import Dropdown3 from './item';
// import Dropdown from '@/component/ProductView/Dropdown3/item/index';

const option1: string[] = ['This A-shaped chalet comes in 2 levels. The lower level occupies the living room, bathroom and a comfortable open-air seating territory, while the upper level has a compact, minimalist room and sleek river view balcony. Even better, the glass windows bolster amplified natural lighting while making a perfect spot for unadulterated views of mother earth.'];
const option2: string[] = ['Minimum Occupancy – 02 Guests' , 'Maximum Occupancy (Adults & Children) – 03 Guest' , 'Level – Ground Level (Duple Room) ','Room Amenities – Tea-Coffee Maker, Mini Fridge, Safety Locker, Bathrobe, Water Dispenser, Toiletries. ',' Children Allowed – Yes.']

const PVDrop: React.FC = () => {
  return (
    <div className='flex flex-col '>
      <div className="flex items-center border-t-2 border-b-2">
      <Dropdown3 options={option1} text={['DESCRIPTION OF ROOM']} /> 
    </div>
    <div className="flex items-center border-b-2">
      <Dropdown3 options={option2} text={['TERMS & CONDITIONS']} />
    </div>
    </div>
  );
};

export default PVDrop;

