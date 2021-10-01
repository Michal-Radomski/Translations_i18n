import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {tekst: ""};

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:8000/text");
    const temp1 = response.data;
    const temp2 = temp1["text"];
    console.log(temp2);
    this.setState({tekst: temp2});
  };

  render() {
    return (
      <main className="container">
        <div className="row py-3">
          <div className="col-10"></div>
          <div className="col-2">
            <select className="form-control">
              <option value="en">English</option>
              <option value="pl">Polish</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md12">
            <h2>This text is translated in the frontend</h2>
            <p>{this.state.tekst}</p>
            <button className="btn btn-outline-primary">Like</button>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
