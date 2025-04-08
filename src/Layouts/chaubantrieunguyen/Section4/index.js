import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/chaubantrieunguyen/1.1.jpg",
        "/image/chaubantrieunguyen/1.2.jpg",
        "/image/chaubantrieunguyen/1.3.jpg",
        "/image/chaubantrieunguyen/1.5.jpg",
        "/image/chaubantrieunguyen/1.6.jpg",
        "/image/chaubantrieunguyen/1.7.jpg",
        "/image/chaubantrieunguyen/1.8.jpg",
        "/image/chaubantrieunguyen/114.jpg",
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
        const prevSlide = (prev - 1) % slides.length; // Xử lý chỉ số vòng lặp
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
                CHÂU BẢN TRIỀU NGUYỄN
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
                        `Đoàn cán bộ làm việc tại Trung tâm tu bổ và phục chế Tokyo `}
                        {index === 1 &&
                        `Chuyên gia Kojima Satochi và Yasuda Ishimaru Tomoko và cán bộ Trung tâm Lưu trữ quốc gia I đang cùng trình diễn kỹ thuật bóc tách Châu bản triều Nguyễn bị bết dính đóng cục năm 2017`}
                        {index === 2 &&
                        `Một tập Châu bản triều Nguyễn bị bết dính đóng cục`}
                        {index === 3 &&
                        `Một tờ Châu bản triều Nguyễn bị bết dính đóng cục sau khi được bóc tách và tu bổ bồi nền `}
                        {index === 4 &&
                        `Châu bản triều Nguyễn được bảo quản trong kho của Trung tâm Lưu trữ quốc gia I tại địa chỉ 31B Tràng Thi, Hoàn Kiếm, Hà Nội từ 1992 – 1997 (Giai đoạn kho bảo quản tài liệu thông gió tự nhiên) `}
                        {index === 5 &&
                        `Châu bản triều Nguyễn được bảo quản trong kho của Trung tâm Lưu trừ quốc gia I giai đoạn 1997  - 2009 (Giai đoạn kho bảo quản tài liệu sử dụng điều hòa cục bộ) `}
                        {index === 6 &&
                        `Châu bản triều Nguyễn được chuẩn bị trước khi di dời sang địa chỉ mới số 5 Vũ Phạm Hàm, Cầu Giấy, Hà Nội `}
                        {index === 7 &&
                        `Châu bản triều Nguyễn sau khi được bóc tách và tu bổ bồi nền được bảo quản trong sơ mi có chất liệu phi a xít`}
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
