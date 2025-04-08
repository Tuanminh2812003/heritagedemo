import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/hoanghoasutrinhdo/4.1.jpg",
        "/image/hoanghoasutrinhdo/4.2.jpg",
        "/image/hoanghoasutrinhdo/4.3.jpg",
        "/image/hoanghoasutrinhdo/4.4.jpg",
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
                DẤU ẤN HOÀNG HOA SỨ TRÌNH ĐỒ
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
                        `"Hoàng Hoa sứ trình đồ" là cuốn sách miêu tả về một trong những hoạt động ngoại giao của Việt Nam và Trung Hoa trong thế kỷ XVIII.”`}
                        {index === 1 &&
                        `"Hoàng hoa sứ trình đồ" được con cháu dòng họ Nguyễn Huy ở Hà Tĩnh lưu giữ lại.”`}
                        {index === 2 &&
                        `“Những hình ảnh trong cuốn sách quý "Hoàng hoa sứ trình đồ”.”`}
                        {index === 3 &&
                        `Ngày 30/5/2018, tác phẩm được UNESCO công nhận là Di sản tư liệu Ký ức thế giới, khu vực Châu Á – Thái Bình Dương.`}
                    </div>
                    ) : null
                )}
            </div>
            <div className="Section4__text">
                Cuốn sách không chỉ là một di sản văn hóa và lịch sử vô giá, mà còn là chứng tích sống động về hành trình ngoại giao quan trọng của sứ thần Hoàng Hoa và quá trình giao thiệp của triều đại Lê Trung Hưng với các quốc gia láng giềng. 
            </div>
            <div className="Section4__text">
                Tác phẩm này khắc họa sự phát triển của ngoại giao, thương mại và khoa học địa lý dưới thời phong kiến Việt Nam, đồng thời cung cấp nguồn tư liệu quý giá phục vụ cho nghiên cứu lịch sử và văn hóa dân tộc.
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
