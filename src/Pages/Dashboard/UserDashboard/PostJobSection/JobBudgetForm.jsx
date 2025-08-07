import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { usePostJob } from '../../../../Context/PostJobProvider';

const JobBudgetForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      workerNeed: 5,
      eachWorkerEarn: 0,
      requireScreenshots: 0,
      estimatedDay: 3,
    },
  });

    const navigate = useNavigate();
  const { postJobData, updatePostJobData ,setIsActiveLine1,setIsActiveLine2,setIsActiveLine3} = usePostJob(); // context api

  const onSubmit = (data) => {
    updatePostJobData('budget', data);
  alert('form submited succesfully');
          <Navigate to='/'></Navigate>
         setIsActiveLine1(false);
         setIsActiveLine2(false);
         setIsActiveLine3(false)
  };

  const workerNeed = watch('workerNeed');
  const eachWorkerEarn = watch('eachWorkerEarn');
  const estimatedCost = Math.max(workerNeed * eachWorkerEarn, 0);

  const handleBack = () => {
      navigate('/dashboard/Post-Job/job-information')
  }

  return (
    <div className="max-w-4xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-md border border-gray-200"
      >
        {/* Left Side Inputs */}
        <div className="space-y-6">
          {/* Worker Need */}
          <div>
            <label className="text-blue-600 font-semibold block mb-2">
              Worker Need
            </label>
            <input
              type="number"
              {...register('workerNeed', { required: true, min: 1 })}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.workerNeed ? 'border-red-500' : 'border-gray-300'
              }`}
              min={1}
            />
            {errors.workerNeed && (
              <p className="text-red-600 text-sm mt-1">Please enter at least 1 worker.</p>
            )}
          </div>

          {/* Each Worker Earn */}
          <div>
            <label className="text-blue-600 font-semibold block mb-2">
              Each Worker Earn
            </label>
            <input
              type="number"
              {...register('eachWorkerEarn', { required: true, min: 0 })}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.eachWorkerEarn ? 'border-red-500' : 'border-gray-300'
              }`}
              min={0}
              step="0.01"
            />
            {errors.eachWorkerEarn && (
              <p className="text-red-600 text-sm mt-1">Please enter a non-negative value.</p>
            )}
          </div>

          {/* Require Screenshots */}
          <div>
            <label className="text-blue-600 font-semibold block mb-2">
              Require Screenshots
            </label>
            <input
              type="number"
              {...register('requireScreenshots', { required: true, min: 0 })}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.requireScreenshots ? 'border-red-500' : 'border-gray-300'
              }`}
              min={0}
            />
            {errors.requireScreenshots && (
              <p className="text-red-600 text-sm mt-1">Please enter a non-negative value.</p>
            )}
          </div>

          {/* Estimated Day */}
          <div>
            <label className="text-blue-600 font-semibold block mb-2">
              Estimated Day
            </label>
            <input
              type="number"
              {...register('estimatedDay', { required: true, min: 1 })}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.estimatedDay ? 'border-red-500' : 'border-gray-300'
              }`}
              min={1}
            />
            {errors.estimatedDay && (
              <p className="text-red-600 text-sm mt-1">Please enter at least 1 day.</p>
            )}
          </div>
        </div>

        {/* Right Side Estimated Job Cost */}
        <div className="flex flex-col justify-center bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm w-full">
          <p className="text-center text-blue-600 font-semibold mb-6 text-xl">
            Estimated Job Cost
          </p>
          <div className="flex items-center border border-gray-300 rounded overflow-hidden mb-2">
            <span className="bg-gray-200 px-4 py-3 text-2xl font-semibold text-gray-700 select-none">
              $
            </span>
            <input
              type="text"
              readOnly
              value={estimatedCost.toFixed(2)}
              className="w-full px-4 py-3 outline-none bg-gray-50 text-blue-600 font-semibold text-xl"
            />
          </div>
          <p className="text-center text-gray-500 mt-1 text-sm">
            Minimum spend $0.80
          </p>
        </div>

        {/* Buttons */}
        <div className="md:col-span-2 flex flex-col sm:flex-row justify-end gap-4 mt-10">
          <button
            type="button"
            className="btn_outline"
              onClick={() => handleBack()}
          >
            Back
          </button>
          <button
            type="submit"
            className="primary_btn"
          
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobBudgetForm;
