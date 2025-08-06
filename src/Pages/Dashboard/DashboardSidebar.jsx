import React from "react";
import AdminMenu from "./AdminDashboard/AdminMenu";


const DashboardSidebar = () => {

    const role = 'admin';

  return (
    <div className="drawer-side w-full  bg-black/15 ">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      {role === "admin" && <AdminMenu></AdminMenu>}

    </div>
  );
};

export default DashboardSidebar;
