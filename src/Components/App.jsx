import Map from "./Map";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Header from "./Header";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setData(events);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <Map eventData={data} />{" "}
        </div>
      )}
    </div>
  );
}

export default App;
