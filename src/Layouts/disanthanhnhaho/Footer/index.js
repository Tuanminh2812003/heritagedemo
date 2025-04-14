
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
                            3. Cổng thông tin đối ngoại Vietnam.vn
                            </div>
                            <div className="Footer__copy__inner__text">
                            4. Trung tâm Bảo tồn Di sản Thành Nhà Hồ
                            </div>
                            <div className="Footer__copy__inner__text">
                            5. Viện Hàn lâm Khoa học Xã hội Việt Nam - Viện Khảo Cổ Học
                            </div>
                            <div className="Footer__copy__inner__text">
                            6. Viện Khảo Cổ Học, Tạp chí khảo cổ học số 2/2012
                            </div>
                            <div className="Footer__copy__inner__text">
                            7. Trang thông tin điện tử xã Cẩm Yên – huyện Cẩm Thủy, Thành Nhà Hồ và giá trị du lịch của di sản văn hóa thế giới.  
                            </div>
                            <div className="Footer__copy__inner__text">
                            8. Báo Tin Tức, Phát huy giá trị di sản Thành nhà Hồ gắn với phát triển du lịch
                            </div>
                            <div className="Footer__copy__inner__text">
                            9. Báo Tin Tức, Phát huy giá trị di sản Thành nhà Hồ gắn với phát triển du lịch 
                            </div>
                            <div className="Footer__copy__inner__text">
                            10. Báo Thanh Hóa, Bảo tồn, phát huy để nâng cao giá trị Di sản Thành Nhà Hồ
                            </div>
                            <div className="Footer__copy__inner__text">
                            11. Du lịch tử tế, Không chỉ là một bức tường đá, Thành nhà Hồ còn là giá trị của thời gian! 
                            </div>
                            <div className="Footer__copy__inner__text">
                            12. Vinpearl, Thành nhà Hồ - Di tích lịch sử, địa điểm du lịch nổi tiếng bậc nhất xứ Thanh 
                            </div>
                            <div className="Footer__copy__inner__text">
                            13. ReviewVilla, Khám phá Thành Nhà Hồ – di tích lịch sử nổi tiếng xứ Thanh
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