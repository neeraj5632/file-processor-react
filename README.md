# 📊 File Processor (CSV + Excel)

This is a simple React-based application that allows users to upload and process CSV or Excel files.

---

## 🚀 Features

* Upload CSV and Excel files (.csv, .xlsx)
* Display file data in table format
* Select any column dynamically
* Convert selected column data to uppercase
* Sort data based on selected column
* Ignore empty rows automatically
* Reset and upload a new file without refreshing

---

## 🛠 Tech Used

* React JS
* PapaParse (for CSV parsing)
* XLSX (for Excel parsing)
* Basic CSS

---

## 📂 Project Structure

src/
├── components/
│    ├── Controls.js
│    ├── Table.js
├── App.js
├── App.css

---

## ⚙️ How to Run

1. Clone the repository

```bash
git clone <your-repo-link>
cd <project-folder>
```

2. Install dependencies

```bash
npm install
```

3. Start the project

```bash
npm start
```

---

## 📌 How It Works

1. User uploads a CSV or Excel file
2. File is parsed using PapaParse or XLSX
3. Data is stored in React state
4. User selects a column from dropdown
5. Operations available:

   * Uppercase transformation
   * Sorting (with empty value handling)
6. Data is displayed in a table
7. User can reset and upload another file

---

## ⚠️ Edge Cases Handled

* Empty rows are removed automatically
* Blank values are pushed to bottom during sorting
* Case-insensitive sorting applied

---


