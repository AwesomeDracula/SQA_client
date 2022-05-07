import React, {useEffect, useState} from "react";
import {Tab, Tabs} from "react-bootstrap";
import {getter} from "../common/services";
import SingleTab from "./SingleTab";

function TabsComponent() {
  const [key, setKey] = useState("home");

  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    getter("/get-my-profile")
      .then((data) => {
        const newIncomes =
          data?.incomes?.length > 0
            ? data?.incomes.map((income) => ({
                ...income,
                startTime: new Date(income.startTime),
                endTime: new Date(income.endTime),
                isOld: true,
              }))
            : [];
        setIncomes(newIncomes);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, []);

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="BHXH bắt buộc">
        <SingleTab incomes={incomes} />
      </Tab>
      <Tab eventKey="profile" title="BHXH tự nguyện">
        <SingleTab incomes={incomes} />
      </Tab>
    </Tabs>
  );
}

export default TabsComponent;
