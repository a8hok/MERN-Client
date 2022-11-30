import React, {useState, useEffect} from 'react';

import { useSelector } from "react-redux";

// import useAuth from './useAuth';

import { useLocation, Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    // const {auth} = useAuth()

    const [adminStatus, setAdminStatus] = useState({token : true})

    const { userData } = useSelector((state) => state.userProfileInfo);

    const superAdminStatus = userData?.data?.superAdminStatus

    useEffect(() => {
        adminStatus.token = superAdminStatus
    }, [])

    const location = useLocation()
  return (
    !!adminStatus.token ? <Outlet/> : <Navigate to="/login" state={{from: location}} replace/>
  )
}

export default PrivateRoutes