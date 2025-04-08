import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/TNTM/Section4-1.jpg",
        "/image/TNTM/Section4-2.jpg",
        "/image/TNTM/Section4-3.png",
        "/image/TNTM/Section4-4.jpg",
        "/image/TNTM/Section4-5.jpg",
        "/image/TNTM/Section4-6.jpg",

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
            <div className="container">
                <div className="Section4__inner">
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
                        "Cuốn sách Tín ngưỡng thờ mẫu trong sinh hoạt tinh thần của người Việt Nam, tác giá Vũ Hồng Vận và Phạm Duy Hoàng cho thấy riêng đối với lễ hội của Mẩu, có một điểm khác biệt về mặt thời gian diễn ra hàng tháng, hàng tháng, hàng năm hàm chứa nét tâm linh và xã hội. Tín ngưỡng thờ Mẫu Tam phủ được thể hiện qua nhiều hoạt động như lễ hội, lên đồng, hát văn, cầu cúng, đi lễ, v.v., trong đó các yếu tố văn hóa dân gian như trang phục, âm nhạc, và múa được sử dụng và hòa quyện một cách tinh tế, độc đáo.  "}
                        {index === 1 &&
                        "Cuốn sách Tín ngưỡng thờ mẫu trong sinh hoạt tinh thần của người Việt Nam, tác giá Vũ Hồng Vận và Phạm Duy Hoàng cho thấy riêng đối với lễ hội của Mẩu, có một điểm khác biệt về mặt thời gian diễn ra hàng tháng, hàng tháng, hàng năm hàm chứa nét tâm linh và xã hội. Tín ngưỡng thờ Mẫu Tam phủ được thể hiện qua nhiều hoạt động như lễ hội, lên đồng, hát văn, cầu cúng, đi lễ, v.v., trong đó các yếu tố văn hóa dân gian như trang phục, âm nhạc, và múa được sử dụng và hòa quyện một cách tinh tế, độc đáo.  "}
                        {index === 2 &&
                        "Cuốn sách Tín ngưỡng thờ mẫu trong sinh hoạt tinh thần của người Việt Nam, tác giá Vũ Hồng Vận và Phạm Duy Hoàng cho thấy riêng đối với lễ hội của Mẩu, có một điểm khác biệt về mặt thời gian diễn ra hàng tháng, hàng tháng, hàng năm hàm chứa nét tâm linh và xã hội. Tín ngưỡng thờ Mẫu Tam phủ được thể hiện qua nhiều hoạt động như lễ hội, lên đồng, hát văn, cầu cúng, đi lễ, v.v., trong đó các yếu tố văn hóa dân gian như trang phục, âm nhạc, và múa được sử dụng và hòa quyện một cách tinh tế, độc đáo.  "}
                        {index === 3 &&
                        "Tín ngưỡng thờ Mẫu Tam phủ được tôn vinh và thực hành tại nhiều địa phương trên cả nước, trong đó tỉnh Nam Định nổi bật với các trung tâm thờ cúng tiêu biểu như Phủ Dầy (huyện Vụ Bản) và Phủ Nấp (huyện Ý Yên). Ngoài ra, Thánh Mẫu Liễu Hạnh cũng được phụng thờ tại nhiều địa điểm linh thiêng khác gắn liền với những truyền thuyết về Bà, chẳng hạn như Phủ Tây Hồ (Hà Nội), đền Sòng (Thanh Hóa), đền Bắc Lệ (Lạng Sơn), v.v. Tín ngưỡng này không chỉ phổ biến ở các vùng miền như Huế, Thành phố Hồ Chí Minh mà còn lan tỏa đến cộng đồng người Việt ở nước ngoài, điển hình tại Mỹ, Pháp, Ba Lan... Việc tổ chức các lễ hội cũng thu hút nhiều khách du lịch đến tham quan và tìm hiểu thêm về di sản tín ngưỡng thờ mẫu."}
                        {index === 4 &&
                        "Tín ngưỡng thờ Mẫu Tam phủ được tôn vinh và thực hành tại nhiều địa phương trên cả nước, trong đó tỉnh Nam Định nổi bật với các trung tâm thờ cúng tiêu biểu như Phủ Dầy (huyện Vụ Bản) và Phủ Nấp (huyện Ý Yên). Ngoài ra, Thánh Mẫu Liễu Hạnh cũng được phụng thờ tại nhiều địa điểm linh thiêng khác gắn liền với những truyền thuyết về Bà, chẳng hạn như Phủ Tây Hồ (Hà Nội), đền Sòng (Thanh Hóa), đền Bắc Lệ (Lạng Sơn), v.v. Tín ngưỡng này không chỉ phổ biến ở các vùng miền như Huế, Thành phố Hồ Chí Minh mà còn lan tỏa đến cộng đồng người Việt ở nước ngoài, điển hình tại Mỹ, Pháp, Ba Lan... Việc tổ chức các lễ hội cũng thu hút nhiều khách du lịch đến tham quan và tìm hiểu thêm về di sản tín ngưỡng thờ mẫu."}
                        {index === 5 &&
                        "Tín ngưỡng thờ Mẫu Tam phủ được tôn vinh và thực hành tại nhiều địa phương trên cả nước, trong đó tỉnh Nam Định nổi bật với các trung tâm thờ cúng tiêu biểu như Phủ Dầy (huyện Vụ Bản) và Phủ Nấp (huyện Ý Yên). Ngoài ra, Thánh Mẫu Liễu Hạnh cũng được phụng thờ tại nhiều địa điểm linh thiêng khác gắn liền với những truyền thuyết về Bà, chẳng hạn như Phủ Tây Hồ (Hà Nội), đền Sòng (Thanh Hóa), đền Bắc Lệ (Lạng Sơn), v.v. Tín ngưỡng này không chỉ phổ biến ở các vùng miền như Huế, Thành phố Hồ Chí Minh mà còn lan tỏa đến cộng đồng người Việt ở nước ngoài, điển hình tại Mỹ, Pháp, Ba Lan... Việc tổ chức các lễ hội cũng thu hút nhiều khách du lịch đến tham quan và tìm hiểu thêm về di sản tín ngưỡng thờ mẫu."}
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
            </div>
            
        </div>
    );
}

export default Section4;
