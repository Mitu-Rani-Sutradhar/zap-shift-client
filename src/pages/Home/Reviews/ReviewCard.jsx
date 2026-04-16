import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const {userName, review: reviewText} = review;
    return (
        <div className="flex justify-center items-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">

        {/* Icon */}
        <FaQuoteLeft className="text-3xl text-primary mb-4" />

        {/* Description */}
        <p className="text-gray-600 mb-6">
          {reviewText}
        </p>

        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://i.pravatar.cc/150?img=12" alt="User" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold">{userName}</h4>
            <p className="text-sm text-gray-500">
              Senior Product Designer
            </p>
          </div>
        </div>

      </div>
    </div>
    );
};

export default ReviewCard;