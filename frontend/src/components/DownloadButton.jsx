const DownloadButton = ({ start, end }) => {
    const download = () => {
      window.open(
        `http://localhost:5001/api/scans/download?start=${start}&end=${end}`
      );
    };
  
    const isDisabled = !start || !end;
  
    return (
      <div className="mt-4">
        <button
          onClick={download}
          disabled={isDisabled}
          className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white
          transition duration-200 shadow-md
          ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-xl hover:scale-105 active:scale-95"
          }`}
        >
          {/* Download Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
            />
          </svg>
  
          Download CSV
        </button>
  
        {isDisabled && (
          <p className="text-sm text-gray-500 mt-2">
            Please select start and end date first.
          </p>
        )}
      </div>
    );
  };
  
  export default DownloadButton;
  