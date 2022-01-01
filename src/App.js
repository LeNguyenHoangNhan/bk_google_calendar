import React from "react";
import "./App.css";

import GuideLine from "./components/GuideLine/GuideLine";
import CalendarInputField from "./components/CalendarInput/CalendarInput";
import CalendarSelector from "./components/CalendarSelector/CalendarSelector";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import FileUsageGuide from "./components/FileUsageGuide/FileUsageGuide";
import Footer from "./components/Footer/Footer";

import { parseCalendarInput } from "./utils/parser";
import { generateICSFileContent } from "./utils/generator";

import FileSaver from "file-saver";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarInput: "", // the input field of calendar checkbox
      classList: [], // the list of class after parsing the input
      timeTableValid: false,
      theme: "light",
    };
    this.handleCalendarInputChange = this.handleCalendarInputChange.bind(this);
    this.handleCalendarSelect = this.handleCalendarSelect.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.handleDownload = this.handleDownload.bind(this);
  }

  handleCalendarInputChange(event) {
    this.setState({ calendarInput: event.target.value });

    const classList = parseCalendarInput(event.target.value);

    this.setState({ classList });
  }

  handleCalendarSelect(event) {
    const targetSignature = event.target.value;
    let classList = this.state.classList;
    for (let i = 0; i < classList.length; i++) {
      if (classList[i].signature === targetSignature) {
        classList[i].selected = !classList[i].selected;
        break;
      }
    }
    this.setState({ classList });
  }
  handleDownload() {
    const content = generateICSFileContent(this.state.classList);
    let blob = new Blob([content], { type: "text/calendar" });
    FileSaver.saveAs(blob, "export.ics");
  }

  changeTheme(event) {
    let localStorage = window.localStorage;

    if (this.state.theme === "light") {
      localStorage.setItem("theme", "dark");
      this.setState({ theme: "dark" });
    } else {
      localStorage.setItem("theme", "light");
      this.setState({ theme: "light" });
    }
  }

  componentDidMount() {
    let localStorage = window.localStorage;
    const oldTheme = localStorage.getItem("theme");
    if (oldTheme !== null) {
      this.setState({ theme: oldTheme });
    } else {
      this.setState({ theme: "light" });
      localStorage.setItem("theme", "light");
    }
  }

  render() {
    return (
      <React.StrictMode>
        <div id="app" class={`${this.state.theme}-theme`}>
          <div id="app_wrapper">
            <h1 className="header" onClick={this.changeTheme}>
              BK Google Calendar
            </h1>
            <hr className="header_separator" />
            <GuideLine
              num={1}
              text={
                "Sao chép và dán thời khoá biểu của các môn bạn muốn xuất file vào đây."
              }
            />
            <CalendarInputField
              value={this.state.calendarInput}
              onChange={this.handleCalendarInputChange}
            />
            <GuideLine
              num={2}
              text={"Chọn môn học mà bạn muốn xuất thời khoá biểu dưới đây."}
            />
            <CalendarSelector
              classList={this.state.classList}
              changeHandler={this.handleCalendarSelect}
            />
            <GuideLine
              num={3}
              text={"Bấm nút Tải xuống để tải về file ics nhé."}
            />
            <DownloadButton
              isDownloadable={
                this.state.classList.length !== 0 &&
                this.state.classList.filter((c) => c.selected).length !== 0
              }
              clickHandler={this.handleDownload}
            />
            <FileUsageGuide />
            <Footer />
          </div>
        </div>
      </React.StrictMode>
    );
  }
}
export default App;
