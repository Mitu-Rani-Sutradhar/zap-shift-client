import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';


const SendParcel = () => {
    const {register, handleSubmit, control, formState: { errors }} =  useForm();

    const serviceCenters =  useLoaderData();
    const regionsDuplicate = serviceCenters.map(center => center.region);
    const regions = [...new Set(regionsDuplicate)];


    const senderRegion = useWatch({ control,name: 'senderRegion' });

    const receiverRegion = useWatch({ control,name: 'receiverRegion' });

    const districtsByRegion = region => {
        const regionDristricts = serviceCenters.filter(center => center.region === region);
    const districts = regionDristricts.map(center => center.district);
    return districts;
    }
    // console.log(regions);
   
    
    const handleSendParcel = (data) => {
        console.log(data);
        // same dis
        const isDocument = data.parcelType === 'document';
        console.log(isDocument);
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        console.log(isSameDistrict);
     const parceIWeight = parseFloat(data.parcelWeight);
let cost = 0;
if (isDocument){
    cost = isSameDistrict ? 60 : 80;
}
else{
    if(parceIWeight < 3){
        cost = isSameDistrict ? 110 : 150;
     }
     else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parceIWeight - 3;
        const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
     }
     

    }
    console.log(cost);


//     Swal.fire({
//   title: "Aggree with the cost?",
//   text: `You will be charged ${cost} BDT`,
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes!"
// }).then((result) => {
//   if (result.isConfirmed) 
// //     Swal.fire({
// //     title: "Deleted!",
// //     text: "Your file has been deleted.",
// //     icon: "success"
// //   });
// });
    
}
    return (
        <div className='bg-white'>
            <h2 className="text-3xl font-bold py-6 mt-6 px-6">Send A Parcel</h2>
           <form onSubmit={handleSubmit(handleSendParcel)} className="mx-auto p-6 bg-white rounded-lg shadow-md text-black">
            {/* parcel type */}
            <div>

                <label className="label mr-4">
                    <input type="radio" {...register("parcelType")} value="document" className="radio" defaultChecked />Document</label>

                    <label className="label">
                    <input type="radio" {...register("parcelType")} value="non-document" className="radio" />Non-Document</label>
            </div>

         {/* parcel info:name, weight */}
         <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-8'>
              <fieldset className="fieldset">
          <label className="label">Parcel name</label>
          <input type="text" className="input w-full" placeholder="Parcel name" {...register("parcelName", { required: "Parcel name is required" })} />
         
        </fieldset>

           <fieldset className="fieldset">
          <label className="label">Parcel weight</label>
          <input type="number" className="input w-full" placeholder="Parcel weight" {...register("parcelWeight", { required: "Parcel weight is required" })} />
         
        </fieldset>

         </div>

         {/* two colum */}
         <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* sender info */}
            <div>
                <h2 className="text-2xl font-semibold">Sender Details</h2>
                 <fieldset className="fieldset">
                    {/* sender name */}
          <label className="label">Sender Name</label>
          <input type="text" {...register("senderName", { required: "Sender name is required" })} className="input w-full" placeholder="Sender name"/>

          <label className="label">Sender Email</label>
          <input type="email" {...register("senderEmail", { required: "Sender email is required" })} className="input w-full" placeholder="Sender email"/>

          <label className="label mt-4">Sender Address</label>
          <input type="text" {...register("senderAddress", { required: "Sender address is required" })} className="input w-full" placeholder="Sender address"/>

          <label className="label mt-4">Sender Phone No</label>
          <input type="number" {...register("senderPhone", { required: "Sender phone is required" })} className="input w-full" placeholder="Sender phone"/>



{/* sender region */}
<fieldset className="fieldset">
  <legend className="fieldset-legend">Sender Regions</legend>
  <select {...register("senderRegion")} defaultValue="Pick a region" className="select">
    <option disabled={true}>Pick a Region</option>
    {
        regions.map((region, index) => <option key={index}>{region}</option>)
    }
    
  </select>

</fieldset>

{/* sender district */}
<fieldset className="fieldset">
  <legend className="fieldset-legend">Sender Districts</legend>
  <select {...register("senderDistrict")} defaultValue="Pick a district" className="select">
    <option disabled={true}>Pick a District</option>
    {
        districtsByRegion(senderRegion).map((district, index) => <option key={index}>{district}</option>)
    }
  </select>
</fieldset>


          <label className="label mt-4">Pickup Instruction</label>
          <textarea {...register("pickupInstruction", { required: "Pickup instruction is required" })} className="input w-full h-[80px]" placeholder="Pickup instruction"/>
          
         
        </fieldset>

            </div>

            {/* receiver info */}
            <div>
                <h2 className="text-2xl font-semibold">Receiver Details</h2>
                <fieldset className="fieldset">
                    <label className="label">Receiver Name</label>
                    <input type="text" className="input w-full" placeholder="Receiver name" {...register("receiverName", { required: "Receiver name is required" })} />

                    <label className="label">Receiver Email</label>
                    <input type="email" {...register("receiverEmail", { required: "Receiver email is required" })} className="input w-full" placeholder="Receiver email"/>











                    <label className="label mt-4">Receiver Address</label>
          <input type="text" {...register("receiverAddress", { required: "Receiver address is required" })} className="input w-full" placeholder="Receiver address"/>

          <label className="label mt-4">Receiver Phone No</label>
          <input type="number" {...register("receiverPhone", { required: "Receiver phone is required" })} className="input w-full" placeholder="Receiver phone"/>




{/* receiver region */}
<fieldset className="fieldset">
  <legend className="fieldset-legend">Receiver Regions</legend>
  <select {...register("receiverRegion")} defaultValue="Pick a region" className="select">
    <option disabled={true}>Pick a Region</option>
    {
        regions.map((region, index) => <option key={index}>{region}</option>)
    }
    
  </select>

</fieldset>

{/* receiver districts */}
<fieldset className="fieldset">
  <legend className="fieldset-legend">Receiver Districts</legend>
  <select {...register("receiverDistrict")} defaultValue="Pick a district" className="select">
    <option disabled={true}>Pick a District</option>
    {
        districtsByRegion(receiverRegion).map((district, index) => <option key={index}>{district}</option>)
    }
    
  </select>
</fieldset>





          <label className="label mt-4">Pickup Instruction</label>
          <textarea {...register("pickupInstruction", { required: "Pickup instruction is required" })} className="input w-full h-[80px]" placeholder="Pickup instruction"/>
                </fieldset>
            </div>
         </div>

    <input type="submit" className='btn btn-primary text-black mt-6' value="Send Parcel" />
           </form>
       
        </div>
    );
};

export default SendParcel;