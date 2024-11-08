import AppNavBar from "@/components/app-navbar";
import useOverview from "@/features/overview/api/use-overview";
import ShipmentList from "@/features/shipment/components/shipment-list";
import ShipmentMetrics from "@/features/shipment/components/shipment-metrics";
import { ShipmentOverview } from "@/features/shipment/components/shipment-overview";

export default function Shipments() {
  const { data, isLoading, error } = useOverview();
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="Shipments" />
      <main className="px-4 md:px-8 space-y-6">
        <main className="px-4 md:px-8 space-y-6 pb-8">
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
          <ShipmentList />
        </main>
      </main>
    </div>
  );
}
