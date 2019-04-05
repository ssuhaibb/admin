import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from "react-router-dom";

import { 
    Badge,
    Card,
    CardBody,
    CardHeader,
    Col,
    PaginationItem,
    PaginationLink,
    Row,
    Table
} from "reactstrap";

class Buyers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [
                { name: "John", age: "23", city: "Texas", role: "Buyer" },
                { name: "Max", age: "24", city: "Riverdale", role: "Seller" },
                { name: "Tim", age: "25", city: "Austin", role: "Architect" },
                { name: "John", age: "23", city: "Texas", role: "Buyer" },
                { name: "Max", age: "24", city: "Riverdale", role: "Seller" },
                { name: "Tim", age: "25", city: "Austin", role: "Architect" },
                { name: "John", age: "23", city: "Texas", role: "Buyer" },
                { name: "Max", age: "24", city: "Riverdale", role: "Seller" },
                { name: "Tim", age: "25", city: "Austin", role: "Architect" },
                { name: "John", age: "23", city: "Texas", role: "Buyer" },
                { name: "Max", age: "24", city: "Riverdale", role: "Seller" },
                { name: "Tim", age: "25", city: "Austin", role: "Architect" },
                { name: "John", age: "23", city: "Texas", role: "Buyer" },
                { name: "Max", age: "24", city: "Riverdale", role: "Seller" },
                { name: "Tim", age: "25", city: "Austin", role: "Architect" },
                { name: "John", age: "23", city: "Texas", role: "Buyer" },
                { name: "Max", age: "24", city: "Riverdale", role: "Seller" },
                { name: "Tim", age: "25", city: "Austin", role: "Architect" },
                { name: "John", age: "23", city: "Texas", role: "Buyer" },
                { name: "Max", age: "24", city: "Riverdale", role: "Seller" },
                { name: "Tim", age: "25", city: "Austin", role: "Architect" },
                { name: "John", age: "23", city: "Texas", role: "Buyer" },
                { name: "Max", age: "24", city: "Riverdale", role: "Seller" },
                { name: "Tim", age: "25", city: "Austin", role: "Architect" },
                { name: "John", age: "23", city: "Texas", role: "Buyer" },
                { name: "Max", age: "24", city: "Riverdale", role: "Seller" },
                { name: "Tim", age: "25", city: "Austin", role: "Architect" },
                { name: "John", age: "23", city: "Texas", role: "Buyer" },
                { name: "Max", age: "24", city: "Riverdale", role: "Seller" },
                { name: "Tim", age: "25", city: "Austin", role: "Architect" }
            ],
            columns: [
                {
                    Header: "Name",
                    accessor: "name",
                    maxWidth: 190,
                    id: "name",
                    Cell: ({ row }) => <Link to="/">{row.name}</Link>
                },
                { Header: "Age", accessor: "age" },
                { Header: "City", accessor: "city" },
                { Header: "Role", accessor: "role" },
                {
                    Header: "Action",
                    accessor: "action",
                    id: "actions",
                    Cell: ({ row }) => (
                        <Badge color="success" style={{ cursor: "pointer", textAlign:'center' }}>
                            More
                        </Badge>
                    )
                }
            ]
        };
    }
    render() {
        const rows = this.state.userData;
        const columns = this.state.columns;
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <big>Users</big>
                            </CardHeader>
                            <CardBody>
                                <ReactTable
                                    data={rows}
                                    columns={columns}
                                    className="-striped -highlight"
                                    defaultPageSize={10}
                                />
                                {/* <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Yiorgos Avraamu</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <Badge color="success" style={{cursor:'pointer'}} onClick={(id)=>{console.log('clicked',id)}}>More</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Avram Tarasios</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="danger">Banned</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Quintin Ed</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>
                        <Badge color="secondary">Inactive</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Enéas Kwadwo</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Agapetus Tadeáš</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table> */}
                                {/* <Pagination>
                                    <PaginationItem disabled>
                                        <PaginationLink previous tag="button">
                                            Prev
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink tag="button">
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">
                                            4
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next tag="button">
                                            Next
                                        </PaginationLink>
                                    </PaginationItem>
                                </Pagination> */}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Buyers;
