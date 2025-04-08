import React, { useState } from "react";
import "./Section4.scss";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/QTDTCDH/Section4-1.jpg",
        "/QTDTCDH/Section4-2.jpg",
        "/QTDTCDH/Section4-3.jpg",
        "/QTDTCDH/Section4-4.webp",
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
                Những đặc điểm chung trong lối kiến trúc Đại Nội
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
                        "Bố cục mặt bằng kiến trúc chặc chẽ, đăng đối. Các công trình kiến trúc đối xứng từng cặp qua đường trục chính. Các con số 9 được sử dụng nhiều trong kiến trúc vì nó ứng với mệnh thiên tử."}
                        {index === 1 &&
                        "Công trình thể hiện rõ tư tưởng độc tôn quân quyền."}
                        {index === 2 &&
                        "Đại nội Huế có 5 ngôi miếu thờ lớn thờ tổ tiên, đây là điểm khác biệt so với các triều đại trước trong lịch sử Việt Nam. Cho thấy nhà Nguyễn rất coi trọng việc thờ tổ tiên."}
                        {index === 3 &&
                        "Cung điện Huế có phong cách kiến trúc riêng về mặt mỹ thuật, vật liệu chính là gỗ, các cung điện làm theo lối 'trùng thiềm điệp ốc' (nhà kép). Trang trí nội thất bằng hình ảnh và thơ văn theo lối 'nhất thi nhất họa'."}
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
