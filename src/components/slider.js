import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/componentsCSS/slider.css';

class PhotoSlider extends Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.lastTouchTime = 0;
    this.state = {
      activeSlideHeight: 0,
      isTransitioning: false,
      currentSlideIndex: 0,
      transforms: {},
      isDragging: false,
      startX: 0,
      startY: 0,
      touchDistance: null,
      initialScale: 1
    };
  }

  componentDidMount() {
    this.setActiveSlideHeight(0);
    window.addEventListener('resize', this.handleResize);
    this.sliderContainer.addEventListener('wheel', this.handleContainerWheel, { passive: false });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    this.sliderContainer.removeEventListener('wheel', this.handleContainerWheel);
  }

  handleContainerWheel = (e) => {
    if (!this.isMobile()) e.preventDefault();
  };

  handleResize = () => {
    this.setActiveSlideHeight(this.state.currentSlideIndex);
  };

  setActiveSlideHeight = (index) => {
    const slider = this.slider.current.innerSlider.list;
    const targetSlide = slider.querySelector(`[data-index="${index}"] img`);
    if (targetSlide) {
      const slideHeight = targetSlide.clientHeight;
      this.setState({ activeSlideHeight: slideHeight }, () => {
        slider.style.height = `${slideHeight}px`;
      });
    }
  };

  handleBeforeChange = (oldIndex, newIndex) => {
    this.setState({
      isTransitioning: true,
      transforms: {
        ...this.state.transforms,
        [oldIndex]: { scale: 1, translateX: 0, translateY: 0 }
      }
    });
  };

  handleAfterChange = (index) => {
    this.setState({ 
      isTransitioning: false, 
      currentSlideIndex: index 
    });
  };

  handleWheel = (e, index) => {
    if (!this.isMobile()) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      this.updateTransform(index, delta);
    }
  };

  handleDoubleClick = (index) => {
    if (!this.isMobile()) {
      this.setState(prevState => ({
        transforms: {
          ...prevState.transforms,
          [index]: {
            scale: prevState.transforms[index]?.scale === 1 ? 2 : 1,
            translateX: 0,
            translateY: 0
          }
        }
      }));
    }
  };

  handleMouseDown = (e, index) => {
    if (!this.isMobile() && this.state.transforms[index]?.scale > 1) {
      this.setState({
        isDragging: true,
        startX: e.clientX - (this.state.transforms[index]?.translateX || 0),
        startY: e.clientY - (this.state.transforms[index]?.translateY || 0)
      });
    }
  };

  handleMouseMove = (e, index) => {
    if (this.state.isDragging && this.state.transforms[index]?.scale > 1) {
      this.setState(prevState => ({
        transforms: {
          ...prevState.transforms,
          [index]: {
            ...prevState.transforms[index],
            translateX: e.clientX - prevState.startX,
            translateY: e.clientY - prevState.startY
          }
        }
      }));
    }
  };

  handleMouseUp = () => {
    this.setState({ isDragging: false });
  };

  handleTouchStart = (e, index) => {
    if (e.touches.length === 2) {
      this.setState({
        touchDistance: this.calculateDistance(e.touches),
        initialScale: this.state.transforms[index]?.scale || 1
      });
    }
  };

  handleTouchMove = (e, index) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const newDistance = this.calculateDistance(e.touches);
      const scale = Math.min(Math.max(
        (newDistance / this.state.touchDistance) * this.state.initialScale, 
        1
      ), 3);
      
      this.setState(prevState => ({
        transforms: {
          ...prevState.transforms,
          [index]: {
            ...prevState.transforms[index],
            scale
          }
        }
      }));
    }
  };

  calculateDistance = (touches) => {
    return Math.hypot(
      touches[0].clientX - touches[1].clientX,
      touches[0].clientY - touches[1].clientY
    );
  };

  updateTransform = (index, delta) => {
    this.setState(prevState => ({
      transforms: {
        ...prevState.transforms,
        [index]: {
          scale: Math.min(Math.max(
            (prevState.transforms[index]?.scale || 1) * delta,
            1
          ), 3),
          translateX: prevState.transforms[index]?.translateX || 0,
          translateY: prevState.transforms[index]?.translateY || 0
        }
      }
    }));
  };

  isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  render() {
    const { activeSlideHeight, isTransitioning, transforms } = this.state;
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      swipeToSlide: true,
      centerMode: false,
      nextArrow: <SampleNextArrow sliderRef={this.slider} slideHeight={activeSlideHeight} />,
      prevArrow: <SamplePrevArrow sliderRef={this.slider} slideHeight={activeSlideHeight} />,
      beforeChange: this.handleBeforeChange,
      afterChange: this.handleAfterChange,
    };

    return (
      <div
        ref={el => this.sliderContainer = el}
        className="slider-box"
        style={{ height: activeSlideHeight ? `${activeSlideHeight}px` : 'auto' }}
      >
        <Slider ref={this.slider} {...settings}>
          {this.props.images.map((image, index) => {
            const transform = transforms[index] || { scale: 1, translateX: 0, translateY: 0 };
            
            return (
              <div
                key={index}
                className="slide-container"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transition: 'opacity 0.5s ease',
                }}
              >
                <div className="image-wrapper">
                  <img
                    src={image}
                    alt={`image-${index}`}
                    className={`slider-image ${transform.scale > 1 ? 'zoomed' : ''}`}
                    style={{
                      transform: `translate(${transform.translateX}px, ${transform.translateY}px) scale(${transform.scale})`,
                      transition: this.state.isDragging ? 'none' : 'transform 0.3s ease'
                    }}
                    onLoad={() => this.setActiveSlideHeight(index)}
                    onWheel={(e) => this.handleWheel(e, index)}
                    onDoubleClick={() => this.handleDoubleClick(index)}
                    onTouchStart={(e) => this.handleTouchStart(e, index)}
                    onTouchMove={(e) => this.handleTouchMove(e, index)}
                    onMouseDown={(e) => this.handleMouseDown(e, index)}
                    onMouseMove={(e) => this.handleMouseMove(e, index)}
                    onMouseUp={this.handleMouseUp}
                  />
                </div>
              </div>
            );
          })}
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
        top: slideHeight ? `${slideHeight / 2 - 25}px` : '50%',
        transition: 'top 0.5s ease',
      }}
      onClick={() => sliderRef.current?.slickNext()}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, sliderRef, slideHeight } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{
        top: slideHeight ? `${slideHeight / 2 - 25}px` : '50%',
        transition: 'top 0.5s ease',
      }}
      onClick={() => sliderRef.current?.slickPrev()}
    />
  );
}

export default PhotoSlider;