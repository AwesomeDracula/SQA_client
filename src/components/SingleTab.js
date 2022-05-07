import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const initialValues = {
  startTime: null,
  endTime: null,
  income: 0,
  isOld: false,
};

const SingleTab = ({incomes}) => {
  const [listData, setListData] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setListData(incomes);
  }, [incomes]);

  const removeItem = (index) => {
    const newListData = [...listData];
    newListData.splice(index, 1);
    setListData(newListData);
  };

  const handleChange = (data, type, index) => {
    const newListData = [...listData];
    if (type === "startTime") {
      newListData[index].startTime = data;
    } else if (type === "endTime") {
      newListData[index].endTime = data;
    } else {
      newListData[index].income = data;
    }
    setListData(newListData);
  };

  const onCalculate = () => {};

  const onSave = () => {
    for (const element of listData) {
      if (!element.startTime || !element.endTime) {
        alert("Không được để trống thời gian");
        return;
      } else {
        const startTime = new Date(element.startTime);
        const endTime = new Date(element.endTime);
        if (startTime > endTime) {
          alert("Thời gian không hợp lệ");
          return;
        }
      }
      if (!element.income) {
        alert("Không được để trống mức lương");
        return;
      }
    }
  };

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
                dateFormat="MM/yyyy"
                className="form-control form-control-lg"
                selected={item.startTime}
                onChange={(date) => handleChange(date, "startTime", index)}
                showMonthYearPicker
              />
            </div>
            <div className="text-center">
              <label className="m-1">Đến</label>
              <DatePicker
                dateFormat="MM/yyyy"
                className="form-control form-control-lg"
                selected={item.endTime}
                onChange={(date) => handleChange(date, "endTime", index)}
                showMonthYearPicker
              />
            </div>
            <div className="text-center">
              <label className="m-1">Mức lương đóng BHXH</label>
              <input
                onChange={(e) => handleChange(e.target.value, "income", index)}
                value={item.income}
                type="number"
                className="form-control form-control-lg"
              />
            </div>
            <Button
              onClick={removeItem}
              className="align-self-end btn btn-danger"
              style={{width: "50px", height: "50px"}}
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
            </Button>
          </div>
        );
      })}
      <div className="text-center mt-4 pt-2">
        <Button
          className="btn btn-primary btn-lg m-2"
          style={{width: "20%", margin: "auto"}}
          onClick={() => {
            setListData([...listData, {...initialValues}]);
            setEditing(true);
          }}
        >
          Thêm giai đoạn
        </Button>
        <Button
          className="btn btn-primary btn-lg m-2"
          style={{width: "20%", margin: "auto"}}
          onClick={onSave}
          disabled={!editing}
        >
          Lưu lại
        </Button>
        <Button
          className="btn btn-primary btn-lg m-2"
          style={{width: "20%", margin: "auto"}}
          type="submit"
          onClick={onCalculate}
          disabled={editing}
        >
          Tính
        </Button>
      </div>
    </>
  );
};

export default SingleTab;
