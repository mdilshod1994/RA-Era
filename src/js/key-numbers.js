if ($(".key-numbers").length > 0){
	var swiper = new Swiper(".key-numbers__swiper", {
        slidesPerView: "auto",
        spaceBetween: 28,
		slidesPerGroup: 1,
		loop: false,
		loopFillGroupWithBlank: false,
		speed: 1000,
		iOSEdgeSwipeDetection: true,
		breakpoints: {
			30: {
				slidesPerView: "auto",
				spaceBetween: 12,
				slidesPerGroup: 1,
			},
			760: {
				slidesPerView: "auto",
				spaceBetween: 28,
				slidesPerGroup: 1,
			},
		},
        navigation: {
			nextEl: ".usage .arrow--next",
			prevEl: ".usage .arrow--prew",
        },
    });
}