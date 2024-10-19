import AppNavBar from "@/components/app-navbar";
import TransactionList from "@/features/transactions/components/transaction-list";
import TransactionOverview from "@/features/transactions/components/transaction-overview";
import TransactionStatsCard from "@/features/transactions/components/transactions-stats-card";

export default function Transactions() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="Transactions" />
      <main className="px-4 md:px-8 space-y-6">
        <TransactionStatsCard />
        <TransactionOverview />
        <TransactionList />
      </main>
    </div>
  );
}
