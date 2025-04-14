
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
                                    1. Bộ Thông tin và Truyền thông (mic.gov.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            2. Cục Di sản Văn hóa
                            </div>
                            <div className="Footer__copy__inner__text">
                            3. Cục Du lịch Quốc gia Việt Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                            4. Cổng thông tin điện tử của Bộ Văn hóa Thể thao và Du lịch
                            </div>
                            <div className="Footer__copy__inner__text">
                            5. Trung tâm Lưu trữ Quốc gia IV 
                            </div>
                            <div className="Footer__copy__inner__text">
                            6. Trần Thị Kim Anh, Đinh Văn Minh, Ca Trù Thăng Long – Hà Nội, NXB Văn Học
                            </div>
                            <div className="Footer__copy__inner__text">
                            7. Nguyễn Xuân Diện, Ca Trù phía sau đàn phách, NXB Phụ Nữ
                            </div>
                            <div className="Footer__copy__inner__text">
                            8. Nguyễn Xuân Diện (2007), Lịch sử và Nghệ thuật Ca Trù (Khảo sát nguồn tư liệu tại Viện nghiên cứu Hán Nôm), NXB Thế Giới. 
                            </div>
                            <div className="Footer__copy__inner__text">
                            9. Đỗ Bằng Đoàn, Đỗ Trọng Huề (1962), Việt Nam Ca Trù biên khảo
                            </div>
                            <div className="Footer__copy__inner__text">
                            10. Thảo Vy, Công Đạt, Tất Sơn (2022), Ca Trù – di sản “thính phòng” của người Việt, Báo ảnh Việt Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                            11. Báo Nhân Dân
                            </div>
                            <div className="Footer__copy__inner__text">
                            12. Báo Lao động 
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