import {faUsers, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";
import Table from "../table/Table";

const Home = () => {
  const [Present, setPresent] = useState(0);
  const [total, setTotal] = useState(0);
  const [data , setData]= useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios("http://localhost:8083/employee/get/EMP001");
        console.log(response.data);
        const data = response.data;
        setTotal(data);
        console.log(data);
      } catch (error) {
        console.log("somthing went wrong");
      }
    })();
  }, []);

  // const container = document.querySelector(".second_Part");

  // container.addEventListener('scroll',function(){
  //   const total = container.scrollHeight;
  //   const containerHiegth = container.clientHeight;
  //   let scrolable = total-containerHiegth;
  //   let scrollHieght = container.scrollTop;
  //   if(scrolable-scrollHieght<=5){
  //     setData(data);
  // }
  // })
 

  

 


  
  return (
    <div className="main-container">
      <div className="home">
        <div className="box1">
          <p>total Employees</p>
          <div className="icon">
            <FontAwesomeIcon className="user" icon={faUsers} />
            <h1 className="total">{total}</h1>
          </div>
        </div>
        <div className="box2">
          <p>present Employees</p>
          <div className="icon">
            <FontAwesomeIcon className="user" icon={faUsers} />
            <h1 className="total">{total}</h1>
          </div>
        </div>
        <div className="box3">
          <p>absent Employees</p>
          <div className="icon">
            <FontAwesomeIcon className="user" icon={faUsers} />
            <h1 className="total">{total}</h1>
          </div>
        </div>
        <div className="box4">
          <p>Employees on leave</p>
          <div className="icon">
            <FontAwesomeIcon className="user" icon={faUsers} />
            <h1 className="total">{total}</h1>
          </div>
        </div>
      </div>
      <Table/>

      
    </div>
  );
};

export default Home;
