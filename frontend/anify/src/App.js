import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import './App.css';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      username: null,
    };
  }

  handleListSelection(list) {
    this.setState({list: list});
  }

  handleUsernameForm(event) {
    this.setState({username: event.target.value});
  }

  render() {
    const list = this.state.list;
    const username = this.state.username;

    return (
      <Row>
        <Col className="justify-content-end">
          <DropdownButton 
            title={list ? list : "Choose your list"}
            id="input-group-dropdown"
          >
            <Dropdown.Item onClick={() => this.handleListSelection("MyAnimeList")}>MyAnimeList</Dropdown.Item>
            <Dropdown.Item onClick={() => this.handleListSelection("AniList")}>AniList</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
          <FormControl 
            type="text"
            placeholder="Enter username"
            onChange={(event) => this.handleUsernameForm(event)}
          />
        </Col>
        <Col>
          <Button
            disabled={!(list && username)}
            onClick={() => alert("Getting " + list + " for " + username)}
          >
            Go!
          </Button>
        </Col>
      </Row>
    )

  }
}


function App() {
  return (
    <Container>
      <ListForm />
    </Container>
  );
}

export default App;
