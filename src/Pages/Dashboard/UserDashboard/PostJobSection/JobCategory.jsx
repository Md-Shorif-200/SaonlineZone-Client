import React, { useEffect, useState } from 'react';
import { usePostJob } from '../../../../Context/PostJobProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const JobCategory = () => {
  const [jobCategoryData, setJobCategoryData] = useState({}); // store job category data
  const [selectedMainCategory, setSelectedMainCategory] = useState('All'); 
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [loading, setLoading] = useState(true); // loading state 

  const { updatePostJobData,setJobCategoryPath,setJobInformationFormPath } = usePostJob(); // context api
  const navigate = useNavigate();  // react router navigate
  const location = useLocation() ; // route location
  

  setJobCategoryPath(location.pathname) // store location path
  setJobInformationFormPath(null);

  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/job-category.json'); 
        const data = await res.json();
        setJobCategoryData(data);
      } catch (err) {
        console.error('Failed to fetch job categories', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleSelectMainCategory = (category) => {
    setSelectedMainCategory(category);
    setSelectedSubCategory(null);
  };

  const handleSelectSubCategory = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  const handleNext = () => {
    if (!selectedSubCategory) {
      alert('Please select a job sub-category before continuing.');
      return;
    }
    updatePostJobData('category', {
      mainCategory: selectedMainCategory === 'All' ? 'All' : selectedMainCategory,
      subCategory: selectedSubCategory,
    });

    navigate('/dashboard/Post-Job/job-information'); // navigate to next route
    setIsActiveLine2(true)
  };

  const handleBack = () => {
    navigate('/dashboard/Post-Job');
  };

  if (loading) return <span className="loading loading-spinner text-primary"></span>;

  const mainCategories = ['All', ...Object.keys(jobCategoryData)];

  let subCategories = [];

  if (selectedMainCategory === 'All') {
    subCategories = Object.values(jobCategoryData).flat();
  } else if (selectedMainCategory in jobCategoryData) {
    subCategories = jobCategoryData[selectedMainCategory];
  }

  subCategories = [...new Set(subCategories)]; 

  return (
    <div className="pt-20">
      {/* Main Category Tabs */}
      <div className="tabs-btn tabs tabs-boxed mb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6  gap-2">
        {mainCategories.map(cat => (
          <button
            key={cat}
            onClick={() => handleSelectMainCategory(cat)}
              className={` tab-btn tab transition-all duration-200 font-semibold border w-40
        ${selectedMainCategory === cat 
          ? '!bg-blue-500 !text-white !border-blue-500'
          : 'bg-base-200 hover:bg-blue-100 text-black border border-gray-200'
        }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="mb-3 border border-orange-400 rounded-md px-3 py-1 text-orange-600 italic font-semibold text-sm max-w-max">
        *Select one job sub-category.
      </p>

      {/* Sub Categories */}
      <div className="flex flex-wrap gap-2">
        {subCategories.map(subCat => {
          const isSelected = selectedSubCategory === subCat;
          return (
            <button
              key={subCat}
              onClick={() => handleSelectSubCategory(subCat)}
              className={`btn btn-sm transition-all duration-150 ${
                isSelected
                  ? 'bg-blue-500 text-white'
                  : 'bg-base-300 text-gray-800 hover:bg-blue-100'
              }`}
            >
              {subCat}
            </button>
          );
        })}
      </div>

      {/* Selected Sub Category Preview */}
      {selectedSubCategory && (
        <div className="mt-4 p-3 bg-base-200 rounded-md">
          <strong>Selected Job Sub-Category:</strong> {selectedSubCategory}
        </div>
      )}

      {/* Back & Next Buttons */}
      <div className="mt-6 flex justify-end gap-3">
        <button className="btn_outline" onClick={handleBack}>
          Back
        </button>
        <button className="primary_btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default JobCategory;
