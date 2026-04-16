import React from 'react';
import liveTrackingIcon from '../../../assets/live-tracking.png';
import safeDeliveryIcon from '../../../assets/safe-delivery.png';

const Serv = () => {
    return (
      <div className="w-11/12 mx-auto py-16">

      <h2 className="text-3xl font-bold text-center mb-10">
        Our Services
      </h2>

      {/* Service 1 */}
      <div className="mb-10 text-center flex justify-content mx-w-10/12 bg-[#FFFFFF] rounded-xl p-6">
        <img
          src={liveTrackingIcon}
          alt="Tracking"
          className="border-r-1 border-dashed px-4"
        />
             <div className='items-center justify-center text-center p-6'>
              <h3 className="text-xl font-semibold">
              Live Parcel Tracking
             </h3>
             <p className="text-gray-600 py-7">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
              </p>
            </div>
      </div>

      {/* Service 2 */}

      <div className="mb-10 text-center flex justify-content mx-w-10/12 bg-[#FFFFFF] rounded-xl p-6">
        <img
          src={safeDeliveryIcon}
          alt="Tracking"
          className="border-r-1 border-dashed px-4"
        />
             <div className='items-center justify-center text-center p-6'>
              <h3 className="text-xl font-semibold">
              100% Safe Delivery
             </h3>
             <p className="text-gray-600 py-7">
             We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
              </p>
            </div>
      </div>
     

      {/* Service 3 */}
      <div className="mb-10 text-center flex justify-content mx-w-10/12 bg-[#FFFFFF] rounded-xl p-6">
        <img
          src={safeDeliveryIcon}
          alt="Tracking"
          className="border-r-1 border-dashed px-4"
        />
             <div className='items-center justify-center text-center p-6'>
              <h3 className="text-xl font-semibold">
              24/7 Call Center Support
             </h3>
             <p className="text-gray-600 py-7">
              Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
              </p>
            </div>
      </div>

    </div>
    );
};

export default Serv;