
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
            <div className="Footer__copy__inner__text">2. Bảo tàng Lịch sử Quốc gia</div>
            <div className="Footer__copy__inner__text">3. Cục Di sản Văn hóa</div>
            <div className="Footer__copy__inner__text">4. Cục Du lịch Quốc gia Việt Nam</div>
            <div className="Footer__copy__inner__text">5. Cổng thông tin điện tử của Bộ Văn hóa Thể thao và Du lịch</div>
            <div className="Footer__copy__inner__text">6. Trung tâm Văn thư Lưu trữ khu vực IV</div>
            <div className="Footer__copy__inner__text">7. Trung tâm Lưu trữ Quốc gia IV, Mộc bản triều Nguyễn – đề mục tổng quan, NXB Chính trị Quốc gia</div>
            <div className="Footer__copy__inner__text">8. Phạm Thị Huệ (2022), Mộc bản triều Nguyễn – Báu vật Quốc gia về lịch sử và văn hóa, Trung tâm Lưu trữ Quốc gia IV</div>
            <div className="Footer__copy__inner__text">9. Trang vietnamtourism.com</div>
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