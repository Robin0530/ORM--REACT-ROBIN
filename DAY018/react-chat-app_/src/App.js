import logo from './logo.svg'
import './App.css'

import AuthLayout from '../src/layouts/AuthLayout'
import NonAuthLayout from '../src/layouts/NonAuthLayout'
import Code from '../src/pages/auth/Code'
import Login from '../src/pages/auth/Login'
import Logout from '../src/pages/auth/Logout'
import Register from '../src/pages/auth/Register'

function App() {
    return (
        <div className="App">
            <AuthLayout></AuthLayout>
            <NonAuthLayout></NonAuthLayout>
            <Code></Code>
            <Login></Login>
            <Logout></Logout>
            <Register></Register>
        </div>
    )
}

export default App
