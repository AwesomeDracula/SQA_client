import React from "react";
import {Table} from "react-bootstrap";
import {data} from "../common/news";
import adminLayout from "../hoc/adminLayout";

const DetailNews = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <>
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.title}</td>
              </tr>
              {item.details.map((child, indexChild) => {
                return (
                  <tr key={indexChild}>
                    <td>{child.no}</td>
                    <td>{child.title}</td>
                  </tr>
                );
              })}
            </>
          );
        })}
      </tbody>
    </Table>
  );
};

export default adminLayout(DetailNews);
