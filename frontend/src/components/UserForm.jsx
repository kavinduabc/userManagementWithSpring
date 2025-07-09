import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function UserForm() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const addUser = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/api/v1/adduser", {
      id,
      name
    }, {
      headers: {
        'Content-Type': "application/json"
      }
    }).then(() => {
      toast.success("User added successfully");
      setId("");
      setName("");
    }).catch(() => {
      toast.error("Failed to add user");
    });
  };

  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Add / Edit User</h2>
      <form onSubmit={addUser}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>

      <ToastContainer />
    </section>
  );
}

export default UserForm;
