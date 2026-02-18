const ScanTable = ({ data }) => {
    return (
      <div className="w-full bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden">
        
        <div className="overflow-x-auto max-h-[500px]">
          <table className="w-full text-left border-collapse">
            
            <thead className="sticky top-0 bg-gradient-to-r from-gray-100 to-gray-200 shadow-sm">
              <tr>
                <th className="p-4 text-sm font-semibold text-gray-700">
                  Raw Data
                </th>
                <th className="p-4 text-sm font-semibold text-gray-700">
                  Timestamp
                </th>
              </tr>
            </thead>
  
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td
                    colSpan="2"
                    className="text-center py-10 text-gray-500 text-sm"
                  >
                    No scan records found for selected date range.
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t hover:bg-blue-50 transition duration-150 even:bg-gray-50"
                  >
                    <td className="p-4 text-sm text-gray-700">
                      {item.raw_data}
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {new Date(item.timestamp).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
  
          </table>
        </div>
      </div>
    );
  };
  
  export default ScanTable;
  