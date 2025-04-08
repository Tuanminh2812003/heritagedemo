
function Section7(){
    const buttonHandle = (event) => {
        event.preventDefault();  // Ngăn chặn sự kiện reload trang
        // Thực hiện các hành động khác tại đây
        console.log("Form has been submitted!");
    };
    return(
        <>
            <div className="Section7">
                <div className="container">
                    <div className="Section7__inner">
                        <div className="Section7__inner__title">
                            Không gian trách nhiệm
                        </div>
                        <div className="Section7__inner__disc">
                            Bạn hãy thiết kế một video/poster hoặc lá thư để thể hiện chủ đề: “Cảm nghĩ sau khi tìm hiểu thông tin về di sản trên website/Đề xuất những biện pháp bảo tồn và quảng bá hình ảnh di sản Thành nhà Hồ”
                        </div>
                        <div className="Section7__inner__disc">
                            Những thông tin mà bạn đóng góp là động lực quý giá để nhóm tác giả phát triển dự án đồng thời góp phần lan tỏa, bảo tồn và phát huy giá trị di sản văn hóa Việt Nam.
                        </div>
                        <form>
                            <label htmlFor="form__name">Họ và tên</label>
                            <input type="text" id="form__name"/>
                            <label htmlFor="form__email">Email</label>
                            <input type="email" id="form__email"/>
                            <label>Đính kèm file</label>
                            <input type="file" className="Section7__inner__form"/>
                            <button onClick={(event) => buttonHandle(event)}>Gửi phản hồi của bạn</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section7;