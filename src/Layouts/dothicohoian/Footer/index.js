
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
                            4. Trung tâm Văn hóa – Thể thao và Truyền thanh – Truyền hình TP. Hội An
                            </div>
                            <div className="Footer__copy__inner__text">
                            5. Trung tâm Quản lý Bảo tồn Di sản Văn hóa Hội An
                            </div>
                            <div className="Footer__copy__inner__text">
                            6. Bảo tồn di tích (2022), Kiến trúc nhà cổ Hội An qua tư liệu Viện Bảo tồn di tích, NXB Văn hóa Dân tộc
                            </div>
                            <div className="Footer__copy__inner__text">
                            7. Nguyễn Trung Hiếu, Đô thị cổ Hội An Di sản Văn hóa Thế giới, NXB Thời đại
                            </div>
                            <div className="Footer__copy__inner__text">
                            8. Nguyễn Quốc Hùng, Giá trị khu phố cổ Hội An trong phát triển du lịch, Trung tâm văn hóa học lý luận và ứng dụng. 
                            </div>
                            <div className="Footer__copy__inner__text">
                            9. Hoàng Phúc, Di tích kiến trúc nghệ thuật Đô thị cổ Hội An, Cục Di sản Văn hóa
                            </div>
                            <div className="Footer__copy__inner__text">
                            10. Hội An (hoianworldheritage)
                            </div>
                            <div className="Footer__copy__inner__text">
                            11. Báo Thanh Niên
                            </div>
                            <div className="Footer__copy__inner__text">
                            12. Báo Du lịch Thành phố Hồ Chí Minh
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