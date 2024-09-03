import React from "react";
import CommonHeader from "../../../../../components/navbar-profile/CommonHeader.jsx";
import Breadcrumb from "../../../../../components/breadcrumb/BreadCrumb.jsx";

const page = () => {
  const breadcrumbs = [{ name: "Employees" }, { name: "Profile" }];

  return (
    <div className="p-2 w-full">
      <Breadcrumb crumbs={breadcrumbs} />
      <CommonHeader />
      account access
    </div>
  );
};

export default page;
