import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";

const SingleCheckoutservice = ({checkout,setdata}) => {
    const {confirm,email,img,message,name,phone,price,title,_id} = checkout;
    const [status , setstatus] = useState(confirm);

    const deletecheckout =()=>{
      
        if(!status){

          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/checkout/${_id}`,{
                method:"DELETE"
                }).then(res=> res.json())
                .then(data=>{
                if(data.deletedCount){
                    setdata(_id);
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                };
            })
            }
          })
        }else{
            toast.error("your order is alredy Confrim!")
        }
    };

    const confrimorder = ()=>{
        fetch(`http://localhost:5000/checkout/${_id}`,{
            method:"PUT",
        }).then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                toast.success('Your Checkout order is confrim!')
                setstatus(true);
            };
        })
    };

  return (
    <>
    <div><Toaster/></div>
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
