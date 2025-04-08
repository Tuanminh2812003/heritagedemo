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
                backgroundImage: "url('/image/khonggianvanhoacongchieng/1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center 0",
            }}>
                <div className="SectionMain__overlay"></div>
                <div className="container">
                    <div className="SectionMain__inner">
                        <div className="SectionMain__inner__title">
                             KHÔNG GIAN VĂN HÓA CỒNG CHIÊNG TÂY NGUYÊN
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
                            Dự án Heritage Flash XR Chào mừng quý khách đến trải nghiệm về không gian văn hóa Cồng chiêng Tây Nguyên!
                        </div>
                        <div className="SectionMainP2__inner__disc">
                            Tham gia trải nghiệm về không gian văn hóa Cồng chiêng Tây Nguyên quý khách sẽ:
                        </div>
                        <ul>
                            <li>
                                Xác định được vị trí và giới thiệu được khái quát về di sản không gian văn hóa Cồng chiêng Tây Nguyên.
                            </li>
                            <li>
                                Biết cách sưu tầm và sử dụng tư liệu lịch sử để tìm hiểu về không gian văn hóa Cồng chiêng Tây Nguyên.
                            </li>
                            <li>
                                Nhận thức được giá trị của di sản, có ý thức bảo tồn đối với công cuộc bảo tồn và phát huy giá trị di sản văn hóa.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionMain;