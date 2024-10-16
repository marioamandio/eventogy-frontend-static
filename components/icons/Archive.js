const ArchiveIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.24223 4.5H17.7578L19.5 8.85556V18L18.75 18.75H5.25L4.5 18V8.85556L6.24223 4.5ZM7.25777 6L6.35777 8.25H17.6422L16.7422 6H7.25777ZM18 9.75H6V17.25H18V9.75ZM9.59473 13.6553L10.6554 12.5946L11.25 13.1892V11.25H12.75V13.1894L13.3447 12.5946L14.4054 13.6553L12.0001 16.0606L9.59473 13.6553Z"
        fill="#080341"
      />
    </svg>
  );
};

export default ArchiveIcon;
