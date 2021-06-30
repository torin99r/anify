import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'
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

    var GoButton;

    if (list && username) {
      GoButton = (
        <Button onClick={() => alert("Getting " + list + " for " + username)}>Go!</Button>
      );
    } else {
      GoButton = null;
    }


    return (
      <Form>
        <DropdownButton id="dropdown-basic-button" title={list ? list : "Choose your list"}>
          <Dropdown.Item onClick={() => this.handleListSelection("MyAnimeList")}>MyAnimeList</Dropdown.Item>
          <Dropdown.Item onClick={() => this.handleListSelection("AniList")}>AniList</Dropdown.Item>
        </DropdownButton>
        <Form.Group controlId="formGroupEmail">
          <Form.Control 
            type="text"
            placeholder="Enter email"
            onChange={(event) => this.handleUsernameForm(event)}
          />
        </Form.Group>
        {GoButton}
      </Form>
    )

  }
}


function App() {
  return (
    <div>
      <ListForm />
    </div>
  );
}

export default App;
