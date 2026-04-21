import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyParcels = () => {
const { user } = useAuth();
const axiosSecure = useAxiosSecure();
const { data: parcels = [] } = useQuery({
    queryKey: ['myParcels', user?.email],
    queryFn: async () => {
       const response = await axiosSecure.get(`/parcels?email=${user?.email}`);
       return response.data;
    }
})

    return (
        <div>
            <h2>All of my parcels : {parcels.length}</h2>
        </div>
    );
};

export default MyParcels;