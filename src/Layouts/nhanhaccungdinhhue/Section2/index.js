import React, { useState } from "react";

function Section1p5() {
    const [questions, setQuestions] = useState([true, true, true, true]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showCongrats, setShowCongrats] = useState(false);

    const questionList = [
        {
        question: `Nhã nhạc cung đình Huế được UNESCO công nhận là di sản văn hóa phi vật thể vào năm nào?`,
        options: ["A. 1993", "B. 2000", "C. 2003", "D. 2010"],
        correct: "C. 2003",
        },
        {
        question: `Dàn Đại nhạc thường được sử dụng trong những dịp nào?`,
        options: ["A. Lễ hội dân gian", "B. Lễ tế quan trọng của triều đình", "C. Các buổi yến tiệc", "D. Các sự kiện ngoài trời"],
        correct: "B. Lễ tế quan trọng của triều đình",
        },
        {
        question: `Nhã nhạc cung đình Huế hiện nay có bao nhiêu hình thức biểu diễn?`,
        options: ["A. 4 hình thức", "B. 5 hình thức", "C. 3 hình thức", "D. 2 hình thức"],
        correct: "C. 3 hình thức",
        },
        {
        question: `Điệu múa nào dưới đây là một trong những điệu múa cung đình nổi bật?`,
        options: [
            "A. Múa Lục Cúng Hoa Đăng",
            "B. Múa Sạp",
            "C. Múa Xòe",
            "D. Múa Nón",
        ],
        correct: "A. Múa Lục Cúng Hoa Đăng",
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
                <div className="Section2__inner__title">Khám phá di sản</div>
                <div className="Section2__inner__disc">
                    Người chơi trả lời các câu hỏi mà ô chữ đặt ra nhằm tìm ra bức hình ẩn sau các ô chữ.
                </div>
                <div className="Section2__inner__game">
                <div
                    className="Section2__inner__game__image"
                    style={{
                    backgroundImage: "url('/image/nhanhaccungdinhhue/6.1.png')",
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
