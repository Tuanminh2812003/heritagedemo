import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/BTSVM/Section4-1.png",
        "/image/BTSVM/Section4-2.png",
        "/image/BTSVM/Section4-3.png",
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
                        "Mỗi tấm bia còn là một tác phẩm nghệ thuật độc đáo, kết tinh trí tuệ, bàn tay của những nhà văn hóa, thư pháp, nghệ nhân hàng đầu Việt Nam các thời kỳ và là loại hình văn bản đặc biệt của di sản tư liệu, làm phong phú thêm cho thể loại của Ký ức thế giới.  "}
                        {index === 1 &&
                        "Tất cả 82 bia Tiến sĩ ở Văn Miếu - Quốc Tử Giám Hà Nội đều được chế tác theo cùng một phong cách: bia dẹp, trán cong, hình vòm. Các tấm bia được đặt trên lưng rùa, rùa cũng được tạo dáng theo một phong cách chung: to, đậm và chắc khỏe. Trang trí trên bia rất đa dạng, phản ánh sự phát triển hình tượng nghệ thuật theo thời gian, nhờ đó mà hiểu được lịch sử phát triển mỹ thuật của Việt Nam từ thế kỷ XV đến thế kỷ XVIII."}
                        {index === 2 &&
                        "Hình tượng rùa đội bia tượng trưng cho sức chịu đựng, nhẫn nại, thể hiện sự trường cửu nên thường được sử dụng nhiều trong trang trí, chạm khắc đặc biệt là trong các di tích tín ngưỡng, tôn giáo"}
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
