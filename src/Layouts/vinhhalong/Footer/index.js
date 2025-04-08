
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
                                    1. Cục Di sản Văn hóa
                            </div>
                            <div className="Footer__copy__inner__text">
                            2. Cục Du lịch Quốc gia Việt Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                            3. Cổng thông tin điện tử của Bộ Văn hóa Thể thao và Du lịch
                            </div>
                            <div className="Footer__copy__inner__text">
                            4. Cổng thông tin điện tử tỉnh Quảng Ninh
                            </div>
                            <div className="Footer__copy__inner__text">
                            5. Ban quản lý Vịnh Hạ Long
                            </div>
                            <div className="Footer__copy__inner__text">
                            6. Đỗ Kha (2016), Vịnh Hạ Long: Di sản – Kỳ quan, NXB Mỹ thuật
                            </div>
                            <div className="Footer__copy__inner__text">
                            7. Nguyễn Hùng, Vịnh Hạ Long xưa đẹp diễm lệ qua những tấm ảnh đen trắng cực quý hiếm, Báo Lao Động.
                            </div>
                            <div className="Footer__copy__inner__text">
                            8. Trang chuyenxua.net, Vịnh Hạ Long kỳ vũ trong loạt ảnh tuyệt đẹp hơn 70 năm trước
                            </div>
                            <div className="Footer__copy__inner__text">
                            9. Blog VDS Travel Du lịch khắp muôn nơi
                            </div>
                            <div className="Footer__copy__inner__text">
                            10. Báo Nhân Dân điện tử
                            </div>
                            <div className="Footer__copy__inner__text">
                            11. Báo VTC News
                            </div>
                            <div className="Footer__copy__inner__text">
                            12. Báo Lao Động
                            </div>
                            <div className="Footer__copy__inner__text">
                            13. Báo Thái Bình
                            </div>
                            <div className="Footer__copy__inner__text">
                            14. Báo VietNamNet
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