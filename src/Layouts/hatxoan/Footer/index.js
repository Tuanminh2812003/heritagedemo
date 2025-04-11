
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
            <div className="Footer__copy__inner__text">2. Cục Di sản Văn hóa</div>
            <div className="Footer__copy__inner__text">3. Cục Du lịch Quốc gia Việt Nam</div>
            <div className="Footer__copy__inner__text">4. Cổng thông tin điện tử của Bộ Văn hóa Thể thao và Du lịch</div>
            <div className="Footer__copy__inner__text">5. Viện âm nhạc, Tổng tập nghiên cứu về Hát Xoan Phú Thọ, NXB Văn hóa Dân tộc</div>
            <div className="Footer__copy__inner__text">6. Dương Huy Thiện (2020), Hát Xoan Phú Thọ - Dân ca cội nguồn, NXB Sân khấu</div>
            <div className="Footer__copy__inner__text">7. “Hát Xoan được ghi danh tại Danh sách di sản văn hóa phi vật thể đại diện của nhân loại”, Báo điện tử - Đảng Cộng sản Việt Nam</div>
            <div className="Footer__copy__inner__text">8. “Hát Xoan - Thấm tình đất và người Phú Thọ”, VietnamPlus</div>
            <div className="Footer__copy__inner__text">9. “Nghệ thuật trình diễn Hát Xoan Phú Thọ”, Sở Văn hoá, Thể thao và Du lịch tỉnh Phú Thọ</div>
            <div className="Footer__copy__inner__text">10. “Về đất Tổ nghe điệu Hát Xoan”, Báo điện tử - Đảng Cộng sản Việt Nam</div>
            <div className="Footer__copy__inner__text">11. “Hát Xoan chính thức được UNESCO công nhận là Di sản văn hoá thế giới”, Báo điện tử - Đảng Cộng sản Việt Nam</div>
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