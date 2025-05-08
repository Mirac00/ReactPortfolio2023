import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './/css/slider.css';

class PhotoSlider extends Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      activeSlideHeight: 0,
      isTransitioning: false,
      currentSlideIndex: 0,
    };
  }

  componentDidMount() {
    this.setActiveSlideHeight(this.state.currentSlideIndex);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setActiveSlideHeight(this.state.currentSlideIndex);
  };

  setActiveSlideHeight = (index) => {
    const slider = this.slider.current.innerSlider.list;
    const targetSlide = slider.querySelector(`[data-index="${index}"] img`);
    if (targetSlide) {
      const slideHeight = targetSlide.clientHeight;
      this.setState({ activeSlideHeight: slideHeight }, () => {
        // Ustawienie wysokości slick-track po zmianie stanu
        slider.style.height = `${slideHeight}px`;
      });
    }
  };

  handleBeforeChange = (oldIndex, newIndex) => {
    this.setState({ isTransitioning: true });
    this.setActiveSlideHeight(newIndex);
  };

  handleAfterChange = (index) => {
    this.setState({ isTransitioning: false, currentSlideIndex: index });
  };

  render() {
    const { activeSlideHeight, isTransitioning } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      centerMode: true,
      centerPadding: '0',
      nextArrow: <SampleNextArrow sliderRef={this.slider} slideHeight={activeSlideHeight} />,
      prevArrow: <SamplePrevArrow sliderRef={this.slider} slideHeight={activeSlideHeight} />,
      beforeChange: this.handleBeforeChange,
      afterChange: this.handleAfterChange,
    };

    return (
      <div
        className='slider-box'
        style={{
          height: activeSlideHeight ? `${activeSlideHeight}px` : 'auto',
          transition: 'height 0.5s ease',
        }}
      >
        <Slider ref={this.slider} {...settings}>
          {this.props.images.map((image, index) => (
            <div
              key={index}
              style={{
                opacity: isTransitioning ? 0 : 1,
                transition: 'opacity 0.5s ease',
              }}
            >
              <img
                src={image}
                alt={`image-${index}`}
                className='slider-image'
                onLoad={() => this.setActiveSlideHeight(index)}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

function SampleNextArrow(props) {
  const { className, sliderRef, slideHeight } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{
        top: slideHeight ? `${slideHeight / 2 - 25}px` : '50%', // Dynamiczne ustawienie top
        transition: 'top 0.5s ease',
      }}
      onClick={() => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      }}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, sliderRef, slideHeight } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{
        top: slideHeight ? `${slideHeight / 2 - 25}px` : '50%', // Dynamiczne ustawienie top
        transition: 'top 0.5s ease',
      }}
      onClick={() => {
        if (sliderRef.current) {
          sliderRef.current.slickPrev();
        }
      }}
    ></div>
  );
}

export default PhotoSlider;
