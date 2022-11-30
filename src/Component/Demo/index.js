import React from "react";
import test1 from "../../services/demo";
import { useState } from "react";
import { useQuery } from "react-query";

function Demo() {
  const [data, setdata] = useState([]);

  const handleClick = () => {};

  const { data1 } = useQuery(["abc"], test1, {
    onSuccess(data) {
      setdata(data?.data?.object);
    },
  });
  //   console.log(data);
  return (
    <div>
      <button onClick={handleClick} className="p-4 text-center bg-green-500 ">
        Add
      </button>
      {
        data?.length > 0 && (
          <h1 className="font-extrabold text-center text-7xl">
            {data[0].clubId}
          </h1>
        )
        /* data?.map((abc) => {
          return <h1>{abc?.[1]?.clubId}</h1>;
        })} */
      }
    </div>
  );
}

export default Demo;
