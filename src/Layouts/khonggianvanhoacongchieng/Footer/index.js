
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
                                1. Cục Di sản văn hóa
                            </div>
                            <div className="Footer__copy__inner__text">
                                2. Cục Du lịch Quốc gia Việt Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                            3. Cổng thông tin điện tử của Bộ Văn hóa Thể thao và Du lịch
                            </div>
                            <div className="Footer__copy__inner__text">
                            4. Liên hiệp các Hội UNESCO Việt Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                            5. Viện Văn hóa Nghệ thuật Quốc gia Việt Nam (2017), Di sản văn hóa cồng chiêng Tây Nguyên, NXB Văn hóa Dân tộc
                            </div>
                            <div className="Footer__copy__inner__text">
                            6. Viện Văn hóa – Thông tin (2006), Kiệt tác truyền khẩu và di sản phi vật thể của nhân loại – Không gian văn hóa cồng chiêng Tây Nguyên, NXB Thế Giới
                            </div>
                            <div className="Footer__copy__inner__text">
                            7. Bùi Trọng Hiền, Âm nhạc cồng chiêng Tây Nguyên, NXB Văn hóa Dân tộc
                            </div>
                            <div className="Footer__copy__inner__text">
                            8. Đào Huy Quyền (2010), Văn hóa cồng chiêng các dân tộc Tây Nguyên, NXB Văn hóa Thông tin
                            </div>
                            <div className="Footer__copy__inner__text">
                            9. Tô Ngọc Thanh, nhiều tác giả (2007), Bảo vệ không gian văn hóa cồng chiêng Tây Nguyên – Kiệt tác di sản truyền khẩu và phi vật thể nhân loại, NXB Văn hóa Thông tin
                            </div>
                            <div className="Footer__copy__inner__text">
                            10. Nhân vật - sự kiện, Chuyên trang tư liệu của Thông tấn xã Việt Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                            11. EU-Vietnam Business Netwwork
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