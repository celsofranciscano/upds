function UiPuntero() {
  return (
    <div className="flex items-center">
      <div className="w-4  bg-blue-500 h-8 border-l-4 rounded-r-md"></div>
      <span className=" font-bold text-gray-600">
        <svg
          className=" h-6 text-blue-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </span>
    </div>
  );
}

export default UiPuntero;
