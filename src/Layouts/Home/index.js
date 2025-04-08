import "./Home.scss";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Flashcard from "../../Components/Flashcard";
import sections from "../../constants/data";

function Home(){
    return(
        <>
            <Header/>
            <div className="home">
                <div className="home__section1">
                    <img src="/Home/banner.png" alt="banner"/>
                </div>
                <div className="home__section2">
                    <div className="container">
                        <div className="home__section2__inner">
                            <img src="/Home/section2.png" alt="section2"/>
                            <div className="home__section2__inner__box">
                                <div className="home__section2__inner__box__text">
                                    <b>Heritage Flash XR</b>  là bộ thẻ flash di sản tích hợp công nghệ thực tế ảo (AR), mang đến trải nghiệm học tập và khám phá di sản hoàn toàn mới.
                                </div>
                                <div className="home__section2__inner__box__text">
                                    Bộ thẻ được chia thành 4 nhóm giúp người dùng dễ dàng phân loại và sử dụng:
                                </div>
                                <ul>
                                    <li>
                                        Di sản thiên nhiên Thế giới 
                                    </li>
                                    <li>
                                        Di sản vật thể Thế giới
                                    </li>
                                    <li>
                                        Di sản phi vật thể Thế giới
                                    </li>
                                    <li>
                                        Di sản tư liệu
                                    </li>
                                </ul>
                                <div className="home__section2__inner__box__text">
                                    Quét mã QR được in trên mỗi thẻ để truy cập nội dung thực tế ảo, giúp tái hiện sống động các địa danh văn hóa, kiến trúc lịch sử!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__section3">
                    <div  className="container">
                        <div className="home__section3__inner">
                        <Flashcard
                            sectionData={sections.diSanVatThe}
                            title="Di sản vật thể Thế giới"
                            color="#89231E"
                            id="diSanVatThe"
                        />
                        <Flashcard
                            sectionData={sections.diSanThienNhien}
                            title="Di sản thiên nhiên Thế giới"
                            color="#1D5136"
                            id="diSanThienNhien"
                        />
                        <Flashcard
                            sectionData={sections.diSanPhiVatThe}
                            title="Di sản phi vật thể Thế giới"
                            color="#374151"
                            id="diSanPhiVatThe"
                        />
                        <Flashcard
                            sectionData={sections.diSanTuLieu}
                            title="Di sản tư liệu"
                            color="#4C3932"
                            id="diSanTuLieu"
                        />
                        </div>
                    </div>
                </div>
                <div className="redMode">
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Home;