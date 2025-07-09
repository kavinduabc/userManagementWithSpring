import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function UserForm() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ id: "", name: "" });

  // Fetch users on load
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/getusers")
      .then((res) => setUsers(res.data))
      .catch(() => toast.error("Failed to load users"));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form (add or update)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      // UPDATE
      axios.put("http://localhost:8080/api/v1/updateuser", formData)
        .then(() => {
          setUsers(users.map(u => u.id === formData.id ? formData : u));
          toast.success("User updated");
          setFormData({ id: "", name: "" });
        }).catch(() => toast.error("Update failed"));
    } else {
      // ADD
      axios.post("http://localhost:8080/api/v1/adduser", formData)
        .then((res) => {
          setUsers([...users, res.data]);
          toast.success("User added");
          setFormData({ id: "", name: "" });
        }).catch(() => toast.error("Add failed"));
    }
  };

  // Delete user
  const userDelete = (user) => {
    axios.delete("http://localhost:8080/api/v1/deleteuser", {
      data: user,
      headers: { 'Content-Type': "application/json" }
    }).then(() => {
      setUsers(users.filter(u => u.id !== user.id));
      toast.success("User deleted");
    }).catch(() => toast.error("Delete failed"));
  };

  // Edit user: set form with user data
  const userEdit = (user) => {
    setFormData({ id: user.id, name: user.name });
  };

  return (
    <section className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        {formData.id ? "Edit User" : "Add User"}
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="User ID"
          className="w-full p-2 border border-gray-300 rounded"
          readOnly={formData.id !== ""} // ID can't change during edit
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="User Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {formData.id ? "Update" : "Add"}
        </button>
      </form>

      {/* User List */}
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-medium">ID: {user.id}</p>
              <p className="text-sm text-gray-600">{user.name}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => userEdit(user)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => userDelete(user)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <ToastContainer />
    </section>
  );
}

export default UserForm;
