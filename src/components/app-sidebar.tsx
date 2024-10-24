"use client";

import logowhite from "@/assets/logo.svg";
import { useQueryClient } from "@tanstack/react-query";
import {
  ChartArea,
  IdCard,
  KeyRound,
  LayoutDashboard,
  LogOut,
  Percent,
  TruckIcon,
  User,
  UsersIcon,
  WalletCards,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "./auth-provider";
import { useAuth } from "./auth-provider";
import { NavMain } from "./nav-main";
import { Button } from "./ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
} from "./ui/sidebar";

export const iframeHeight = "870px";

export const containerClassName = "w-full h-full";

const data = {
  navMain: [
    {
      title: "Overview",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Shipment",
      url: "/shipments",
      icon: TruckIcon,
    },
    {
      title: "Markups",
      url: "/markups",
      icon: Percent,
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: WalletCards,
    },

    {
      title: "Users",
      url: "/users",
      icon: UsersIcon,
    },
    {
      title: "Roles and Permissions",
      url: "/roles-permissions",
      icon: KeyRound,
    },
    {
      title: "KYC",
      url: "/kyc",
      icon: IdCard,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: ChartArea,
    },
    {
      title: "Profile",
      url: "/profile",
      icon: User,
    },
  ],
};

export function AppSidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return (
    <Sidebar className="bg-primary text-white space-y-8">
      <SidebarHeader className="relative flex justify-center py-5 pe-10">
        <img src={logowhite} alt="Parcel Smart Logo" className="h-[52px]" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem>
          <NavMain items={data.navMain} />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter>
        <Button
          onClick={() => {
            logout();
            queryClient.clear();
            navigate("/auth/login", { replace: true });
          }}
          variant="secondary"
          className="w-full gap-2 text-primary"
        >
          <LogOut className="size-4 text-primary" /> Log Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
