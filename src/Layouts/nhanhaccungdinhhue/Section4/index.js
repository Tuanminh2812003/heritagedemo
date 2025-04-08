import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/nhanhaccungdinhhue/30.png",
        "/image/nhanhaccungdinhhue/31.png",
        "/image/nhanhaccungdinhhue/5.3.png",
        "/image/nhanhaccungdinhhue/5.4.png",
    ];

    const handleNextClick = () => {
            setCurrentSlide((prev) => {
            const nextSlide = (prev + 1) % slides.length; // Xử lý chỉ số vòng lặp
            console.log("Next Slide Index:", nextSlide, "Next Slide Image:", slides[nextSlide]);
            return nextSlide;
        });
    };
    const handlePrevClick = () => {
        setCurrentSlide((prev) => {
        const prevSlide = (prev - 1) % slides.length;
        if(prevSlide < 0) {
            return slides.length - 1;
        }
        return prevSlide;
    });
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="Section4">
            <div className="Section4__title">
                DI SẢN VỚI NHỮNG GIÁ TRỊ VƯỢT THỜI GIAN
            </div>
            <div className="Section4__slider">
                {slides.map((slide, index) => (
                    <div
                    key={index}
                    className="Section4__slider__image"
                    style={{
                        backgroundImage: `url('${slide}')`,
                        transform: `translateX(-${currentSlide * 100}%)`, // Chỉ dịch chuyển toàn bộ slider
                    }}
                >

                </div>
                ))}
            </div>
            <div className="Section4__pagi">
                {slides.map((_, index) => (
                    <div
                    key={index}
                    className={`Section4__pagi__dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => handleDotClick(index)} // Khi nhấn vào dot, cập nhật slide hiện tại
                    ></div>
                ))}
            </div>
            <div className="Section4__text">
                {slides.map((_, index) =>
                    index === currentSlide ? (
                    <div key={index} className="Section4__text__inner">
                        {index === 0 &&
                        `Nhã nhạc là một phần không thể thiếu trong các nghi lễ cung đình, phản ánh uy quyền của các vị vua và sự trang trọng của các lễ hội. Qua đó, nó góp phần tái hiện lại những thời kỳ lịch sử quan trọng của đất nước, là biểu tượng của sự duy trì và phát huy bản sắc văn hóa trong suốt các triều đại phong kiến.`}
                        {index === 1 &&
                        `Nhã nhạc là sự hòa quyện của âm nhạc, múa cung đình và diễn xướng nghi lễ. Chính sự kết hợp này tạo nên sự độc đáo, quyến rũ và trang nghiêm của Nhã nhạc.`}
                        {index === 2 &&
                        `Nhã nhạc có vai trò vô cùng quan trọng trong các lễ hội tôn vinh vua, tổ tiên, và các lễ thờ cúng khác. Nhã nhạc không chỉ mang tính tôn vinh mà còn giúp gắn kết cộng đồng và nâng cao giá trị tinh thần của người dân góp phần gìn giữ các giá trị âm nhạc dân gian.`}
                        {index === 3 &&
                        `Những bài hát và điệu nhạc trong Nhã nhạc không chỉ thể hiện sự tôn kính mà còn nhắc nhở mọi người về các chuẩn mực xã hội và đạo lý trong cuộc sống, nâng cao tinh thần cộng đồng.`}
                    </div>
                    ) : null
                )}
            </div>
            <div className="Section4__next" onClick={handleNextClick}>
                <MdNavigateNext />
            </div>
            <div className="Section4__prev" onClick={handlePrevClick}>
                <MdNavigateBefore />
            </div>
        </div>
    );
}

export default Section4;
