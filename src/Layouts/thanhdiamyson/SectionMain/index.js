
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
                backgroundImage: "url('/image/thanhdiamyson/1.1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center 0",
            }}>
                <div className="SectionMain__overlay"></div>
                <div className="container">
                    <div className="SectionMain__inner">
                        <div className="SectionMain__inner__title">
                            THÁNH ĐỊA MỸ SƠN
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
                            Dự án Heritage Flash XR Chào mừng quý khách đến với trải nghiệm về Thánh địa Mỹ Sơn!
                        </div>
                        <div className="SectionMainP2__inner__disc">
                            Tham gia trải nghiệm về Thánh địa Mỹ Sơn quý khách sẽ: 
                        </div>
                        <ul>
                            <li>
                                Xác định được vị trí và nắm được những thông tin cơ bản về di sản Thánh địa Mỹ Sơn
                            </li>
                            <li>
                                Nâng cao nhận thức về bảo tồn và phát huy giá trị di sản văn hóa trong cộng đồng.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionMain;