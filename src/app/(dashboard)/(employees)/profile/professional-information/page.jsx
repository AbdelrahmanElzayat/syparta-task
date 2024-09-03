import CommonHeader from "../../../../../components/navbar-profile/CommonHeader";
import Breadcrumb from "../../../../../components/breadcrumb/BreadCrumb";
const page = () => {
  const breadcrumbs = [{ name: "Employees" }, { name: "Profile" }];
  return (
    <div className="p-2 w-full">
      <Breadcrumb crumbs={breadcrumbs} />
      <CommonHeader />
      professional information
    </div>
  );
};

export default page;
