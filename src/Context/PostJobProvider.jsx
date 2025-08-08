import React, { createContext, useContext, useState } from 'react';

// Context Create
const PostJobContext = createContext();

// Custom Hook
export const usePostJob = () => useContext(PostJobContext);

// Provider
export const PostJobProvider = ({ children }) => {
  const [postJobData, setPostJobData] = useState({
    location: null,
    category: null,
    jobInformation: {},
    budget: {}

  });

  const [jobCategoryPath ,setJobCategoryPath] = useState(null)
  const [jobInformationFormPath ,setJobInformationFormPath] = useState(null)
  const [jobBudgetFormPath ,setJobBudgetFormPath] = useState(null)


   console.log(jobCategoryPath);
   
  // Dynamic Update Function
  const updatePostJobData = (key, value) => {
    setPostJobData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <PostJobContext.Provider value={{ postJobData, updatePostJobData,jobCategoryPath,jobInformationFormPath,jobBudgetFormPath,setJobCategoryPath ,setJobInformationFormPath,setJobBudgetFormPath}}>
      {children}
    </PostJobContext.Provider>
  );
};
