
export default function TransactionStatsCard() {
  return (
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
          <h3 className="text-lg font-bold">24</h3>
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
          <rect width="48" height="48" rx="12" fill="#E0FEE9" />
          <path
            d="M13.9388 24.9387C14.0782 24.7989 14.2437 24.6879 14.4261 24.6122C14.6084 24.5365 14.8039 24.4975 15.0013 24.4975C15.1987 24.4975 15.3942 24.5365 15.5765 24.6122C15.7589 24.6879 15.9244 24.7989 16.0638 24.9387L22.5001 31.375V13C22.5001 12.6021 22.6581 12.2206 22.9394 11.9393C23.2207 11.658 23.6022 11.5 24.0001 11.5C24.3979 11.5 24.7794 11.658 25.0607 11.9393C25.342 12.2206 25.5001 12.6021 25.5001 13V31.375L31.9388 24.9387C32.2206 24.6569 32.6028 24.4986 33.0013 24.4986C33.3998 24.4986 33.782 24.6569 34.0638 24.9387C34.3456 25.2205 34.5039 25.6027 34.5039 26.0012C34.5039 26.3997 34.3456 26.7819 34.0638 27.0637L25.0638 36.0637C24.9244 36.2035 24.7589 36.3145 24.5765 36.3902C24.3942 36.4659 24.1987 36.5049 24.0013 36.5049C23.8039 36.5049 23.6084 36.4659 23.4261 36.3902C23.2437 36.3145 23.0782 36.2035 22.9388 36.0637L13.9388 27.0637C13.799 26.9243 13.688 26.7588 13.6123 26.5764C13.5366 26.3941 13.4976 26.1986 13.4976 26.0012C13.4976 25.8038 13.5366 25.6083 13.6123 25.426C13.688 25.2436 13.799 25.0781 13.9388 24.9387Z"
            fill="#24D164"
          />
        </svg>

        <div className="space-y-1">
          <h6 className="text-xs font-medium">Total Inflow</h6>
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
            fill="#E74C3C"
            fillOpacity="0.2"
          />
          <path
            d="M34.0612 23.0613C33.9218 23.2011 33.7563 23.3121 33.5739 23.3878C33.3916 23.4635 33.1961 23.5025 32.9987 23.5025C32.8013 23.5025 32.6058 23.4635 32.4235 23.3878C32.2411 23.3121 32.0756 23.2011 31.9362 23.0613L25.4999 16.625V35C25.4999 35.3979 25.3419 35.7794 25.0606 36.0607C24.7793 36.342 24.3978 36.5 23.9999 36.5C23.6021 36.5 23.2206 36.342 22.9393 36.0607C22.658 35.7794 22.4999 35.3979 22.4999 35V16.625L16.0612 23.0613C15.7794 23.3431 15.3972 23.5014 14.9987 23.5014C14.6002 23.5014 14.218 23.3431 13.9362 23.0613C13.6544 22.7795 13.4961 22.3973 13.4961 21.9988C13.4961 21.6003 13.6544 21.2181 13.9362 20.9363L22.9362 11.9363C23.0756 11.7965 23.2411 11.6855 23.4235 11.6098C23.6058 11.5341 23.8013 11.4951 23.9987 11.4951C24.1961 11.4951 24.3916 11.5341 24.5739 11.6098C24.7563 11.6855 24.9218 11.7965 25.0612 11.9363L34.0612 20.9363C34.201 21.0757 34.312 21.2412 34.3877 21.4236C34.4634 21.6059 34.5024 21.8014 34.5024 21.9988C34.5024 22.1962 34.4634 22.3917 34.3877 22.574C34.312 22.7564 34.201 22.9219 34.0612 23.0613Z"
            fill="#E74C3C"
          />
        </svg>

        <div className="space-y-1">
          <h6 className="text-xs font-medium">Total Outflow</h6>
          <h3 className="text-lg font-bold">20</h3>
        </div>
      </div>
    </div>
  );
}
