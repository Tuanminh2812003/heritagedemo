import Section4 from "./Section4";

function Section1(){
    return(
        <>
        <div style={{padding: "40px 0px"}}>
            <div className="Section1__title">
                <div className="container">
                    <div className="Section1__title__inner">
                    Câu chuyện tâm linh
                    </div>
                </div>
            </div>
            <input type="radio" id="inner1p3" name="section1p3" defaultChecked/>
            <input type="radio" id="inner2p3" name="section1p3"/>
            <input type="radio" id="inner3p3" name="section1p3"/>
            <input type="radio" id="inner4p3" name="section1p3"/>
            <div className="Section1__menu">
                <div className="container">
                    <div className="Section1__menu__inner">

                        <label className="Section1__menu__inner__tab lable1p3" for="inner1p3">Truyền Thuyết mẹ Âu Cơ</label>
                        <label className="Section1__menu__inner__tab lable2p3" for="inner2p3">Truyền thuyết về tục thờ Mẫu Liễu Hạnh</label>
                        <label className="Section1__menu__inner__tab lable3p3" for="inner3p3">Truyền thuyết nàng Man Nương ở chùa Tổ Bắc Ninh</label>
                        <label className="Section1__menu__inner__tab lable4p3" for="inner4p3">Văn hóa tín ngưỡng thờ Mẫu Tam phủ và mối liên hệ với Phật giáo</label>
                    </div>
                </div>
            </div>
            <div className="Section1__content">
                <div className="container">

                    <div className="Section1__content__inner inner1p3">
                        <div className="Section1__content__inner__title">
                        Truyền Thuyết mẹ Âu Cơ
                        </div>
                        <Section4 />
                    </div>
                    <div className="Section1__content__inner inner2p3">
                        <div className="Section1__content__inner__title">
                        Truyền thuyết về tục thờ Mẫu Liễu Hạnh
                        </div>
                        <div className="Section1__content__inner__video">
                            <iframe width="100%" height="200px" src="https://www.youtube.com/embed/8jiCJlp5NpU?si=CI-hZYlViUCT-W6r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div className="Section1__content__inner__video__disc">
                                Video: <b>"Truyền thuyết thờ Mẫu Liễu Hạnh"</b>
                            </div>
                        </div>
                    </div>
                    <div className="Section1__content__inner inner3p3">
                        <div className="Section1__content__inner__row">
                            <div className="Section1__content__inner__row__text">
                                <div className="Section1__content__inner__title">
                                    Truyền thuyết nàng Man Nương ở chùa Tổ Bắc Ninh
                                </div>
                                <div className="Section1__content__inner__text">
                                    Chùa Tổ, hay Phúc Nghiêm Tự, tọa lạc tại phường Hà Mãn, thị xã Thuận Thành, Bắc Ninh, là di tích gắn với huyền thoại về Man Nương – Phật Mẫu của Phật giáo Việt Nam. Theo truyền thuyết, Man Nương gặp thiền sư Khâu Đà La từ Ấn Độ, cảm phục đạo hạnh của ông, nàng học đạo và sau đó hạ sinh con gái mang tên là Diệu Thiện. Diệu Thiện sau này truyền bá Phật pháp, được xem là tổ sư đầu tiên của Phật giáo Việt Nam. Khi Man Nương qua đời, dân làng lập miếu thờ bà, nơi này trở thành Chùa Tổ, biểu tượng của lòng từ bi và sự giác ngộ, thu hút Phật tử và du khách.
                                </div>
                            </div>
                            <div className="Section1__content__inner__row__image">
                                <div className="Section1__content__inner__image" >
                                    <img src="/image/TNTM/Section1-4.jpg" />
                                </div>
                                <div className="Section1__content__inner__video__disc">
                                    Ảnh: <b>Tượng phật Mẫu Man Nương</b>
                                </div>
                                <div className="Section1__content__inner__video__disc">
                                    Nguồn:  <b>Đài Phát thanh và Truyền Hình Bắc Ninh</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Section1__content__inner inner4p3">
                    <div className="Section1__content__inner__row">
                            <div className="Section1__content__inner__row__text">
                                <div className="Section1__content__inner__title">
                                    Văn hóa tín ngưỡng thờ Mẫu Tam phủ và mối liên hệ với Phật giáo
                                </div>
                                <div className="Section1__content__inner__text">
                                    Theo sử sách được ghi lại, Đạo Phật và Đạo Mẫu luôn đồng hành và gắn bó mật thiết với nhau trog suốt triều dài lịch sử. Đạo Mẫu ra đời gắn với Thánh Mẫu Liễu Hạnh, một số nguồn thông tin ghi Mẫu Liễu Hạnh quy y nhà Phật, điều này dẫn đến việc Mẫu không để lại bất kỳ pháp môn nào riêng cho Đạo Mẫu, mà thay vào đó, người đời sau cho rằng Mẫu muốn mọi người học hỏi và thấm nhuần những giáo lý tốt đẹp của nhà Phật. Nơi đâu có bàn thờ Phật, nơi đó thường có ban thờ Mẫu, và trong các đền điện thờ Mẫu, luôn có bàn thờ Phật bên cạnh.
                                </div>
                            </div>
                            <div className="Section1__content__inner__row__image">
                                <div className="Section1__content__inner__image" >
                                    <img src="/image/TNTM/Section5.1new.png" />
                                </div>
                                <div className="Section1__content__inner__video__disc">
                                    Ảnh: <b>"Bức tượng Thánh Mẫu Liễu Hạnh tại Phủ Quảng Cung (Phủ Nấp)"</b>
                                </div>
                                <div className="Section1__content__inner__video__disc">
                                    Nguồn:  <b>Vietnam+</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Section1;