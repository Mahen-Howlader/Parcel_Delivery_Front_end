import { Outlet } from "react-router";

function DashboardLayout() {
    return (
        <div>
            <h2>Dashboard layout</h2>
            <Outlet></Outlet>
        </div>
    );
}

export default DashboardLayout;