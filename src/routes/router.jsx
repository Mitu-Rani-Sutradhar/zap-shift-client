import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./privateRoute";
import SendParcel from "../pages/SendParcel/SendParcel";
import Dashboard from "../layouts/Dashboard";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancel from "../pages/Dashboard/Payment/PaymentCancel";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";
import UsersManagements from "../pages/Dashboard/UsersManagement/UsersManagements";
import AdminRoute from "./AdminRoute";
import AssignRiders from "../pages/Dashboard/AssignRiders/AssignRiders";
import RiderRoute from "./RiderRoute";
import AssignedDeliveries from "../pages/Dashboard/AssignedDeliveries/AssignedDeliveries";
import CompletedDeliveries from "../pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import ParcelTrack from "../pages/ParcelTrack/ParcelTrack";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
        children: [
          {
            index: true,
            Component: Home
          },
          {
           path: 'rider',
           element: <PrivateRoute><Rider></Rider></PrivateRoute>,
            loader: () => fetch('/serviceCenters.json')
            .then (response => response.json())
          },
          {
             path: 'send-parcel',
             element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
             loader: () => fetch('/serviceCenters.json')
            .then (response => response.json())
          },
          {
            path: 'coverage',
            Component: Coverage,
            loader: () => fetch('/serviceCenters.json')
            .then (response => response.json())
          },
          {
            path: 'parcel-track/:trackingId',
            Component: ParcelTrack
          }
        ]

  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
          path: 'login',
          Component: Login,
      },
      {
          path: 'register',
          Component: Register,

      }
    ]

  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path: 'my-parcels',
        Component: MyParcels
      },
      {
        path: 'payment/:parcelId',
        Component: Payment

      },
      {
        path: 'payment-history',
        Component: PaymentHistory
      },
      {
        path: 'payment-success',
        Component: PaymentSuccess
      },
      {
        path: 'payment-cancelled',
        Component: PaymentCancel
      },
      // rider only routes
     {
         path: 'assigned-deliveries',
         element: <RiderRoute><AssignedDeliveries></AssignedDeliveries></RiderRoute>
     },
     {
         path: 'completed-deliveries',
         element: <RiderRoute><CompletedDeliveries></CompletedDeliveries></RiderRoute>
     },




      // admin related route
      {
        path: 'approve-riders',
        element: <AdminRoute><ApproveRiders></ApproveRiders></AdminRoute>
      },
      {
        path: 'users-management',
        element: <AdminRoute><UsersManagements></UsersManagements></AdminRoute>
      },
      {
        path: 'assign-riders',
        element: <AdminRoute><AssignRiders></AssignRiders></AdminRoute>
      }
    ]
  }
]);