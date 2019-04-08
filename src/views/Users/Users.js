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
    Table,
    Button
} from "reactstrap";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [
                {
                    id: 0,
                    name: "John Doe",
                    registered: "2018/01/01",
                    role: "Guest",
                    status: "Pending"
                },
                {
                    id: 1,
                    name: "Samppa Nori",
                    registered: "2018/01/01",
                    role: "Member",
                    status: "Active"
                },
                {
                    id: 2,
                    name: "Estavan Lykos",
                    registered: "2018/02/01",
                    role: "Staff",
                    status: "Banned"
                },
                {
                    id: 3,
                    name: "Chetan Mohamed",
                    registered: "2018/02/01",
                    role: "Admin",
                    status: "Inactive"
                },
                {
                    id: 4,
                    name: "Derick Maximinus",
                    registered: "2018/03/01",
                    role: "Member",
                    status: "Pending"
                },
                {
                    id: 5,
                    name: "Friderik Dávid",
                    registered: "2018/01/21",
                    role: "Staff",
                    status: "Active"
                },
                {
                    id: 6,
                    name: "Yiorgos Avraamu",
                    registered: "2018/01/01",
                    role: "Member",
                    status: "Active"
                },
                {
                    id: 7,
                    name: "Avram Tarasios",
                    registered: "2018/02/01",
                    role: "Staff",
                    status: "Banned"
                },
                {
                    id: 8,
                    name: "Quintin Ed",
                    registered: "2018/02/01",
                    role: "Admin",
                    status: "Inactive"
                },
                {
                    id: 9,
                    name: "Enéas Kwadwo",
                    registered: "2018/03/01",
                    role: "Member",
                    status: "Pending"
                },
                {
                    id: 10,
                    name: "Agapetus Tadeáš",
                    registered: "2018/01/21",
                    role: "Staff",
                    status: "Active"
                },
                {
                    id: 11,
                    name: "Carwyn Fachtna",
                    registered: "2018/01/01",
                    role: "Member",
                    status: "Active"
                },
                {
                    id: 12,
                    name: "Nehemiah Tatius",
                    registered: "2018/02/01",
                    role: "Staff",
                    status: "Banned"
                },
                {
                    id: 13,
                    name: "Ebbe Gemariah",
                    registered: "2018/02/01",
                    role: "Admin",
                    status: "Inactive"
                },
                {
                    id: 14,
                    name: "Eustorgios Amulius",
                    registered: "2018/03/01",
                    role: "Member",
                    status: "Pending"
                },
                {
                    id: 15,
                    name: "Leopold Gáspár",
                    registered: "2018/01/21",
                    role: "Staff",
                    status: "Active"
                },
                {
                    id: 16,
                    name: "Pompeius René",
                    registered: "2018/01/01",
                    role: "Member",
                    status: "Active"
                },
                {
                    id: 17,
                    name: "Paĉjo Jadon",
                    registered: "2018/02/01",
                    role: "Staff",
                    status: "Banned"
                },
                {
                    id: 18,
                    name: "Micheal Mercurius",
                    registered: "2018/02/01",
                    role: "Admin",
                    status: "Inactive"
                },
                {
                    id: 19,
                    name: "Ganesha Dubhghall",
                    registered: "2018/03/01",
                    role: "Member",
                    status: "Pending"
                },
                {
                    id: 20,
                    name: "Hiroto Šimun",
                    registered: "2018/01/21",
                    role: "Staff",
                    status: "Active"
                },
                {
                    id: 21,
                    name: "Vishnu Serghei",
                    registered: "2018/01/01",
                    role: "Member",
                    status: "Active"
                },
                {
                    id: 22,
                    name: "Zbyněk Phoibos",
                    registered: "2018/02/01",
                    role: "Staff",
                    status: "Banned"
                },
                {
                    id: 23,
                    name: "Einar Randall",
                    registered: "2018/02/01",
                    role: "Admin",
                    status: "Inactive"
                },
                {
                    id: 24,
                    name: "Félix Troels",
                    registered: "2018/03/21",
                    role: "Staff",
                    status: "Active"
                },
                {
                    id: 25,
                    name: "Aulus Agmundr",
                    registered: "2018/01/01",
                    role: "Member",
                    status: "Pending"
                },
                {
                    id: 42,
                    name: "Ford Prefex",
                    registered: "2001/05/21",
                    role: "Alien",
                    status: "Don't panic!"
                }
            ],
            columns: [
                {
                    Header: "Name",
                    accessor: "name",
                    maxWidth: 190,
                    id: "name"
                    //Cell: ({ row }) => <Link to="/theme">{row.name}</Link>
                    //Cell: ({ row }) => <Link to="/users/:id">{row.name}</Link>
                },
                { Header: "Registered", accessor: "registered" },
                { Header: "Role", accessor: "role" },
                { Header: "Status", accessor: "status" },
                {
                    Header: "Action",
                    accessor: "action",
                    id: "actions",
                    Cell: ({ row }) => (
                        <div>
                            <Row className="align-items-center">
                                <Col
                                    col="6"
                                    sm="4"
                                    md="2"
                                    xl
                                    className="mb-3 mb-xl-0"
                                >
                                    <Button
                                        block
                                        outline
                                        color="primary"
                                        onClick={() => this.handleEdit()}
                                    >
                                        Edit
                                    </Button>
                                </Col>
                                <Col
                                    col="6"
                                    sm="4"
                                    md="2"
                                    xl
                                    className="mb-3 mb-xl-0"
                                >
                                    <Button
                                        block
                                        outline
                                        color="danger"
                                        onClick={() => this.handleDelete()}
                                    >
                                        Delete
                                    </Button>
                                </Col>
                                <Col
                                    col="6"
                                    sm="4"
                                    md="2"
                                    xl
                                    className="mb-3 mb-xl-0"
                                >
                                    <Button
                                        block
                                        outline
                                        color="danger"
                                        onClick={() =>
                                            this.handleUserDetails(row)
                                        }
                                    >
                                        View Details
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    )
                }
            ]
        };
    }

    handleEdit = () => {};
    handleDelete = () => {};
    handleUserDetails = userInfo => {
        //this.props.history.push(`/users/:${userInfo._original.id}`);
        this.props.history.push({
            pathname: `/users/:${userInfo._original.id}`,
            state: { detail: this.state.userData[userInfo._original.id] }
        });
        console.log("userInfo", userInfo);
    };
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

export default Users;
