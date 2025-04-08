import React, { useState } from "react";
import "./Flashcard.scss";
import { Link } from "react-router-dom";

function Flashcard({ sectionData, title, color, id }) {
  const [showMore, setShowMore] = useState(false); // Trạng thái hiển thị thêm

  // Số lượng items hiển thị ban đầu
    const initialItems = 4;

    const handleShowMore = () => {
        setShowMore(!showMore); // Toggle trạng thái
    };

    return (
        <div className="flashcard" style={{ "--hover-color": color || "#89231E" }} id={id}>
            <div className="flashcard__inner">
                {/* Header */}
                <div className="flashcard__inner__header" style={{ color: color || "#000" }}>
                <div className="flashcard__inner__header__title">{title}</div>
                <div className="flashcard__inner__header__more" onClick={handleShowMore}>
                    {showMore ? "Thu gọn" : "Xem thêm"} {/* Thay đổi text dựa vào trạng thái */}
                </div>
                </div>

                {/* Content */}
                <div className="flashcard__inner__content">
                {(showMore ? sectionData : sectionData.slice(0, initialItems)).map((item) => (
                    <Link to={item.web || "#"} key={item.id} className="flashcard__inner__content__item">
                        <img alt={`Image ${item.id}`} src={item.url} />
                    </Link>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Flashcard;
