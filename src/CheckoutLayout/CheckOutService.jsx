import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContextLayout/AuthContexts";
import SingleCheckoutservice from "./SingleCheckoutservice";

const CheckOutService = () => {
  const { user } = useContext(AuthContext);
  const [checkout, setCheckout] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/checkoutService/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCheckout(data));
  }, []);

  console.log(checkout)
  return (
    <div className="my-10 font-inter">

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Details</th>
              <th>Email Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                checkout && checkout.map(service=> <SingleCheckoutservice key={service._id} checkout={service}/>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckOutService;
