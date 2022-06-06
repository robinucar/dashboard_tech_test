import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./components/DataTable";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
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
  return (
    <div className="App">
      <DataTable data={data} />
    </div>
  );
}

export default App;
