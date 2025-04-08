import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/TNTM/Section1-1.jpg",
        "/TNTM/Section1-2.jpg",
        "/TNTM/Section1-3.jpg",
    ];

    const handleNextClick = () => {
            setCurrentSlide((prev) => {
            const nextSlide = (prev + 1) % slides.length; // Xử lý chỉ số vòng lặp
            console.log("Next Slide Index:", nextSlide, "Next Slide Image:", slides[nextSlide]);
            return nextSlide;
        });
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="Section4">
            {/* <div className="Section4__title">
                Những đặc điểm chung trong lối kiến trúc Đại Nội
            </div> */}
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
                        "Truyền thuyết Âu Cơ kể rằng, Lạc Long Quân – con trai của Long Vương, và Âu Cơ – một tiên nữ từ núi cao, gặp nhau, yêu thương và kết duyên. Âu Cơ sinh ra một bọc trăm trứng, nở thành một trăm người con trai."}
                        {index === 1 &&
                        "Sau một thời gian chung sống, Lạc Long Quân và Âu Cơ nhận ra sự khác biệt giữa mình: Lạc Long Quân thuộc thủy tộc, quen sống dưới nước, còn Âu Cơ là tiên nữ gắn bó với núi rừng. "}
                        {index === 2 &&
                        'Vì vậy, họ chia tay trong hòa thuận. Lạc Long Quân dẫn 50 người con xuống biển, còn Âu Cơ đưa 50 người lên núi. Những người con này trở thành tổ tiên của người Việt, với người con trưởng được tôn làm vua Hùng, lập nên nhà nước Văn Lang. Truyền thuyết Âu Cơ tượng trưng cho nguồn gốc "con Rồng, cháu Tiên" và tinh thần đoàn kết dân tộc'}
                    </div>
                    ) : null
                )}
            </div>
            <div className="Section4__next" onClick={handleNextClick}>
                <MdNavigateNext />
            </div>
        </div>
    );
}

export default Section4;
