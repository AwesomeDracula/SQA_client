import React, {useState} from "react";
import {Tab, Tabs} from "react-bootstrap";
import SingleTab from "./SingleTab";

function TabsComponent() {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="BHXH bắt buộc">
        <SingleTab />
      </Tab>
      <Tab eventKey="profile" title="BHXH tự nguyện">
        <SingleTab />
      </Tab>
    </Tabs>
  );
}

export default TabsComponent;
