export const slickConf = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10%",
    pauseOnFocus: false,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          centerPadding: "8%",
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          centerMode: false,
        },
      },
    ],
  };