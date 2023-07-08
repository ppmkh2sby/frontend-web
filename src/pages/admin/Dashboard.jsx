import Sidebar from "../../components/Sidebar";
import DataTable from "react-data-table-component";
import { useState } from "react";

function Dashboard() {
  const data = [
    { id: 1, name: "John Doe", kelas: 25 },
    { id: 2, name: "Jane Smith", kelas: 30 },
    { id: 2, name: "Jane Smith", kelas: 30 },
    { id: 2, name: "Jane Smith", kelas: 30 },
    { id: 2, name: "Jane Smith", kelas: 30 },
    { id: 2, name: "Jane Smith", kelas: 30 },
    { id: 2, name: "Jane Smith", kelas: 30 },
    { id: 2, name: "Jane Smith", kelas: 30 },
    { id: 2, name: "Jane Smith", kelas: 30 },
    { id: 2, name: "Jane Smith", kelas: 30 },
  ];
  const columns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Kelas", selector: "kelas", sortable: true },
  ];

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value));
  };

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 z-10 h-screen">
        <Sidebar />
      </div>
      <div className="flex flex-col ml-56 px-5 py-5 w-full">
        <div>
          <h1 className="font-bold text-5xl">Dashboard</h1>
        </div>
        <div className="flex grid grid-cols-4 pt-10">
          <div className="bg-green-400 shadow-md rounded-lg w-60 h-40 flex flex-col px-4 justify-center">
            <div className="text-white flex items-center text-2xl ">
              <ion-icon name="person"></ion-icon>
              <h1 className="ml-2">Santri Aktif</h1>
            </div>
            <div>36 Santri</div>
            <div className="flex bg-green-500 justify-between items-center">
              <p>Lihat Selengkapnya</p>
              <ion-icon name="arrow-dropright"></ion-icon>
            </div>
          </div>
        </div>
        <div>
          <label>Show rows per page:</label>
          <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          <DataTable className="border-2 border-solid"
            title="Data Santri"
            columns={columns}
            data={data}
            pagination
            paginationRowsPerPageOptions={[5, 10, 15]}
            paginationPerPage={rowsPerPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
