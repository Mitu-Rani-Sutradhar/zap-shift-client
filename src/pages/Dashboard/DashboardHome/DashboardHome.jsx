import React from 'react';
import useRole from '../../../hooks/useRole';
import AdminDashboardHome from './AdminDashboardHome';
import RiderDashboardHome from './RiderDashboardHome';
import UserDashboardHome from './UserDashboardHome';
import Loading from '../../../components/Loading/Loading';

const DashboardHome = () => {
    const { role, roleLoading } = useRole();
  console.log(role);
    if(roleLoading){
        return <Loading></Loading>
    }
    if(role === 'admin'){
        return <AdminDashboardHome></AdminDashboardHome>
    }
    else if(role === 'rider'){
        return <RiderDashboardHome></RiderDashboardHome>
    }
    else{
        return <UserDashboardHome></UserDashboardHome>
    }
   
};

export default DashboardHome;