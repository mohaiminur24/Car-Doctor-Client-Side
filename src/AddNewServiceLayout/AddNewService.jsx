import React from "react";
import PageBanner from "../ShareableComponents/PageBanner";

const AddNewService = () => {
  return (
    <div>
      <PageBanner title="Home/Add New Service">Add New Service</PageBanner>
      <div className="my-10 p-10 bg-gray-100">
        <form>
          <div className="flex gap-5">
            <input
              className="border w-full px-3 py-2 text-sm rounded-md outline-none my-2"
              placeholder="Service Name"
              type="text"
              name="serviceName"
              id="serviceName"
            />
            <input
              className="border w-full px-3 py-2 text-sm rounded-md outline-none my-2"
              placeholder="Service Price"
              type="text"
              name="servicePrice"
              id="servicePrice"
            />
          </div>
          <div className="flex gap-5">
            <input
              className="border w-full px-3 py-2 text-sm rounded-md outline-none my-2"
              placeholder="Text Here"
              type="text"
              name="text"
              id="text"
            />
            <input
              className="border w-full px-3 py-2 text-sm rounded-md outline-none my-2"
              placeholder="Service Type"
              type="text"
              name="serviceType"
              id="serviceType"
            />
          </div>
          <textarea
            className="border w-full my-2 rounded-md p-5 outline-none"
            placeholder="Product Description"
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
          <input
            className="w-full py-2 bg-yellow-500 font-bold text-white rounded-md"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddNewService;
