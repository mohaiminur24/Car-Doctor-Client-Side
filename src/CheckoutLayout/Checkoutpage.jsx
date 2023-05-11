import React, { useContext } from 'react';
import PageBanner from '../ShareableComponents/PageBanner';
import { AuthContext } from '../AuthContextLayout/AuthContexts';

const Checkoutpage = () => {
  const {user} = useContext(AuthContext);
    return (
        <div>
      <PageBanner title="Home/checkout">Check Out</PageBanner>
      <div className="my-10 p-10 bg-gray-100">
        <form>
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
              defaultValue={user?.email}
              name="email"
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