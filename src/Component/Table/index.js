import React from "react";
import { useState } from "react";
import {
  useLocation,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function Table() {
  const [employee, setEmployee] = useState([
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ]);
  const location = useLocation();
  // const history=useHistory();
  // history.push("/");
  const {path}=useParams();

  console.log(location.pathname);
  const data = [
    {
      order_item_id: "04766e00-6b1c-11ed-ae8a-31356320d5de",
      id: "943",
      name: "Serve It Up",
      description: "<p></p>\n",
      summary: null,
      shop_id: null,
      price: "5",
      parent_id: null,
      rank: null,
      is_approved: true,
      approved_at: null,
      approved_by: null,
      is_active: true,
      is_hidden: false,
      item_id: null,
      created_at: "2022-11-11T16:47:07.875Z",
      updated_at: "2022-11-11T16:47:07.887Z",
      user_client_id: "da1c3172-e647-11ec-9e7a-3b37506735e7",
      created_by: "da1c3170-e647-11ec-9e7a-3b37506735e7",
      updated_by: "da1c3170-e647-11ec-9e7a-3b37506735e7",
      all_images:
        '[{"id":"1668185208765","name":"Serve it up@2x.png","sequenceNo":0,"image_url":"https://sharemeister-crm-dev.s3.us-west-2.amazonaws.com/user_media/5e0391dc-930b-41d9-bbf6-1c5a12d4d388/1668185207559imageServe%20it%20up%402x.png","isPrimary":false}]',
      plain_description: "",
      additional_details: null,
      all_colors: "[]",
      document_details: null,
      seq_id: 943,
      client_id: "da1c3170-e647-11ec-9e7a-3b37506735e7",
      type: null,
      file_title: null,
      file_type: null,
      sample_file_api_url: null,
      sample_file_api_body: null,
      sample_file_auth_token: null,
      file_api_url: null,
      file_api_body: null,
      file_auth_token: null,
      estate_id: null,
      cd_product_id: null,
      jersey_number: null,
      athlete_name: "Ankit Taneja",
      athlete_profile_image: null,
      school_id: "fefc7180-0f0a-11ed-a049-a36cc71753d4",
      school_name: "Sharemeister",
      athlete_jersey_number: 54,
      sport_name: "Football",
    },
  ];

  // console.log("Image", JSON.parse(data[0].all_images)[0]["image_url"]);

  return (
    <div>
      <h1 className="text-5xl font-extrabold text-center ">Table</h1>
      <table>
        <thead>
          <tr>
            <td>EmpId</td>
            <td>Name</td>
            <td>Designation</td>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp) => {
            return (
              <tr>
                <td>{emp.empId}</td>
                <td>{emp.name}</td>
                <td>{emp.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
