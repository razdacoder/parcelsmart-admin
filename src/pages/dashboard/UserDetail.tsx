import AppNavBar from "@/components/app-navbar";
import ShipmentList from "@/features/shipment/components/shipment-list";
import TransactionList from "@/features/transactions/components/transaction-list";
import UserInfoCard from "@/features/users/components/user-info-card";

export default function UserDetail() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="User Detail" />
      <main className="px-4 md:px-8 space-y-6">
        <UserInfoCard />
        <TransactionList />
        <ShipmentList />
      </main>
    </div>
  );
}
