import React from 'react';
import './App.css';
import GuideLine from './components/GuideLine/GuideLine';
import CalendarInputField from './components/CalendarInput/CalendarInput';
import CalendarSelector from './components/CalendarSelector/CalendarSelector';
import DownloadButton from './components/DownloadButton/DownloadButton';
import { parseCalendarInput } from './utils/parser';
import { generateICSFileContent } from './utils/generator';
import FileSaver from 'file-saver';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            calendarInput: '', // the input field of calendar checkbox
            classList: [], // the list of class after parsing the input
            timeTableValid: false
        };
        this.handleCalendarInputChange = this.handleCalendarInputChange.bind(this);
        this.handleCalendarSelect = this.handleCalendarSelect.bind(this);
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
            }
        } 
        this.setState({ classList });

    }
    handleDownload(event) {
        const content = generateICSFileContent(this.state.classList);
        let blob = new Blob([content], { type: 'text/calendar' });
        FileSaver.saveAs(blob, 'export.ics');
    }
    render() {
        return <React.StrictMode>
            <div id='app_wrapper'>
                <h1 className='header'>BK Google Calendar</h1>
                <hr className='header_separator' />
                <GuideLine num={1} text={'Copy và dán thời khoá biểu của bạn vào đây, nhớ copy từ “Học kỳ 1...”  đến cuối bảng nhé.'} />
                <CalendarInputField value={this.state.calendarInput} onChange={this.handleCalendarInputChange} />
                <GuideLine num={2} text={'Chọn môn học mà bạn muốn xuất thời khoá biểu dưới đây.'} />
                <CalendarSelector classList={this.state.classList} changeHandler={this.handleCalendarSelect} />
                <GuideLine num={3} text={'Bấm nút Tải xuống để tải về file ics nhé.'} />
                <DownloadButton isDownloadable={this.state.classList.length !== 0 && this.state.classList.filter(c => c.selected).length !== 0} clickHandler={this.handleDownload} />
            </div>
        </React.StrictMode>;
    }
}
export default App;
