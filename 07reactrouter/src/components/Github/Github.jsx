// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setdata] = useState("");
  // useEffect(() => {
  //   fetch("https://api.github.com/users/princesingh779")
  //     .then((res) => res.json())
  //     .then((data) => setdata(data));
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <img
        className="text-center"
        src={data.avatar_url}
        alt="Github Profile Image"
        width={200}
        height={155}
      />
      Github followers :{data.followers}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/princesingh779");
  return response.json();
};
