import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch users
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/getusers")
      .then((res) => {
        setUsers(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.error("Failed to fetch users", err);
        setLoading(false);
      });
  }, []);

  // Delete user
  const userDelete = (user) => {
    axios.delete("http://localhost:8080/api/v1/deleteuser", {
      data: {
        id: user.id,
        name: user.name
      },
      headers: {
        'Content-Type': "application/json"
      }
    }).then(() => {
      setUsers(users.filter((u) => u.id !== user.id));
      toast.success("User deleted successfully");
    }).catch((err) => {
      console.error(err);
      toast.error("User delete failed");
    });
  };

  // Update user 
  const userUpdate = (user) => {
    axios.put("http://localhost:8080/api/v1/updateuser", {
      id: user.id,
      name: user.name
    }, {
      headers: {
        'Content-Type': "application/json"
      }
    })
    .then(() => {
      setUsers(users.map(u =>
        u.id === user.id ? { ...u, name: user.name } : u
      ));
      toast.success("User updated successfully");
    })
    .catch((err) => {
      console.error(err);
      toast.error("User update failed");
    });
  };

  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">User List</h2>

      {loading ? (
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">ID: {user.id}</p>
                <p className="text-sm text-gray-600">{user.name}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => userUpdate(user)}
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
      ) : (
        <p>Loading users...</p>
      )}

      <ToastContainer />
    </section>
  );
}

export default UserList;
