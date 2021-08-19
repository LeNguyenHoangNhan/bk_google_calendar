import React, { useState } from 'react';
import "./FileUsageGuide.css";

function FileUsageGuide() {
    let [showDetails, setShowDetails] = useState(false);
    function clickHandler() {
        setShowDetails(!showDetails);
    }
    return <div className={'file-usage-guide_wrapper'}>
        <p className="file-usage-guide_question" onClick={clickHandler}>
            <i className={`fas fa-chevron-right arrow ${showDetails ? 'point-down' : 'point-right'}`}></i>
            <span className='question'>Mình có thể sử dụng file mới tải như thế nào?</span>
        </p>

        <div className={`file-usage-guide ${showDetails ? 'file-usage-guide-show' : 'file-usage-guide-hide'}`}>
            <h2>Với các bạn sử dụng trên máy tính:</h2>
            <ol>
                <li>Các bạn truy cập vào địa chỉ sau: <a href="https://calendar.google.com">https://calendar.google.com</a>.</li>
                <li>Bấm vào <i>bánh răng</i> ở góc trên cùng bên phải, bên trong menu xuất hiện, bấm vào <i>Cài đặt</i>.</li>
                <li>Ở bên trái, bấm vào <i>Nhập và xuất</i>.</li>
                <li>Bấm vào <i>Chọn tiếp từ máy tính</i>.</li>
                <li>Chọn tệp bạn vừa mới tải về, mặc định tên sẽ là <code>export.ics</code>.</li>
                <li>Chọn lịch bạn muốn nhập môn học vào ở ô bên dưới. Bạn có thể tham khảo tạo thêm lịch cho từng học kỳ tại <a href="https://support.google.com/calendar/answer/37095?hl=vi">đây</a>.</li>
                <li>Bấm vào <i>Nhập</i>.</li>
            </ol>
            <h2>Với các bạn sử dụng điện thoại thông minh.</h2>
            <ol>
                <li>Các bạn mở tệp vừa mới tải xuống từ trình duyệt hoặc ứng dụng file của điện thoại.</li>
                <li>Tuỳ theo hệ điều hành sẽ có thông báo nhập sự kiện vào lịch của ứng dụng trên hệ điều hành đó.</li>
                <li>Các bạn làm theo hướng dẫn của ứng dụng.</li>
            </ol>
        </div>
    </div>
}

export default FileUsageGuide;