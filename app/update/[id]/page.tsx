import React from "react";
import { SearchByID } from "@/utils/requests";
import UpdateData from "@/Components/Update Data/Update";
const page = async ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const data = await SearchByID(id);
  return (
    <div>
      <UpdateData data={data} />
    </div>
  );
};
export default page;
