import sha256 from 'crypto-js/sha256'
import Base64 from 'crypto-js/enc-base64'

function parseCalendarInput(input) {
    let line = input.split('\n');

    const lineCount = line.length;
    let classList = [];

    for (let i = 0; i < lineCount; i++) {
        let tokenizedLine = line[i].split('\t'); // each token is separated by \t (tab)

        if (tokenizedLine.length < 11) {
            continue; // missing token, skip current line
        }

        let ID = tokenizedLine[0].trim();
        let name = tokenizedLine[1].trim();

        let group = tokenizedLine[4].trim();

        let dayOfWeek = tokenizedLine[5].trim();
        if (isNaN(parseInt(dayOfWeek, 10))) {
            continue; // invalid day
        } else {
            dayOfWeek = parseInt(dayOfWeek, 10);
        }

        let time = tokenizedLine[7].trim().match(/\d+:\d+/g);
        if (time === null) {
            continue;
        }

        let room = tokenizedLine[8].trim();
        let campus = tokenizedLine[9].trim();

        let week = tokenizedLine[10].trim().match(/\d+/g);
        if (week === null) {
            continue;
        }
        classList.push({
            signature: Base64.stringify(sha256(ID + dayOfWeek.toString() + week.join('') + time.join('') + room)),
            ID,
            name,
            dayOfWeek,
            time,
            room,
            campus,
            week,
            selected: true,
            group
        });

    }
    return classList;
}

export { parseCalendarInput };
