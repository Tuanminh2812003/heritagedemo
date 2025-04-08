import React, { useEffect, useRef, useState } from "react";

function SectionMain(){

    const innerRef = useRef(null); // Tham chiếu đến phần tử DOM
    const [marginTop, setMarginTop] = useState(0); // Trạng thái lưu giá trị margin-top

    useEffect(() => {
        // Tính toán chiều cao của phần tử khi render
        if (innerRef.current) {
        const height = innerRef.current.offsetHeight;
        setMarginTop(height / 2); // Đặt margin-top = 1/2 chiều cao
        }
    }, []);

    return(
        <>
            <div className="SectionMain" style={{
                backgroundImage: "url('/image/TNTM/Sectionmain.png')",
                backgroundSize: "cover",
                backgroundPosition: "center 0",
            }}>
                <div className="SectionMain__overlay"></div>
                <div className="container">
                    <div className="SectionMain__inner">
                        <div className="SectionMain__inner__title">
                        TÍN NGƯỠNG THỜ MẪU TAM PHỦ
                        </div>
                        {/* <div className="SectionMain__inner__disc">
                            Huế là nơi lưu giữ hồn cốt lịch sử và văn hóa của dân tộc. Hãy một lần đến Huế để cảm nhận vẻ đẹp thanh bình và nét quyến rũ độc đáo của cố đô!
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="SectionMainP2"
                ref={innerRef}
                style={{ marginTop: `-${marginTop}px` }}
            >
                <div className="container">
                    <div className="SectionMainP2__inner">
                        <div className="SectionMainP2__inner__title">
                        Dự án Heritage Flash XR Chào mừng quý khách đến trải nghiệm về di sản tín ngưỡng thờ Mẫu:
                        </div>
                        <div className="SectionMainP2__inner__disc">
                        Tham gia trải nghiệm về tín ngưỡng thờ Mẫu quý khách sẽ: 
                        </div>
                        <ul>
                            <li>
                            Xác định được nguồn gốc, hình thức và những thông tin cơ bản.
                            </li>
                            <li>
                            Tự hào về các giá trị của di sản trong tiến trình phát triển lịch sử dân tộc.
                            </li>
                            <li>
                            Góp phần quảng bá hình ảnh đất nước, văn hóa, con người Việt Nam đến cộng đồng nói riêng và thế giới nói chung. 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionMain;