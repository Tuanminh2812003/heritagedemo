
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
                            3. Cổng thông tin Sở Văn hóa và Thể thao thành phố Hà Nội
                            </div>
                            <div className="Footer__copy__inner__text">
                            4. Trung tâm Bảo tồn Di sản Thăng Long – Hà Nội
                            </div>
                            <div className="Footer__copy__inner__text">
                            5. Viện Khoa học Xã hội Việt Nam, Viện Khảo cổ học, Hoàng thành Thăng Long . 
                            </div>
                            <div className="Footer__copy__inner__text">
                            6. Andrew Hardy, Nguyễn Tiến Đông (2018), Phát lộ Di tích Hoàng thành Thăng Long: thoáng nhìn đầu tiên về di sản khảo cổ học Hà Nội, NXB Thế Giới
                            </div>
                            <div className="Footer__copy__inner__text">
                            7. Cục du lịch quốc gia Việt Nam, Về lại cố đô xưa: Cố đô Thăng Long (Bài 2). 
                            </div>
                            <div className="Footer__copy__inner__text">
                            8. Trung tâm Bảo tồn Di sản Thăng Long – Hà Nội, Hoàng thành Thăng Long – Nơi chứa đựng giá trị văn hóa lịch sử của dân tộc
                            </div>
                            <div className="Footer__copy__inner__text">
                            9. Báo Nhân dân, Di tích Nhà cách mạng D67
                            </div>
                            <div className="Footer__copy__inner__text">
                            10. Báo Nhân Dân, Hoàng thành Thăng Long – Di sản vô giá
                            </div>
                            <div className="Footer__copy__inner__text">
                            11. Báo VnExpress
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