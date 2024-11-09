export default function KycMetrics() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
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
            fill-opacity="0.15"
          />
          <mask
            id="mask0_1840_1747"
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
              stroke-width="2.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.9999 28.6667L25.3333 31.3333L30.6666 24.6667M17.3333 18H30.6666M17.3333 23.3333H22.6666"
              stroke="black"
              stroke-width="2.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </mask>
          <g mask="url(#mask0_1840_1747)">
            <path d="M8 8H40V40H8V8Z" fill="#3866D7" />
          </g>
        </svg>

        <div className="space-y-1">
          <h6 className="text-xs font-medium">Total Submissions</h6>
          <h3 className="text-lg font-bold">73</h3>
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 36C25.7072 36 27.3977 35.6896 28.9749 35.0866C30.5521 34.4835 31.9852 33.5996 33.1924 32.4853C34.3995 31.371 35.3571 30.0481 36.0104 28.5922C36.6637 27.1363 37 25.5759 37 24C37 22.4241 36.6637 20.8637 36.0104 19.4078C35.3571 17.9519 34.3995 16.629 33.1924 15.5147C31.9852 14.4004 30.5521 13.5165 28.9749 12.9134C27.3977 12.3104 25.7072 12 24 12C20.5522 12 17.2456 13.2643 14.8076 15.5147C12.3696 17.7652 11 20.8174 11 24C11 27.1826 12.3696 30.2348 14.8076 32.4853C17.2456 34.7357 20.5522 36 24 36ZM23.6649 28.8533L30.8871 20.8533L28.6684 19.1467L22.4573 26.0253L19.2434 23.0573L17.201 24.9427L21.5343 28.9427L22.6523 29.9747L23.6649 28.8533Z"
            fill="#24D164"
          />
        </svg>

        <div className="space-y-1">
          <h6 className="text-xs font-medium">Approved</h6>
          <h3 className="text-lg font-bold">23</h3>
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
            fill-opacity="0.2"
          />
          <path
            d="M19.2 30.6665L24 25.8665L28.8 30.6665L30.6666 28.7998L25.8666 23.9998L30.6666 19.1998L28.8 17.3332L24 22.1332L19.2 17.3332L17.3333 19.1998L22.1333 23.9998L17.3333 28.7998L19.2 30.6665ZM24 37.3332C22.1555 37.3332 20.4222 36.9829 18.8 36.2825C17.1777 35.5821 15.7666 34.6323 14.5666 33.4332C13.3666 32.2341 12.4169 30.8229 11.7173 29.1998C11.0177 27.5767 10.6675 25.8434 10.6666 23.9998C10.6657 22.1563 11.016 20.4229 11.7173 18.7998C12.4186 17.1767 13.3684 15.7656 14.5666 14.5665C15.7649 13.3674 17.176 12.4176 18.8 11.7172C20.424 11.0167 22.1573 10.6665 24 10.6665C25.8426 10.6665 27.576 11.0167 29.2 11.7172C30.824 12.4176 32.2351 13.3674 33.4333 14.5665C34.6315 15.7656 35.5817 17.1767 36.284 18.7998C36.9862 20.4229 37.336 22.1563 37.3333 23.9998C37.3306 25.8434 36.9804 27.5767 36.2826 29.1998C35.5849 30.8229 34.6351 32.2341 33.4333 33.4332C32.2315 34.6323 30.8204 35.5825 29.2 36.2838C27.5795 36.9852 25.8462 37.3349 24 37.3332Z"
            fill="#E74C3C"
          />
        </svg>

        <div className="space-y-1">
          <h6 className="text-xs font-medium">Rejected</h6>
          <h3 className="text-lg font-bold">23</h3>
        </div>
      </div>
    </div>
  );
}
