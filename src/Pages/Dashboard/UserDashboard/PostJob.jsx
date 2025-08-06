import React, { useState } from 'react';

const regions = [
  'International', 'Asia', 'USA & Western', 'Africa',
  'Europe West', 'Muslim Countries', 'Europe East',
  'Latin America', 'All'
];

const countries = [
  'Albania', 'Lithuania', 'Nepal', 'Poland', 'Slovenia', 'China', 'Russia',
  'Japan', 'South Korea', '(UAE)United Arab Emirates', 'Sri Lanka', 'Malaysia',
  'Philippines', 'Singapore', 'Thailand', 'Vietnam', 'Afghanistan', 'United States',
  'Canada', 'Australia', 'New Zealand', 'Egypt', 'Morocco', 'Indonesia', 'Romania',
  'Germany', 'France', 'United Kingdom', 'Bangladesh', 'India', 'Pakistan'
];

const PostJob = () => {
  const [activeRegion, setActiveRegion] = useState('International');
  const [hiddenCountries, setHiddenCountries] = useState([]);

  const toggleCountry = (country) => {
    if (hiddenCountries.includes(country)) {
      setHiddenCountries(hiddenCountries.filter(item => item !== country));
    } else {
      setHiddenCountries([...hiddenCountries, country]);
    }
  };

  return (
   <div className="post_job_section p-10">
             <div className="p-12 max-w-6xl mx-auto bg-white shadow-sm border border-gray-200">
     




<div className="flex justify-between items-center mb-12">
  {['Select Location', 'Select Category', 'Job Information', 'Budget & Setting'].map((step, index, arr) => (
    <div key={index} className="flex-1 flex flex-col items-center relative">

      {/* Left line */}
      {index !== 0 && (
        <div className="absolute top-5 left-0 w-1/2 h-1 bg-gray-300 z-0"></div>
      )}

      {/* Right line */}
      {index !== arr.length - 1 && (
        <div className="absolute top-5 right-0 w-1/2 h-1 bg-gray-300 z-0"></div>
      )}

      {/* Step Circle */}
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 
        ${index === 0 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}>
        {index + 1}
      </div>

      {/* Step Label */}
      <p className="text-sm mt-2 text-center">{step}</p>
    </div>
  ))}
</div>






      {/* Region Tabs */}
      <div className="flex flex-wrap gap-2 my-10">
        {regions.map(region => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`px-4 py-1 rounded-md border text-sm font-medium 
              ${activeRegion === region ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Instruction */}
      <p className="text-orange-600 font-medium mb-3">
        *Select countries you want to hide from the selected zone (optional)
      </p>

      {/* Country Tags */}
      <div className="flex flex-wrap gap-3">
        {countries.map(country => (
          <span
            key={country}
            onClick={() => toggleCountry(country)}
            className={`px-3 py-1 rounded-md text-sm cursor-pointer border 
              ${hiddenCountries.includes(country)
                ? 'bg-red-500 text-white border-red-600'
                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'}`}
          >
            {country}
          </span>
        ))}
      </div>

        <div className="button text-end my-6">
               <button className='primary_btn'> Next</button>
        </div>
    </div>
   </div>
  );
};

export default PostJob;
