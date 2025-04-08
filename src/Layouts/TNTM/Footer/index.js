
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
                            2. Cổng thông tin điện tử của Bộ Văn hóa Thể thao và Du lịch
                            </div>
                            <div className="Footer__copy__inner__text">
                            3. Bộ Thông tin và Truyền thông (mic.gov.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            4. Ban Quản lý Khu Di tích lịch sử Đền Hùng
                            </div>
                            <div className="Footer__copy__inner__text">
                            5. Sở Văn hóa, Thể thao và Du lịch Phú Thọ (svhttdl.phutho.gov.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            6. Thông tấn xã Việt Nam (vnanet.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            7. Quân đội Nhân dân (qdnd.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            8. Tổng cục Du lịch (vietnamtourism.gov.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            9. Phạm Bá Khiêm (2013), Đền Hùng và Tín ngưỡng thờ cúng Hùng Vương, NXB Văn hóa Thông tin
                            </div>
                            <div className="Footer__copy__inner__text">
                            10. Tạ Ngọc Tấn, Vũ Trọng Lâm (Đồng chủ biên), Tín ngưỡng thờ cúng Hùng Vương ở Việt Nam, NXB Chính trị Quốc gia Sự thật
                            </div>
                            <div className="Footer__copy__inner__text">
                            11. Tạ Ngọc Tấn, Tín ngưỡng thờ cúng Hùng Vương ở Việt Nam, NXB Lý luận Chính trị
                            </div>
                            <div className="Footer__copy__inner__text">
                            12. Văn Tân, Nguyễn Linh Lê Văn Lan, Nguyễn Đổng Chim Hoàng Hưng, Thời đại Hùng Vương (lịch sử, kinh tế, chính trị, văn hóa, xã hội), NXB Chính trị Quốc gia Sự thật 
                            </div>
                            <div className="Footer__copy__inner__text">
                            13. Báo Nhân dân (nhandan.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            14. Báo Chính phủ (baochinhphu.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            15. Báo Tài nguyên Môi trường (baotainguyenmoitruong.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            16. Báo Văn hóa (baovanhoa.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            17. Báo Yên Bái (baoyenbai.com.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            18. Báo Phú Thọ (baophutho.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            19. VietnamPlus (vietnamplus.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            20. VOV (vov.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            21. Thông tin Đối ngoại (ttdn.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            22. Hà Nội mới (hanoimoi.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            23. Hội Chữ thập đỏ Phú Thọ (chuthapdophutho.org.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            24. Xây dựng Đảng (xaydungdang.org.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            25. Bộ Lao động - Thương binh và Xã hội (molisa.gov.vn)
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