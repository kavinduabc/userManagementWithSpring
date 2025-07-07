function UserForm() {
  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Add / Edit User</h2>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter email"
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
    </section>
  )
}

export default UserForm
