
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
                backgroundImage: "url('/image/vinhhalong/Ảnh 1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center 0",
            }}>
                <div className="SectionMain__overlay"></div>
                <div className="container">
                    <div className="SectionMain__inner">
                        <div className="SectionMain__inner__title">
                            VỊNH HẠ LONG
                        </div>
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
                            Dự án HeritageFlash XR Chào mừng quý khách đến trải nghiệm về Vịnh Hạ Long!
                        </div>
                        <div className="SectionMainP2__inner__disc">
                            Tham gia trải nghiệm về Vịnh Hạ Long quý khách sẽ:
                        </div>
                        <ul>
                            <li>
                                Xác định được vị trí, quy mô và niên đại của di sản thiên nhiên Việt Nam.
                            </li>
                            <li>
                                Biết được những thông tin cơ bản về di sản Vịnh Hạ Long.
                            </li>
                            <li>
                                Tự hào về di sản Vịnh Hạ Long của dân tộc Việt Nam, giá trị di sản trong tiến trình phát triển lịch sử nhân loại.
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