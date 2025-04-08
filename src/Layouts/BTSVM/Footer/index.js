
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
                                1. Văn bia tiến sĩ biểu tượng và niềm tự hào của Hà Nội – Thư viện Quốc gia Việt Nam 
                            </div>
                            <div className="Footer__copy__inner__text">
                                2. Bia Đề danh tiến sĩ tại Văn Miếu – Quốc Tử Giám (Hà Nội) – Cục di sản văn hóa 
                            </div>
                            <div className="Footer__copy__inner__text">
                                3. Nhật Tân (1963), Khảo thêm về bia tiến sĩ và nhà bia ở Văn Miếu – Hà Nội, Tạp chí nghiên cứu lịch sử, số 49 
                            </div>
                            <div className="Footer__copy__inner__text">
                                4. Nguyễn Du Chi (1970), Nghệ thuật trang trí trên các bia tiến sĩ đời Lê ở Văn Miếu Hà Nội, Khảo cổ học, số 7001 
                            </div>
                            <div className="Footer__copy__inner__text">
                                5. Đỗ Văn Ninh (1977), Bàn về số lượng bia Tiến sĩ ở Quốc Tử Giám Hà Nội, Khảo cổ học, số 23
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