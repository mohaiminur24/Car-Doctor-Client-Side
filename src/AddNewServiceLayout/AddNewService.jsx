import React, { useContext } from "react";
import PageBanner from "../ShareableComponents/PageBanner";
import { AuthContext } from "../AuthContextLayout/AuthContexts";
import Swal from "sweetalert2";
import { Toaster, toast } from "react-hot-toast";

const AddNewService = () => {
  const {homedataloading,sethomedataloading} = useContext(AuthContext);

  const handleNewservice = event =>{
    event.preventDefault();
    const form = event.target;
    const title = form.serviceName.value;
    const price = form.servicePrice.value;
    const serviceType = form.serviceType.value;
    const img = form.photourl.value;
    const description = form.description.value;
    const service = {title,price,serviceType,img,description};


    if(!title){
      toast.error("Must put your name first");
      return;
    }else if(!price){
      toast.error("Must put your price first");
      return;
    }else if(!serviceType){
      toast.error("Must put your service type first");
      return;
    }else if(!img){
      toast.error("Must put your photo url first");
      return;
    }else if(!description){
      toast.error("Must put your description first");
      return;
    };

    fetch("https://car-website-server-side.vercel.app/services",{
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(service)
    }).then(res=> res.json()).then(data=> {
      if(data.insertedId){
        sethomedataloading(!homedataloading),
        form.reset();
        Swal.fire('Your New service create successfully!')
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
      
    });
    
  };



  return (
    <div>
      <div><Toaster/></div>
      <PageBanner title="Home/Add New Service">Add New Service</PageBanner>
      <div className="my-10 p-10 bg-gray-100">
        <form onSubmit={handleNewservice}>
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
              placeholder="Photo URL"
              type="text"
              name="photourl"
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
