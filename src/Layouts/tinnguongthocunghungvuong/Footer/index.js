
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
                                1. Báo Nhân dân (nhandan.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                2. Báo Tài nguyên Môi trường (baotainguyenmoitruong.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                3. VietnamPlus (vietnamplus.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                4. VOV (vov.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                5. Công lý (congly.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                6. Thông tin Đối ngoại (ttdn.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                7. Hà Nội mới (hanoimoi.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                8. Bộ Thông tin và Truyền thông (mic.gov.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                9. Vnews (vnews.gov.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                10. Hội Chữ thập đỏ Phú Thọ (chuthapdophutho.org.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                11. Báo Chính phủ (baochinhphu.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                12. Quân đội Nhân dân (qdnd.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                13. Tổng cục Du lịch (vietnamtourism.gov.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                14. Báo Yên Bái (baoyenbai.com.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                15. Thông tấn xã Việt Nam (vnanet.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                16. Sở Văn hóa, Thể thao và Du lịch Phú Thọ (svhttdl.phutho.gov.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                17. Báo Phú Thọ (baophutho.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                18. Báo Văn hóa (baovanhoa.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                19. Xây dựng Đảng (xaydungdang.org.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                                20. Bộ Lao động - Thương binh và Xã hội (molisa.gov.vn)
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