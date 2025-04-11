import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

function FooterText(){

    const [info1, setInfo1] = useState(false);
    const [info1p2, setInfo1p2] = useState(false);
    const [info2, setInfo2] = useState(false);
    const [info3, setInfo3] = useState(false);
    const [info4, setInfo4] = useState(false);
    const clickInfo1 = () => {
        setInfo1(!info1); // Chuyển đổi trạng thái
    };
    const clickInfo1p2 = () => {
        setInfo1p2(!info1p2); // Chuyển đổi trạng thái
    };
    const clickInfo2 = () => {
        setInfo2(!info2); // Chuyển đổi trạng thái
    };
    const clickInfo3 = () => {
        setInfo3(!info3); // Chuyển đổi trạng thái
    };
    const clickInfo4 = () => {
        setInfo4(!info4); // Chuyển đổi trạng thái
    };

    return(
        <>
                <div className="container">
                    <div className="Footer__inner">
                        <div className="Footer__inner__row">
                            <div className="Footer__inner__title">
                                Dự án HERITAGE FLASH XR
                            </div>
                            <img src="/Logo.png" alt="logo"/>
                        </div>
                        <div className="Footer__inner__row">
                            <div className="Footer__inner__title">
                                Hướng dẫn Khoa học
                            </div>
                            <div className="Footer__inner__disc">
                                <div className="Footer__inner__disc__text">
                                    PGS. TS Nguyễn Mạnh Hưởng
                                </div>
                                <div className="Footer__inner__disc__icon" onClick={clickInfo1}>
                                {info1 ? (
                                    <IoMdArrowDropdown />
                                ) : (
                                    <IoMdArrowDropright />
                                )}
                                </div>
                            </div>
                            {info1 && (
                                <ul className="Footer__inner__info">
                                    <li>
                                        Giảng viên cao cấp, Trưởng Bộ môn Lý luận và PPDH - Khoa Lịch sử, Trường ĐHSP Hà Nội
                                    </li>
                                    <li>
                                        Chủ biên SGK (lớp 8) và tác giả SGK Lịch sử từ lớp 7 đến lớp 12, Bộ sách Cánh Diều
                                    </li>
                                    <li>
                                        Báo cáo viên cao cấp của Bộ GD-ĐT về đổi mới GDPT
                                    </li>
                                </ul>
                            )}
                            <div className="Footer__inner__disc">
                                <div className="Footer__inner__disc__text">
                                    TS. Nguyễn Văn Ninh
                                </div>
                                <div className="Footer__inner__disc__icon" onClick={clickInfo1p2}>
                                {info1p2 ? (
                                    <IoMdArrowDropdown />
                                ) : (
                                    <IoMdArrowDropright />
                                )}
                                </div>
                            </div>
                            {info1p2 && (
                                <ul className="Footer__inner__info">
                                    <li>
                                        Trưởng khoa Lịch sử, Trường Đại học Sư phạm Hà Nội
                                    </li>
                                </ul>
                            )}
                            
                            <div className="Footer__inner__title">
                                Tham vấn chuyên môn
                            </div>
                            <div className="Footer__inner__disc">
                                <div className="Footer__inner__disc__text">
                                GS.TS. NGND Đỗ Thanh Bình
                                </div>
                                <div className="Footer__inner__disc__icon" onClick={clickInfo2}>
                                {info2 ? (
                                    <IoMdArrowDropdown />
                                ) : (
                                    <IoMdArrowDropright />
                                )}
                                </div>
                            </div>
                            {info2 && (
                                <ul className="Footer__inner__info">
                                    <li>
                                        Giảng viên cao cấp, Nguyên Trưởng khoa Lịch sử, Trường ĐHSP Hà Nội
                                    </li>
                                    <li>
                                        Tổng Chủ biên Sách giáo khoa Lịch sử lớp 4 -12, bộ sách Cánh Diều
                                    </li>
                                </ul>
                            )}
                            <div className="Footer__inner__disc">
                                <div className="Footer__inner__disc__text">
                                PGS.TS Phan Ngọc Huyền 
                                </div>
                                <div className="Footer__inner__disc__icon" onClick={clickInfo3}>
                                {info3 ? (
                                    <IoMdArrowDropdown />
                                ) : (
                                    <IoMdArrowDropright />
                                )}
                                </div>
                            </div>
                            {info3 && (
                                <ul className="Footer__inner__info">
                                    <li>
                                        Giảng viên cao cấp, Phó Trưởng khoa Lịch sử, Trường ĐHSP Hà Nội
                                    </li>
                                    <li>
                                        Tác giả Sách giáo khoa Lịch sử, bộ sách Kết nối tri thức với cuộc sống
                                    </li>
                                </ul>
                            )}
                            <div className="Footer__inner__disc">
                                <div className="Footer__inner__disc__text">
                                TS. Nguyễn Thị Phương Thanh 
                                </div>
                                <div className="Footer__inner__disc__icon" onClick={clickInfo4}>
                                {info4 ? (
                                    <IoMdArrowDropdown />
                                ) : (
                                    <IoMdArrowDropright />
                                )}
                                </div>
                            </div>
                            {info4 && (
                                <ul className="Footer__inner__info">
                                    <li>
                                        Giảng viên chính Bộ môn Lí luận và Phương pháp dạy học, khoa Lịch sử, Trường Đại học Sư phạm Hà Nội
                                    </li>
                                    <li>
                                        Tác giả SGK Lịch sử, bộ Cánh Diều
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="Footer__inner__row r2">
                            <div className="Footer__inner__title">
                                Đơn vị bảo trợ và tài trợ
                            </div>
                            <div className="Footer__inner__disc">
                                Hội Di sản Văn hoá Việt Nam
                            </div>
                            <Link to="https://www.youtube.com/watch?v=mZ_Y6QkbSy4&feature=youtu.be">
                                <div className="Footer__inner__disc">
                                    Quỹ Hỗ trợ bảo tồn di sản văn hoá Việt Nam
                                </div>
                            </Link>
                            <div className="Footer__inner__disc">
                                Công ty Cổ phần Công nghệ Giáo dục AES
                            </div>
                        </div>
                        <div className="Footer__inner__row r3">
                            <div className="Footer__inner__title">
                                Liên hệ
                            </div>
                            <div className="Footer__inner__icon">
                                <Link to="">
                                    <FaFacebook />
                                </Link>
                                <Link to="">
                                    <FaInstagram />
                                </Link>
                                <Link to="https://www.youtube.com/watch?v=mZ_Y6QkbSy4&feature=youtu.be">
                                    <FaYoutube />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default FooterText;