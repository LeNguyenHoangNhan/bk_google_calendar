import { v4 as uuidv4 } from 'uuid';

function toTimeString(week, dayOfWeek, time) { // time in the format hh:mm
    let times = time.match(/\d+/g);

    let date = new Date(2023, 0, 2, times[0], times[1]); //start of week 1 used to calculate using offset

    const weekOfset = week - 1;
    const dayOfset = dayOfWeek - 2;

    date.setDate(date.getDate() + (weekOfset * 7) + dayOfset);
    let timeString = date.toISOString();

    return (timeString.split('.')[0] + 'Z').replace(/-/g, '').replace(/:/g, '');
}

function generateClass(clss) {
    let repeatTime = []

    for (let i = 1; i < clss.week.length; i++) {
        repeatTime.push(toTimeString(clss.week[i], clss.dayOfWeek, clss.time[0]))
    }

    let content = `BEGIN:VEVENT
UID:${uuidv4()}
DTSTAMP:${(new Date().toISOString().split('.')[0] + 'Z').replace(/-/g, '').replace(/:/g, '')}
SUMMARY:${clss.name}
DESCRIPTION:Mã môn: ${clss.ID}\\nMã lớp: ${clss.group}
LOCATION:${clss.room}, ${clss.campus}
DTSTART:${toTimeString(clss.week[0], clss.dayOfWeek, clss.time[0])}
DTEND:${toTimeString(clss.week[0], clss.dayOfWeek, clss.time[1])}
RDATE:${repeatTime.join(',')}
END:VEVENT`
    return content;
}

function generateICSFileContent(classList) {
    let content = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//dev.chillcat.bkgooglecalendar//`;

    for (let i = 0; i < classList.length; i++) {
        if (classList[i].selected) {
            content += `
${generateClass(classList[i])}`
        }
    }

    content += `
END:VCALENDAR`;
    return content;
}


export { toTimeString, generateICSFileContent };
