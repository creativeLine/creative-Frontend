import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";
import Search from "./search/Search";

const Table = ({ isNavExpanded }) => { // Pass isNavExpanded as a prop
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); 
        console.log(token);// Retrieve the token from local storage
        const response = await axios({
          method: "get",
          url: "http://localhost:8083/employee/getAll",
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        });
        const data = response.data;
        setData(data);
        console.log(data);
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className={`second_Part ${isNavExpanded ? 'expanded' : 'collapsed'}`}>
      <Search />
      <div className="table">
        <table>
          <thead className="header">
            <tr>
              <th>S.NO</th>
              <th>EMPCODE</th>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Status</th>
              <th>Contact</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.transId}</td>
                <td>{item.empCode}</td>
                <td>{item.empName}</td>
                <td>{item.empDeptCode}</td>
                <td>{item.empDesgCode}</td>
                <td>Present</td>
                <td>{item.empEmail}</td>
                <td className="edit">
                  <FontAwesomeIcon icon={faPenToSquare} /> Edit
                </td>
                <td>
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
