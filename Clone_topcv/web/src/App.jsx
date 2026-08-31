import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import CreateJob from './pages/CreateJob'
import CreateCV from './pages/CreateCV'
import Companies from './pages/Companies'
import AdminCompanies from './pages/AdminCompanies'

function App() {
  return (
    <Routes>
      {/* Public routes with Header + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:slug" element={<JobDetail />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/create-cv" element={<CreateCV />} />
        <Route path="/employer/create-job" element={<CreateJob />} />
        <Route path="/admin/companies" element={<AdminCompanies />} />
      </Route>

      {/* Auth routes without Header/Footer */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
