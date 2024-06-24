import React from "react";
import { Link } from "react-router-dom";
 
const Dashboard: React.FC = () => {
  return (
    <div>
       <div className="bg-[#2A333E] sticky top-0 w-full z-10 h-[100px]">
        
      </div> 
      <div className="flex flex-col">
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[#FAFBFC]"
          aria-label="Sidebar"
        >
          <div className=" bg-[#2A333E] w-full h-[100px] flex items-center justify-center border-r-2">
          <svg
              width="116"
              height="29"
              viewBox="0 0 116 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="97"
                width="3.10173"
                height="25.3778"
                fill="url(#paint0_linear_4237_36729)"
              />
              <path
                d="M1.69906 25.7969V8.57076H4.81961V23.181H12.4065V25.7969H1.69906ZM20.6158 26.0492C19.3541 26.0492 18.2607 25.7716 17.3355 25.2165C16.4102 24.6614 15.6925 23.8847 15.1822 22.8866C14.6775 21.8885 14.4252 20.7221 14.4252 19.3876C14.4252 18.053 14.6775 16.8838 15.1822 15.8801C15.6925 14.8764 16.4102 14.0969 17.3355 13.5418C18.2607 12.9866 19.3541 12.7091 20.6158 12.7091C21.8775 12.7091 22.971 12.9866 23.8962 13.5418C24.8214 14.0969 25.5364 14.8764 26.041 15.8801C26.5513 16.8838 26.8065 18.053 26.8065 19.3876C26.8065 20.7221 26.5513 21.8885 26.041 22.8866C25.5364 23.8847 24.8214 24.6614 23.8962 25.2165C22.971 25.7716 21.8775 26.0492 20.6158 26.0492ZM20.6326 23.61C21.3168 23.61 21.8887 23.4221 22.3485 23.0464C22.8083 22.6651 23.1504 22.1548 23.3747 21.5156C23.6046 20.8763 23.7195 20.1642 23.7195 19.3791C23.7195 18.5885 23.6046 17.8735 23.3747 17.2343C23.1504 16.5894 22.8083 16.0763 22.3485 15.695C21.8887 15.3137 21.3168 15.1231 20.6326 15.1231C19.9317 15.1231 19.3485 15.3137 18.8831 15.695C18.4233 16.0763 18.0784 16.5894 17.8485 17.2343C17.6242 17.8735 17.5121 18.5885 17.5121 19.3791C17.5121 20.1642 17.6242 20.8763 17.8485 21.5156C18.0784 22.1548 18.4233 22.6651 18.8831 23.0464C19.3485 23.4221 19.9317 23.61 20.6326 23.61ZM32.4356 18.2268V25.7969H29.3908V8.57076H32.3684V15.0726H32.5198C32.8226 14.3436 33.2908 13.7689 33.9244 13.3483C34.5637 12.9222 35.3768 12.7091 36.3637 12.7091C37.2609 12.7091 38.0431 12.8969 38.7104 13.2726C39.3777 13.6483 39.8936 14.1978 40.258 14.9212C40.6281 15.6446 40.8132 16.5277 40.8132 17.5707V25.7969H37.7683V18.0418C37.7683 17.1726 37.544 16.4969 37.0954 16.0147C36.6524 15.5268 36.03 15.2829 35.2282 15.2829C34.6898 15.2829 34.2076 15.4006 33.7814 15.6362C33.3609 15.8661 33.03 16.1997 32.7889 16.6371C32.5534 17.0745 32.4356 17.6044 32.4356 18.2268ZM47.6347 26.0576C46.816 26.0576 46.0786 25.9118 45.4225 25.6202C44.772 25.323 44.2562 24.8857 43.8749 24.3081C43.4992 23.7305 43.3113 23.0184 43.3113 22.1717C43.3113 21.4427 43.4459 20.8399 43.715 20.3632C43.9842 19.8866 44.3515 19.5053 44.8169 19.2193C45.2823 18.9333 45.8066 18.7175 46.3898 18.5717C46.9786 18.4203 47.587 18.3109 48.215 18.2436C48.972 18.1651 49.586 18.095 50.0571 18.0333C50.5281 17.9661 50.8702 17.8651 51.0832 17.7305C51.3019 17.5904 51.4113 17.3745 51.4113 17.0829V17.0324C51.4113 16.3988 51.2234 15.9081 50.8477 15.5605C50.472 15.2128 49.9309 15.039 49.2244 15.039C48.4786 15.039 47.887 15.2016 47.4496 15.5268C47.0178 15.852 46.7262 16.2362 46.5748 16.6791L43.7319 16.2754C43.9562 15.4904 44.3263 14.8343 44.8421 14.3072C45.358 13.7745 45.9889 13.3764 46.7347 13.1128C47.4804 12.8436 48.3047 12.7091 49.2075 12.7091C49.83 12.7091 50.4496 12.782 51.0664 12.9278C51.6832 13.0736 52.2468 13.3147 52.7571 13.6511C53.2673 13.982 53.6767 14.4334 53.9851 15.0053C54.2991 15.5773 54.4561 16.2922 54.4561 17.1502V25.7969H51.529V24.0221H51.4281C51.2431 24.381 50.9823 24.7174 50.6459 25.0315C50.315 25.3399 49.8973 25.5894 49.3926 25.7801C48.8935 25.9651 48.3075 26.0576 47.6347 26.0576ZM48.4253 23.8202C49.0365 23.8202 49.5664 23.6997 50.015 23.4586C50.4636 23.2118 50.8085 22.8866 51.0496 22.4829C51.2963 22.0791 51.4197 21.6389 51.4197 21.1623V19.6399C51.3244 19.7184 51.1617 19.7913 50.9318 19.8586C50.7075 19.9259 50.4552 19.9847 50.1748 20.0352C49.8945 20.0857 49.6169 20.1305 49.3421 20.1698C49.0674 20.209 48.829 20.2427 48.6272 20.2707C48.173 20.3324 47.7664 20.4333 47.4076 20.5735C47.0487 20.7137 46.7655 20.91 46.558 21.1623C46.3505 21.409 46.2468 21.7287 46.2468 22.1212C46.2468 22.6819 46.4515 23.1053 46.8608 23.3913C47.2702 23.6773 47.7917 23.8202 48.4253 23.8202ZM60.1841 25.7969L56.5337 12.8773H59.6374L61.9084 21.9614H62.0262L64.3477 12.8773H67.4178L69.7393 21.9109H69.8654L72.1028 12.8773H75.2149L71.5561 25.7969H68.3851L65.9626 17.0661H65.786L63.3636 25.7969H60.1841ZM81.0586 26.0576C80.2399 26.0576 79.5025 25.9118 78.8465 25.6202C78.196 25.323 77.6801 24.8857 77.2988 24.3081C76.9231 23.7305 76.7353 23.0184 76.7353 22.1717C76.7353 21.4427 76.8698 20.8399 77.139 20.3632C77.4082 19.8866 77.7754 19.5053 78.2409 19.2193C78.7063 18.9333 79.2306 18.7175 79.8138 18.5717C80.4025 18.4203 81.0109 18.3109 81.639 18.2436C82.396 18.1651 83.01 18.095 83.481 18.0333C83.9521 17.9661 84.2941 17.8651 84.5072 17.7305C84.7259 17.5904 84.8352 17.3745 84.8352 17.0829V17.0324C84.8352 16.3988 84.6474 15.9081 84.2717 15.5605C83.896 15.2128 83.3549 15.039 82.6483 15.039C81.9025 15.039 81.3109 15.2016 80.8736 15.5268C80.4418 15.852 80.1502 16.2362 79.9988 16.6791L77.1558 16.2754C77.3801 15.4904 77.7502 14.8343 78.2661 14.3072C78.782 13.7745 79.4128 13.3764 80.1586 13.1128C80.9044 12.8436 81.7287 12.7091 82.6315 12.7091C83.2539 12.7091 83.8736 12.782 84.4904 12.9278C85.1072 13.0736 85.6707 13.3147 86.181 13.6511C86.6913 13.982 87.1006 14.4334 87.4091 15.0053C87.7231 15.5773 87.8801 16.2922 87.8801 17.1502V25.7969H84.953V24.0221H84.8521C84.667 24.381 84.4063 24.7174 84.0698 25.0315C83.739 25.3399 83.3212 25.5894 82.8165 25.7801C82.3175 25.9651 81.7315 26.0576 81.0586 26.0576ZM81.8493 23.8202C82.4605 23.8202 82.9904 23.6997 83.439 23.4586C83.8876 23.2118 84.2324 22.8866 84.4735 22.4829C84.7203 22.0791 84.8436 21.6389 84.8436 21.1623V19.6399C84.7483 19.7184 84.5857 19.7913 84.3558 19.8586C84.1315 19.9259 83.8792 19.9847 83.5988 20.0352C83.3184 20.0857 83.0408 20.1305 82.7661 20.1698C82.4913 20.209 82.253 20.2427 82.0511 20.2707C81.5969 20.3324 81.1904 20.4333 80.8315 20.5735C80.4726 20.7137 80.1895 20.91 79.982 21.1623C79.7745 21.409 79.6708 21.7287 79.6708 22.1212C79.6708 22.6819 79.8754 23.1053 80.2848 23.3913C80.6941 23.6773 81.2156 23.8202 81.8493 23.8202ZM93.9866 8.57076V25.7969H90.9418V8.57076H93.9866ZM100.163 8.57076V25.7969H97.1177V8.57076H100.163ZM107.011 26.0576C106.193 26.0576 105.455 25.9118 104.799 25.6202C104.149 25.323 103.633 24.8857 103.252 24.3081C102.876 23.7305 102.688 23.0184 102.688 22.1717C102.688 21.4427 102.823 20.8399 103.092 20.3632C103.361 19.8866 103.728 19.5053 104.194 19.2193C104.659 18.9333 105.183 18.7175 105.766 18.5717C106.355 18.4203 106.964 18.3109 107.592 18.2436C108.349 18.1651 108.963 18.095 109.434 18.0333C109.905 17.9661 110.247 17.8651 110.46 17.7305C110.679 17.5904 110.788 17.3745 110.788 17.0829V17.0324C110.788 16.3988 110.6 15.9081 110.224 15.5605C109.849 15.2128 109.308 15.039 108.601 15.039C107.855 15.039 107.264 15.2016 106.826 15.5268C106.395 15.852 106.103 16.2362 105.952 16.6791L103.109 16.2754C103.333 15.4904 103.703 14.8343 104.219 14.3072C104.735 13.7745 105.366 13.3764 106.111 13.1128C106.857 12.8436 107.681 12.7091 108.584 12.7091C109.207 12.7091 109.826 12.782 110.443 12.9278C111.06 13.0736 111.623 13.3147 112.134 13.6511C112.644 13.982 113.053 14.4334 113.362 15.0053C113.676 15.5773 113.833 16.2922 113.833 17.1502V25.7969H110.906V24.0221H110.805C110.62 24.381 110.359 24.7174 110.023 25.0315C109.692 25.3399 109.274 25.5894 108.769 25.7801C108.27 25.9651 107.684 26.0576 107.011 26.0576ZM107.802 23.8202C108.413 23.8202 108.943 23.6997 109.392 23.4586C109.84 23.2118 110.185 22.8866 110.426 22.4829C110.673 22.0791 110.796 21.6389 110.796 21.1623V19.6399C110.701 19.7184 110.538 19.7913 110.309 19.8586C110.084 19.9259 109.832 19.9847 109.551 20.0352C109.271 20.0857 108.994 20.1305 108.719 20.1698C108.444 20.209 108.206 20.2427 108.004 20.2707C107.55 20.3324 107.143 20.4333 106.784 20.5735C106.425 20.7137 106.142 20.91 105.935 21.1623C105.727 21.409 105.623 21.7287 105.623 22.1212C105.623 22.6819 105.828 23.1053 106.237 23.3913C106.647 23.6773 107.168 23.8202 107.802 23.8202Z"
                fill="url(#paint1_linear_4237_36729)"
              />
              <rect
                x="1.69141"
                width="3.10173"
                height="25.3778"
                fill="url(#paint2_linear_4237_36729)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4237_36729"
                  x1="98.5509"
                  y1="0"
                  x2="98.5509"
                  y2="25.3778"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.359375" stop-color="#D6D7D6" />
                  <stop offset="0.953125" stop-color="#9D9E9C" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_4237_36729"
                  x1="58"
                  y1="4.79687"
                  x2="58"
                  y2="28.7969"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.359375" stop-color="#D6D7D6" />
                  <stop
                    offset="0.5625"
                    stop-color="#E3E4E2"
                    stop-opacity="0.6"
                  />
                  <stop
                    offset="0.953125"
                    stop-color="#FDFFFB"
                    stop-opacity="0.66"
                  />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_4237_36729"
                  x1="3.24227"
                  y1="0"
                  x2="3.24227"
                  y2="25.3778"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.27812" stop-color="#D6D7D6" />
                  <stop offset="0.64652" stop-color="#919290" />
                  <stop offset="0.953125" stop-color="#9D9E9C" />
                </linearGradient>
              </defs>
            </svg>
          </div> 
          <div className="h-full px-3 py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center p-2 text-black rounded-lg hover:bg-[#091E420A] group"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16V21M12 16L18 21M12 16L6 21M21 3V11.2C21 12.8802 21 13.7202 20.673 14.362C20.3854 14.9265 19.9265 15.3854 19.362 15.673C18.7202 16 17.8802 16 16.2 16H7.8C6.11984 16 5.27976 16 4.63803 15.673C4.07354 15.3854 3.6146 14.9265 3.32698 14.362C3 13.7202 3 12.8802 3 11.2V3M8 9V12M12 7V12M16 11V12M22 3H2"
                      stroke="#172B4D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ms-3 text-black">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/customer"
                  className="flex items-center p-2 text-black rounded-lg hover:bg-[#091E420A] group"
                >
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 19V13M15 16H21M11 13H7C5.13623 13 4.20435 13 3.46927 13.3045C2.48915 13.7105 1.71046 14.4892 1.30448 15.4693C1 16.2044 1 17.1362 1 19M14.5 1.29076C15.9659 1.88415 17 3.32131 17 5C17 6.67869 15.9659 8.11585 14.5 8.70924M12.5 5C12.5 7.20914 10.7091 9 8.5 9C6.29086 9 4.5 7.20914 4.5 5C4.5 2.79086 6.29086 1 8.5 1C10.7091 1 12.5 2.79086 12.5 5Z"
                      stroke="#172B4D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-black">
                    Customer
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/your-cart"
                  className="flex items-center p-2 text-black rounded-lg hover:bg-[#091E420A] group"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.8256 5.51906C20.7552 5.43481 20.6672 5.36705 20.5677 5.32056C20.4683 5.27407 20.3598 5.24998 20.25 5.25H5.12625L4.66781 2.73187C4.60502 2.38625 4.42292 2.07363 4.15325 1.84851C3.88359 1.62339 3.54347 1.50005 3.19219 1.5H1.5C1.30109 1.5 1.11032 1.57902 0.96967 1.71967C0.829018 1.86032 0.75 2.05109 0.75 2.25C0.75 2.44891 0.829018 2.63968 0.96967 2.78033C1.11032 2.92098 1.30109 3 1.5 3H3.1875L5.58375 16.1522C5.65434 16.5422 5.82671 16.9067 6.08344 17.2087C5.72911 17.5397 5.47336 17.9623 5.34455 18.4298C5.21575 18.8972 5.21892 19.3912 5.35371 19.8569C5.48851 20.3226 5.74966 20.7419 6.10821 21.0683C6.46676 21.3947 6.9087 21.6154 7.38502 21.7059C7.86134 21.7965 8.35344 21.7533 8.80673 21.5813C9.26003 21.4092 9.65682 21.115 9.9531 20.7312C10.2494 20.3474 10.4336 19.889 10.4853 19.407C10.537 18.9249 10.4541 18.4379 10.2459 18H14.5041C14.3363 18.3513 14.2495 18.7357 14.25 19.125C14.25 19.6442 14.404 20.1517 14.6924 20.5834C14.9808 21.0151 15.3908 21.3515 15.8705 21.5502C16.3501 21.7489 16.8779 21.8008 17.3871 21.6996C17.8963 21.5983 18.364 21.3483 18.7312 20.9812C19.0983 20.614 19.3483 20.1463 19.4496 19.6371C19.5508 19.1279 19.4989 18.6001 19.3002 18.1205C19.1015 17.6408 18.7651 17.2308 18.3334 16.9424C17.9017 16.654 17.3942 16.5 16.875 16.5H7.79719C7.62155 16.5 7.45149 16.4383 7.31665 16.3257C7.18182 16.2132 7.09077 16.0569 7.05938 15.8841L6.76219 14.25H17.6372C18.1641 14.2499 18.6743 14.0649 19.0788 13.7272C19.4833 13.3896 19.7564 12.9206 19.8506 12.4022L20.9906 6.13406C21.0099 6.02572 21.0051 5.91447 20.9766 5.80818C20.9481 5.7019 20.8966 5.60319 20.8256 5.51906ZM16.875 18C17.0975 18 17.315 18.066 17.5 18.1896C17.685 18.3132 17.8292 18.4889 17.9144 18.6945C17.9995 18.9 18.0218 19.1262 17.9784 19.3445C17.935 19.5627 17.8278 19.7632 17.6705 19.9205C17.5132 20.0778 17.3127 20.185 17.0945 20.2284C16.8762 20.2718 16.65 20.2495 16.4445 20.1644C16.2389 20.0792 16.0632 19.935 15.9396 19.75C15.816 19.565 15.75 19.3475 15.75 19.125C15.75 18.8266 15.8685 18.5405 16.0795 18.3295C16.2905 18.1185 16.5766 18 16.875 18ZM7.875 18C8.0975 18 8.31501 18.066 8.50002 18.1896C8.68502 18.3132 8.82922 18.4889 8.91436 18.6945C8.99951 18.9 9.02179 19.1262 8.97838 19.3445C8.93498 19.5627 8.82783 19.7632 8.6705 19.9205C8.51316 20.0778 8.31271 20.185 8.09448 20.2284C7.87625 20.2718 7.65005 20.2495 7.44448 20.1644C7.23891 20.0792 7.06321 19.935 6.9396 19.75C6.81598 19.565 6.75 19.3475 6.75 19.125C6.75 18.8266 6.86853 18.5405 7.0795 18.3295C7.29048 18.1185 7.57663 18 7.875 18Z"
                      fill="#2A333E"
                    />
                  </svg>

                  <span className="flex-1 text-black ms-3 whitespace-nowrap">
                    Your Cart
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/past-orders"
                  className="flex items-center p-2 text-black rounded-lg hover:bg-[#091E420A] group"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.625 6.25002V9.64612L13.4469 11.3391C13.589 11.4245 13.6914 11.5628 13.7316 11.7237C13.7717 11.8845 13.7463 12.0548 13.6609 12.1969C13.5756 12.339 13.4372 12.4414 13.2764 12.4816C13.1155 12.5217 12.9453 12.4963 12.8031 12.411L9.67812 10.536C9.58563 10.4804 9.50911 10.4018 9.45599 10.3079C9.40287 10.214 9.37497 10.1079 9.375 10V6.25002C9.375 6.08426 9.44085 5.92529 9.55806 5.80808C9.67527 5.69087 9.83424 5.62502 10 5.62502C10.1658 5.62502 10.3247 5.69087 10.4419 5.80808C10.5592 5.92529 10.625 6.08426 10.625 6.25002ZM10 2.50002C9.01406 2.49757 8.03742 2.69067 7.12661 3.06817C6.21579 3.44566 5.38889 4.00005 4.69375 4.69924C4.12578 5.27424 3.62109 5.82737 3.125 6.40627V5.00002C3.125 4.83426 3.05915 4.67529 2.94194 4.55808C2.82473 4.44087 2.66576 4.37502 2.5 4.37502C2.33424 4.37502 2.17527 4.44087 2.05806 4.55808C1.94085 4.67529 1.875 4.83426 1.875 5.00002V8.12502C1.875 8.29078 1.94085 8.44975 2.05806 8.56697C2.17527 8.68418 2.33424 8.75002 2.5 8.75002H5.625C5.79076 8.75002 5.94973 8.68418 6.06694 8.56697C6.18415 8.44975 6.25 8.29078 6.25 8.12502C6.25 7.95926 6.18415 7.80029 6.06694 7.68308C5.94973 7.56587 5.79076 7.50002 5.625 7.50002H3.82812C4.38672 6.84221 4.94297 6.22268 5.57734 5.58049C6.44598 4.71186 7.55133 4.11847 8.75529 3.87446C9.95924 3.63045 11.2084 3.74665 12.3467 4.20853C13.485 4.67041 14.4619 5.45749 15.1555 6.47144C15.849 7.48538 16.2283 8.68121 16.2461 9.90952C16.2639 11.1378 15.9193 12.3441 15.2554 13.3777C14.5915 14.4113 13.6377 15.2263 12.5132 15.7209C11.3888 16.2155 10.1435 16.3678 8.93299 16.1587C7.72249 15.9496 6.60043 15.3885 5.70703 14.5453C5.64732 14.4889 5.57708 14.4448 5.50032 14.4155C5.42356 14.3862 5.34179 14.3724 5.25967 14.3747C5.17754 14.377 5.09668 14.3955 5.0217 14.429C4.94672 14.4626 4.87908 14.5106 4.82266 14.5703C4.76623 14.63 4.72212 14.7003 4.69283 14.777C4.66355 14.8538 4.64967 14.9356 4.652 15.0177C4.65432 15.0998 4.67279 15.1807 4.70636 15.2557C4.73993 15.3306 4.78795 15.3983 4.84766 15.4547C5.73785 16.2948 6.82012 16.9042 8 17.2298C9.17989 17.5554 10.4215 17.5873 11.6166 17.3226C12.8116 17.058 13.9237 16.505 14.8559 15.7117C15.788 14.9184 16.5118 13.9091 16.9642 12.7718C17.4165 11.6344 17.5836 10.4037 17.4509 9.18689C17.3182 7.97011 16.8897 6.80431 16.2029 5.79122C15.516 4.77813 14.5916 3.94854 13.5104 3.37485C12.4292 2.80117 11.224 2.50082 10 2.50002Z"
                      fill="#2A333E"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap text-black">
                    Past Orders
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="sales-order-report"
                  className="flex items-center p-2 text-black rounded-lg hover:bg-[#091E420A] group"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.625 6.25002V9.64612L13.4469 11.3391C13.589 11.4245 13.6914 11.5628 13.7316 11.7237C13.7717 11.8845 13.7463 12.0548 13.6609 12.1969C13.5756 12.339 13.4372 12.4414 13.2764 12.4816C13.1155 12.5217 12.9453 12.4963 12.8031 12.411L9.67812 10.536C9.58563 10.4804 9.50911 10.4018 9.45599 10.3079C9.40287 10.214 9.37497 10.1079 9.375 10V6.25002C9.375 6.08426 9.44085 5.92529 9.55806 5.80808C9.67527 5.69087 9.83424 5.62502 10 5.62502C10.1658 5.62502 10.3247 5.69087 10.4419 5.80808C10.5592 5.92529 10.625 6.08426 10.625 6.25002ZM10 2.50002C9.01406 2.49757 8.03742 2.69067 7.12661 3.06817C6.21579 3.44566 5.38889 4.00005 4.69375 4.69924C4.12578 5.27424 3.62109 5.82737 3.125 6.40627V5.00002C3.125 4.83426 3.05915 4.67529 2.94194 4.55808C2.82473 4.44087 2.66576 4.37502 2.5 4.37502C2.33424 4.37502 2.17527 4.44087 2.05806 4.55808C1.94085 4.67529 1.875 4.83426 1.875 5.00002V8.12502C1.875 8.29078 1.94085 8.44975 2.05806 8.56697C2.17527 8.68418 2.33424 8.75002 2.5 8.75002H5.625C5.79076 8.75002 5.94973 8.68418 6.06694 8.56697C6.18415 8.44975 6.25 8.29078 6.25 8.12502C6.25 7.95926 6.18415 7.80029 6.06694 7.68308C5.94973 7.56587 5.79076 7.50002 5.625 7.50002H3.82812C4.38672 6.84221 4.94297 6.22268 5.57734 5.58049C6.44598 4.71186 7.55133 4.11847 8.75529 3.87446C9.95924 3.63045 11.2084 3.74665 12.3467 4.20853C13.485 4.67041 14.4619 5.45749 15.1555 6.47144C15.849 7.48538 16.2283 8.68121 16.2461 9.90952C16.2639 11.1378 15.9193 12.3441 15.2554 13.3777C14.5915 14.4113 13.6377 15.2263 12.5132 15.7209C11.3888 16.2155 10.1435 16.3678 8.93299 16.1587C7.72249 15.9496 6.60043 15.3885 5.70703 14.5453C5.64732 14.4889 5.57708 14.4448 5.50032 14.4155C5.42356 14.3862 5.34179 14.3724 5.25967 14.3747C5.17754 14.377 5.09668 14.3955 5.0217 14.429C4.94672 14.4626 4.87908 14.5106 4.82266 14.5703C4.76623 14.63 4.72212 14.7003 4.69283 14.777C4.66355 14.8538 4.64967 14.9356 4.652 15.0177C4.65432 15.0998 4.67279 15.1807 4.70636 15.2557C4.73993 15.3306 4.78795 15.3983 4.84766 15.4547C5.73785 16.2948 6.82012 16.9042 8 17.2298C9.17989 17.5554 10.4215 17.5873 11.6166 17.3226C12.8116 17.058 13.9237 16.505 14.8559 15.7117C15.788 14.9184 16.5118 13.9091 16.9642 12.7718C17.4165 11.6344 17.5836 10.4037 17.4509 9.18689C17.3182 7.97011 16.8897 6.80431 16.2029 5.79122C15.516 4.77813 14.5916 3.94854 13.5104 3.37485C12.4292 2.80117 11.224 2.50082 10 2.50002Z"
                      fill="#2A333E"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-black">
                    Sales Order Report
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/vehicle"
                  className="flex items-center p-2 text-black rounded-lg hover:bg-[#091E420A] group"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.625 6.25002V9.64612L13.4469 11.3391C13.589 11.4245 13.6914 11.5628 13.7316 11.7237C13.7717 11.8845 13.7463 12.0548 13.6609 12.1969C13.5756 12.339 13.4372 12.4414 13.2764 12.4816C13.1155 12.5217 12.9453 12.4963 12.8031 12.411L9.67812 10.536C9.58563 10.4804 9.50911 10.4018 9.45599 10.3079C9.40287 10.214 9.37497 10.1079 9.375 10V6.25002C9.375 6.08426 9.44085 5.92529 9.55806 5.80808C9.67527 5.69087 9.83424 5.62502 10 5.62502C10.1658 5.62502 10.3247 5.69087 10.4419 5.80808C10.5592 5.92529 10.625 6.08426 10.625 6.25002ZM10 2.50002C9.01406 2.49757 8.03742 2.69067 7.12661 3.06817C6.21579 3.44566 5.38889 4.00005 4.69375 4.69924C4.12578 5.27424 3.62109 5.82737 3.125 6.40627V5.00002C3.125 4.83426 3.05915 4.67529 2.94194 4.55808C2.82473 4.44087 2.66576 4.37502 2.5 4.37502C2.33424 4.37502 2.17527 4.44087 2.05806 4.55808C1.94085 4.67529 1.875 4.83426 1.875 5.00002V8.12502C1.875 8.29078 1.94085 8.44975 2.05806 8.56697C2.17527 8.68418 2.33424 8.75002 2.5 8.75002H5.625C5.79076 8.75002 5.94973 8.68418 6.06694 8.56697C6.18415 8.44975 6.25 8.29078 6.25 8.12502C6.25 7.95926 6.18415 7.80029 6.06694 7.68308C5.94973 7.56587 5.79076 7.50002 5.625 7.50002H3.82812C4.38672 6.84221 4.94297 6.22268 5.57734 5.58049C6.44598 4.71186 7.55133 4.11847 8.75529 3.87446C9.95924 3.63045 11.2084 3.74665 12.3467 4.20853C13.485 4.67041 14.4619 5.45749 15.1555 6.47144C15.849 7.48538 16.2283 8.68121 16.2461 9.90952C16.2639 11.1378 15.9193 12.3441 15.2554 13.3777C14.5915 14.4113 13.6377 15.2263 12.5132 15.7209C11.3888 16.2155 10.1435 16.3678 8.93299 16.1587C7.72249 15.9496 6.60043 15.3885 5.70703 14.5453C5.64732 14.4889 5.57708 14.4448 5.50032 14.4155C5.42356 14.3862 5.34179 14.3724 5.25967 14.3747C5.17754 14.377 5.09668 14.3955 5.0217 14.429C4.94672 14.4626 4.87908 14.5106 4.82266 14.5703C4.76623 14.63 4.72212 14.7003 4.69283 14.777C4.66355 14.8538 4.64967 14.9356 4.652 15.0177C4.65432 15.0998 4.67279 15.1807 4.70636 15.2557C4.73993 15.3306 4.78795 15.3983 4.84766 15.4547C5.73785 16.2948 6.82012 16.9042 8 17.2298C9.17989 17.5554 10.4215 17.5873 11.6166 17.3226C12.8116 17.058 13.9237 16.505 14.8559 15.7117C15.788 14.9184 16.5118 13.9091 16.9642 12.7718C17.4165 11.6344 17.5836 10.4037 17.4509 9.18689C17.3182 7.97011 16.8897 6.80431 16.2029 5.79122C15.516 4.77813 14.5916 3.94854 13.5104 3.37485C12.4292 2.80117 11.224 2.50082 10 2.50002Z"
                      fill="#2A333E"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap text-black">
                     Vehicle Details
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        
      </div>
    </div>
  );
};

export default Dashboard;