import AppNavBar from "@/components/app-navbar";
import ShipmentList from "@/features/shipment/components/shipment-list";
import ShipmentMetrics from "@/features/shipment/components/shipment-metrics";
import { ShipmentOverview } from "@/features/shipment/components/shipment-overview";

export default function Shipments() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="Shipments" />
      <main className="px-4 md:px-8 space-y-6">
        <main className="px-4 md:px-8 space-y-6 pb-8">
          <ShipmentMetrics />
          <ShipmentOverview />
          <ShipmentList />
        </main>
      </main>
    </div>
  );
}
