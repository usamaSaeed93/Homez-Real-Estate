import React from "react";
import Description from "@/Components/Description/Description";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
import { SearchByID } from "@/utils/requests";
const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const data = await SearchByID(id);
  console.log(data);
  return (
    <div>
      <Navbar />
      {data ? <Description data={data} /> : "Loading"}
      <Footer />
    </div>
  );
};
export default page;
