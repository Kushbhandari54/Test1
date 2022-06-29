import { useState, useEffect } from "react";

const CovidData = () => {
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualdata = await res.json();
    setstatewiseData(actualdata.statewise);
  };

  const [statewiseData, setstatewiseData] = useState([]);

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div class="block w-full overflow-x-auto py-2 bg-blue-300">
        <h1 className="p-4 text-2xl font-bold text-center underline">
          <span className="text-2xl">India </span>Covid 19 Dashboard
        </h1>
        <table className="items-center w-full bg-transparent border-collapse-auto">
          <thead className="p-4 text-xl font-bold text-left ">
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Death</th>
              <th>Active</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {statewiseData.map((data, ind) => (
              <tr key={ind}>
                <td>{data.state}</td>
                <td>{data.confirmed}</td>
                <td>{data.recovered}</td>
                <td>{data.deaths}</td>
                <td>{data.active}</td>
                <td>{data.lastupdatedtime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CovidData;
