import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/dothicohoian/4.1.png",
        "/image/dothicohoian/4.2.png",
        "/image/dothicohoian/4.3.png",
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
                KHÔNG GIAN DI SẢN
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
                        `Những công trình kiến trúc, tôn giáo, tín ngưỡng và giá trị văn hóa của phố cổ Hội An là vật chứng sống động nhất cho quá trình hình thành, phát triển và cả sự suy tàn của đô thị xưa. Các hội quán, đền miếu là công trình tiêu biểu cho dấu tích của người Hoa. Nằm bên cạnh đó là những mái nhà ghi lại nét truyền thống của người Việt và những ngôi nhà mang đậm phong cách cổ kính của Pháp, Nhật`}
                        {index === 1 &&
                        `Kiến trúc của những công trình Hội An thể hiện sự pha trộn đa dạng, đầy nghệ thuật và cổ kính bởi những dãy nhà san sát mang những nét đặc trưng kiến trúc của các nền văn hóa khác nhau.`}
                        {index === 2 &&
                        `Điểm độc đáo của đô thị cổ Hội An là những công trình kiến trúc và giá trị văn hóa của phố cổ Hội An được hội tụ từ nhiều nền văn hóa khác nhau. Chính điều này đã tạo nên cho chúng ta một miền đất hội tụ và giao thoa văn hóa đa dạng.`}
                        {index === 3 &&
                        `Ngày 30/5/2018, tác phẩm được UNESCO công nhận là Di sản tư liệu Ký ức thế giới, khu vực Châu Á – Thái Bình Dương.`}
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
