import AppNavBar from "@/components/app-navbar";
import TeamCard from "@/features/roles/components/team-card";
import { TeamPermissionsTab } from "@/features/roles/components/team-permission-tab";

export default function RolesAndPermissions() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <AppNavBar title="Roles & Permissions" />
      <main className="px-4 md:px-8 space-y-6">
        <TeamCard />
        <TeamPermissionsTab />
      </main>
    </div>
  );
}
