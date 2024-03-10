import React from 'react';

const AnalysisIcon = ({ width = '1em', height = '1em', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        d="M20.9603 6.0506C20.9106 7.03855 19.9709 7.40975 19.242 6.741C18.9106 6.4369 18.5138 6.06255 18.0418 5.60285C16.9756 6.5731 15.322 8.08585 13.3506 9.91645C12.8329 10.3972 11.992 10.3435 11.5397 9.8007L11.5394 9.8003C10.6518 8.73835 9.75755 7.6807 8.8322 6.6514C7.7509 7.4453 5.81 8.95825 3.88389 10.8844C3.39573 11.3725 2.60427 11.3725 2.11612 10.8844C1.62796 10.3962 1.62796 9.60475 2.11612 9.1166C4.00573 7.227 6.079 5.4545 8.30255 3.96314L8.306 3.96082C8.30685 3.96027 8.3066 3.96042 8.3066 3.96042C8.8024 3.6299 9.46255 3.69527 9.8839 4.1166C10.8519 5.08455 11.7265 6.14925 12.6118 7.19265C14.1169 5.80065 15.3848 4.64087 16.274 3.8314C15.8705 3.41506 15.5362 3.06006 15.26 2.75898C14.591 2.02997 14.9624 1.08998 15.9506 1.04025C17.2115 0.976795 18.5055 0.939456 19.7511 1.17232C20.3119 1.27718 20.7233 1.68863 20.8281 2.24948C21.061 3.49521 21.0238 4.78949 20.9603 6.0506Z"
        fill="#637381"
      />
      <g opacity="0.4">
        <path
          d="M2.60946 22.9843C1.77292 22.9631 1.13928 22.4599 1.07089 21.6259C1.02993 21.1264 1 20.4398 1 19.5C1 18.5602 1.02993 17.8736 1.07089 17.3741C1.13928 16.5401 1.77292 16.0369 2.60946 16.0157C2.97545 16.0064 3.43306 16 4 16C4.56694 16 5.02455 16.0064 5.39055 16.0157C6.2271 16.0369 6.8607 16.5401 6.9291 17.3741C6.97005 17.8736 7 18.5602 7 19.5C7 20.4398 6.97005 21.1264 6.9291 21.6259C6.8607 22.4599 6.2271 22.9631 5.39055 22.9843C5.02455 22.9936 4.56694 23 4 23C3.43306 23 2.97545 22.9936 2.60946 22.9843Z"
          fill="#637381"
        />
        <path
          d="M18.8455 22.9792C17.8709 22.9408 17.1875 22.2557 17.1243 21.2823C17.0588 20.2731 17 18.6337 17 16C17 13.3663 17.0588 11.727 17.1243 10.7177C17.1875 9.74435 17.8709 9.0592 18.8455 9.02075C19.1671 9.00805 19.5489 9 20 9C20.4511 9 20.8329 9.00805 21.1545 9.02075C22.1291 9.0592 22.8125 9.74435 22.8757 10.7177C22.9412 11.727 23 13.3663 23 16C23 18.6337 22.9412 20.2731 22.8757 21.2823C22.8125 22.2557 22.1291 22.9408 21.1545 22.9792C20.8329 22.9919 20.4511 23 20 23C19.5489 23 19.1671 22.9919 18.8455 22.9792Z"
          fill="#637381"
        />
        <path
          d="M10.7766 22.9832C9.8427 22.9548 9.162 22.3419 9.0949 21.41C9.0422 20.6775 9 19.5936 9 18C9 16.4064 9.0422 15.3225 9.0949 14.59C9.162 13.6581 9.8427 13.0453 10.7766 13.0169C11.1121 13.0067 11.5163 13 12 13C12.4837 13 12.8879 13.0067 13.2234 13.0169C14.1573 13.0453 14.838 13.6581 14.9051 14.59C14.9578 15.3225 15 16.4064 15 18C15 19.5936 14.9578 20.6775 14.9051 21.41C14.838 22.3419 14.1573 22.9548 13.2234 22.9832C12.8879 22.9934 12.4837 23 12 23C11.5163 23 11.1121 22.9934 10.7766 22.9832Z"
          fill="#637381"
        />
      </g>
    </svg>
  );
};

const DashboardIcon = ({ width = '1em', height = '1em', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        opacity="0.32"
        d="M21.1808 16.9703C20.8971 17.6255 20.2225 18 19.5086 18H14.8154C14.8462 17.9145 14.8735 17.8269 14.8971 17.7373C15.1709 16.6974 14.8825 15.639 14.2214 14.8963C14.4654 12.9091 14.6177 10.8733 14.7108 9.26516C14.7569 8.46731 13.7795 8.20081 13.4274 8.91526C12.7178 10.3553 11.8493 12.1958 11.0842 14.041C10.1467 14.3479 9.3768 15.1177 9.10295 16.1576C8.93642 16.7899 8.97782 17.4291 9.18451 18H4.49141C3.77747 18 3.10288 17.6255 2.81918 16.9703C2.29212 15.7533 2 14.4108 2 13C2 7.47715 6.47715 3 12 3C17.5229 3 22 7.47715 22 13C22 14.4108 21.7079 15.7533 21.1808 16.9703Z"
      />
      <path d="M14.7108 9.26516C14.7569 8.46731 13.7795 8.20081 13.4274 8.91526C12.7178 10.3553 11.8493 12.1958 11.0842 14.041C10.1467 14.3479 9.3768 15.1177 9.10295 16.1576C8.6742 17.7856 9.62375 19.459 11.2238 19.8953C12.8238 20.3315 14.4684 19.3654 14.8971 17.7373C15.1709 16.6974 14.8825 15.639 14.2214 14.8963C14.4654 12.9091 14.6177 10.8733 14.7108 9.26516Z" />
    </svg>
  );
};

const UserIcon = ({ width = '1em', height = '1em', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        opacity="0.4"
        d="M2.28099 19.6575C2.36966 20.5161 2.93261 21.1957 3.77688 21.3755C5.1095 21.6592 7.6216 22 12 22C16.3784 22 18.8905 21.6592 20.2232 21.3755C21.0674 21.1957 21.6303 20.5161 21.719 19.6575C21.8505 18.3844 22 16.0469 22 12C22 7.95305 21.8505 5.6156 21.719 4.34251C21.6303 3.48389 21.0674 2.80424 20.2231 2.62451C18.8905 2.34081 16.3784 2 12 2C7.6216 2 5.1095 2.34081 3.77688 2.62451C2.93261 2.80424 2.36966 3.48389 2.28099 4.34251C2.14952 5.6156 2 7.95305 2 12C2 16.0469 2.14952 18.3844 2.28099 19.6575Z"
      />
      <path d="M13.9382 13.8559C15.263 13.1583 16.1663 11.7679 16.1663 10.1666C16.1663 7.8655 14.3008 6 11.9996 6C9.69841 6 7.83291 7.8655 7.83291 10.1666C7.83291 11.768 8.73626 13.1584 10.0612 13.856C8.28691 14.532 6.93216 16.1092 6.51251 18.0529C6.45446 18.3219 6.60246 18.5981 6.87341 18.6471C7.84581 18.8231 9.45616 19 12.0006 19C14.545 19 16.1554 18.8231 17.1278 18.6471C17.3977 18.5983 17.5454 18.3231 17.4876 18.0551C17.0685 16.1103 15.7133 14.5321 13.9382 13.8559Z" />
    </svg>
  );
};

const ProductIcon = ({ width = '1em', height = '1em', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        opacity="0.32"
        d="M10.286 3.91C10.286 3.342 10.824 2.75 11.66 2.75C12.496 2.75 13.034 3.342 13.034 3.91C13.034 4.221 12.922 4.491 12.74 4.69C12.6165 4.82138 12.4898 4.94975 12.36 5.075L12.28 5.155C12.0958 5.33334 11.9193 5.51951 11.751 5.713C11.486 6.025 11.198 6.436 11.093 6.943C10.4552 7.04826 9.84904 7.29496 9.319 7.665L2.224 12.657C1.297 13.309 1.058 14.359 1.396 15.239C1.728 16.105 2.59 16.75 3.702 16.75H6.01C6.026 16.113 6.071 15.63 6.194 15.25H3.704C3.201 15.25 2.903 14.977 2.797 14.702C2.697 14.441 2.743 14.126 3.087 13.883L10.183 8.893C10.6617 8.56204 11.2291 8.38325 11.811 8.38C12.3987 8.36959 12.9758 8.53765 13.466 8.862L20.899 13.872C21.255 14.113 21.305 14.432 21.207 14.695C21.104 14.973 20.807 15.25 20.298 15.25H17.808C17.931 15.63 17.976 16.113 17.992 16.75H20.298C21.423 16.75 22.288 16.093 22.614 15.216C22.944 14.326 22.687 13.269 21.737 12.629L14.304 7.619C13.8163 7.29185 13.2672 7.0673 12.69 6.959C12.74 6.878 12.808 6.787 12.895 6.685C13.021 6.536 13.169 6.387 13.335 6.221L13.41 6.149C13.55 6.009 13.705 5.857 13.845 5.704C14.288 5.224 14.535 4.589 14.535 3.909C14.535 2.367 13.171 1.25 11.661 1.25C10.151 1.25 8.786 2.367 8.786 3.91C8.786 4.10891 8.86502 4.29968 9.00567 4.44033C9.14632 4.58098 9.33709 4.66 9.536 4.66C9.73492 4.66 9.92568 4.58098 10.0663 4.44033C10.207 4.29968 10.286 4.10891 10.286 3.91Z"
      />
      <path d="M6 18C6 16.114 6 15.172 6.586 14.586C7.172 14 8.114 14 10 14H14C15.886 14 16.828 14 17.414 14.586C18 15.172 18 16.114 18 18C18 19.886 18 20.828 17.414 21.414C16.828 22 15.886 22 14 22H10C8.114 22 7.172 22 6.586 21.414C6 20.828 6 19.886 6 18Z" />
    </svg>
  );
};

const CartIcon = ({ width = '1em', height = '1em', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        opacity="0.32"
        d="M3.41016 2.00012C2.71981 2.00012 2.16016 2.55977 2.16016 3.25012C2.16016 3.94048 2.71981 4.50012 3.41016 4.50012H4.25251C4.48986 4.50012 4.69436 4.66605 4.74281 4.89837C4.96591 5.96777 5.59766 8.95907 6.10461 11.0001C6.73135 13.5236 7.29935 15.342 7.6574 16.4029C8.09928 16.1467 8.61259 16 9.16016 16C10.446 16 11.5429 16.809 11.9697 17.9457C12.7178 17.9791 13.5912 18.0001 14.6046 18.0001C15.462 18.0001 16.2042 17.9851 16.8452 17.9602C17.2681 16.8159 18.3689 16 19.6602 16C20.2143 16 20.7334 16.1503 21.1789 16.4123C21.5323 15.5226 22.0073 14.0331 22.4102 11.7501C22.6992 10.1123 22.8768 8.88287 22.986 7.99032C23.1201 6.89392 22.2647 6.00012 21.1602 6.00012H7.66016L7.03891 3.51505C6.81631 2.62472 6.01636 2.00012 5.09861 2.00012H3.41016Z"
      />
      <path d="M17.5505 10.5941C17.6091 10.0083 17.1491 9.5 16.5604 9.5C16.0492 9.5 15.6212 9.88735 15.5703 10.3961L15.2694 13.4059C15.2108 13.9917 15.6708 14.5 16.2595 14.5C16.7707 14.5 17.1987 14.1126 17.2496 13.6039L17.5505 10.5941Z" />
      <path d="M12.7496 10.3961C12.6987 9.88735 12.2707 9.5 11.7595 9.5C11.1708 9.5 10.7108 10.0083 10.7694 10.5941L11.0703 13.6039C11.1212 14.1126 11.5492 14.5 12.0604 14.5C12.6491 14.5 13.1091 13.9917 13.0505 13.4059L12.7496 10.3961Z" />
      <path d="M16.6602 19C16.6602 20.6569 18.0033 22 19.6602 22C21.317 22 22.6602 20.6569 22.6602 19C22.6602 17.3432 21.317 16 19.6602 16C18.0033 16 16.6602 17.3432 16.6602 19Z" />
      <path d="M6.16016 19C6.16016 20.6569 7.50331 22 9.16016 22C10.817 22 12.1602 20.6569 12.1602 19C12.1602 17.3432 10.817 16 9.16016 16C7.50331 16 6.16016 17.3432 6.16016 19Z" />
    </svg>
  );
};

const BlogIcon = ({ width = '1em', height = '1em', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <g opacity="0.32">
        <path d="M21 8H13C12.7348 8 12.4804 7.89464 12.2929 7.70711C12.1054 7.51957 12 7.26522 12 7C12 6.73478 12.1054 6.48043 12.2929 6.29289C12.4804 6.10536 12.7348 6 13 6H21C21.2652 6 21.5196 6.10536 21.7071 6.29289C21.8946 6.48043 22 6.73478 22 7C22 7.26522 21.8946 7.51957 21.7071 7.70711C21.5196 7.89464 21.2652 8 21 8ZM21 12H13C12.7348 12 12.4804 11.8946 12.2929 11.7071C12.1054 11.5196 12 11.2652 12 11C12 10.7348 12.1054 10.4804 12.2929 10.2929C12.4804 10.1054 12.7348 10 13 10H21C21.2652 10 21.5196 10.1054 21.7071 10.2929C21.8946 10.4804 22 10.7348 22 11C22 11.2652 21.8946 11.5196 21.7071 11.7071C21.5196 11.8946 21.2652 12 21 12Z" />
        <path d="M21 16H3C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15C2 14.7348 2.10536 14.4804 2.29289 14.2929C2.48043 14.1054 2.73478 14 3 14H21C21.2652 14 21.5196 14.1054 21.7071 14.2929C21.8946 14.4804 22 14.7348 22 15C22 15.2652 21.8946 15.5196 21.7071 15.7071C21.5196 15.8946 21.2652 16 21 16ZM13 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19C2 18.7348 2.10536 18.4804 2.29289 18.2929C2.48043 18.1054 2.73478 18 3 18H13C13.2652 18 13.5196 18.1054 13.7071 18.2929C13.8946 18.4804 14 18.7348 14 19C14 19.2652 13.8946 19.5196 13.7071 19.7071C13.5196 19.8946 13.2652 20 13 20Z" />
      </g>
      <rect x="2" y="4" width="8" height="8" rx="2" />
    </svg>
  );
};

const BellIcon = ({ width = '1em', height = '1em', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width={width}
      height={height}
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.393 4.393 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"
        opacity=".5"
      ></path>
      <path
        fill="currentColor"
        d="M12.75 6a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0"
      ></path>
    </svg>
  );
};

const GearIcon = ({ width = '1em', height = '1em', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2.008 2.008 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.615 1.615 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.026 2.026 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361c0 .558-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a1.99 1.99 0 0 0-.399 1.479c.053.394.287.798.757 1.605c.47.807.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2.008 2.008 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a1.99 1.99 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361c0-.558.306-1.064.782-1.36c.324-.203.533-.364.682-.556a1.99 1.99 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605c-.47-.807-.704-1.21-1.022-1.453a2.026 2.026 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.615 1.615 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2.007 2.007 0 0 0-1.09-1.083"
        clipRule="evenodd"
        opacity=".5"
      ></path>
      <path
        fill="currentColor"
        d="M15.523 12c0 1.657-1.354 3-3.023 3c-1.67 0-3.023-1.343-3.023-3S10.83 9 12.5 9c1.67 0 3.023 1.343 3.023 3"
      ></path>
    </svg>
  );
};

const SortAscIcon = ({ width = '1em', height = '1em', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m8.303 11.596l3.327-3.431a.499.499 0 0 1 .74 0l6.43 6.63c.401.414.158 1.205-.37 1.205h-5.723z"
      ></path>
      <path fill="currentColor" d="M11.293 16H5.57c-.528 0-.771-.791-.37-1.205l2.406-2.482z" opacity=".5"></path>
    </svg>
  );
};

const SortDescIcon = ({ width = '1em', height = '1em', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m8.303 12.404l3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z"
      ></path>
      <path fill="currentColor" d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z" opacity=".5"></path>
    </svg>
  );
};

export {
  AnalysisIcon,
  DashboardIcon,
  UserIcon,
  ProductIcon,
  CartIcon,
  BlogIcon,
  BellIcon,
  GearIcon,
  SortAscIcon,
  SortDescIcon,
};
