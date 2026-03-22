import React, { useState } from "react";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import "./App.css";

import Table from "./components/Table";
import Controls from "./components/Controls";

function App() {
  const [data, setData] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState("");

  // file upload
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const type = file.name.split(".").pop();

    // CSV
    if (type === "csv") {
      Papa.parse(file, {
        header: true,
        complete: (res) => {
          // remove empty rows
          const cleanData = res.data.filter((row) =>
            Object.values(row).some((val) => val)
          );
          setData(cleanData);
        },
      });
    }

    // Excel
    else {
      const reader = new FileReader();

      reader.onload = (evt) => {
        const wb = XLSX.read(evt.target.result, { type: "binary" });
        const sheet = wb.Sheets[wb.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet);

        setData(json);
      };

      reader.readAsBinaryString(file);
    }
  };

  // uppercase selected column
  const makeUppercase = () => {
    if (!selectedColumn) {
      alert("Select column first");
      return;
    }

    const updated = data.map((row) => ({
      ...row,
      [selectedColumn]: row[selectedColumn]
        ? row[selectedColumn].toString().toUpperCase()
        : row[selectedColumn],
    }));

    setData(updated);
  };

  // sorting with blank fix
  const sortData = () => {
    if (!selectedColumn) {
      alert("Select column first");
      return;
    }

    const sorted = [...data].sort((a, b) => {
      const valA = a[selectedColumn];
      const valB = b[selectedColumn];

      // blank handling
      if (!valA && !valB) return 0;
      if (!valA) return 1;
      if (!valB) return -1;

      return valA
        .toString()
        .toLowerCase()
        .localeCompare(valB.toString().toLowerCase());
    });

    setData(sorted);
  };

  // reset
  const resetData = () => {
    setData([]);
    setSelectedColumn("");
  };

  return (
    <div className="container">
      <h2>File Processor (CSV + Excel)</h2>

      {data.length === 0 ? (
        <>
          <input type="file" onChange={handleFile} />
          <p className="empty">Upload CSV or Excel file</p>
        </>
      ) : (
        <>
          <Controls
            columns={Object.keys(data[0])}
            selectedColumn={selectedColumn}
            setSelectedColumn={setSelectedColumn}
            makeUppercase={makeUppercase}
            sortData={sortData}
            resetData={resetData}
          />

          <Table data={data} />
        </>
      )}
    </div>
  );
}

export default App;
