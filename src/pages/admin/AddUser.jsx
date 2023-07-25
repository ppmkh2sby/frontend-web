import Sidebar from "../../components/Sidebar";

function AddUser() {
  return (
    <div>
      <div className="flex">
        <div className="fixed top-0 left-0 z-10 h-screen">
          <Sidebar />
        </div>
        <div className="flex justify-center ml-56 px-5 py-5 w-full h-screen items-center">
          <div className="flex justify-center border p-4 rounded-lg">
            <form action="" className="flex ">
              <div className="flex flex-col">
                <label htmlFor="">Nama</label>
                <label htmlFor="">Role</label>
              </div>
              <div className="flex flex-col ml-4">
                <input type="text" className="border-2 border-solid boder-gray-800"/> 
                <select name="role" id="role">
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
