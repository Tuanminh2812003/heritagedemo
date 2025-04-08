import React, { useState } from "react";
import "./Section2.scss";

function Section1p5() {
    const [questions, setQuestions] = useState([true, true, true, true]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showCongrats, setShowCongrats] = useState(false);

    const questionList = [
        {
        question: "Ai là người đã cho xây dựng Kinh thành Huế?",
        options: ["A. Vua Tự Đức", "B. Vua Minh Mạng", "C. Vua Gia Long", "D. Vua Khải Định"],
        correct: "C. Vua Gia Long",
        },
        {
        question: "Công trình nào là công trình về lăng tẩm vua chúa triều Nguyễn trong hệ thống Quần thể di tích Cố đô Huế?",
        options: ["A. Điện Hòn Chén ", "B. Khiêm Lăng ", "C. Điện Thái Hòa", "D. Hổ Quyền"],
        correct: "B. Khiêm Lăng ",
        },
        {
        question: "Trong quá trình xây dựng lăng vua Tự Đức có một cuộc khởi nghĩa nổ ra vì sự chèn ép và khắc nghiệt trong quá trình xây dựng công trình, cuộc khởi nghĩa đó có tên là? ",
        options: ["A. Loạn Chày Vôi", "B. Loạn Vạn Niên ", "C. Loạn Kiêm Cung", "D. Loạn An Nhiên"],
        correct: "A. Loạn Chày Vôi",
        },
        {
        question: "Dưới thời vị vua nào thì Đại nội Huế được xây dựng hoàn thành? ",
        options: [
            "A. Vua Gia Long ",
            "B. Vua Tự Đức",
            "C. Vua Minh Mạng ",
            "D. Vua Đồng Khánh",
        ],
        correct: "C. Vua Minh Mạng ",
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
                    // backgroundImage: "url('/image/QTDTCDH/Section2.webp')",
                    // backgroundSize: "cover",
                    // backgroundPosition: "center",
                    filter: questions.some((q) => q) ? "blur(10px)" : "none",
                    transition: "filter 0.3s",
                    }}
                ><iframe width="100%" height="100%" src="https://vr3d.vn/trienlam/tuong-tac/ngua-lang-khai-dinh/embed.html" frameborder="0" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>
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
