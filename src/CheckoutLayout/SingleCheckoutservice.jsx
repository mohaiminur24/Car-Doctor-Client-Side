import React, { useState } from "react";

const SingleCheckoutservice = ({checkout,setdata}) => {
    const {confirm,email,img,message,name,phone,price,title,_id} = checkout;
    const [status , setstatus] = useState(confirm);

    const deletecheckout =()=>{
        if(!status){
            fetch(`http://localhost:5000/checkout/${_id}`,{
                method:"DELETE"
                }).then(res=> res.json())
                .then(data=>{
                if(data.deletedCount){
                    setdata(_id);
                    alert("Your Checkout items delete successfully!");
                };
            })
        }else{
            alert("your order is alredy Confrim!")
        }
    };

    const confrimorder = ()=>{
        fetch(`http://localhost:5000/checkout/${_id}`,{
            method:"PUT",
        }).then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                alert("Your Checkout order is confrim");
                setstatus(true);
            };
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

        <td>
          <button onClick={confrimorder} className="btn bg-yellow-500 border-none mr-5">{status ? "confrim" : "Pending" }</button>
          <button onClick={deletecheckout} className="btn bg-red-500 border-none">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default SingleCheckoutservice;
