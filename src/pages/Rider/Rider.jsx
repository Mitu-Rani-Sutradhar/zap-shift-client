import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Rider = () => {
     const {register,
             handleSubmit, 
             control,
            //  formState: { errors }
            } =  useForm();

            const { user } = useAuth();

            const axiosSecure = useAxiosSecure();

             const serviceCenters =  useLoaderData();
    const regionsDuplicate = serviceCenters.map(center => center.region);
    const regions = [...new Set(regionsDuplicate)];

const districtsByRegion = region => {
        const regionDristricts = serviceCenters.filter(center => center.region === region);
    const districts = regionDristricts.map(center => center.district);
    return districts;
    }


    const riderRegion = useWatch({ control,name: 'region' });
    
   const handleRiderApplication = data =>{
    console.log(data);
    axiosSecure.post('/riders',data)
    .then(res => {
        if(res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your application has been submitted. We will reach to you in 30 days",
          showConfirmButton: false,
          timer: 2000
        });
    }
    })
    
   }



    return (
        <div>
            <h2 className='text-4xl text-black font-bold pt-7'> Be a Rider</h2>
            <p className='text-normal py-5'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
        
         <form onSubmit={handleSubmit(handleRiderApplication)} className="mx-auto p-6 bg-white rounded-lg shadow-md text-black">
           


         {/* two colum */}
         <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* sender info */}
            <div>
                <h2 className="text-2xl font-semibold">Rider Details</h2>
                 <fieldset className="fieldset">
                    {/* sender name */}
          <label className="label">Rider Name</label>
          <input type="text" {...register("riderName", { required: "Rider name is required" })} defaultValue={user?.displayName} className="input w-full" placeholder="Rider name"/>

          <label className="label">Rider Email</label>
          <input type="email" {...register("riderEmail", { required: "Rider email is required" })} defaultValue={user?.email} className="input w-full" placeholder="Rider email"/>

          <label className="label mt-4">Your Address</label>
          <input type="text" {...register("address", { required: "Rider address is required" })} className="input w-full" placeholder="Rider address"/>

          <label className="label mt-4">Rider Phone No</label>
          <input type="number" {...register("riderPhone", { required: "Rider phone is required" })} className="input w-full" placeholder="Rider phone"/>



{/* sender region */}
<fieldset className="fieldset">
  <legend className="fieldset-legend">Regions</legend>
  <select {...register("region")} defaultValue="Pick a region" className="select">
    <option disabled={true}>Pick a Region</option>
    {
        regions.map((region, index) => <option key={index}>{region}</option>)
    }
    
  </select>

</fieldset>

{/* sender district */}
<fieldset className="fieldset">
  <legend className="fieldset-legend">Districts</legend>
  <select {...register("district")} defaultValue="Pick a district" className="select">
    <option disabled={true}>Pick a District</option>
    {
        districtsByRegion(riderRegion).map((district, index) => <option key={index}>{district}</option>)
    }
  </select>
</fieldset>


          {/* <label className="label mt-4">Pickup Instruction</label>
          <textarea {...register("pickupInstruction", { required: "Pickup instruction is required" })} className="input w-full h-[80px]" placeholder="Pickup instruction"/> */}
          
         
        </fieldset>

            </div>

            {/* receiver info */}
            <div>
                <h2 className="text-2xl font-semibold">More Details</h2>
                <fieldset className="fieldset">
                    <label className="label">Driving License</label>
                    <input type="text" className="input w-full" placeholder="Driving Lisense" {...register("license", { required: "Receiver name is required" })} />

                    <label className="label">NID</label>
                    <input type="number" {...register("nid", { required: "Receiver email is required" })} className="input w-full" placeholder="NID"/>











           <label className="label mt-4">BIKE</label>
      <input type="text" {...register("bike", { required: "Receiver address is required" })} className="input w-full" placeholder="Bike"/>

        {/* <label className="label mt-4">Receiver Phone No</label>
         <input type="number" {...register("receiverPhone", { required: "Receiver phone is required" })} className="input w-full" placeholder="Receiver phone"/> */}



{/* receiver region */}
{/* <fieldset className="fieldset">
  <legend className="fieldset-legend">Receiver Regions</legend>
  <select {...register("receiverRegion")} defaultValue="Pick a region" className="select">
    <option disabled={true}>Pick a Region</option>
    {
        regions.map((region, index) => <option key={index}>{region}</option>)
    }
    
  </select>

</fieldset> */}

{/* receiver districts */}
{/* <fieldset className="fieldset">
  <legend className="fieldset-legend">Receiver Districts</legend>
  <select {...register("receiverDistrict")} defaultValue="Pick a district" className="select">
    <option disabled={true}>Pick a District</option>
    {
        districtsByRegion(receiverRegion).map((district, index) => <option key={index}>{district}</option>)
    }
    
  </select>
</fieldset> */}




{/* 
          <label className="label mt-4">Pickup Instruction</label>
          <textarea {...register("pickupInstruction", { required: "Pickup instruction is required" })} className="input w-full h-[80px]" placeholder="Pickup instruction"/> */}
                </fieldset>
            </div>
         </div>

    <input type="submit" className='btn btn-primary text-black mt-6' value="Apply as a Rider" />
           </form>
        </div>
    );
};

export default Rider;