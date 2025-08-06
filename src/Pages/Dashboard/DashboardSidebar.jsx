import React from "react";
import UserMenu from "./UserDashboard/UserMenu";


const DashboardSidebar = () => {

    const role = 'admin';

  return (
    <div className="drawer-side w-full  bg-black/15 ">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      {role === "admin" && <UserMenu></UserMenu>}

    </div>
  );
};

export default DashboardSidebar;
