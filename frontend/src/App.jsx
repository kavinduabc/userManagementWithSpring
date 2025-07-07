import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Welcome to User Management System</h1>
        
      </header>

      <main className="max-w-2xl mx-auto space-y-8">
        <UserForm />
        <UserList />
      </main>
    </div>
  )
}

export default App
