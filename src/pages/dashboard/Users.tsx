import AppNavBar from "@/components/app-navbar";
import { ActiveUserChart } from "@/features/users/components/active-user-chart";
import { NewUserChart } from "@/features/users/components/new-user-chart";
import UserList from "@/features/users/components/users-list";
import UserStatsCard from "@/features/users/components/users-stats-cards";

export default function Users() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="Users" />
      <main className="px-4 md:px-8 space-y-6">
        <UserStatsCard />
        <div className="grid grid-cols-2 gap-8">
          <NewUserChart />
          <ActiveUserChart />
        </div>
        <UserList />
      </main>
    </div>
  );
}
