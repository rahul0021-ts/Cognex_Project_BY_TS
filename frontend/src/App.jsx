import { useState } from "react";
import axios from "axios";
import DateFilter from "./components/DateFilter";
import ScanTable from "./components/ScanTable";
import DownloadButton from "./components/DownloadButton";

function App() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("https://cognex-project-by-ts.onrender.com/api/scans", {
      params: { start, end }
    });
    setData(res.data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          DataMan QR Dashboard
        </h1>

        <DateFilter
          setStart={setStart}
          setEnd={setEnd}
          fetchData={fetchData}
        />

        <DownloadButton start={start} end={end} />

        <ScanTable data={data} />
      </div>
    </div>
  );
}

export default App;
