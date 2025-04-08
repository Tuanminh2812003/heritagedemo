import React, { useState } from "react";

function Section1p5() {
    const [questions, setQuestions] = useState([true, true, true, true]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showCongrats, setShowCongrats] = useState(false);

    const questionList = [
        {
        question: `Không gian văn hóa Cồng chiêng trải rộng trên địa bàn`,
        options: ["A. 4", "B. 5", "C. 6", "D. 7"],
        correct: "B. 5",
        },
        {
        question: `Các tỉnh nào thuộc Không gian văn hóa Cồng chiêng?`,
        options: ["A. Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông, Lâm Đồng", "B. Kon Tum, Gia Lai, Đắk Lắk, Lâm Đồng, Quảng Nam", "C. Gia Lai, Đắk Lắk, Đắk Nông, Lâm Đồng, Lào Cai", "D. Đắk Lắk, Đắk Nông, Lâm Đồng, Lào Cai, Lâm Đồng"],
        correct: "A. Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông, Lâm Đồng",
        },
        {
        question: `Các dân tộc nào là chủ nhân của Không gian văn hóa Cồng chiêng?`,
        options: [
            "A. Ê Đê, Gia Rai, Ba Na, Mạ",
            "B. Mường, Thái, Dao, H'Mông",
            "C. Chăm, Khơ Me, Cao Lan, Hà Nhì",
            "D. Múa Tày, Giáy, Cống, Cơ Tu",
        ],
        correct: "A. Ê Đê, Gia Rai, Ba Na, Mạ",
        },
        {
        question: `Cồng chiêng tồn tại cùng với nền`,
        options: ["A. Văn hóa vua Hùng", "B. Văn hóa chúa Trịnh", "C. Văn hóa nhà Lê", "D. Văn hóa Đông Sơn"],
        correct: "D. Văn hóa Đông Sơn",
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
                    backgroundImage: "url('/image/khonggianvanhoacongchieng/5.png')",
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
