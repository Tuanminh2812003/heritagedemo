import React, { useState } from "react";

function Section1p5() {
    const [questions, setQuestions] = useState([true, true, true, true]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showCongrats, setShowCongrats] = useState(false);

    const questionList = [
        {
        question: `"Vịnh Hạ Long thuộc tỉnh nào của Việt Nam?`,
        options: ["A. Quảng Bình", "B. Quảng Trị", "C. Quảng Ninh", "D. Khánh Hòa"],
        correct: "C. Quảng Ninh",
        },
        {
        question: `"Vịnh Hạ Long có bao nhiêu hòn đảo?`,
        options: ["A. 1969", "B. 1970", "C. 1980", "D. 1950"],
        correct: "A. 1969",
        },
        {
        question: `Vịnh Hạ Long được UNESCO công nhận là Di sản Thiên nhiên Thế giới vào năm nào?`,
        options: [
            "A. 1990",
            "B. 1992",
            "C. 1994",
            "D. 1996",
        ],
        correct: "C. 1994",
        },
        {
            question: `Tên gọi "Hạ Long" có liên quan đến truyền thuyết nào?`,
            options: ["A. Truyền thuyết về Lạc Long Quân và Âu Cơ", "B. Truyền thuyết về Thánh Gióng", "C. Truyền thuyết về Rồng mẹ và đàn Rồng con", "D. Truyền thuyết về Sơn Tinh Thủy Tinh"],
            correct: "C. Truyền thuyết về Rồng mẹ và đàn Rồng con",
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
                <div className="Section2__inner__title">GAME KHÁM PHÁ DI SẢN – HOÀ MÌNH VÀO THIÊN NHIÊN</div>
                <div className="Section2__inner__disc">
                    Người chơi trả lời các câu hỏi mà ô chữ đặt ra nhằm tìm ra bức hình ẩn sau các ô chữ. 
                </div>
                <div className="Section2__inner__game">
                <div
                    className="Section2__inner__game__image"
                    style={{
                    backgroundImage: "url('/image/vinhhalong/Ảnh 5.1.jpg')",
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
