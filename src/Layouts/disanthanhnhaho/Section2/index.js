import React, { useState } from "react";

function Section1p5() {
    const [questions, setQuestions] = useState([true, true, true, true]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showCongrats, setShowCongrats] = useState(false);

    const questionList = [
        {
        question: "Thành nhà Hồ do ai xây dựng?",
        options: ["A. Trần Nhân Tông", "B. Hồ Quý Ly", "C. Lý Thường Kiệt", "D. Lê Trọng Tấn"],
        correct: "B. Hồ Quý Ly",
        },
        {
        question: "Thành nhà Hồ được UNESCO công nhận là Di sản Văn hóa thế giới vào năm bao nhiêu?",
        options: ["A. 2009", "B. 2010", "C. 2011", "D. 2012"],
        correct: "C. 2011",
        },
        {
        question: "Vì sao lại chọn huyện Vĩnh Lộc, tỉnh Thanh Hóa để xây dựng thành nhà Hồ?",
        options: ["Vì vùng này không chịu ảnh hưởng của thiên tai", "B. Vì vùng này rộng lớn", "C. Vì vùng này giàu tài nguyên", "D. Vì vùng này được cho là vùng đất chiến lược, dễ dàng phòng thủ và kiểm soát"],
        correct: "D. Vì vùng này được cho là vùng đất chiến lược, dễ dàng phòng thủ và kiểm soát",
        },
        {
        question: "Thành nhà Hồ được xây dựng bằng loại đá nào?",
        options: [
            "A. Đá ong",
            "B. Đá vôi",
            "C. Đá trầm tích",
            "D. Đá magma",
        ],
        correct: "A. Đá ong",
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
                <div className="Section2__inner__title">Bí ẩn thành nhà Hồ</div>
                <div className="Section2__inner__disc">
                    Người chơi trả lời các câu hỏi mà ô chữ đặt ra nhằm tìm ra bức hình ẩn sau các ô chữ. 
                </div>
                <div className="Section2__inner__game">
                <div
                    className="Section2__inner__game__image"
                    style={{
                    backgroundImage: "url('/image/disanthanhnhaho/4.jpg')",
                    backgroundSize: "cover",
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
