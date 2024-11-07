import React from 'react';
import Dropdown from '@/component/TextDropdown/item/index';

const option1: string[] = ['Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.'];
const option2: string[] = ['Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.']
const option3: string[] = ['Pay with cash.']
const option4: string[] = ['Pay via UPI.']

const App: React.FC = () => {
  return (
    <div className='flex flex-col '>
      <div className="flex items-center">
      <Dropdown options={option1} text={['Direct Bank Tranfer']} /> 
    </div>
    {/* <div className="flex items-center">
      <Dropdown options={option2} text={['Check payments']} />
    </div> */}
    <div className="flex items-center">
      <Dropdown options={option3} text={['Cash payment']} />
    </div>
    <div className="flex items-center">
      <Dropdown options={option4} text={['UPI']} />
    </div>
   
    </div>
  );
};

export default App;

