
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
                                1. “Hát Xoan được ghi danh tại Danh sách di sản văn hóa phi vật thể đại diện của nhân loại”, Báo điện tử - Đảng Cộng sản Việt Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                                2. “Hát Xoan - Thấm tình đất và người Phú Thọ”, VietnamPlus
                            </div>
                            <div className="Footer__copy__inner__text">
                                3. “Nghệ thuật trình diễn Hát Xoan Phú Thọ”, Sở Văn hoá, Thể thao và Du lịch tỉnh Phú Thọ
                            </div>
                            <div className="Footer__copy__inner__text">
                                4. “Về đất Tổ nghe điệu Hát Xoan”, Báo điện tử - Đảng Cộng sản Việt Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                                5. “Hát Xoan chính thức được UNESCO công nhận là Di sản văn hoá thế giới”, Báo điện tử - Đảng Cộng sản Việt Nam
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