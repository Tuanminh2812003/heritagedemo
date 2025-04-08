import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/hatxoan/5.1.png",
        "/image/hatxoan/5.2.png",
        "/image/hatxoan/5.3.png",
        "/image/hatxoan/5.4.png",
        "/image/hatxoan/5.5.png",
        "/image/hatxoan/5.6.png",
        "/image/hatxoan/5.7.png",
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
            <div className="Section4__title" style={{color:"#FFFFFF"}}>
                HÁT XOAN TRONG NHỊP SỐNG ĐƯƠNG ĐẠI
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
                    <div key={index} className="Section4__text__inner" style={{color:"#FFFFFF"}}>
                        {index === 0 &&
                        `Du khách quốc tế hòa mình trong làn điệu Xoan “Mó cá” độc đáo`}
                        {index === 1 &&
                        `Nghệ nhân Nguyễn Thị Lịch và đội Xoan trẻ biểu diễn Hát Xoan tại đình Hùng Lô`}
                        {index === 2 &&
                        `Đội Xoan trẻ biểu diễn Hát Xoan đã thu hút đông đảo người dân và du khách tham gia.`}
                        {index === 3 &&
                        `Những năm gần đây, Hát Xoan thu hút sự chú ý của cả cộng đồng quốc tế`}
                        {index === 4 &&
                        `Du khách tham gia trải nghiệm Hát Xoan cùng các nghệ nhân phường Xoan An Thái`}
                        {index === 5 &&
                        `Hát Xoan được trình diễn trong chương trình “Tết Việt-Tết phố” tại Hà Nội.`}
                        {index === 6 &&
                        `Hướng dẫn viên của Bảo tàng Hùng Vương giới thiệu về lịch sử và trang phục Hát Xoan cho học sinh.`}
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
