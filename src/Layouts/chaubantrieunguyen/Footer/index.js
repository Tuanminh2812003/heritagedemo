
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
                                    <div className="Footer__copy__inner__text">1. Bộ Thông tin và Truyền thông (mic.gov.vn)</div>
            <div className="Footer__copy__inner__text">2. Bộ Nội vụ (moha.gov.vn)</div>
            <div className="Footer__copy__inner__text">3. Cục Di sản Văn hóa</div>
            <div className="Footer__copy__inner__text">4. Cục Du lịch Quốc gia Việt Nam</div>
            <div className="Footer__copy__inner__text">5. Cổng thông tin điện tử của Bộ Văn hóa Thể thao và Du lịch</div>
            <div className="Footer__copy__inner__text">6. Cục Văn thư và Lưu trữ nhà nước (archives.org.vn)</div>
            <div className="Footer__copy__inner__text">7. Trung tâm Bảo tồn Di tích Cố đô Huế</div>
            <div className="Footer__copy__inner__text">8. Thông tấn xã Việt Nam</div>
            <div className="Footer__copy__inner__text">9. Đào Thị Diến (2019), Châu bản triều Nguyễn về Hà Nội, NXB Hà Nội</div>
            <div className="Footer__copy__inner__text">10. Lý Kim Hoa, Châu bản triều Nguyễn tư liệu phật giáo qua các triều đại nhà Nguyễn 143 năm từ Gia Long 1802 đến Bảo Đại 1945, NXB Văn hóa Thông tin</div>
            <div className="Footer__copy__inner__text">11. Cục Văn thư và Lưu trữ Nhà nước, Mục lục Châu bản triều Nguyễn (toàn tập), NXB Văn hóa Thông tin</div>
            <div className="Footer__copy__inner__text">12. Trung tâm Lưu trữ Quốc gia I, Ngự phê trên châu bản triều Nguyễn (1802 – 1945), NXB Đại học Sư phạm</div>
            <div className="Footer__copy__inner__text">13. Trung tâm Lưu trữ Quốc gia I, Ấn chương trên Châu bản triều Nguyễn (1802 – 1945), NXB Hà Nội</div>
            <div className="Footer__copy__inner__text">14. Trung tâm Lưu trữ Quốc gia I (2023), Châu bản triều Nguyễn – Di sản tư liệu Thế giới, NXB Mỹ thuật</div>
            <div className="Footer__copy__inner__text">15. VietNamNet (vietnamnet.vn)</div>
            <div className="Footer__copy__inner__text">16. VietnamPlus (vietnamplus.vn)</div>
            <div className="Footer__copy__inner__text">17. YouTube (youtube.com)</div>
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