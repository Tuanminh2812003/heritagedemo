
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import FooterText from "../../../Components/FooterText";
function Footer(){
    const [showSource, setShowSource] = useState(false);
    
    const toggleSource = () => {
        setShowSource(!showSource); // Chuyển đổi trạng thái
    };
    return(
        <>
            <div className="Footer">
                <div className="Footer__copy">
                    <div className="container">
                        <div className="Footer__copy__inner">
                        <div className="Footer__copy__inner__text" onClick={toggleSource} style={{ cursor: "pointer", color: "blue" }}>
                                {showSource ? "Thu gọn" : "Ấn để xem nguồn"}
                            </div>
                            {showSource && (
                                <>
                                    <div className="Footer__copy__inner__text">
                                1. Cục Di sản Văn hóa
                            </div>
                            <div className="Footer__copy__inner__text">
                                2. Cổng thông tin điện tử của Bộ Văn hóa Thể thao và Du lịch
                            </div>
                            <div className="Footer__copy__inner__text">
                                3. Ban quản lý Di sản văn hóa Mỹ Sơn 
                            </div>
                            <div className="Footer__copy__inner__text">
                            4. Cục hợp tác quốc tế
                            </div>
                            <div className="Footer__copy__inner__text">
                            5. Cổng thông tin điện tử tỉnh Quảng Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                            6. Liên hiệp các Hội UNESCO Việt Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                            7. UNESCO
                            </div>
                            <div className="Footer__copy__inner__text">
                            8. Sở Văn hóa, Thể thao và Du lịch Quảng Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                            9. Sở Thông tin và Truyền thông Ninh Bình 
                            </div>
                            <div className="Footer__copy__inner__text">
                            10. Ngô Văn Doanh (2004), Thánh địa Mỹ Sơn, NXB Trẻ
                            </div>
                            <div className="Footer__copy__inner__text">
                            11. Lê Đình Phụng, Mỹ Sơn vùng đất thiêng vương quốc cổ Champa, NXB Khoa học xã hội
                            </div>
                            <div className="Footer__copy__inner__text">
                            12. UNESCO (11/2013), Bảo tồn Di sản Thế giới Mỹ Sơn 2003 – 2013, báo cáo tổng kết dự án. 
                            </div>
                            <div className="Footer__copy__inner__text">
                            13. Tạp chí Công Thương
                            </div>
                            <div className="Footer__copy__inner__text">
                            14. Báo Gia Lai
                            </div>
                            <div className="Footer__copy__inner__text">
                            15. Trang mạng Ashui.com
                            </div>
                                </>
                            )}
                            <div className="Footer__copy__inner__aes">
                                © Copyright 2024 AES, All rights reserved
                            </div>
                        </div>
                    </div>
                </div>
                <FooterText/>
            </div>
        </>
    )
}

export default Footer;