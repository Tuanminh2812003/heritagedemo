import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/thanhdiamyson/4.1.png",
        "/image/thanhdiamyson/4.2.png",
        "/image/thanhdiamyson/0.1.webp",
        "/image/thanhdiamyson/4.4.png",
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
                DẤU ẤN MỸ SƠN
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
                        `Thánh địa Mỹ Sơn không chỉ là nơi thờ phụng mà còn là trung tâm thực hiện các lễ tế thần linh, phản ánh sâu sắc tín ngưỡng và văn hóa của người Chăm qua những vũ điệu Chăm nhẹ nhàng, uyển chuyển. Văn hóa của người Chăm được tái hiện lại trong chương trình“Đêm Mỹ Sơn huyền thoại’’ tại Thánh địa Mỹ Sơn`}
                        {index === 1 &&
                        `Múa Apsara là một loại hình múa cổ truyền của người Chăm Pa, thường được biểu diễn tại Thánh Địa Mỹ Sơn trong các dịp lễ hội. Điệu múa này tái hiện hình ảnh của những nàng tiên Apsara trong thần thoại Hindu giáo, thể hiện sự tôn vinh dành cho thần linh.`}
                        {index === 2 &&
                        `Vũ nữ Chăm thường đội trên đầu cây nến, nước, hoa trái, trầu cau… để dâng mừng. Vật để đội là chiếc thor hala 3 tầng, gọi là cổ bồng trầu, vì vật dâng lễ chủ yếu bằng lá trầu được tạo hình cân đối như một tác phẩm nghệ thuật. Đây chính là biểu tượng của nữ thần Po Bar Gina của người Chăm. `}
                        {index === 3 &&
                        `Thánh địa Mỹ Sơn không chỉ là nơi thờ phụng mà còn là trung tâm thực hiện các lễ tế thần linh, phản ánh sâu sắc tín ngưỡng và văn hóa của người Chăm qua những vũ điệu Chăm nhẹ nhàng, uyển chuyển. Văn hóa của người Chăm được tái hiện lại trong chương trình“Đêm Mỹ Sơn huyền thoại’’ tại Thánh địa Mỹ Sơn`}
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
