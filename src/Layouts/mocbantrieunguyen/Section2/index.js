import React, { useState } from "react";

function Section1p5() {
    const [questions, setQuestions] = useState([true, true, true, true]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showCongrats, setShowCongrats] = useState(false);

    const questionList = [
        {
        question: `Dưới thời nhà Nguyễn, mộc bản chủ yếu được dùng làm gì?`,
        options: ["A. Ghi chép các chỉ dụ, sắc lệnh của nhà vua", "B. Sao chép kinh điển, chính sử và tài liệu quan trọng", "C. Khắc họa tranh dân gian để trang trí cung đình", "D. Ghi lại các bài thơ của các hoàng đế"],
        correct: "B. Sao chép kinh điển, chính sử và tài liệu quan trọng",
        },
        {
        question: `Người phê duyệt tất cả nội dung các bản thảo được khắc trên mộc bản?`,
        options: ["A. Các quan trong Viện Hàn lâm", "B. Người đứng đầu xưởng khắc gỗ trong cung đình", "C. Hoàng đế triều Nguyễn", "D. Các học giả nổi tiếng khắp nước"],
        correct: "C. Hoàng đế triều Nguyễn",
        },
        {
        question: `Đâu là bộ quốc sử lớn nhất của Triều Nguyễn được biên soạn và khắc in trong gần 100 năm?`,
        options: ["A. Đại Nam thực lục", "B. Khâm định Đại Nam hội điển sự lệ", "C. Minh Mệnh chính yếu", "D. Đại Nam nhất thống chí"],
        correct: "A. Đại Nam thực lục",
        },
        {
        question: `Quy trình để tạo ra Mộc bản triều Nguyễn`,
        options: [
            "A. Chuẩn bị vật liệu - Dán nội dung bản thảo lên ván gỗ - Khắc ván - In sách, đóng quyển",
            "B. Chuẩn bị vật liệu – Khắc ván – Dán nội dung bản thảo lên ván gỗ – In sách, đóng quyển",
            "C. Chuẩn bị vật liệu – Dán nội dung bản thảo lên ván gỗ – Khắc ván – Sơn bảo vệ – In sách",
            "D. Dán nội dung bản thảo lên ván gỗ – Chuẩn bị vật liệu – Khắc ván – In sách, đóng quyển",
        ],
        correct: "A. Chuẩn bị vật liệu - Dán nội dung bản thảo lên ván gỗ - Khắc ván - In sách, đóng quyển",
        },
    ];

    const handleQuestionClick = (index) => {
        if (questions[index]) {
        setCurrentQuestion(index);
        setPopupVisible(true);
        }
    };

    const handleAnswerClick = (answer) => {
        if (answer === questionList[currentQuestion].correct) {
        const updatedQuestions = [...questions];
        updatedQuestions[currentQuestion] = false; // Trả lời đúng
        setQuestions(updatedQuestions);
        setPopupVisible(false);

        if (updatedQuestions.every((q) => !q)) {
            setShowCongrats(true); // Hiển thị popup chúc mừng
        }
        } else {
        alert("Sai rồi! Hãy thử lại.");
        }
    };

    return (
        <>
        <div className="Section2" style={{backgroundColor: "#FFFFFF"}}>
            <div className="container">
            <div className="Section2__inner">
                <div className="Section2__inner__title">Đố vui có thưởng</div>
                <div className="Section2__inner__disc">
                    Người chơi trả lời các câu hỏi mà ô chữ đặt ra nhằm tìm ra bức hình ẩn sau các ô chữ. 
                </div>
                <div className="Section2__inner__game">
                <div
                    className="Section2__inner__game__image"
                    style={{
                    backgroundImage: "url('/image/mocbantrieunguyen/5.png')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    filter: questions.some((q) => q) ? "blur(10px)" : "none",
                    transition: "filter 0.3s",
                    }}
                ></div>
                {questions.map((q, index) => (
                    <div
                    key={index}
                    className={`Section2__inner__game__ans ${
                        q ? "" : "hidden"
                    }`}
                    onClick={() => handleQuestionClick(index)}
                    >
                    {`0${index + 1}`}
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>

        {/* Overlay */}
        {popupVisible && <div className="overlay"></div>}

        {/* Popup câu hỏi */}
        {popupVisible && (
            <div className="popup">
                <div className="popup__content">
                    <h3>
                        Câu {currentQuestion + 1}:{" "}
                        {questionList[currentQuestion].question}
                    </h3>
                    <div className="popup__options">
                    {questionList[currentQuestion].options.map((option, i) => (
                        <button
                        key={i}
                        className="popup__option"
                        onClick={() => handleAnswerClick(option)}
                        >
                        {option}
                        </button>
                    ))}
                    </div>
                </div>
            </div>
        )}

        {/* Overlay */}
        {showCongrats && <div className="overlay"></div>}

        {/* Popup chúc mừng */}
        {showCongrats && (
            <div className="popup">
            <div className="popup__content">
                <h3>Chúc mừng!</h3>
                <p>Bạn đã trả lời đúng tất cả câu hỏi và mở khóa phần thưởng!</p>
                <button onClick={() => setShowCongrats(false)}>Đóng</button>
            </div>
            </div>
        )}
        </>
    );
}

export default Section1p5;
