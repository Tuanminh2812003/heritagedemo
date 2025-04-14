
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
                                        1. Cục Di sản văn hóa
                                    </div>
                                    <div className="Footer__copy__inner__text">
                                    2. Cục Du lịch Quốc gia Việt Nam
                                    </div>
                                    <div className="Footer__copy__inner__text">
                                    3. Cổng thông tin điện tử của Bộ Văn hóa Thể thao và Du lịch
                                    </div>
                                    <div className="Footer__copy__inner__text">
                                    4. Ban Quản lý Vườn Quốc gia Phong Nha
                                    </div>
                                    <div className="Footer__copy__inner__text">
                                    5. Tạ Hòa Phương (Chủ biên) (2023), Kỳ quan hang động Quảng Bình Việt Nam, NXB Thanh Niên, Hà Nội. 
                                    </div>
                                    <div className="Footer__copy__inner__text">
                                    6. Nguyễn Quang Mỹ (2006), Vườn Quốc gia Phong Nha – Kẻ Bàng, NXB Trẻ
                                    </div>
                                    <div className="Footer__copy__inner__text">
                                    7. Hoàng An, Vườn Quốc gia Phong Nha – Kẻ Bàng: hoàn thành xuất sắc các nhiệm vụ năm 2024, Tạp chí Nhiếp ảnh và Đời sống
                                    </div>
                                    <div className="Footer__copy__inner__text">
                                    8. Trang điện tử quangbinh.gov.vn
                                    </div>
                                    <div className="Footer__copy__inner__text">
                                    9. Trang điện tử phongnhatravel
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <FooterText/>
                <div className="Footer__copy">
                    <div className="container">
                        <div className="Footer__copy__inner">
                            <div className="Footer__copy__inner__aes">
                                © Copyright 2024 AES, All rights reserved
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;