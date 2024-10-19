import AuthRoute from "@/components/auth-route";
import ProtectedRoute from "@/components/protected-route";
import AuthLayout from "@/pages/auth/AuthLayout";
import SignIn from "@/pages/auth/SignIn";
import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import Home from "@/pages/dashboard/Home";
import KYC from "@/pages/dashboard/KYC";
import Profile from "@/pages/dashboard/Profile";
import Reports from "@/pages/dashboard/Reports";
import RolesAndPermissions from "@/pages/dashboard/RolesAndPermissions";
import Shipments from "@/pages/dashboard/Shipments";
import Transactions from "@/pages/dashboard/Transactions";
import Users from "@/pages/dashboard/Users";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shipments/",
        element: <Shipments />,
      },
      {
        path: "transactions/",
        element: <Transactions />,
      },
      {
        path: "users/",
        element: <Users />,
      },
      {
        path: "roles-permissions/",
        element: <RolesAndPermissions />,
      },
      {
        path: "kyc/",
        element: <KYC />,
      },
      {
        path: "reports/",
        element: <Reports />,
      },
      {
        path: "profile/",
        element: <Profile />,
      },
    ],
  },
  {
    path: "auth/",
    element: (
      <AuthRoute>
        <AuthLayout />
      </AuthRoute>
    ),
    children: [
      {
        path: "login/",
        element: <SignIn />,
      },
    ],
  },
]);
