import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function Section4() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/image/vuonquocgia/6.1.png",
        "/image/vuonquocgia/6.2.png",
        "/image/vuonquocgia/6.3.png",
        "/image/vuonquocgia/6.4.png",
        "/image/vuonquocgia/6.5.png",
        "/image/vuonquocgia/6.6.png",
        "/image/vuonquocgia/6.7.png",
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
                KHÔNG GIAN KINH TẾ - DU LỊCH 
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
                        `Vườn Quốc gia Phong Nha - Kẻ Bàng được mệnh danh là “Vương quốc hang động”, nơi tiềm ẩn nhiều điều kỳ lạ hấp dẫn, là thiên đường cho các nhà khoa học, các nhà thám hiểm và khách du lịch. Cho đến nay, đã có hơn 170 hang động với tổng chiều dài hàng trăm km. Cùng với hệ thống hang động kỳ diệu: sông Troóc, sông Chày, sông Son trong khu vực Phong Nha - Kẻ Bàng với dòng nước trong xanh chảy giữa vùng núi đá có rừng tạo nên cảnh đẹp thơ mộng như bức tranh thuỷ mặc quyến rũ du khách.`}
                        {index === 1 &&
                        `Các thạch nhũ trong động Phong Nha trải qua hàng triệu năm kiến tạo từ đá vôi dạng karst, bị nước mưa thẩm thấu, hoà tan và chảy xuống từ nóc hang tạo thành những nhũ đá vô cùng lạ mắt như sư tử, ngai vàng, Đức Phật... Nước mưa tiếp tục rơi xuống đáy hang, kết canxi tạo ra măng đá.`}
                        {index === 2 &&
                        `Hang Cô Tiên có những khối nhũ đá trải dài màu vàng như mái tóc mượt mà của nàng tiên. Hang Cung Đình lại có các nhũ đá được thiên nhiên trạm trổ giống như chiếc ngai vàng của ngọc hoàng.`}
                        {index === 3 &&
                        `Trong Vườn quốc gia Phong Nha - Kẻ Bàng còn tồn tại một khu rừng nhiệt đới nguyên sinh ít bị tác động và có tính đa dạng sinh học cao. Động vật và thực vật ở đây lên đến hàng trăm loài trong số đó có những loài được ghi vào sách đỏ Việt Nam.`}
                        {index === 4 &&
                        `Du lịch khám phá thiên nhiên, thám hiểm hang động: Chinh phục Sơn Đoòng - hang động lớn nhất thế giới; khám phá thiên nhiên rào Thương - hang Én; thung lũng Hamada - hang Trạ Ang; hệ thống hang Vòm, hang Va - hang Nước Nứt; hang Đại Ả - Over - Pygmy; rừng Gáo - hang Ô Rô...`}
                        {index === 5 &&
                        `Sau khi vườn quốc gia này được công nhận là di sản thế giới, chính quyền tỉnh Quảng Bình đã bổ sung ngành du lịch là một trong 4 ngành kinh tế mũi nhọn của địa phương. Với những ưu thế về hệ thống hang động và đa dạng sinh học, Vườn Quốc gia Phong Nha-Kẻ Bàng đã được khai thác để phát triển du lịch `}
                        {index === 6 &&
                        `Trong Vườn quốc gia Phong Nha - Kẻ Bàng còn tồn tại một khu rừng nhiệt đới nguyên sinh ít bị tác động và có tính đa dạng sinh học cao. Động vật và thực vật ở đây lên đến hàng trăm loài trong số đó có những loài được ghi vào sách đỏ Việt Nam.`}
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
