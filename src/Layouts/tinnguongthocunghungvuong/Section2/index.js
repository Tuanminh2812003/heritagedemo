import React, { useState } from "react";
function Section1p5() {
    const [questions, setQuestions] = useState([true, true, true, true]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showCongrats, setShowCongrats] = useState(false);

    const questionList = [
        {
        question: `UNESCO chính thức công nhận "Tín ngưỡng thờ cúng Hùng Vương" là Di sản văn hóa phi vật thể đại diện của nhân loại vào năm nào?`,
        options: ["A. 2010", "B. 2011", "C. 2012", "D. 2013"],
        correct: "C. 2012",
        },
        {
        question: `"Tín ngưỡng thờ cúng Hùng Vương" có phải là một tôn giáo không?`,
        options: ["A. Đúng, đây là một tôn giáo lớn ở Việt Nam.", "B. Không, đây là một hình thức tín ngưỡng dân gian.", "C. Đúng, nhưng chỉ phổ biến ở một số vùng nhất định.", "D. Không, đây chỉ là một phong tục tập quán."],
        correct: "B. Không, đây là một hình thức tín ngưỡng dân gian.",
        },
        {
        question: "Theo nội dung được cung cấp, trên địa bàn tỉnh Phú Thọ có bao nhiêu di tích thờ Hùng Vương và các nhân vật liên quan?",
        options: ["A. Khoảng 1.417", "B. 326", "C. Ít hơn 100", "D. Nhiều hơn 2.000"],
        correct: "B. 326",
        },
        {
        question: "Tín ngưỡng thờ cúng Hùng Vương thể hiện điều gì trong đời sống tinh thần của người Việt?",
        options: [
            "A. Niềm tin vào sự bảo hộ của thần linh.",
            "B. Sự tôn kính các vị vua đã có công dựng nước.",
            "C. Lòng biết ơn tổ tiên và tinh thần đoàn kết dân tộc.",
            "D. Tất cả các phương án trên.",
        ],
        correct: "D. Tất cả các phương án trên.",
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
                <div className="Section2__inner__title">GAME KHÁM PHÁ DI SẢN</div>
                <div className="Section2__inner__disc">
                    Người chơi trả lời các câu hỏi mà ô chữ đặt ra nhằm tìm ra bức hình ẩn sau các ô chữ. 
                </div>
                <div className="Section2__inner__game">
                <div
                    className="Section2__inner__game__image"
                    style={{
                    backgroundImage: "url('/image/tinnguongthocunghungvuong/5.jpg')",
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
