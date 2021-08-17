import { useState } from 'react';
import React from 'react';
import './App.css';
import GuideLine from './components/GuideLine/GuideLine';
import CalendarInputField from './components/CalendarInput/CalendarInput';
import CalendarSelector from './components/CalendarSelector/CalendarSelector';
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            calendarInput: '', // the input field of calendar checkbox
            classList: [] // the list of class after parsing the input
        };
        this.handleCalendarInputChange = this.handleCalendarInputChange.bind(this);
    }
    static parseCalendarInput(input) {
        let lines = input.split('\n');
        lines.splice(0, 3);

        let subjectCount = lines.length;
        let subjectList = [];

        for (let i = 0; i < subjectCount; i++) {
            lines[i] = lines[i].split('\t');

            let time = lines[i][7].match(/(\d+:\d+)/g);
            let week = lines[i][10].match(/\d+/g);
            let subject = {
                ID: lines[i][0],
                name: lines[i][1],
                group: lines[i][4],
                dayOfWeek: lines[i][5],
                time,
                room: lines[i][8],
                campus: lines[i][9],
                week
            };

            subjectList.push(subject);
        }

        return subjectList;
    }
    handleCalendarInputChange(event) {
        this.setState({ calendarInput: event.target.value });
        console.log(this.state.calendarInput);
        this.setState({ classList: App.parseCalendarInput(event.target.value) });
    }



    render() {
        return <React.StrictMode>
            <div id='app_wrapper'>
                <h1 className='header'>BK Google Calendar</h1>
                <hr className='header_separator' />
                <GuideLine num={1} text={'Copy và dán thời khoá biểu của bạn vào đây, nhớ copy từ “Học kỳ 1...”  đến cuối bảng nhé.'} />
                <CalendarInputField value={this.state.calendarInput} onChange={this.handleCalendarInputChange} />
                <GuideLine num={2} text={'Chọn môn học mà bạn muốn xuất thời khoá biểu dưới đây.'} />
                <CalendarSelector classList={this.state.classList}/>
            </div>
        </React.StrictMode>;
    }
}
export default App;
