
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
                                    <div className="Footer__copy__inner__text">1. Cục Di sản Văn hóa</div>
            <div className="Footer__copy__inner__text">2. Cục Du lịch Quốc gia Việt Nam</div>
            <div className="Footer__copy__inner__text">3. Cổng thông tin điện tử của Bộ Văn hóa Thể thao và Du lịch</div>
            <div className="Footer__copy__inner__text">4. Hoàng hoa sứ trình đồ: Đưa di sản dòng họ vươn tầm thế giới (Bảo tàng lịch sử Quốc gia)</div>
            <div className="Footer__copy__inner__text">5. Nguyễn Huy Oánh (tham gia biên soạn), Hoàng Hoa Sứ Trình Đồ, NXB Đại học Vinh</div>
            <div className="Footer__copy__inner__text">6. Hà Anh (2018), Sách cổ “Hoàng hoa sứ trình đồ” thành di sản tư liệu UNESCO, Báo Lao Động</div>
            <div className="Footer__copy__inner__text">7. Hoàng Ngà (2018), Hành trình đến di sản tư liệu thế giới của cuốn sách cổ “Hoàng hoa sứ trình đồ”, Báo ảnh Dân tộc và Miền núi</div>
            <div className="Footer__copy__inner__text">8. Báo Tài nguyên và Môi trường</div>
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