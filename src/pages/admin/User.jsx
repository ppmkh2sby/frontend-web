import React from "react";
import DataTable from "react-data-table-component";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";

function User() {
  const columns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Role", selector: "role", sortable: true },
    {
      name: "Action",
      cell: (row) => (
        <>
          <button className="border rounded-lg p-2 mr-1 bg-green-400 flex items-center">
            <ion-icon name="eye"></ion-icon>
            <span className="ml-1">Detail</span>
          </button>
          <button className="border rounded-lg p-2 mr-1 bg-blue-400 flex items-center">
            <ion-icon name="create"></ion-icon>
            <span className="ml-1">Edit</span>
          </button>
          <button className="border rounded-lg p-2 bg-red-400 flex items-center">
            <ion-icon name="trash"></ion-icon>
            <span className="ml-1">Delete</span>
          </button>
        </>
      ),
    },
  ];

  const data = [
    { id: 1, name: "John Doe", role: "admin" },
    { id: 2, name: "Jane Smith", role: "user" },
    { id: 2, name: "Jane Smith", role: "user" },
    { id: 2, name: "Jane Smith", role: "user" },
    { id: 2, name: "Jane Smith", role: "user" },
    { id: 2, name: "Jane Smith", role: "user" },
    { id: 2, name: "Jane Smith", role: "user" },
    { id: 2, name: "Jane Smith", role: "user" },
    { id: 2, name: "Jane Smith", role: "user" },
    { id: 2, name: "Jane Smith", role: "user" },
    { id: 2, name: "Jane Smith", role: "user" },
    { id: 2, name: "Jane Smith", role: "user" },
    { id: 2, name: "Jane Smith", role: "user" },
    { id: 2, name: "Jane Smith", role: "user" },
    { id: 2, name: "Jane Smith", role: "user" },
    { id: 2, name: "Jane Smith", role: "user" },
  ];

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 z-10 h-screen">
        <Sidebar />
      </div>
      <div className="flex flex-col ml-56 px-5 py-5 w-full">
        <div className="flex items-center justify-between p-2">
          <div className="text-2xl font-bold">Data Santri</div>
          <button className="flex items-center p-2 rounded-xl bg-green-400">
            <ion-icon name="person-add"></ion-icon>
            <div className="ml-2">
              <Link to="/addUser">Tambah Data</Link>
            </div>
          </button>
        </div>
        <div>
          <DataTable
            className="border-2 border-solid"
            columns={columns}
            data={data}
            fixedHeader
            pagination
          />
        </div>
      </div>
    </div>
  );
}

export default User;
