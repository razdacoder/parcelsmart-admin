import { formatNaira } from "@/lib/utils";

export default function StatsMetrics() {
  // const {
  //   data: shipmentMetrics,
  //   isLoading: shipmentMetricsLoading,
  //   error: shipmentMetricsError,
  // } = useShipmentMetrics();
  return (
    <>
      {/* {shipmentMetricsLoading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
        </div>
      )} */}
      {/* {shipmentMetrics && ( */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-4 flex items-center gap-4 text-text rounded-xl">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48"
              height="48"
              rx="12"
              fill="#3866D7"
              fillOpacity="0.15"
            />
            <mask
              id="mask0_1219_901"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="10"
              y="10"
              width="28"
              height="28"
            >
              <path
                d="M34 12H14C13.4696 12 12.9609 12.2107 12.5858 12.5858C12.2107 12.9609 12 13.4696 12 14V34C12 34.5304 12.2107 35.0391 12.5858 35.4142C12.9609 35.7893 13.4696 36 14 36H34C34.5304 36 35.0391 35.7893 35.4142 35.4142C35.7893 35.0391 36 34.5304 36 34V14C36 13.4696 35.7893 12.9609 35.4142 12.5858C35.0391 12.2107 34.5304 12 34 12Z"
                fill="white"
                stroke="white"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.9999 28.6667L25.3333 31.3333L30.6666 24.6667M17.3333 18H30.6666M17.3333 23.3333H22.6666"
                stroke="black"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </mask>
            <g mask="url(#mask0_1219_901)">
              <path d="M8 8H40V40H8V8Z" fill="#3866D7" />
            </g>
          </svg>

          <div className="space-y-1">
            <h6 className="text-xs font-medium">Total Transactions</h6>
            <h3 className="text-lg font-bold">76</h3>
          </div>
        </div>
        <div className="bg-white p-4 flex items-center gap-4 text-text rounded-xl">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48"
              height="48"
              rx="12"
              fill="#3866D7"
              fillOpacity="0.15"
            />
            <mask
              id="mask0_1219_901"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="10"
              y="10"
              width="28"
              height="28"
            >
              <path
                d="M34 12H14C13.4696 12 12.9609 12.2107 12.5858 12.5858C12.2107 12.9609 12 13.4696 12 14V34C12 34.5304 12.2107 35.0391 12.5858 35.4142C12.9609 35.7893 13.4696 36 14 36H34C34.5304 36 35.0391 35.7893 35.4142 35.4142C35.7893 35.0391 36 34.5304 36 34V14C36 13.4696 35.7893 12.9609 35.4142 12.5858C35.0391 12.2107 34.5304 12 34 12Z"
                fill="white"
                stroke="white"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.9999 28.6667L25.3333 31.3333L30.6666 24.6667M17.3333 18H30.6666M17.3333 23.3333H22.6666"
                stroke="black"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </mask>
            <g mask="url(#mask0_1219_901)">
              <path d="M8 8H40V40H8V8Z" fill="#3866D7" />
            </g>
          </svg>

          <div className="space-y-1">
            <h6 className="text-xs font-medium">Total Revenue</h6>
            <h3 className="text-lg font-bold">{formatNaira(10000000)}</h3>
          </div>
        </div>
        <div className="bg-white p-4 flex items-center gap-4 text-text rounded-xl">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48"
              height="48"
              rx="12"
              fill="#3730F4"
              fillOpacity="0.3"
            />
            <path
              d="M29.3333 30.6669V33.3335H10.6666V30.6669C10.6666 30.6669 10.6666 25.3335 20 25.3335C29.3333 25.3335 29.3333 30.6669 29.3333 30.6669ZM24.6666 18.0002C24.6666 17.0772 24.3929 16.175 23.8802 15.4076C23.3674 14.6401 22.6385 14.042 21.7858 13.6888C20.9331 13.3356 19.9948 13.2431 19.0895 13.4232C18.1843 13.6033 17.3528 14.0477 16.7001 14.7004C16.0475 15.353 15.603 16.1845 15.423 17.0898C15.2429 17.995 15.3353 18.9333 15.6885 19.7861C16.0417 20.6388 16.6399 21.3676 17.4073 21.8804C18.1747 22.3932 19.077 22.6669 20 22.6669C21.2376 22.6669 22.4246 22.1752 23.2998 21.3C24.175 20.4249 24.6666 19.2379 24.6666 18.0002ZM29.2533 25.3335C30.073 25.9679 30.7437 26.7741 31.2182 27.6956C31.6927 28.617 31.9596 29.6312 32 30.6669V33.3335H37.3333V30.6669C37.3333 30.6669 37.3333 25.8269 29.2533 25.3335ZM28 13.3335C27.0823 13.3293 26.185 13.6036 25.4266 14.1202C26.2365 15.2519 26.672 16.6086 26.672 18.0002C26.672 19.3918 26.2365 20.7486 25.4266 21.8802C26.185 22.3968 27.0823 22.6711 28 22.6669C29.2376 22.6669 30.4246 22.1752 31.2998 21.3C32.175 20.4249 32.6666 19.2379 32.6666 18.0002C32.6666 16.7625 32.175 15.5756 31.2998 14.7004C30.4246 13.8252 29.2376 13.3335 28 13.3335Z"
              fill="#3730F4"
            />
          </svg>

          <div className="space-y-1">
            <h6 className="text-xs font-medium">Total Users</h6>
            <h3 className="text-lg font-bold">97</h3>
          </div>
        </div>
        <div className="bg-white p-4 flex items-center gap-4 text-text rounded-xl">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48"
              height="48"
              rx="12"
              fill="#3730F4"
              fillOpacity="0.3"
            />
            <g clipPath="url(#clip0_1223_5669)">
              <path
                d="M15.2 10C16.2609 10 17.2783 10.4609 18.0284 11.2814C18.7786 12.1019 19.2 13.2147 19.2 14.375C19.2 15.5353 18.7786 16.6481 18.0284 17.4686C17.2783 18.2891 16.2609 18.75 15.2 18.75C14.1391 18.75 13.1217 18.2891 12.3716 17.4686C11.6214 16.6481 11.2 15.5353 11.2 14.375C11.2 13.2147 11.6214 12.1019 12.3716 11.2814C13.1217 10.4609 14.1391 10 15.2 10ZM33.6 10C34.6609 10 35.6783 10.4609 36.4284 11.2814C37.1786 12.1019 37.6 13.2147 37.6 14.375C37.6 15.5353 37.1786 16.6481 36.4284 17.4686C35.6783 18.2891 34.6609 18.75 33.6 18.75C32.5391 18.75 31.5217 18.2891 30.7716 17.4686C30.0214 16.6481 29.6 15.5353 29.6 14.375C29.6 13.2147 30.0214 12.1019 30.7716 11.2814C31.5217 10.4609 32.5391 10 33.6 10ZM8 26.3352C8 23.1141 10.39 20.5 13.335 20.5H15.47C16.265 20.5 17.02 20.6914 17.7 21.0305C17.635 21.4242 17.605 21.8344 17.605 22.25C17.605 24.3391 18.445 26.2148 19.77 27.5H9.065C8.48 27.5 8 26.975 8 26.3352ZM28.265 27.5H28.23C29.56 26.2148 30.395 24.3391 30.395 22.25C30.395 21.8344 30.36 21.4297 30.3 21.0305C30.98 20.6859 31.735 20.5 32.53 20.5H34.665C37.61 20.5 40 23.1141 40 26.3352C40 26.9805 39.52 27.5 38.935 27.5H28.27H28.265ZM19.2 22.25C19.2 20.8576 19.7057 19.5223 20.6059 18.5377C21.5061 17.5531 22.727 17 24 17C25.273 17 26.4939 17.5531 27.3941 18.5377C28.2943 19.5223 28.8 20.8576 28.8 22.25C28.8 23.6424 28.2943 24.9777 27.3941 25.9623C26.4939 26.9469 25.273 27.5 24 27.5C22.727 27.5 21.5061 26.9469 20.6059 25.9623C19.7057 24.9777 19.2 23.6424 19.2 22.25ZM14.4 36.5398C14.4 32.5148 17.385 29.25 21.065 29.25H26.93C30.615 29.25 33.6 32.5148 33.6 36.5398C33.6 37.3438 33.005 38 32.265 38H15.73C14.995 38 14.395 37.3492 14.395 36.5398H14.4Z"
                fill="#3730F4"
              />
            </g>
            <defs>
              <clipPath id="clip0_1223_5669">
                <rect
                  width="32"
                  height="28"
                  fill="white"
                  transform="translate(8 10)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className="space-y-1">
            <h6 className="text-xs font-medium">Total Staff</h6>
            <h3 className="text-lg font-bold">20</h3>
          </div>
        </div>
      </div>
      {/* )} */}

      {/* {shipmentMetricsError && (
        <div className="flex justify-center items-center py-24">
          <p className="text-sm font-medium text-destructive">
            {shipmentMetricsError.response?.data.message}
          </p>
        </div>
      )} */}
    </>
  );
}
