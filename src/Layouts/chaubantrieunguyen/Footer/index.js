
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
                                1. Trung tâm lưu trữ quốc gia I, Hà Nội 
                            </div>
                            <div className="Footer__copy__inner__text">
                                2. Cục văn thư và lưu trữ Nhà nước, Mục lục Châu bản triều Nguyễn, NXB Văn hóa – Thông tin
                            </div>
                            <div className="Footer__copy__inner__text">
                                3. Trung tâm lưu trữ quốc gia I, Châu bản triều Nguyễn – Di sản tư liệu Thế giới, NXB Mỹ thuật.  
                            </div>
                            <div className="Footer__copy__inner__text">
                                4. Cục văn thư và lưu trữ nhà nước, Ấn chương trên Châu bản triều Nguyễn (1802 – 1945), NXB Hà Nội.
                            </div>
                            <div className="Footer__copy__inner__text">
                                5. Lê Kim Hoa (Sưu khảo, biên dịch), Châu bản triều Nguyễn: Tư liệu phật giáo qua các triều đại nhà Nguyễn 143 năm, từ Gia Long 1802 đến Bảo Đại 1945, NXB Văn hóa Thông tin. 
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