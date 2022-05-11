import {format} from "date-fns";
import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import {getter} from "../common/services";

const InsuranceConfig = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getter("/get-insurance-config")
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="text-center">Từ</th>
          <th className="text-center">Đến</th>
          <th className="text-center">Loại lao động</th>
          <th className="text-center">Chức vụ</th>
          <th className="text-center">Mức đóng</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => {
          return (
            <tr key={index}>
              <td className="text-center">{format(new Date(item.startTime), "MM/yyyy")}</td>
              <td className="text-center">{format(new Date(item.endTime), "MM/yyyy")}</td>
              <td className="text-center">
                {item.userClass === "DOMESTIC_LABOR"
                  ? "Người lao động Việt Nam"
                  : item.userClass === "FOREIGN_LABOR"
                  ? "Người lao động nước ngoài"
                  : "Cán bộ công nhân viên chức"}
              </td>
              <td className="text-center">
                {item.isEmployee ? "Người lao động" : "Người thuê lao động"}
              </td>
              <td className="text-center">
                {item.value}%
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default InsuranceConfig;
