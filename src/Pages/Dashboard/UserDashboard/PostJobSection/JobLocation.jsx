import React, { useEffect, useState } from 'react';
import { usePostJob } from '../../../../Context/PostJobProvider';
import { useNavigate } from 'react-router-dom';

const categories = [
  "International",
  "Asia",
  "USA & Western",
  "Africa",
  "Europe West",
  "Muslim Countries",
  "Europe East",
  "Latin America",
  "All"
];

const JobLocation = () => {
  const [countriesData, setCountriesData] = useState({});
  const { postJobData, updatePostJobData,setJobCategoryPath,setJobBudgetFormPath} = usePostJob(); // context api
  const [selectedCategory, setSelectedCategory] = useState("All"); // data category
  const [selectedCountry, setSelectedCountry] = useState(postJobData.location || null); // county
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  setJobCategoryPath(null);
  setJobBudgetFormPath(null)

      // fetch county data
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('/countries.json');
        const data = await response.json();
        setCountriesData(data);
      } catch (error) {
        console.error('Failed to load countries', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

      //  NEXT BUTTON 
  const handleNext = () => {
    if (!selectedCountry) {
      alert("Please select a country before continuing.");
      return;
    }
    updatePostJobData("location", selectedCountry); 
    navigate('/dashboard/Post-Job/job-category');  // navigate to next route
    // setIsActiveLine1(true)

  };

  if (loading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }

  const countries = countriesData[selectedCategory] || [];

  return (
    <div className='pt-10 lg:pt-20'>
      {/*  COUNTRY LOCATION Tabs */}
    <div className="tabs-btn tabs tabs-boxed mb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6  gap-2">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={` tab-btn tab transition-all duration-200 font-semibold border w-40
        ${selectedCategory === cat 
          ? '!bg-blue-500 !text-white !border-blue-500'
          : 'bg-base-200 hover:bg-blue-100 text-black border border-gray-200'
        }`}
    >
      {cat}
    </button>
  ))}
</div>


      <p className="mb-6 border border-orange-400 rounded-md px-3 py-1 text-orange-600 italic font-semibold text-sm max-w-max">
        *Select one country as the job location.
      </p>

      {/* Countries */}
      <div className="flex flex-wrap gap-2">
        {countries.map(country => {
          const isSelected = selectedCountry === country;
          return (
            <button
              key={country}
              onClick={() => handleSelectCountry(country)}
              className={`btn btn-sm transition-all duration-150 ${
                isSelected
                  ? 'bg-blue-500 text-white'
                  : 'bg-base-300 text-gray-800 hover:bg-blue-100'
              }`}
            >
              {country}
            </button>
          );
        })}
      </div>

      {/* Selected Country Preview */}
      {selectedCountry && (
        <div className="mt-4 p-3 bg-base-200 rounded-md">
          <strong>Selected Country:</strong> {selectedCountry}
        </div>
      )}

      {/* Next Button */}
      <div className="mt-6 flex justify-end">
       

        <button
          className="primary_btn"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobLocation;
