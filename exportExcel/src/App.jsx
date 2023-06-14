import { ElMapExportTable } from "table-excel";

function App() {
  const handleExport = () => {
    const instance = new ElMapExportTable(
      { column, data },
      { progress: (progress) => console.log(progress) }
    );
    instance.download("Template"); //when file will download with the given name
  };

  // # column
  const column = [
    { title: "Date", dataIndex: "date" }, //title is colmun and dataIndex is nothing as type of the column
    { title: "Name", dataIndex: "name" },
    { title: "Address", dataIndex: "address" },
  ];

  // row data
  const data = [
    {
      date: "2016-05-02",
      name: "Mohammad Sohail",
      address: "flat: 203, regaliya heights kohefiza",
    },
  ];

  return (
    <>
      <div>Excel file</div>
      <button onClick={handleExport}>Download Excel</button>
    </>
  );
}
export default App;
