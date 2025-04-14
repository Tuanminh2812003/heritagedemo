
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
                                    <div className="Footer__copy__inner__text">1. Bộ Thông tin và Truyền thông (mic.gov.vn)</div>
            <div className="Footer__copy__inner__text">2. Cục Di sản Văn hóa</div>
            <div className="Footer__copy__inner__text">3. Cục Du lịch Quốc gia Việt Nam</div>
            <div className="Footer__copy__inner__text">4. Cổng thông tin điện tử của Bộ Văn hóa Thể thao và Du lịch</div>
            <div className="Footer__copy__inner__text">5. Trung tâm Hoạt động Văn hóa Khoa học Văn Miếu – Quốc Tử Giám</div>
            <div className="Footer__copy__inner__text">6. Trần Hậu Yên Thế, Trần Trung Hiếu (2018), Nét Việt trên bia tiến sĩ Văn Miếu – Quốc Tử Giám, NXB Mỹ Thuật</div>
            <div className="Footer__copy__inner__text">7. Ngô Đức Thọ (2002), Văn Miếu Quốc Tử Giám và 82 bia tiến sĩ, NXB Hà Nội</div>
            <div className="Footer__copy__inner__text">8. Ngô Đức Thọ, Văn bia tiến sĩ Văn Miếu Quốc Tử Giám Thăng Long, NXB Hà Nội</div>
            <div className="Footer__copy__inner__text">9. Nhật Tân (1963), Khảo thêm về bia tiến sĩ và nhà bia ở Văn Miếu – Hà Nội, Tạp chí nghiên cứu lịch sử, số 49</div>
            <div className="Footer__copy__inner__text">10. Nguyễn Du Chi (1970), Nghệ thuật trang trí trên các bia tiến sĩ đời Lê ở Văn Miếu Hà Nội, Khảo cổ học, số 7001</div>
            <div className="Footer__copy__inner__text">11. Đỗ Văn Ninh (1977), Bàn về số lượng bia Tiến sĩ ở Quốc Tử Giám Hà Nội, Khảo cổ học, số 23</div>
            <div className="Footer__copy__inner__text">12. Báo Tổ Quốc</div>
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