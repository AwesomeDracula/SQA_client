import React, {useState} from "react";
import {Button} from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const initialValues = {
  startDate: null,
  endDate: null,
};

const SingleTab = () => {
  const [listData, setListData] = useState([{...initialValues}]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const removeItem = (index) => {
    const newListData = [...listData];
    newListData.splice(index, 1);
    setListData(newListData);
  }

  return (
    <>
      {listData.map((item, index) => {
        return (
          <div
            key={index}
            className="d-flex flex-row justify-content-around m-2"
          >
            <label className="w-10 align-self-center">{index + 1}</label>
            <div className="text-center">
              <label className="m-1">Từ</label>
              <DatePicker
                className="form-control form-control-lg"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="text-center">
              <label className="m-1">Đến</label>
              <DatePicker
                className="form-control form-control-lg"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>
            <div className="text-center">
              <label className="m-1">Mức lương đóng BHXH</label>
              <input type="number" className="form-control form-control-lg" />
            </div>
            <Button onClick={removeItem} className="align-self-end btn btn-danger" style={{width: '50px', height: '50px'}}>
              <i class="fa fa-trash" aria-hidden="true"></i>
            </Button>
          </div>
        );
      })}
      <div className="text-center mt-4 pt-2">
        <Button
          className="btn btn-primary btn-lg m-2"
          style={{width: "20%", margin: "auto"}}
          onClick={() => setListData([...listData, {...initialValues}])}
        >
          Thêm giai đoạn
        </Button>
        <Button
          className="btn btn-primary btn-lg m-2"
          style={{width: "20%", margin: "auto"}}
          type="submit"
        >
          Tính
        </Button>
      </div>
    </>
  );
};

export default SingleTab;
