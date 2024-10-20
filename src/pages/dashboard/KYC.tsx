import AppNavBar from "@/components/app-navbar";

export default function KYC() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="KYC" />
      <main className="px-4 md:px-8 space-y-6">
        <h3 className="text-xl font-bold text-text"></h3>
      </main>
    </div>
  );
}
