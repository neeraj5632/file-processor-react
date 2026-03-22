import React from "react";

function Controls({
  columns,
  selectedColumn,
  setSelectedColumn,
  makeUppercase,
  sortData,
  resetData,
}) {
  return (
    <div>
      <label>Select Column: </label>

      <select
        value={selectedColumn}
        onChange={(e) => setSelectedColumn(e.target.value)}
      >
        <option value="">--Select--</option>
        {columns.map((col) => (
          <option key={col} value={col}>
            {col}
          </option>
        ))}
      </select>

      <br />
      <br />

      <button onClick={makeUppercase}>Uppercase</button>
      <button onClick={sortData} style={{ marginLeft: 10 }}>
        Sort
      </button>
      <button onClick={resetData} style={{ marginLeft: 10 }}>
        Back
      </button>
    </div>
  );
}

export default Controls;
