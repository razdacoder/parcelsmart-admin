import AppNavBar from "@/components/app-navbar";
import CarrierMarkup from "@/features/markups/components/carrier-markup";

export default function MarkUps() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="MarkUps" />
      <main className="px-4 md:px-8 space-y-6">
        <div className="space-y-4">
          <div className="border-2 rounded-lg p-8 space-y-4">
            <h3 className="font-bold text-text">Local Carriers</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
              <CarrierMarkup />
              <CarrierMarkup />
              <CarrierMarkup />
              <CarrierMarkup />
              <CarrierMarkup />
              <CarrierMarkup />
            </div>
          </div>
          <div className="border-2 rounded-lg p-8 space-y-4">
            <h3 className="font-bold text-text">Regional Carriers</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
              <CarrierMarkup />
              <CarrierMarkup />
              <CarrierMarkup />
              <CarrierMarkup />
              <CarrierMarkup />
              <CarrierMarkup />
            </div>
          </div>
          <div className="border-2 rounded-lg p-8 space-y-4">
            <h3 className="font-bold text-text">International carriers</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
              <CarrierMarkup />
              <CarrierMarkup />
              <CarrierMarkup />
              <CarrierMarkup />
              <CarrierMarkup />
              <CarrierMarkup />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
