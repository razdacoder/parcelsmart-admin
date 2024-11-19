import { Checkbox } from "@/components/ui/checkbox";
import { Loader } from "lucide-react";
import useGetRolesPermissions from "../api/use-get-roles-permissions";
import useUpdateRolePermission from "../api/use-update-role-permission";

export default function Permissions() {
  const { data, isLoading, error } = useGetRolesPermissions();
  const { mutate, isPending } = useUpdateRolePermission();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader className="text-primary size-6 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-4">
        <p className="text-sm text-destructive">
          {error.response?.data.message}
        </p>
      </div>
    );
  }

  if (data) {
    return (
      <div>
        <div className="bg-primary p-4 rounded-md grid grid-cols-12 gap-8">
          <div className="col-span-6">
            <h3 className="text-white text-xl font-semibold">Shipment</h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-center text-xl font-semibold">
              Super Admin
            </h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-center text-xl font-semibold">
              Admin
            </h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-center text-xl font-semibold">
              Manager
            </h3>
          </div>
        </div>
        <div className="divide-y-[1px] divide-gray-200">
          <div className="grid grid-cols-12 gap-8 p-4">
            <div className="col-span-6 flex items-center gap-4">
              <svg
                width="23"
                height="7"
                viewBox="0 0 23 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6.61621C4.65685 6.61621 6 5.27307 6 3.61621C6 1.95936 4.65685 0.616211 3 0.616211C1.34315 0.616211 0 1.95936 0 3.61621C0 5.27307 1.34315 6.61621 3 6.61621ZM9 4.11621H9.7V3.11621H9V4.11621ZM11.1 4.11621H12.5V3.11621H11.1V4.11621ZM13.9 4.11621H15.3V3.11621H13.9V4.11621ZM16.7 4.11621H18.1V3.11621H16.7V4.11621ZM19.5 4.11621H20.9V3.11621H19.5V4.11621ZM22.3 4.11621H23V3.11621H22.3V4.11621Z"
                  fill="#212121"
                />
              </svg>
              <span className="text-lg font-semibold text-text">Create</span>
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[1].includes(
                  "shipment_create"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 1,
                    permission_name: "shipment_create",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[2].includes(
                  "shipment_create"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 2,
                    permission_name: "shipment_create",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[3].includes(
                  "shipment_create"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 3,
                    permission_name: "shipment_create",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 p-4">
            <div className="col-span-6 flex items-center gap-4">
              <svg
                width="23"
                height="7"
                viewBox="0 0 23 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6.61621C4.65685 6.61621 6 5.27307 6 3.61621C6 1.95936 4.65685 0.616211 3 0.616211C1.34315 0.616211 0 1.95936 0 3.61621C0 5.27307 1.34315 6.61621 3 6.61621ZM9 4.11621H9.7V3.11621H9V4.11621ZM11.1 4.11621H12.5V3.11621H11.1V4.11621ZM13.9 4.11621H15.3V3.11621H13.9V4.11621ZM16.7 4.11621H18.1V3.11621H16.7V4.11621ZM19.5 4.11621H20.9V3.11621H19.5V4.11621ZM22.3 4.11621H23V3.11621H22.3V4.11621Z"
                  fill="#212121"
                />
              </svg>
              <span className="text-lg font-semibold text-text">Modify</span>
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[1].includes(
                  "shipment_modify"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 1,
                    permission_name: "shipment_modify",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[2].includes(
                  "shipment_modify"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 2,
                    permission_name: "shipment_modify",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[3].includes(
                  "shipment_modify"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 3,
                    permission_name: "shipment_modify",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 p-4">
            <div className="col-span-6 flex items-center gap-4">
              <svg
                width="23"
                height="7"
                viewBox="0 0 23 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6.61621C4.65685 6.61621 6 5.27307 6 3.61621C6 1.95936 4.65685 0.616211 3 0.616211C1.34315 0.616211 0 1.95936 0 3.61621C0 5.27307 1.34315 6.61621 3 6.61621ZM9 4.11621H9.7V3.11621H9V4.11621ZM11.1 4.11621H12.5V3.11621H11.1V4.11621ZM13.9 4.11621H15.3V3.11621H13.9V4.11621ZM16.7 4.11621H18.1V3.11621H16.7V4.11621ZM19.5 4.11621H20.9V3.11621H19.5V4.11621ZM22.3 4.11621H23V3.11621H22.3V4.11621Z"
                  fill="#212121"
                />
              </svg>
              <span className="text-lg font-semibold text-text">Cancel</span>
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[1].includes(
                  "shipment_cancel"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 1,
                    permission_name: "shipment_cancel",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[2].includes(
                  "shipment_cancel"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 2,
                    permission_name: "shipment_cancel",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[3].includes(
                  "shipment_cancel"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 3,
                    permission_name: "shipment_cancel",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="bg-primary p-4 rounded-md grid grid-cols-12 gap-8">
          <div className="col-span-6">
            <h3 className="text-white text-xl font-semibold">Users</h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-center text-xl font-semibold">
              Super Admin
            </h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-center text-xl font-semibold">
              Admin
            </h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-center text-xl font-semibold">
              Manager
            </h3>
          </div>
        </div>
        <div className="divide-y-[1px] divide-gray-200">
          <div className="grid grid-cols-12 gap-8 p-4">
            <div className="col-span-6 flex items-center gap-4">
              <svg
                width="23"
                height="7"
                viewBox="0 0 23 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6.61621C4.65685 6.61621 6 5.27307 6 3.61621C6 1.95936 4.65685 0.616211 3 0.616211C1.34315 0.616211 0 1.95936 0 3.61621C0 5.27307 1.34315 6.61621 3 6.61621ZM9 4.11621H9.7V3.11621H9V4.11621ZM11.1 4.11621H12.5V3.11621H11.1V4.11621ZM13.9 4.11621H15.3V3.11621H13.9V4.11621ZM16.7 4.11621H18.1V3.11621H16.7V4.11621ZM19.5 4.11621H20.9V3.11621H19.5V4.11621ZM22.3 4.11621H23V3.11621H22.3V4.11621Z"
                  fill="#212121"
                />
              </svg>
              <span className="text-lg font-semibold text-text">Create</span>
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[1].includes("user_create")}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 1,
                    permission_name: "user_create",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[2].includes("user_create")}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 2,
                    permission_name: "user_create",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[3].includes("user_create")}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 3,
                    permission_name: "user_create",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 p-4">
            <div className="col-span-6 flex items-center gap-4">
              <svg
                width="23"
                height="7"
                viewBox="0 0 23 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6.61621C4.65685 6.61621 6 5.27307 6 3.61621C6 1.95936 4.65685 0.616211 3 0.616211C1.34315 0.616211 0 1.95936 0 3.61621C0 5.27307 1.34315 6.61621 3 6.61621ZM9 4.11621H9.7V3.11621H9V4.11621ZM11.1 4.11621H12.5V3.11621H11.1V4.11621ZM13.9 4.11621H15.3V3.11621H13.9V4.11621ZM16.7 4.11621H18.1V3.11621H16.7V4.11621ZM19.5 4.11621H20.9V3.11621H19.5V4.11621ZM22.3 4.11621H23V3.11621H22.3V4.11621Z"
                  fill="#212121"
                />
              </svg>
              <span className="text-lg font-semibold text-text">Modify</span>
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[1].includes("user_modify")}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 1,
                    permission_name: "user_modify",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[2].includes("user_modify")}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 2,
                    permission_name: "user_modify",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[3].includes("user_modify")}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 3,
                    permission_name: "user_modify",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="bg-primary p-4 rounded-md grid grid-cols-12 gap-8">
          <div className="col-span-6">
            <h3 className="text-white text-xl font-semibold">KYC</h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-center text-xl font-semibold">
              Super Admin
            </h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-center text-xl font-semibold">
              Admin
            </h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-center text-xl font-semibold">
              Manager
            </h3>
          </div>
        </div>
        <div className="divide-y-[1px] divide-gray-200">
          <div className="grid grid-cols-12 gap-8 p-4">
            <div className="col-span-6 flex items-center gap-4">
              <svg
                width="23"
                height="7"
                viewBox="0 0 23 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6.61621C4.65685 6.61621 6 5.27307 6 3.61621C6 1.95936 4.65685 0.616211 3 0.616211C1.34315 0.616211 0 1.95936 0 3.61621C0 5.27307 1.34315 6.61621 3 6.61621ZM9 4.11621H9.7V3.11621H9V4.11621ZM11.1 4.11621H12.5V3.11621H11.1V4.11621ZM13.9 4.11621H15.3V3.11621H13.9V4.11621ZM16.7 4.11621H18.1V3.11621H16.7V4.11621ZM19.5 4.11621H20.9V3.11621H19.5V4.11621ZM22.3 4.11621H23V3.11621H22.3V4.11621Z"
                  fill="#212121"
                />
              </svg>
              <span className="text-lg font-semibold text-text">Create</span>
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[1].includes("kyc_create")}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 1,
                    permission_name: "kyc_create",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[2].includes("kyc_create")}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 2,
                    permission_name: "kyc_create",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[3].includes("kyc_create")}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 3,
                    permission_name: "kyc_create",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 p-4">
            <div className="col-span-6 flex items-center gap-4">
              <svg
                width="23"
                height="7"
                viewBox="0 0 23 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6.61621C4.65685 6.61621 6 5.27307 6 3.61621C6 1.95936 4.65685 0.616211 3 0.616211C1.34315 0.616211 0 1.95936 0 3.61621C0 5.27307 1.34315 6.61621 3 6.61621ZM9 4.11621H9.7V3.11621H9V4.11621ZM11.1 4.11621H12.5V3.11621H11.1V4.11621ZM13.9 4.11621H15.3V3.11621H13.9V4.11621ZM16.7 4.11621H18.1V3.11621H16.7V4.11621ZM19.5 4.11621H20.9V3.11621H19.5V4.11621ZM22.3 4.11621H23V3.11621H22.3V4.11621Z"
                  fill="#212121"
                />
              </svg>
              <span className="text-lg font-semibold text-text">Modify</span>
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[1].includes("kyc_modify")}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 1,
                    permission_name: "kyc_modify",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[2].includes("kyc_modify")}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 2,
                    permission_name: "kyc_modify",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[3].includes("kyc_modify")}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 3,
                    permission_name: "kyc_modify",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="bg-primary p-4 rounded-md grid grid-cols-12 gap-8">
          <div className="col-span-6">
            <h3 className="text-white text-xl font-semibold">Transactions</h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-center text-xl font-semibold">
              Super Admin
            </h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-center text-xl font-semibold">
              Admin
            </h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-center text-xl font-semibold">
              Manager
            </h3>
          </div>
        </div>
        <div className="divide-y-[1px] divide-gray-200">
          <div className="grid grid-cols-12 gap-8 p-4">
            <div className="col-span-6 flex items-center gap-4">
              <svg
                width="23"
                height="7"
                viewBox="0 0 23 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6.61621C4.65685 6.61621 6 5.27307 6 3.61621C6 1.95936 4.65685 0.616211 3 0.616211C1.34315 0.616211 0 1.95936 0 3.61621C0 5.27307 1.34315 6.61621 3 6.61621ZM9 4.11621H9.7V3.11621H9V4.11621ZM11.1 4.11621H12.5V3.11621H11.1V4.11621ZM13.9 4.11621H15.3V3.11621H13.9V4.11621ZM16.7 4.11621H18.1V3.11621H16.7V4.11621ZM19.5 4.11621H20.9V3.11621H19.5V4.11621ZM22.3 4.11621H23V3.11621H22.3V4.11621Z"
                  fill="#212121"
                />
              </svg>
              <span className="text-lg font-semibold text-text">Create</span>
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[1].includes(
                  "transaction_create"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 1,
                    permission_name: "transaction_create",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[2].includes(
                  "transaction_create"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 2,
                    permission_name: "transaction_create",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[3].includes(
                  "transaction_create"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 3,
                    permission_name: "transaction_create",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 p-4">
            <div className="col-span-6 flex items-center gap-4">
              <svg
                width="23"
                height="7"
                viewBox="0 0 23 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6.61621C4.65685 6.61621 6 5.27307 6 3.61621C6 1.95936 4.65685 0.616211 3 0.616211C1.34315 0.616211 0 1.95936 0 3.61621C0 5.27307 1.34315 6.61621 3 6.61621ZM9 4.11621H9.7V3.11621H9V4.11621ZM11.1 4.11621H12.5V3.11621H11.1V4.11621ZM13.9 4.11621H15.3V3.11621H13.9V4.11621ZM16.7 4.11621H18.1V3.11621H16.7V4.11621ZM19.5 4.11621H20.9V3.11621H19.5V4.11621ZM22.3 4.11621H23V3.11621H22.3V4.11621Z"
                  fill="#212121"
                />
              </svg>
              <span className="text-lg font-semibold text-text">Modify</span>
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[1].includes(
                  "transaction_modify"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 1,
                    permission_name: "transaction_modify",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[2].includes(
                  "transaction_modify"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 2,
                    permission_name: "transaction_modify",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[3].includes(
                  "transaction_modify"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 3,
                    permission_name: "transaction_modify",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="bg-primary p-4 rounded-md grid grid-cols-12 gap-8">
          <div className="col-span-6">
            <h3 className="text-white text-xl font-semibold">Reporting</h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-center text-xl font-semibold">
              Super Admin
            </h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-center text-xl font-semibold">
              Admin
            </h3>
          </div>
          <div className="col-span-2">
            <h3 className="text-white text-center text-xl font-semibold">
              Manager
            </h3>
          </div>
        </div>
        <div className="divide-y-[1px] divide-gray-200">
          <div className="grid grid-cols-12 gap-8 p-4">
            <div className="col-span-6 flex items-center gap-4">
              <svg
                width="23"
                height="7"
                viewBox="0 0 23 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6.61621C4.65685 6.61621 6 5.27307 6 3.61621C6 1.95936 4.65685 0.616211 3 0.616211C1.34315 0.616211 0 1.95936 0 3.61621C0 5.27307 1.34315 6.61621 3 6.61621ZM9 4.11621H9.7V3.11621H9V4.11621ZM11.1 4.11621H12.5V3.11621H11.1V4.11621ZM13.9 4.11621H15.3V3.11621H13.9V4.11621ZM16.7 4.11621H18.1V3.11621H16.7V4.11621ZM19.5 4.11621H20.9V3.11621H19.5V4.11621ZM22.3 4.11621H23V3.11621H22.3V4.11621Z"
                  fill="#212121"
                />
              </svg>
              <span className="text-lg font-semibold text-text">Create</span>
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[1].includes(
                  "reporting_create"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 1,
                    permission_name: "reporting_create",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[2].includes(
                  "reporting_create"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 2,
                    permission_name: "reporting_create",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[3].includes(
                  "reporting_create"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 3,
                    permission_name: "reporting_create",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 p-4">
            <div className="col-span-6 flex items-center gap-4">
              <svg
                width="23"
                height="7"
                viewBox="0 0 23 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6.61621C4.65685 6.61621 6 5.27307 6 3.61621C6 1.95936 4.65685 0.616211 3 0.616211C1.34315 0.616211 0 1.95936 0 3.61621C0 5.27307 1.34315 6.61621 3 6.61621ZM9 4.11621H9.7V3.11621H9V4.11621ZM11.1 4.11621H12.5V3.11621H11.1V4.11621ZM13.9 4.11621H15.3V3.11621H13.9V4.11621ZM16.7 4.11621H18.1V3.11621H16.7V4.11621ZM19.5 4.11621H20.9V3.11621H19.5V4.11621ZM22.3 4.11621H23V3.11621H22.3V4.11621Z"
                  fill="#212121"
                />
              </svg>
              <span className="text-lg font-semibold text-text">Modify</span>
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[1].includes(
                  "reporting_modify"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 1,
                    permission_name: "reporting_modify",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[2].includes(
                  "reporting_modify"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 2,
                    permission_name: "reporting_modify",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <Checkbox
                className="accent-primary size-6"
                checked={data.data.rolePermissions[3].includes(
                  "reporting_modify"
                )}
                disabled={isPending}
                onCheckedChange={(checked) =>
                  mutate({
                    role_id: 3,
                    permission_name: "reporting_modify",
                    checked: checked as boolean,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
