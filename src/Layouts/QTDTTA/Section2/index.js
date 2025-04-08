import React, { useState } from "react";
function Section1p5() {
    const [questions, setQuestions] = useState([true, true, true, true]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showCongrats, setShowCongrats] = useState(false);

    const questionList = [
        {
        question: "Quần thể danh thắng Tràng An được UNESCO công nhận là Di sản thiên nhiên thế giới vào năm nào?",
        options: ["A. 2010", "B. 2014", "C. 2016", "D. 2018"],
        correct: "B. 2014",
        },
        {
        question: "Tràng An nằm ở tỉnh nào của Việt Nam?",
        options: ["A. Ninh Bình", "B. Hà Nam", "C. Quảng Ninh", "D. Thanh Hóa"],
        correct: "A. Ninh Bình",
        },
        {
        question: "Đâu là một địa điểm nằm trong Tràng An?",
        options: ["A. Chùa Linh Ứng", "B. Chùa Hương", "C. Chùa Bích Động", "D. Chùa Dâu"],
        correct: "C. Chùa Bích Động",
        },
        {
        question: "Tràng An thuộc khu vực nào của Việt Nam?",
        options: [
            "A. Tây Nguyên",
            "B. Trung Bộ",
            "C. Nam Bộ",
            "D. Bắc Bộ",
        ],
        correct: "D. Bắc Bộ",
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
        <div className="Section2">
            <div className="container">
            <div className="Section2__inner">
                <div className="Section2__inner__title">GAME KHÁM PHÁ DI SẢN – HÒA NHẬP VÀO THIÊN NHIÊN</div>
                <div className="Section2__inner__disc">
                    Người chơi trả lời các câu hỏi mà ô chữ đặt ra nhằm tìm ra bức hình ẩn sau các ô chữ. 
                </div>
                <div className="Section2__inner__game">
                <div
                    className="Section2__inner__game__image"
                    style={{
                    // backgroundImage: "url('/image/QTDTTA/SectionMain1.jpg')",
                    // backgroundSize: "cover",
                    // backgroundPosition: "center",
                    filter: questions.some((q) => q) ? "blur(10px)" : "none",
                    transition: "filter 0.3s",
                    }}
                ><iframe width={"100%"} height={"100%"} src="https://360.holomia.com/tour/29L4EHYO3VIIvad1M?startscene=0"/></div>
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
