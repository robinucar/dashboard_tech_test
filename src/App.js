import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./components/DataTable";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    // connect data
    const fetchData = async () => {
      const res = await axios.get(
        "https://ldt-tech-test.herokuapp.com/api/startlistentries"
      );
      setData(res.data);
    };
    fetchData();
  }, []);

  // Filter data
  const search = (data) => {
    return data.filter(
      (data) => data.organiserTitle.toLowerCase().indexOf(query) > -1
    );
  };
  // TOTAL CONFIRMED TICKETS SALES
  const confirmedTicketsSum = data.reduce((total, item) => {
    if (item.status === "CONFIRMED") {
      total += item.ticketPrice.value;
    }
    return total;
  }, 0);
  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search by organiser..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <DataTable data={search(data)} />
      <div className='tickets-data'>
        <h2>Total Confirmed Tickets Sales: {confirmedTicketsSum} GBP</h2>
      </div>
      </div>
  );
}

export default App;
