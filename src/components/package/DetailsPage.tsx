"use client";

import { useGetSinglePackageQuery } from "@/redux/api/packageApi";

const DetailsPage = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  const { data, isLoading } = useGetSinglePackageQuery({ params });
  const packages = data?.packages?.data;
  console.log(packages);
  return <div></div>;
};

export default DetailsPage;
