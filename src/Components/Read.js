import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";

export default function Read() {
  const [APIdata, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setAPIData(res.data);
        console.log(res.data);
      });
  }, [APIdata]);

  const setData = (data) => {
    console.log(data);
    let { id, firstname, lastname, email, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstname);
    localStorage.setItem("Last Name", lastname);
    localStorage.setItem("Email", email);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const onDelete = (id) => {
    axios
      .delete(
        `http://localhost:3000/users/${id}`
      )
      .then((res) => {
        alert("Data Deleted Successfully!!!");
      })
      .catch((error) => {
        alert("Error!!! Unable to Delete Data");
      });
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Sr.No.</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIdata.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstname}</Table.Cell>
                <Table.Cell>{data.lastname}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button
                      onClick={() => {
                        setData(data);
                      }}
                    >
                      Update
                    </Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      {/* <Outlet/> */}
    </div>
  );
}
