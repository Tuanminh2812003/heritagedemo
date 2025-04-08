import { useState, useEffect, useRef } from "react";
import "./Header.scss";
import { FaBars } from "react-icons/fa";

function Header() {
    const [activeSection, setActiveSection] = useState(null); // Theo dõi ID của section hiện tại
    const [menuOpen, setMenuOpen] = useState(false); // Trạng thái hiển thị menu
    const menuRef = useRef(null); // Tham chiếu tới menu

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" }); // Cuộn mượt đến phần tử
            setActiveSection(id); // Cập nhật trạng thái khi nhấn
        }
        setMenuOpen(false); // Đóng menu sau khi chọn mục
    };
    const handleClickOutside = (event) => {
        // Kiểm tra nếu click xảy ra bên ngoài menu
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        // Lắng nghe sự kiện click
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Gỡ bỏ sự kiện khi component unmount
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleScroll = () => {
        const sections = ["diSanThienNhien", "diSanVatThe", "diSanPhiVatThe", "diSanTuLieu"];
        let currentSection = null;

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
                const offsetTop = section.offsetTop;
                const offsetHeight = section.offsetHeight;
                const scrollY = window.scrollY;

                if (scrollY >= offsetTop - 250 && scrollY < offsetTop + offsetHeight - 50) {
                    currentSection = id;
                }
            }
        });

        setActiveSection(currentSection);
    };


    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__inner__logo">
                        <img src="/Logo_do.png" alt="logo" />
                        <div className="header__inner__logo__text">HERITAGE FLASH XR</div>
                    </div>
                    <div
                        ref={menuRef}
                        className={`header__inner__menu ${menuOpen ? "menu-open" : ""}`}
                    >
                        <div
                            onClick={() => handleScrollToSection("diSanVatThe")}
                        >
                            Di sản vật thể Thế giới
                        </div>
                        <div
                            onClick={() => handleScrollToSection("diSanThienNhien")}
                        >
                            Di sản thiên nhiên Thế giới
                        </div>
                        <div
                            onClick={() => handleScrollToSection("diSanPhiVatThe")}
                        >
                            Di sản phi vật thể Thế giới
                        </div>
                        <div
                            onClick={() => handleScrollToSection("diSanTuLieu")}
                        >
                            Di sản tư liệu
                        </div>
                    </div>
                    <div
                        className="header__inner__res"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <FaBars />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
