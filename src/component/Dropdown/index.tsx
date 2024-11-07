import React from 'react';
import Dropdown from '@/component/Dropdown/Item/index';
import RangeSlider from '../Multi-Slider/App/Apps';
interface Option {
  label?: string;
  component?: React.ReactNode;
}

// const option1: React.ReactNode[] = [<RangeSlider />];
const option2: string[] = ['Kathiyawadi Fix Meal', 'Punjabi Fixed Meal', 'Gujarati Fixed Meal'];
const option3: string[] = ['Cheese Corn Tomato Soup', 'Cream Of Tomato Soup', 'Hot N Sour Soup', 'Sweet Corn Plain Soup','Veg Manchow Soup'];
const option4: string[] = ['Paneer Spring Roll', 'Veg Crispy [Dry]', 'Veg Lollypop', 'Paneer Chilly [Gravy]', 'Veg Manchurian [Gravy]', 'Paneer Tikka [Dry]'];
const option5: string[] = ['Gulab jamun', 'Kaju Katli', 'Rasgulla', 'Rose Faluda Ice Cream', 'Gajar Halwa (Carrot Dessert)', 'Kheer', 'Brownie Bites', 'Dark Chocolate Cheesecake', 'Cupcake'];
const option6: string[] = ['Bajri Rotla Butter', 'Bajri Rotla Plain', 'Bajri Rotla Plain', 'Tawa Plain Roti', 'Tawa Plain Paratha', 'Aloo Stuff Paratha', 'Paneer Stuff Paratha', 'Tandoori Butter Roti', 'Tandoori Plain Roti', 'Plain Kulcha'];
const option7: string[] = ['Hydrabadi Biryani', 'Handi Biryani', 'Handi Biryani', 'Kashmiri Pulav Sweet', 'Veg Pulav'];
const option8: string[] = ['Butter Milk', 'Masala Butter Milk', 'Tea', 'Coffee', 'Coke', 'Pepsi', 'Hot Cocoa', 'Lemon Tea'];


const App: React.FC = () => {
  return (
    <div className='flex flex-col space-y-2 w-80'>
      <div className="flex ">
        {/* <Dropdown options={option1} text={['Price Range']} /> */}
      </div>
      <div className="flex ">
        <Dropdown options={option2} text={['Fixed Meal']} />
      </div>
      <div className="flex ">
        <Dropdown options={option3} text={['Soup']} />
      </div>
      <div className="flex">
        <Dropdown options={option4} text={['Grill & Starters']} />
      </div>
      <div className="flex ">
        <Dropdown options={option5} text={['Dessert']} />
      </div>
      <div className="flex justify-center items-center">
        <Dropdown options={option6} text={['Bread']} />
      </div>
      <div className="flex ">
        <Dropdown options={option7} text={['Pulao & Biryani']} />
      </div>
      <div className="flex ">
        <Dropdown options={option8} text={['Drinks (Beverages)']} />
      </div>
      {/* <div className="flex  md:hidden ">
        <Dropdown options={option7} text={['Drinks']} />
      </div> */}
    </div>
  );
};

export default App;

