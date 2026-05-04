import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import ROUTE_PATHS from "@/constants/Routes";

const AdminRoute = () => {
    const { loading, user , isAuthCheck} = useSelector((state) => state.auth);
    
    
    if(!isAuthCheck) return <div>Checking authentication...</div>

    if (loading) return <div>Loading...</div>

    if (!user) {
        return <Navigate to={ROUTE_PATHS.LOGIN} replace />
    }

    if (user.role !== "admin"){
        return <Navigate to={ROUTE_PATHS.ROOT} replace />
    }

    return <Outlet/>

}
export default AdminRoute;