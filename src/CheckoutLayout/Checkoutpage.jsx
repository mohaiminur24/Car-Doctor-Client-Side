import React, { useContext } from "react";
import PageBanner from "../ShareableComponents/PageBanner";
import { AuthContext } from "../AuthContextLayout/AuthContexts";
import { useLoaderData } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const Checkoutpage = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { img, price, title } = service;
  console.log(user);

  const handlecheckout = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.FirstName.value + form.Lastname.value;
    const phone = form.YourPhone.value;
    const email = form.emailaddress.value;
    const message = form.message.value;
    const confirm = false;
    const checkoutservice = {
      name,
      phone,
      email,
      message,
      img,
      price,
      title,
      confirm,
    };

    if(!name){
      toast.error("Must be put your name first!");
      return;
    }else if(!phone){
      toast.error("Must be put your phone number first!");
      return;
    }else if(!message){
      toast.error("Must be put your message first!");
      return;
    }else if(!price){
      toast.error("Must be put your price first!");
      return;
    }

    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(checkoutservice),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          toast.success("Your service CheckOut is complete!");
        } else {
          toast.error("Something wrong try again!");
        }
      });
  };

  return (
    <div>
      <PageBanner title="Home/checkout">Check Out</PageBanner>
      <div>
        <Toaster />
      </div>
      <div className="my-10 p-10 bg-gray-100">
        <form onSubmit={handlecheckout}>
          <div className="flex gap-5">
            <input
              className="border w-full px-3 py-2 text-sm rounded-md outline-none my-2"
              placeholder="First Name"
              defaultValue={user?.displayName}
              type="text"
              name="FirstName"
              id="FirstName"
            />
            <input
              className="border w-full px-3 py-2 text-sm rounded-md outline-none my-2"
              placeholder="Last Name"
              type="text"
              name="Lastname"
              id="Lastname"
            />
          </div>
          <div className="flex gap-5">
            <input
              className="border w-full px-3 py-2 text-sm rounded-md outline-none my-2"
              placeholder="Your Phone"
              type="text"
              defaultValue={user?.phoneNumber}
              name="YourPhone"
              id="YourPhone"
            />
            <input
              className="border w-full px-3 py-2 text-sm rounded-md outline-none my-2"
              placeholder="Your Email"
              type="email"
              value={user?.email}
              name="emailaddress"
              id="email"
            />
          </div>
          <textarea
            className="border w-full my-2 rounded-md p-5 outline-none"
            placeholder="Your message"
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          <input
            className="w-full py-2 bg-yellow-500 font-bold text-white rounded-md"
            type="submit"
            value="CheckOut"
          />
        </form>
      </div>
    </div>
  );
};

export default Checkoutpage;
