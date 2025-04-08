import React, { useState } from "react";

function Section1p5() {
    const [questions, setQuestions] = useState([true, true, true, true]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showCongrats, setShowCongrats] = useState(false);

    const questionList = [
        {
        question: `Châu bản triều Nguyễn được UNESCO công nhận là Di sản tư liệu thế giới vào năm nào?`,
        options: ["A. 2014", "B. 2017", "C. 2014 và 2017", "D. 2020"],
        correct: "B. 2017",
        },
        {
        question: `Dưới thời vua Gia Long, Châu bản được quản lý bởi cơ quan nào?`,
        options: ["A. Nội các", "B. Văn thư phòng", "C. Thị thư viện, Thị hàn viện, Nội hàn viện và Thượng bảo ty", "D. Ngự tiền văn phòng"],
        correct: "C. Thị thư viện, Thị hàn viện, Nội hàn viện và Thượng bảo ty",
        },
        {
        question: `Năm 1942, Châu bản được chuyển về lưu trữ tại đâu?`,
        options: ["A. Viện Đại học Huế", "B. Viện Văn hóa Huế", "C. Kho Lưu trữ trung ương II", "D. Trung tâm Lưu trữ quốc gia I"],
        correct: "B. Viện Văn hóa Huế",
        },
        {
        question: `Quy trình sáng tác Châu bản triều Nguyễn có đặc điểm gì?`,
        options: [
            "A. Soạn thảo bằng máy tính và in ấn hàng loạt.",
            "B. Soạn thảo và viết tay, được Hoàng đế phê duyệt bằng mực son.",
            "C. Chỉ bao gồm các văn bản do Hoàng đế ban hành.",
            "D. Không có quy trình cụ thể, tùy thuộc vào từng thời kỳ.",
        ],
        correct: "B. Soạn thảo và viết tay, được Hoàng đế phê duyệt bằng mực son.",
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
                    backgroundImage: "url('/image/chaubantrieunguyen/4.jpg')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
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
