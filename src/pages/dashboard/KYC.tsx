import AppNavBar from "@/components/app-navbar";
import KycMetrics from "@/features/kyc/components/kyc-metrics";
import SubmissionList from "@/features/kyc/components/submissions-list";

export default function KYC() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="KYC" />
      <main className="px-4 md:px-8 space-y-6">
        <KycMetrics />
        <SubmissionList />
      </main>
    </div>
  );
}
