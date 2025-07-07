function UserList() {
  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <ul className="space-y-4">
        <li className="flex justify-between items-center border-b pb-2">
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-600">john@example.com</p>
          </div>
          <div className="space-x-2">
            <button className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
            <button className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
          </div>
        </li>

        <li className="flex justify-between items-center border-b pb-2">
          <div>
            <p className="font-medium">Jane Smith</p>
            <p className="text-sm text-gray-600">jane@example.com</p>
          </div>
          <div className="space-x-2">
            <button className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
            <button className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default UserList
