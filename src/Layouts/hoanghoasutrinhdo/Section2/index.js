import React, { useState } from "react";

function Section1p5() {
    const [questions, setQuestions] = useState([true, true, true, true]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showCongrats, setShowCongrats] = useState(false);

    const questionList = [
        {
        question: `"Hoàng hoa sứ trình đồ" là tư liệu lịch sử của dòng họ nào?`,
        options: ["A. Dòng họ Nguyễn Trãi", "B. Dòng họ Nguyễn Huy", "C. Dòng họ Trần Lê", "D. Dòng họ Phan Huy"],
        correct: "B. Dòng họ Nguyễn Huy",
        },
        {
        question: `"Hoàng hoa sứ trình đồ" chủ yếu ghi chép về điều gì?`,
        options: ["A. Hành trình đi sứ và giao lưu ngoại giao Việt - Trung", "B. Các nghi lễ cung đình thời Lê Trung Hưng", "C. Các loại hình nghệ thuật cổ truyền Việt Nam", "D. Đời sống sinh hoạt của người dân làng Trường Lưu"],
        correct: "A. Hành trình đi sứ và giao lưu ngoại giao Việt - Trung",
        },
        {
        question: `"Hoàng hoa sứ trình đồ" được UNESCO công nhận là Di sản tư liệu thuộc Chương trình Ký ức thế giới vào năm nào?`,
        options: ["A. 2000", "B. 2010", "C. 2018", "D. 2022"],
        correct: "C. 2018",
        },
        {
        question: `"Hoàng hoa sứ trình đồ" được vẽ trên chất liệu gì?`,
        options: [
            "A. Lụa",
            "B. Thẻ tre",
            "C. Giấy vàng mã cổ",
            "D. Giấy dó",
        ],
        correct: "D. Giấy dó",
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
                <div className="Section2__inner__title">Bí ẩn kinh đô Huế</div>
                <div className="Section2__inner__disc">
                    Người chơi trả lời các câu hỏi mà ô chữ đặt ra nhằm tìm ra bức hình ẩn sau các ô chữ. 
                </div>
                <div className="Section2__inner__game">
                <div
                    className="Section2__inner__game__image"
                    style={{
                    backgroundImage: "url('/image/hoanghoasutrinhdo/5.1.png')",
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
