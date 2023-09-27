    import React from 'react';
    import { Carousel } from 'antd';
    const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    };
    const Feedback = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange}>
        <div>
            <h3 style={contentStyle}>User1 : This website is awesome!</h3>
        </div>
        <div>
            <h3 style={contentStyle}>User2 : This website is awesome!</h3>
        </div>
        <div>
            <h3 style={contentStyle}>User3 : This website is awesome!</h3>
        </div>
        <div>
            <h3 style={contentStyle}>User4 : This website is awesome!</h3>
        </div>
        </Carousel>
    );
    };
    export default Feedback;