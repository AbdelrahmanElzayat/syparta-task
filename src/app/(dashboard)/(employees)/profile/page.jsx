import { redirect } from "next/navigation";

const page = () => {
  redirect("/profile/personal-information");
  return null;
};

export default page;
