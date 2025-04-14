
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
                            2. Cục Du lịch Quốc gia Việt Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                            3. Cổng thông tin điện tử của Bộ Văn hóa Thể thao và Du lịch
                            </div>
                            <div className="Footer__copy__inner__text">
                            4. Đại sứ quán Việt Nam tại Indonexia
                            </div>
                            <div className="Footer__copy__inner__text">
                            5. Nguyễn Phúc An (2019), Đờn ca tài tử Nam Bộ - Khảo&Luận, NXB Tổng hợp TP HCM
                            </div>
                            <div className="Footer__copy__inner__text">
                            6. Võ Trường Kỳ (2015), Đờn ca tài tử Nam Bộ, NXB Đại học Quốc gia Hà Nội
                            </div>
                            <div className="Footer__copy__inner__text">
                            7. Hội Văn Nghệ Dân Gian Việt Nam, Đờn ca tài tử Nam Bộ, NXB Văn hóa Thông tin
                            </div>
                            <div className="Footer__copy__inner__text">
                            8. Lâm Tường Vân (2003), Đờn ca tài tử Nam Bộ, NXB Mũi Cà Mau
                            </div>
                            <div className="Footer__copy__inner__text">
                            9. Báo An Giang (baoangiang.com.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            10. Bảo tàng TP. Cần Thơ (baotangtpcantho.cantho.gov.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            11. Báo Thanh Niên (thanhnien.vn)
                            </div>
                            <div className="Footer__copy__inner__text">
                            12. Trang Chính trị Bình Thuận (truongchinhtri.binhthuan.dcs.vn)
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