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
            <span className='question'>Mình gặp vấn đề!</span>
        </p>

        <div className={`file-usage-guide ${showDetails ? 'file-usage-guide-show' : 'file-usage-guide-hide'}`}>
            <section className="faq-section">
                <h2>Mình có thể sử dụng file ics như thế nào?</h2>
                <h3>Với các bạn sử dụng trên máy tính:</h3>
                <ol>
                    <li>Các bạn truy cập vào địa chỉ sau: <a target="_blank" rel="noopener noreferrer" href="https://calendar.google.com" className='link'>https://calendar.google.com</a>.</li>
                    <li>Bấm vào <i className='highlight'>bánh răng</i> ở góc trên cùng bên phải, bên trong menu xuất hiện, bấm vào <i className='highlight'>Cài đặt</i>.</li>
                    <li>Ở bên trái, bấm vào <i className='highlight'>Nhập và xuất</i>.</li>
                    <li>Bấm vào <i className='highlight'>Chọn tệp từ máy tính</i>.</li>
                    <li>Chọn tệp bạn vừa mới tải về, mặc định tên sẽ là <code>export.ics</code>.</li>
                    <li>Chọn lịch bạn muốn nhập môn học vào ở ô bên dưới. Bạn có thể tham khảo tạo thêm lịch cho từng học kỳ tại <a href="https://support.google.com/calendar/answer/37095?hl=vi" className='link'>đây</a>.</li>
                    <li>Bấm vào <i className='highlight'>Nhập</i>.</li>
                </ol>
                <h3>Với các bạn sử dụng điện thoại thông minh.</h3>
                <ol>
                    <li>Các bạn mở tệp vừa mới tải xuống từ trình duyệt hoặc ứng dụng file của điện thoại.</li>
                    <li>Tuỳ theo hệ điều hành sẽ có thông báo nhập sự kiện vào lịch của ứng dụng trên hệ điều hành đó.</li>
                    <li>Các bạn làm theo hướng dẫn của ứng dụng.</li>
                </ol>
            </section>
            <section className="faq-section">
                <h2>Mình gặp lỗi khi sử dung, phần mềm xuất kết quả không đúng.</h2>
                <p>Mình rất tiếc phải nghe điều này. Bạn có thể cho mình biết tại <a href="https://www.facebook.com/hoangnhan.lenguyen.716/" target="_blank" rel="noopener noreferrer" className='link'>Facebook</a> của mình nhé. Minh rất mong nhận được sự phản hồi của bạn.</p>
            </section>
            
        </div>
    </div>
}

export default FileUsageGuide;