import React, { useEffect, useState } from "react";
function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://172.22.81.182:8080/rfid/getall")
        .then((response) => response.json())
        .then((actualData) => {
          console.log(actualData);
          setData(actualData);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    fetchData(); 
  }, []);

  return (
   <div>
    <div className="overflow-x-auto">
    <table className="table table-zebra mx-auto w-1/2">
        <thead>
          <tr>
            <th className="text-center w-1/4">Name</th>
            <th className="text-center w-1/4">Brand</th>
            <th className="text-center w-1/4"> Price</th>
            <th className="text-center w-1/4">Rating</th>
            <th className="text-center w-1/4">Tracking</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="text-center align-middle w-1/4">{item.rfid}</td>
              <td className="text-center align-middle w-1/4">{item.sender_data}</td> 
              <td className="text-center align-middle w-1/4">{item.dimensions}</td>
              <td className="text-center align-middle w-1/4">{item.destination_details}</td>
              <td>
                  <button className="btn btn-neutral">Track</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Fetch;