import AppNavBar from "@/components/app-navbar";
import useMe from "@/features/auth/api/useMe";
import StatsMetrics from "@/features/overview/components/stats-metrics";
import ShipmentMetrics from "@/features/shipment/components/shipment-metrics";
import { ShipmentOverview } from "@/features/shipment/components/shipment-overview";

export default function Home() {
  const { data: user } = useMe();
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="Overview" />
      <main className="px-4 md:px-8 space-y-6">
        <h3 className="text-xl font-bold text-text">
          Hi, {user?.data.first_name}
        </h3>
        <StatsMetrics />
        <ShipmentMetrics />
        <ShipmentOverview />
      </main>
    </div>
  );
}
