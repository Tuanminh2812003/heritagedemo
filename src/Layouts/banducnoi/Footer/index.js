
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
                                    <div className="Footer__copy__inner__text">1. Bộ Thông tin và Truyền thông (mic.gov.vn)</div>
            <div className="Footer__copy__inner__text">2. Bộ Nội vụ (moha.gov.vn)</div>
            <div className="Footer__copy__inner__text">3. Cục Di sản Văn hóa</div>
            <div className="Footer__copy__inner__text">4. Cục Du lịch Quốc gia Việt Nam</div>
            <div className="Footer__copy__inner__text">5. Cổng thông tin điện tử của Bộ Văn hóa Thể thao và Du lịch</div>
            <div className="Footer__copy__inner__text">6. Cục Văn thư và Lưu trữ nhà nước (archives.org.vn)</div>
            <div className="Footer__copy__inner__text">7. Trung tâm Bảo tồn Di tích Cố đô Huế</div>
            <div className="Footer__copy__inner__text">8. Trung tâm Bảo tồn Di tích Cố đô Huế, Những bản đúc nổi trên chín đỉnh đồng ở Hoàng cung Huế, NXB Mỹ thuật</div>
            <div className="Footer__copy__inner__text">9. Lạc Thành, Thảo Vy (2024), Bản đúc nổi trên cửu đỉnh ở Huế được ghi danh là Di sản của UNESCO, Báo Dân trí</div>
            <div className="Footer__copy__inner__text">10. Trần Hào (2024), Khám phá di sản tư liệu Cửu đỉnh ở Huế, Báo Giáo dục và Thời đại Online</div>
            <div className="Footer__copy__inner__text">11. Báo điện tử Tiền Phong</div>
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