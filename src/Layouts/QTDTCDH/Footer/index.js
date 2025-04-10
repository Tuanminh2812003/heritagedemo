
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
                                        3. Sở Du lịch thành phố Huế
                                    </div>
                                    <div className="Footer__copy__inner__text">
                                        4. Trung tâm Bảo tồn Di tích Cố đô Huế 
                                    </div>
                                    <div className="Footer__copy__inner__text">
                                        5. Phan Thuận An, Kiến trúc Cố đô Huế, NXB Đà Nẵng 
                                    </div>
                                    <div className="Footer__copy__inner__text">
                                        6. Phan Thanh Hải, Huế còn lại với di sản, NXB Hà Nội 
                                    </div>
                                    <div className="Footer__copy__inner__text">
                                        7. B.A.V.H, Bộ sách Những người bạn cố đô Huế, NXB Thuận Hóa
                                    </div>
                                    <div className="Footer__copy__inner__text">
                                        8. Trần Đức Anh Sơn, Huế triều Nguyễn một cái nhìn, NXB Thế giới. 
                                    </div>
                                    <div className="Footer__copy__inner__text">
                                        9. Michel Đức Chaingeau (Lê Trọng Sâm dịch), Hồi ký Huế, NXB Thuận Hóa. 
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