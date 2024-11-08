import AppNavBar from "@/components/app-navbar";
import useMe from "@/features/auth/api/useMe";
import useOverview from "@/features/overview/api/use-overview";
import StatsMetrics from "@/features/overview/components/stats-metrics";
import RecentShipment from "@/features/shipment/components/recent-shipment";
import ShipmentMetrics from "@/features/shipment/components/shipment-metrics";
import { ShipmentOverview } from "@/features/shipment/components/shipment-overview";

export default function Home() {
  const { data: user } = useMe();
  const { data, isLoading, error } = useOverview();
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="Overview" />
      <main className="px-4 md:px-8 space-y-6 pb-8">
        <h3 className="text-xl font-bold text-text">
          Hi, {user?.data.first_name}
        </h3>
        <StatsMetrics
          isLoading={isLoading}
          data={{
            total_transactions: data?.data.total_transactions,
            total_revenue: data?.data.total_revenue,
            total_staffs: data?.data.total_staffs,
            total_users: data?.data.total_users,
          }}
          error={error?.response?.data}
        />
        <ShipmentMetrics
          isLoading={isLoading}
          data={{
            total_shipments: data?.data.total_shipments,
            delivered_shipment: data?.data.delivered_shipment,
            canceled_shipment: data?.data.canceled_shipment,
            shipment_in_transit: data?.data.shipment_in_transit,
          }}
          error={error?.response?.data}
        />
        <ShipmentOverview />
        <RecentShipment />
      </main>
    </div>
  );
}
