import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);

  async function getUsers() {
    // jsonplaceholder api
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const mainData = await data.json();
    // console.log(mainData);
    setData(mainData);
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col pt-10">
      <h1 className="text-4xl p-4 text-cyan-500 font-bold">Users Data</h1>
      <table className="bg-gradient-to-r from-cyan-200 to-blue-200 rounded-xl">
        <thead>
          <tr className="border-b-2 border-cyan-700">
            <td className="text-zinc-900 font-semibold text-xl p-4">Sr. No.</td>
            <td className="text-zinc-900 font-semibold text-xl p-4">User Name</td>
            <td className="text-zinc-900 font-semibold text-xl p-4">Email</td>
            <td className="text-zinc-900 font-semibold text-xl p-4">Phone No.</td>
            <td className="text-zinc-900 font-semibold text-xl p-4">Website</td>
          </tr>
        </thead>
        <tbody >
          {data.map((val, index) => {
            return (
              <>
                <tr className="hover:bg-cyan-100 border-b-2 border-cyan-700 hover:font-semibold hover:text-zinc-950">
                  <td className=" p-4 text-zinc-700 ">{val.id}</td>
                  <td className=" p-4 text-zinc-700 ">{val.username}</td>
                  <td className="-700 p-4 text-zinc-700 ">{val.email}</td>
                  <td className=" p-4 text-zinc-700 ">{val.phone}</td>
                  <td className=" p-4 text-zinc-700 ">{val.website}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Dashboard;
