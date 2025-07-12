import "./Content.css"
import imgContent from "../img/imgContent.png"
import logo from "../img/logo.png"
import logotdt from "../img/logotdt.jpg"

function Content(){

    return(
        <div id="containerContent">
            <div class="wrapperWSWord">
                <div class="nameWord">
                    Kế Toán Không Chỉ Là Số – Mà Là Đạo Đức & Giá Trị
                </div>
            </div>
            <div id="WrapperContent">
                <img src={imgContent} id="imageContent"/>
                <div id="LogosmallTitle">
                    <div id="logoTDT">
                        <img src={logotdt} id="tdt"/>
                    </div>
                    <div id="WrapperLogo">
                        <img src={logo} id="imgLogo"/>
                    </div>
                    <div class="smallTitle">
                        Làm Nghề Có Tâm = Sống Nghề Có Tầm
                    </div>
                </div>
            </div>
            <div class="news-ticker-wrapper">
            <div class="news-ticker">
                🔴 Chào mừng bạn đến với Workshop "Kế Toán Không Chỉ Là Số – Mà Là Đạo Đức & Giá Trị" 2025 | ⏰ Khai mạc lúc 13h30 | 📍 Địa điểm: TDTU - Hội trường A |
            </div>
            </div>

        </div>

    )
}

export default Content;



