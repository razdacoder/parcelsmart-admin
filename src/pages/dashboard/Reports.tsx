import AppNavBar from "@/components/app-navbar";
import { ShipmentOverview } from "@/features/shipment/components/shipment-overview";
import TransactionOverview from "@/features/transactions/components/transaction-overview";
import { ActiveUserChart } from "@/features/users/components/active-user-chart";
import { NewUserChart } from "@/features/users/components/new-user-chart";

export default function Reports() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="Reports" />
      <main className="px-4 md:px-8 space-y-6">
        <ShipmentOverview />
        <TransactionOverview />
        <div className="grid grid-cols-2 gap-8">
          <NewUserChart />
          <ActiveUserChart />
        </div>
      </main>
    </div>
  );
}
