
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
                            3. Cục Du lịch Quốc gia Việt Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                            4. Sở Du lịch thành phố Huế
                            </div>
                            <div className="Footer__copy__inner__text">
                            5. Trung Tâm Bảo tồn Di tích Cố đô Huế
                            </div>
                            <div className="Footer__copy__inner__text">
                            6. Nhà hát nghệ thuật truyền thống Cung đình Huế
                            </div>
                            <div className="Footer__copy__inner__text">
                            7. Phan Thanh Hải, Tản mạn về Huế từ góc nhìn Di sản Văn hóa, NXB Hà Nội
                            </div>
                            <div className="Footer__copy__inner__text">
                            8. Phan Thanh Hải, Huế còn lại với di sản, NXB Hà Nội
                            </div>
                            <div className="Footer__copy__inner__text">
                            9. Trí Hoa, Nhã nhạc Cung đình Huế - Di sản trường tồn của văn hóa Việt Nam, Tạp chí Văn hóa
                            </div>
                            <div className="Footer__copy__inner__text">
                            10. Quốc Việt, Bảo tồn, phát huy giá trị Nhã nhạc Huế - Di sản văn hóa của nhân loại, Báo ảnh Dân tộc và Miền núi
                            </div>
                            <div className="Footer__copy__inner__text">
                            11. Báo điện tử Vietnamplus, Nhã nhạc cung đình Huế - Kiệt tác âm nhạc bác học và tao nhã 
                            </div>
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