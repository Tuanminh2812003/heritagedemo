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
                backgroundImage: "url('/image/catru/1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center 0",
            }}>
                <div className="SectionMain__overlay"></div>
                <div className="container">
                    <div className="SectionMain__inner">
                        <div className="SectionMain__inner__title">
                            CA TRÙ
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
                            Dự án HeritageFlash XR Chào mừng quý khách đến trải nghiệm về Ca trù!
                        </div>
                        <div className="SectionMainP2__inner__disc">
                            Tham gia trải nghiệm về Ca trù quý khách sẽ:
                        </div>
                        <ul>
                            <li>
                                Nêu được vị trí và giới thiệu được khái quát về di sản Ca trù.
                            </li>
                            <li>
                                Biết cách sưu tầm và sử dụng tư liệu lịch sử để tìm hiểu về Ca trù.
                            </li>
                            <li>
                                Vận dụng kiến thức đã học, nhận thức được giá trị của di sản, có ý thức bảo tồn đối với công cuộc bảo tồn và phát huy giá trị di sản văn hóa.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionMain;