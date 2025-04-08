import React, { useState } from "react";

function Section1p5() {
    const [questions, setQuestions] = useState([true, true, true, true]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showCongrats, setShowCongrats] = useState(false);

    const questionList = [
        {
        question: "Hoàng thành Thăng Long được xây dựng vào năm nào?",
        options: ["A. 1009", "B. 1010", "C. 1805", "D. 2002"],
        correct: "B. 1010",
        },
        {
        question: "Hoàng thành Thăng Long bao gồm bao nhiêu di tích quan trọng?",
        options: ["A. 3 di tích", "B. 5 di tích", "C. 7 di tích", "D. 9 di tích"],
        correct: "C. 7 di tích",
        },
        {
        question: "Khu khảo cổ học 18 Hoàng Diệu có vai trò gì?",
        options: ["A. Là nơi tổ chức các nghi lễ cung đình thời Lý", "B. Là nơi phát hiện nhiều di vật giá trị, giúp nghiên cứu lịch sử và văn hóa Hoàng thành", "C. Là nơi ở của các Hoàng đế triều Nguyễn", "D. Là khu vực dành cho các hoạt động quân sự thời phong kiến"],
        correct: "B. Là nơi phát hiện nhiều di vật giá trị, giúp nghiên cứu lịch sử và văn hóa Hoàng thành",
        },
        {
        question: "Khu Trung tâm Hoàng thành Thăng Long - Hà Nội được UNESCO công nhận là Di sản văn hóa thế giới vào năm nào?",
        options: [
            "A. 2002",
            "B. 2009",
            "C. 2010",
            "D. 2015",
        ],
        correct: "C. 2010",
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
                    backgroundImage: "url('/image/hoangthanhthanglong/5.jpg')",
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
