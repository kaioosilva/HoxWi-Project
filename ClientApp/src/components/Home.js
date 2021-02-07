import React, { useEffect, useState } from "react";
import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import api from "../services/api";
import moment from "moment";

import "./Home.css";

function Home() {
  const [dataHoxWi, setDataHoxWi] = useState([]);

  useEffect(() => {
    const handleData = async () => {
      await api.get("hoxprofile").then((response) => {
        setDataHoxWi(response.data.Results);
      });
    };

    handleData();
  }, []);

  return (
    <div className="Container">
      <h1>Hello, HoxWi users.</h1>

      <h2>HoxWiProfiles:</h2>

      {dataHoxWi?.map((profile) => (
        <Form key={profile._id} className="form-container">
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input type="text" name="name" value={profile.name} disabled />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Creation date</Label>
                <Input
                  type="text"
                  name="date"
                  value={moment().format(
                    "Do MMMM YYYY [at] h:mm a",
                    profile.hCreationDate
                  )}
                  disabled
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">Description</Label>
            <Input
              type="text"
              name="description"
              value={profile.description}
              disabled
            />
          </FormGroup>
        </Form>
      ))}
    </div>
  );
}

export default Home;
