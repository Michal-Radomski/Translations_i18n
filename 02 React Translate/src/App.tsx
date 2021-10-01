import React from "react";
import axios from "axios";

import i18next from "i18next";

type State = {
  tekst: string;
};
class App extends React.Component {
  state: State = {tekst: ""};
  lang: string = "en";

  componentDidMount = async () => {
    await i18next.changeLanguage(this.lang);
    const config: string | any = axios.defaults.headers;
    config["Accept-Language"] = this.lang;
    // console.log(config["Accept-Language"]);
    const response = await axios.get("http://localhost:8000/text");
    const temp1 = response.data;
    const temp2 = temp1["text"];
    // console.log(temp2);
    this.setState({tekst: temp2});
    // console.log(this.state);
  };

  change = async (lang: string) => {
    this.lang = lang;
    await this.componentDidMount();
  };

  click = async () => {
    const response = await axios.post("http://localhost:8000/like");
    // console.log(response);                      // -Odpowiedź z serwera
    const temp1 = response.data["message"];
    if (!temp1) {
      console.log("waiting");
    }
    // console.log(temp1);
    const text: string = i18next.t("thank_you");
    // console.log(text);                          // -Odpowiedź z aplikacji
    alert(text);
  };

  render() {
    return (
      <main className="container">
        <div className="row py-3">
          <div className="col-10"></div>
          <div className="col-2">
            <select className="form-control" onChange={(e) => this.change(e.target.value)}>
              <option value="en">English</option>
              <option value="pl">Polish</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md12">
            {/* <h2>This text is translated in the frontend:</h2> */}
            <h2>{i18next.t("title")}</h2>
            {/* <p>This is translated in the backend:</p> */}
            <p>{this.state.tekst}</p>
            <button className="btn btn-outline-primary" onClick={this.click}>
              {i18next.t("like")}
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
