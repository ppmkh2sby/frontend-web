import Sidebar from "../../components/Sidebar";
import DataTable from "react-data-table-component";

function Dashboard() {
  const data = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
  ];
  const columns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Name", selector: "name", sortable: true },
    { name: "Age", selector: "age", sortable: true },
  ];
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col px-5 py-5 w-full ">
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
        <DataTable title="My Data Table" columns={columns} data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
