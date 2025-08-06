import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Find_Job = () => {

    const [jobs,setJobs] = useState(null);
    console.log(jobs);
    

    // Fetch Jobs
    useEffect(() => {
            const fetchJobs = async() => {
                try {
                        const res = await axios.get('/alljobs.json');
                  setJobs(res.data)
                } catch (error) {
                    console.log(error);
                    
                }
            }


            fetchJobs() // call function
    },[])




    return (
        <div className='find_job p-4'>

            {/* ----------- section heading */}
                    <div className="section_heading bg-blue-200 p-4 rounded-tl-lg rounded-tr-lg ">
                                <div className="murkew_text w-full rounded-md primary_text_color text-2xl font-semibold capitalize p-1 mb-4 bg-white ">
                                        <marquee> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, omnis? </marquee>
                                </div>

                                 <div className=' w-[50%] sm:w-[35%] lg:w-[25%]  mx-auto my-6 '>
                                     <button className="primary_btn w-full uppercase text-lg ">
                                         paid adds
                                  </button>
                                 </div>
                    </div>


                   {/* ------------  --------- */}
                   <div className="data_section bg-gray-50 px-16 py-8">

                            {/*  */}
                             <div className='flex justify-center gap-6 mt-6 mb-12'>
                                            {/* filter by category */}
                                  <div className="filter_category">
                              <select defaultValue="Filter By Category" className="select select-info">
  <option disabled={true}>Filter By Category</option>
  <option>React</option>
  <option>Vue</option>
  <option>Angular</option>
</select>          

                                     </div>

                                              {/* filter by category */}
                                  <div className="filter_location">
                              <select defaultValue="Filter By location" className="select select-info">
  <option disabled={true}>Filter By location</option>
  <option>React</option>
  <option>Vue</option>
  <option>Angular</option>
</select>          

                                     </div>

                                              {/* sort */}
                                  <div className="sort_payment">
                              <select defaultValue="Sort By Payment" className="select select-info">
  <option disabled={true}>Sort by Payment</option>
  <option>React</option>
  <option>Vue</option>
  <option>Angular</option>
</select>          

                                     </div>





                             </div>

                              {/* jobs data table */}
                    <h1 className='capitalize font-semibold text-2xl mb-4'> Total Jobs : {jobs?.length} </h1>

                   <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead className='bg-base-200 text-base font-semibold text-gray-700'>
      <tr>
        <th className='border border-base-content/10 px-4 py-3 text-center'>Sl.</th>
        <th className='border border-base-content/10 px-4 py-3'>Job Title</th>
        <th className='border border-base-content/10 px-4 py-3 text-center'>Progress</th>
        <th className='border border-base-content/10 px-4 py-3 text-center'>Payment</th>
      </tr>
    </thead>
    <tbody>
                {/* table data row */}
            {
                        jobs?.map((job,index) => {
                              return (
                                  
      <tr className='hover:bg-blue-50 transition duration-200 cursor-pointer'>
        <th className='border border-base-content/10 px-4 py-2 text-center'>{index + 1}</th>
        <td className='border border-base-content/10 px-4 py-2'> {job.jobTitle} </td>
                                    {/* progress data */}
        <td className='border border-base-content/10 px-4 py-2 text-center text-sm'>
                                    <span className=''>  {job?.progress?.current} of {job?.progress?.total} </span>
   <progress className="progress primary_text_color " value={job?.progress?.current} max={job?.progress?.total}></progress>
        
        </td>

        <td className='border border-base-content/10 px-4 py-2 text-center'> {job.payment} </td>
      </tr>
                              )
                        })
            }
   
    </tbody>
  </table>
</div>

                   </div>
            
        </div>
    );
};

export default Find_Job;