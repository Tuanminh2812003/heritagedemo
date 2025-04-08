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
                backgroundImage: "url('/image/BTSVM/SectionMain-1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center 0",
            }}>
                <div className="SectionMain__overlay"></div>
                <div className="container">
                    <div className="SectionMain__inner">
                        <div className="SectionMain__inner__title">
                        BIA TIẾN SĨ
                        </div>
                        <div className="SectionMain__inner__title">
                        VĂN MIẾU – QUỐC TỬ GIÁM
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
                        Dự án Heritage Flash XR Chào mừng quý khách đến trãi nghiệm về Bia tiến sĩ Văn Miếu – Quốc Tử Giám
                        </div>
                        <div className="SectionMainP2__inner__disc">
                        Tham gia trãi nghiệm về Bia tiến sĩ Văn Miếu – Quốc Tử Giám quý khách sẽ: 
                        </div>
                        <ul>
                            <li>
                            Xác định được vị trí địa lí, quy mô và niên đại của các tấm bia tiến sĩ 
                            </li>
                            <li>
                            Biết được những thông tin cơ bản di sản
                            </li>
                            <li>
                            Tự hào về di sản khoa cử và giáo dục của dân tộc Việt Nam
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