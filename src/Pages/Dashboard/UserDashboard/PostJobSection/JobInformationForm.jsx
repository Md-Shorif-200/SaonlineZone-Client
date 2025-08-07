import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { usePostJob } from '../../../../Context/PostJobProvider';

const JobInformationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();


 const { updatePostJobData,setIsActiveLine3 } = usePostJob();  // context api
  const navigate = useNavigate();

  const onSubmit = (data) => {
    updatePostJobData("jobInformation", data); 
    navigate("/dashboard/Post-Job/budget-settings"); 
            setIsActiveLine3(true)
  };

  const handleBack = () => {
    navigate("/dashboard/Post-Job/job-category"); 
  };





  return (
    <div className="max-w-3xl mx-auto pt-20 px-4">
      <h2 className="text-2xl font-semibold mb-6">Job Information</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>

        {/* Job Title */}
        <div>
          <label htmlFor="jobTitle" className="block mb-1 font-medium">
            Write an accurate job Title
          </label>
          <input
            id="jobTitle"
            type="text"
            maxLength={50}
            {...register("jobTitle", { required: "Job Title is required"})}
            placeholder="Quis earum qui obcaecati "
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.jobTitle ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-500"
            }`}
          />
          <p className="text-sm text-gray-500 mt-1"></p>
          {errors.jobTitle && <p className="text-red-600 text-sm mt-1">{errors.jobTitle.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block mb-1 font-medium">Description</label>
          <textarea
            id="description"
            rows={4}
            {...register("description", { required: "Description is required" })}
            placeholder="Write job description here..."
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.description ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-500"
            }`}
          />
          {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>}
        </div>

        {/* Proof 1 */}
        <div>
          <label htmlFor="proof1" className="block mb-1 font-medium">Proof 1</label>
          <input
            id="proof1"
            type="text"
            {...register("proof1", { required: "Proof 1 text is required" })}
            placeholder="Ullamco et beatae eo"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.proof1 ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-500"
            }`}
          />
          {errors.proof1 && <p className="text-red-600 text-sm mt-1">{errors.proof1.message}</p>}
        </div>

        {/* Proof Type 1 */}
        <div>
          <label htmlFor="proofType1" className="block mb-1 font-medium">Proof Type 1</label>
          <select
            id="proofType1"
            {...register("proofType1", { required: "Proof Type 1 is required" })}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.proofType1 ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-500"
            }`}
            defaultValue='Select proof type'
          >
            <option value="Select proof type" disabled>Select proof type</option>
            <option value="Text Proof">Text Proof</option>
            <option value="Screenshot Proof">Screenshot Proof</option>
     
          </select>
          {errors.proofType1 && <p className="text-red-600 text-sm mt-1">{errors.proofType1.message}</p>}
        </div>

        {/* Proof 2 */}
        <div>
          <label htmlFor="proof2" className="block mb-1 font-medium">Proof 2</label>
          <input
            id="proof2"
            type="text"
            {...register("proof2", { required: "Proof 2 text is required" })}
            placeholder="Aperiam amet incidu"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.proof2 ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-500"
            }`}
          />
          {errors.proof2 && <p className="text-red-600 text-sm mt-1">{errors.proof2.message}</p>}
        </div>

        {/* Proof Type 2 */}
        <div>
          <label htmlFor="proofType2" className="block mb-1 font-medium">Proof Type 2</label>
          <select
            id="proofType2"
            {...register("proofType2", { required: "Proof Type 2 is required" })}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.proofType2 ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-500"
            }`}
            defaultValue='Select proof type'
          >
            <option value="Select proof type" disabled>Select proof type</option>
            <option value="Text Proof">Text Proof</option>
            <option value="Screenshot Proof">Screenshot Proof</option>
       
          </select>
          {errors.proofType2 && <p className="text-red-600 text-sm mt-1">{errors.proofType2.message}</p>}
        </div>

        {/* Proof 3 */}
        <div>
          <label htmlFor="proof3" className="block mb-1 font-medium">Proof 3</label>
          <input
            id="proof3"
            type="text"
            {...register("proof3", { required: "Proof 3 text is required" })}
            placeholder="Fugiat enim assumen"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.proof3 ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-500"
            }`}
          />
          {errors.proof3 && <p className="text-red-600 text-sm mt-1">{errors.proof3.message}</p>}
        </div>

        {/* Proof Type 3 */}
        <div>
          <label htmlFor="proofType3" className="block mb-1 font-medium">Proof Type 3</label>
          <select
            id="proofType3"
            {...register("proofType3", { required: "Proof Type 3 is required" })}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.proofType3 ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-500"
            }`}
            defaultValue='Select proof type'
          >
            <option value="Select proof type" disabled>Select proof type</option>
            <option value="Text Proof">Text Proof</option>
            <option value="Screenshot Proof">Screenshot Proof</option>
            <option value="Video Proof">Video Proof</option>
            <option value="Other Proof">Other Proof</option>
          </select>
          {errors.proofType3 && <p className="text-red-600 text-sm mt-1">{errors.proofType3.message}</p>}
        </div>

        {/* Proof 4 */}
        <div>
          <label htmlFor="proof4" className="block mb-1 font-medium">Proof 4</label>
          <input
            id="proof4"
            type="text"
            {...register("proof4", { required: "Proof 4 text is required" })}
            placeholder="Voluptate ipsa dolo"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.proof4 ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-500"
            }`}
          />
          {errors.proof4 && <p className="text-red-600 text-sm mt-1">{errors.proof4.message}</p>}
        </div>

        {/* Proof Type 4 */}
        <div>
          <label htmlFor="proofType4" className="block mb-1 font-medium">Proof Type 4</label>
          <select
            id="proofType4"
            {...register("proofType4", { required: "Proof Type 4 is required" })}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.proofType4 ? "border-red-500 ring-red-300" : "border-gray-300 ring-blue-500"
            }`}
                defaultValue='Select proof type'
          >
            <option value="Select proof type" disabled>Select proof type</option>
            <option value="Text Proof">Text Proof</option>
            <option value="Screenshot Proof">Screenshot Proof</option>
    
          </select>
          {errors.proofType4 && <p className="text-red-600 text-sm mt-1">{errors.proofType4.message}</p>}
        </div>

        {/* Buttons */}
        <div className="flex justify-end pt-4 gap-x-4">
          <button
            type="button"
            className="btn_outline"
            onClick={handleBack}
          >
            Back
          </button>

          <button
            type="submit"
            className="primary_btn"
          >
            Next
          </button>
        </div>

      </form>
    </div>
  );
};

export default JobInformationForm;
