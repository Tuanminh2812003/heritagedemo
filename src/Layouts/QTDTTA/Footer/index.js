
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
                <FooterText/>
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
                            2. Cục Du lịch Quốc gia Việt Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                            3. Cổng thông tin điện tử của Bộ Văn hóa Thể thao và Du lịch
                            </div>
                            <div className="Footer__copy__inner__text">
                            4. Sở Thông tin và Truyền thông Ninh Bình
                            </div>
                            <div className="Footer__copy__inner__text">
                            5. Sở Du lịch tỉnh Ninh Bình
                            </div>
                            <div className="Footer__copy__inner__text">
                            6. Ban Quản lý Quần thể danh thắng Tràng An
                            </div>
                            <div className="Footer__copy__inner__text">
                            7. Thông tấn xã Việt Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                            8. Diệp Anh, Quần thể danh thắng Tràng An – Hành trình 10 anmw ghi danh di sản thế giới, Báo Điện tử Chính Phủ. 
                            </div>
                            <div className="Footer__copy__inner__text">
                            9. Trịnh Thị Hiếu (2015), Kinh tế du lịch trong phát triển bền vững ở tỉnh Ninh Bình hiện nay
                            </div>
                            <div className="Footer__copy__inner__text">
                            10. Báo Dân Việt
                            </div>
                                </>
                            )}
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