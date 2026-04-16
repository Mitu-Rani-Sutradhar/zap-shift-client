import React from 'react';
import data from '../../../json/howItWorks.json'
import Card from '../../../components/Card/Card';

const HowItWorks = () => {

    return (
        <div>
            <div className="w-11/12 mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">
        How it Works
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
        </div>
    );
};

export default HowItWorks;