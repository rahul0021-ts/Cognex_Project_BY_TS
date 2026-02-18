const DateFilter = ({ setStart, setEnd, fetchData }) => {
    return (
      <div className="w-full bg-white shadow-lg rounded-2xl p-6 mb-6 border border-gray-100">
        
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          
          {/* Start Date */}
          <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Start Date & Time
            </label>
            <input
              type="datetime-local"
              onChange={(e) => setStart(e.target.value)}
              className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                         outline-none p-3 rounded-xl transition duration-200 shadow-sm"
            />
          </div>
  
          {/* End Date */}
          <div className="flex flex-col w-full">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              End Date & Time
            </label>
            <input
              type="datetime-local"
              onChange={(e) => setEnd(e.target.value)}
              className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                         outline-none p-3 rounded-xl transition duration-200 shadow-sm"
            />
          </div>
  
          {/* Button */}
          <div className="w-full md:w-auto">
            <button
              onClick={fetchData}
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 
                         text-white px-6 py-3 rounded-xl font-semibold
                         shadow-md hover:shadow-xl hover:scale-105 
                         active:scale-95 transition duration-200"
            >
              Fetch Data
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default DateFilter;
  