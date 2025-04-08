
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
function Footer(){
    const [showSource, setShowSource] = useState(false);
    
    const toggleSource = () => {
        setShowSource(!showSource); // Chuyển đổi trạng thái
    };
    return(
        <>
            <div className="Footer">
                <div className="container">
                    <div className="Footer__inner">
                        <div className="Footer__inner__row">
                            <div className="Footer__inner__title">
                                Dự án HERITAGE FLASH XR
                            </div>
                            <img src="/Logo.png" alt="logo"/>
                        </div>
                        <div className="Footer__inner__row">
                        <div className="Footer__inner__title">
                                Hướng dẫn chuyên môn
                            </div>
                            <div className="Footer__inner__disc">
                                PGS.TS Nguyễn Mạnh Hưởng
                            </div>
                        
                            <div className="Footer__inner__title">
                                Tham vấn chuyên môn
                            </div>
                            <div className="Footer__inner__disc">
                            GS.TS. NGND Đỗ Thanh Bình
                            </div>
                            <div className="Footer__inner__disc">
                            TS. Nguyễn Văn Ninh
                            </div>
                            <div className="Footer__inner__disc">
                            PGS.TS Phan Ngọc Huyền
                            </div>
                        </div>
                        <div className="Footer__inner__row r2">
                            <div className="Footer__inner__title">
                                Đơn vị bảo trợ và tài trợ
                            </div>
                            <div className="Footer__inner__disc">
                                Hội Di sản Văn hoá Việt Nam
                            </div>
                            <Link to="https://www.youtube.com/watch?v=mZ_Y6QkbSy4&feature=youtu.be">
                                <div className="Footer__inner__disc">
                                    Quỹ Hỗ trợ bảo tồn di sản văn hoá Việt Nam
                                </div>
                            </Link>
                            <div className="Footer__inner__disc">
                                Công ty Cổ phần Công nghệ Giáo dục AES
                            </div>
                        </div>
                        <div className="Footer__inner__row r3">
                            <div className="Footer__inner__title">
                                Liên hệ
                            </div>
                            <div className="Footer__inner__icon">
                                <Link to="">
                                    <FaFacebook />
                                </Link>
                                <Link to="">
                                    <FaInstagram />
                                </Link>
                                <Link to="https://www.youtube.com/watch?v=mZ_Y6QkbSy4&feature=youtu.be">
                                    <FaYoutube />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
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