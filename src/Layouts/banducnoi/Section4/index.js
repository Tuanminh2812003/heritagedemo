import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/banducnoi/4.1.jpg",
        "/image/banducnoi/4.2.jpg",
        "/image/banducnoi/4.3.jpg",
        "/image/banducnoi/4.4.jpg",
        "/image/banducnoi/4.5.jpg",
        "/image/banducnoi/4.6.jpg",
        "/image/banducnoi/4.7.jpg",
        "/image/banducnoi/4.8.jpg",
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
                KHÁM PHÁ HÌNH ẢNH ĐƯỢC ĐÚC TRÊN CỬU ĐỈNH
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
                        `Ngự Bình Sơn khắc trên Nhân đỉnh - núi Ngự Bình là ngọn núi phía trước Kinh thành Huế, được coi là "tiền án" của Kinh thành.`}
                        {index === 1 &&
                        `Hương Giang khắc trên Nhân đỉnh - sông Hương, dòng sông lớn ở Thừa Thiên Huế, chảy qua trước Kinh thành Huế và đổ ra biển ở cửa Thuận An.`}
                        {index === 2 &&
                        `Hồng Sơn khắc trên Anh đỉnh - núi Chim Hồng còn gọi là Hồng Lĩnh là dãy núi lớn ở Hà Tĩnh.`}
                        {index === 3 &&
                        `Bạch Đằng Giang khắc trên Nghị đỉnh - sông Bạch Đằng là con sông lớn ở đông bắc Tổ quốc, chảy qua các tỉnh thành Quảng Ninh, Hải Phòng. Sông Bạch Đằng ghi dấu lịch sử với những trận thuỷ chiến chống quân xâm lược.`}
                        {index === 4 &&
                        `Tản Viên Sơn khắc trên Thuần đỉnh - núi Tản Viên, ngọn núi thuộc tỉnh Hà Tây cũ, nay thuộc Ba Vì - Hà Nội. Tản Viên là ngọn núi gắn liền với truyền thuyết Sơn Tinh trị thuỷ.`}
                        {index === 5 &&
                        `Hoành Sơn khắc trên Huyền đỉnh - núi Hoành Sơn hay Đèo Ngang, dãy núi ranh giới giữa Hà Tĩnh và Quảng Bình ở Bắc Trung Bộ; xưa kia là ranh giới Đại Việt - Chăm Pa. Trên núi có một trấn ải là Hoành Sơn Quan đến nay vẫn tồn tại.`}
                        {index === 6 &&
                        `Đà Nẵng Hải Khẩu khắc trên Dụ đỉnh - cửa biển Đà Nẵng (còn gọi là cửa Hàn, vịnh Hàn), nơi sông Cẩm Lệ chảy về vũng Hàn rồi đổ ra biển.`}
                        {index === 7 &&
                        `Đại Lĩnh khắc trên Tuyên đỉnh - núi Đại Lĩnh (Đại Lãnh), dãy núi lớn là ranh giới giữa tỉnh Phú Yên và Khánh Hoà.`}
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
