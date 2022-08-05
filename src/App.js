import { useEffect, useState } from "react";
import "./App.css";
import user from "./user.json";
import RentalDetails from "./components/RentalDetails";
import FilteredData from "./components/FilteredData";

function App() {
  const [data, setData] = useState(user);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="app">
      <div className="app_header">
        <h1>Search Properties to Rent</h1>
        <input type="text" placeholder="search with the searchbar" />
      </div>
      <FilteredData filtter={(newData) => setData(newData)} />
      <div className="app_body">
        {data?.map((d) => (
          <RentalDetails data={d} />
        ))}
      </div>
    </div>
  );
}

export default App;
