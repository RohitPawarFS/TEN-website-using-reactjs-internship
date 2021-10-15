import React from 'react';
import ImageSliderPage from './ImageSliderPage';
import { SliderData } from './testimonialsPage';

export default function TestimonialsMainPage() {
    return (
        <section className="TestimonialsMainPage">
            <h1 style={{textAlign:'center',fontSize:'50px'}}>T<u>estimonial</u>s</h1>
            <video className="consulting-vid" autoPlay loop muted>
                <source src="https://video.wixstatic.com/video/11062b_bc016da29c8b4da282f4052c9a538621/720p/mp4/file.mp4" type="video/mp4" />
            </video>
            <ImageSliderPage slides={SliderData}/>
        </section>
    );
}