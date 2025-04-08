import React, { useState } from "react";

function Section1p5() {
    const [questions, setQuestions] = useState([true, true, true, true]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showCongrats, setShowCongrats] = useState(false);

    const questionList = [
        {
        question: "Hội An được UNESCO công nhận là Di sản Văn hóa Thế giới vào năm nào?",
        options: ["A. 1995", "B. 1997", "C. 1999", "D. 2001"],
        correct: "C. 1999",
        },
        {
        question: "Đô thị cổ Hội An từng là một thương cảng sầm uất từ thế kỷ nào?",
        options: ["A. Thế kỷ 15 - 16", "B. Thế kỷ 16 - 17", "C. Thế kỷ 17 - 18", "D. Thế kỷ 18 - 19"],
        correct: "B. Thế kỷ 16 - 17",
        },
        {
        question: "Công trình kiến trúc nổi tiếng nào là biểu tượng của đô thị cổ Hội An?",
        options: ["A. Chùa Cầu", "B. Nhà cổ Phùng Hưng", "C. Hội quán Phúc Kiến", "D. Nhà cổ Tấn Ký"],
        correct: "A. Chùa Cầu",
        },
        {
        question: "Đô thị cổ Hội An chịu ảnh hưởng kiến trúc của nền văn hóa nào?",
        options: [
            "A. Chỉ Việt Nam",
            "B. Việt Nam và Trung Quốc",
            "C. Việt Nam, Trung Quốc và Nhật Bản",
            "D. Việt Nam, Trung Quốc, Nhật Bản và phương Tây",
        ],
        correct: "D. Việt Nam, Trung Quốc, Nhật Bản và phương Tây",
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
                    backgroundImage: "url('/image/dothicohoian/6.png')",
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
