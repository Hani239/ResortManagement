"use client";
// MultiRangeSlider.js
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const MultiRangeSlider = () => {
  const [sliderValues, setSliderValues] = useState([20, 80]);

  const handleSliderChange = (values) => {
    setSliderValues(values);
  };

  return (
    <div className="w-11/12  mt-8">
      <Slider
        range
        min={0}
        max={100}
        step={1}
        value={sliderValues}
        onChange={handleSliderChange}
        railStyle={{ backgroundColor: '#e0e0e0' }}
        trackStyle={[{ backgroundColor: '#9FB7B9' }, { backgroundColor: '#9FB7B9' }, { backgroundColor: '#9FB7B9' }]}
        handleStyle={[
          { backgroundColor: '#9FB7B9', borderColor: '#9FB7B9' },
          { backgroundColor: '#9FB7B9', borderColor: '#9FB7B9' },
          { backgroundColor: '#9FB7B9', borderColor: '#9FB7B9' },
          { backgroundColor: '#9FB7B9', borderColor: '#9FB7B9' },
        ]}
      />
      <div className="flex justify-center gap-2 mt-4">
        {sliderValues.map((value, index) => (
          <span key={index}>
            {index > 0 && ' - '}${value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MultiRangeSlider;
