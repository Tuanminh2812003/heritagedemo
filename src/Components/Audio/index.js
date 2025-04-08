import "./Audio.scss";
import { FaPlay, FaPause } from "react-icons/fa"; 
import { useState, useRef } from "react";

function Audio({ url, title, disc, audio }) {
    const [isPlaying, setIsPlaying] = useState(false); // Trạng thái phát/tạm dừng
    const audioRef = useRef(null); // Ref để điều khiển audio

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause(); // Tạm dừng audio
        } else {
            audioRef.current.play(); // Phát audio
        }
        setIsPlaying(!isPlaying); // Đổi trạng thái play/pause
    };

    return (
        <>
            <div className="Audio">
                <div className="Audio__back">
                    
                </div>
                <div className="Audio__inner">
                    <div
                        className="Audio__inner__image"
                        style={{ backgroundImage: `url(${url})` }}
                    ></div>
                    <div className="Audio__inner__text">
                        <div className="Audio__inner__text__title">
                            {title}
                        </div>
                        <div className="Audio__inner__text__disc">
                            {disc}
                        </div>
                    </div>
                    <div className="Audio__inner__play" onClick={handlePlayPause}>
                        {/* Hiển thị nút Play hoặc Pause dựa vào trạng thái */}
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </div>
                </div>
                {/* Thẻ audio ẩn */}
                <audio ref={audioRef} src={audio} />
            </div>
        </>
    );
}

export default Audio;
