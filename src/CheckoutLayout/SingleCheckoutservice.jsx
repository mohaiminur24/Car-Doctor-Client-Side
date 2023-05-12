import React from "react";

const SingleCheckoutservice = ({checkout}) => {
    const {confirm,email,img,message,name,phone,price,title,_id} = checkout;
    const deletecheckout =()=>{
        fetch("",{
            method:"DELETE"
        }).then(res=> res.json())
        .then(data=>{
            console.log(data);
        })
    };

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={img}
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{name}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="text-sm font-bold">{message}</span>
          <br />
            <div className="text-xs mt-2 text-gray-500">
                <h1>Price: ${price}</h1>
                <h1>Phone: {phone}</h1>
            </div>
        </td>

        <td>{email}</td>

        <th className="flex gap-5">
          <button className="btn bg-yellow-500 border-none">{confirm ? "confrim" : "Pending" }</button>
          <button onClick={deletecheckout} className="btn bg-red-500 border-none">Delete</button>
        </th>
      </tr>
    </>
  );
};

export default SingleCheckoutservice;
