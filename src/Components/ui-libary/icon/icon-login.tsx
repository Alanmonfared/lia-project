const User = ({ size = 41, color = "#ffffff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 30"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    // strokeLinejoin="arcs"
    transform="none"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);
export default User;
