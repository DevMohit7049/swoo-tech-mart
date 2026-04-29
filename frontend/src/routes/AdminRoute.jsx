import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
    const { loading, user , isAuthCheck} = useSelector((state) => state.auth);
    
    
    if(!isAuthCheck) return <div>Checking authentication...</div>

    if (loading) return <div>Loading...</div>

    if (!user) {
        return <Navigate to="/login" replace />
    }

    if (user.role !== "admin"){
        return <Navigate to="/" replace />
    }

    return <Outlet/>

}
export default AdminRoute;