import React from "react";
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Teachers  from "./components/Teachers";


function Home() {
  
  return (
    <div>
      <thead>
        <tr>
          Teacher
        </tr>
        <tr>
          Course 
        </tr>
      </thead>
      <tbody>
        {
          Teachers && Teachers.length > 0
            ?
            Teachers.map((item) => {
              return (
                <tr>
                  <td>
                    {item.Teacher}
                  </td>
                  <td>
                    {item.Course}
                  </td>
                </tr>
              )
            })
            : 
            "No Course"
      }
</tbody>
    </div>
  ) 

  
  
}

export default Home;