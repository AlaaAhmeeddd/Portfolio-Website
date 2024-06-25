"use client"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import { Swiper as SwiperInstance } from 'swiper'

type sliderStyle = {
    swiper: SwiperInstance | null,
    containerStyle: string,
    btnStyle: string,
}

function WorkSliderBtn({ swiper, containerStyle, btnStyle }: sliderStyle) {
    return (
        <div className={containerStyle}>
            <button className={btnStyle} onClick={() => swiper?.slidePrev()}>
                <PiCaretLeftBold />
            </button>
            <button className={btnStyle} onClick={() => swiper?.slideNext()}>
                <PiCaretRightBold />
            </button>
        </div>
    )
}

export default WorkSliderBtn
