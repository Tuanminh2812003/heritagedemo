
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
                            2. Cục Du lịch Quốc gia Việt Nam
                            </div>
                            <div className="Footer__copy__inner__text">
                            3. Cổng thông tin điện tử của Bộ Văn hóa Thể thao và Du lịch
                            </div>
                            <div className="Footer__copy__inner__text">
                            4. Sở Văn hóa, Thể thao và Du lịch tỉnh Bắc Ninh
                            </div>
                            <div className="Footer__copy__inner__text">
                            5. Nguyễn Chí Bền (Chủ biên), Bùi Quang Thanh, Dân ca Quan họ Bắc Nunh – Di sản văn hóa phi vật thể đại diện của nhân loại, NXB Khoa Học Xã Hội
                            </div>
                            <div className="Footer__copy__inner__text">
                            6. Đặng Văn Lung, Hồng Thao, Trần Linh Quý (1978), Quan họ - nguồn gốc và quá trình phát triển, NXB Khoa Học Xã Hội
                            </div>
                            <div className="Footer__copy__inner__text">
                            7. Một số vấn đề về Dân ca Quan họ, Ty Văn hóa Hà Bắc xuất bản
                            </div>
                            <div className="Footer__copy__inner__text">
                            8. Nguyễn Văn Phú, Lưu Hữu Phước (1962), Dân ca Quan họ Bắc Ninh, NXB Văn Hóa
                            </div>
                            <div className="Footer__copy__inner__text">
                            9. Hà Anh (2018), Nét duyên Quan họ xưa và nay, Tạp chí Thế Giới Di Sản điện tử
                            </div>
                            <div className="Footer__copy__inner__text">
                            10. Minh Anh, Tục kết bạn – nét duyên quan họ, Báo Nhân dân điện tử
                            </div>
                            <div className="Footer__copy__inner__text">
                            11. Sở kế hoạch đầu tư tỉnh Bắc Ninh, Kế hoạch tuyên truyền, quảng bá ASEAN trong lĩnh vực xúc tiến đầu tư, du lịch tỉnh Bắc Ninh giai đoạn 2019 – 2020
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