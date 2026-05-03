import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const UsersManagements = () => {
const axiosSecure = useAxiosSecure();

// search er jonno state
const [ searchText, setSearchText ] = useState('');


const {refetch, data: users = [] } = useQuery({
    queryKey: ['users', searchText],
    queryFn: async () =>{
        const res = await axiosSecure.get(`/users?searchText=${searchText}`);
        return res.data;
    }
})

const handleMakeAdmin = user => {
    const roleInfo = {role: 'admin'}
    // TODO: must ask for comfirmation before proceed
    axiosSecure.patch(`/user/${user._id}/role`, roleInfo)
    .then(res =>{
        console.log(res.data);
        if(res.data.modifiedCount){
            refetch();
             Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.displayName}User Marked as Admin`,
               showConfirmButton: false,
               timer: 2000
                                    })
        }
    })
}

const handleRemoveAdmin = user => {
    const roleInfo = {role: 'user'}
     // TODO: must ask for comfirmation before proceed
    axiosSecure.patch(`/user/${user._id}/role`, roleInfo)
    .then(res =>{
      
        if(res.data.modifiedCount){
            refetch();
             Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.displayName} removed from Admin`,
               showConfirmButton: false,
               timer: 2000
                                    })
        }
    })
}


    return (
        <div>
            <h2 className="texrt-5xl">Manage Users:{users.length}</h2>
            <p>SearchText: {searchText}</p>

<label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input onChange={(e) => setSearchText(e.target.value)} type="search"
   className="grow"
   placeholder="Search users" />
  
</label>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th></th>
        <th>Email</th>
        <th>Role</th>
        <th>Admin Action</th>
        <th>Others Actions</th>
      </tr>
    </thead>
    <tbody>
  {
    users.map((user, index) =>  <tr>
        <th>
          {index + 1 }
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photoURL}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.displayName}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          {user.email}
        </td>
        <td>
          {user.role}
        </td>
        <td> 
           {
            user.role === 'admin' ? 
            <button onClick={() =>handleRemoveAdmin(user)} className='btn bg-amber-400'>
                <FiShieldOff></FiShieldOff>
            </button>
            :
             <button
             onClick={() => handleMakeAdmin(user)} className='btn bg-green-400'>
                <FaUserShield></FaUserShield>
            </button>
           }
            
        </td>
        <td> Actions</td>
       
      </tr>)
  }
     

      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default UsersManagements;