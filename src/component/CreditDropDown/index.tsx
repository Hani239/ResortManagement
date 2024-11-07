import React from 'react';
import Dropdown from '@/component/CreditDropDown/Item/index';

const option1: string[] = [''];

const CrApp: React.FC = () => {
  return (
    <div className='flex flex-col '>
      <div className="flex items-center">
      <Dropdown options={option1} text={['Direct Bank Tranfer']} /> 
    </div>
   
    </div>
  );
};

export default CrApp;

