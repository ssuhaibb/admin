import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class UserProfile extends Component {
    constructor(props){
        super(props);

    }
  render() {
    //   const user = this.props.match.url
      console.log('user info received from User page', this.props);
    return (
      <div className="app flex-row align-items-center">
        hi this is userprofile page     
      </div>
    );
  }
}

export default UserProfile;
