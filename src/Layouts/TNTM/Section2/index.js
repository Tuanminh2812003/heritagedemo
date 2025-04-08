import React, { useState } from "react";
function Section1p5() {
    const [questions, setQuestions] = useState([true, true, true, true]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showCongrats, setShowCongrats] = useState(false);

    const questionList = [
        {
        question: "Tín ngưỡng thờ Mẫu Tam phủ xuất phát từ nhu cầu nào của người dân Việt Nam?",
        options: ["A. Tôn vinh anh hùng dân tộc", "B. Thể hiện lòng trung thành với vua chúa", "C. Thờ cúng tổ tiên", "D. Cầu phúc, cầu lộc và bình an"],
        correct: "D. Cầu phúc, cầu lộc và bình an",
        },
        {
        question: "Ai được xem là nhân vật biểu tượng trong tín ngưỡng thờ Mẫu Tam phủ?",
        options: ["A. Bà Trưng, Bà Triệu", "B. Thánh Mẫu Liễu Hạnh", "C. Thiền sư Khâu Đà La", "D. Vua Hùng"],
        correct: "B. Thánh Mẫu Liễu Hạnh",
        },
        {
        question: "Phủ Dầy, trung tâm thờ Mẫu nổi tiếng nhất, nằm ở tỉnh nào?",
        options: ["A. Nam Định", "B. Hà Nội ", "C. Thanh Hóa", "D. Lạng Sơn"],
        correct: "A. Nam Định",
        },
        {
        question: "Trong tín ngưỡng thờ Mẫu, “Tam phủ” đại diện cho những cõi nào?",
        options: [
            "A. Thiên, Địa, Nhân",
            "B. Phật, Thánh, Tiên",
            "C. Trời, Đất, Sông nước",
            "D. Đông, Tây, Nam",
        ],
        correct: "C. Trời, Đất, Sông nước",
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
                    backgroundImage: "url('/image/TNTM/Sectiongame.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: questions.some((q) => q) ? "blur(10px)" : "none",
                    transition: "filter 0.3s",
                    }}
                ><iframe width="100%" height="100%" src="https://vr3d.vn/trienlam/tuong-tac/tuong-ngoc-hoang-chua-sung-an/embed.html" frameborder="0" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>
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
