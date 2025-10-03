<template>
	<div class=" bg-[#000032]">
    <div class="max-w-screen-lg mx-auto px-4">
            <div class="font-bold text-xl sm:text-2xl md:text-3xl text-white flex justify-center pt-16 text-center">
                They Reached Their <span></span><span class="text-[#28CCFF] ml-2">Objective</span>
            </div>
            <div class="text-base sm:text-lg mt-4 flex justify-center text-white text-center">
              Take a look at some of our student’s feedbacks
            </div>
        </div>
		<div class="mx-auto w-3/4 py-20">
			<div class="navigation-wrapper">
				<div 	data-aos="zoom-in-up" data-aos-duration="800" ref="container" class="keen-slider"> 
					<div
						class="keen-slider__slide  bg-white text-xprimary-content rounded-2xl w-full h-full"
						v-for="(item, index) in items"
					>
						<div class="flex items-start h-full ">
							<NuxtImg :src="item.img" class="rounded-lg h-full w-full" />
						</div>
					</div>
				</div>
				<svg
					@click="slider.prev()"
					class="mx-2 text-xprimary fill-xprimary -ml-14 fill-white"
					
					:class="{
						arrow: true,
						'arrow--left': true,
						'arrow--disabled': current === 0,
					}"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
						fill="#28CCFF"
					></path>
				</svg>
				<svg
					v-if="slider"
					@click="slider.next()"
					class="text-xprimary fill-xprimary -mr-14 fill-white"
					
					:class="{
						arrow: true,
						'arrow--right': true,
						'arrow--disabled':
							current === slider.track.details.slides.length - 1,
					}"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
					    fill="#28CCFF"
					></path>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue';
import { useKeenSlider } from 'keen-slider/vue.es';
import 'keen-slider/keen-slider.min.css';

export default {
  data() {
    return {
      items: [
        { img: "https://i.ibb.co/JFRbJ9F/IMG-0663-min.jpg" },
        { img: "https://i.ibb.co/3Wh3sPd/IMG-0664-min.jpg" },
        { img: "https://i.ibb.co/Qk4nTBW/IMG-0665-min.jpg" },
        { img: "https://i.ibb.co/gvjtDfS/IMG-0666-min.jpg" },
        { img: "https://i.ibb.co/0r8hGxG/IMG-0667-min.jpg" },
        { img: "https://i.ibb.co/Tmh1jrZ/IMG-0668-min.jpg" }
      ]
    };
  },

	setup() {
		const current = ref(0);
		const [container, slider] = useKeenSlider({
			loop: true,
			mode: 'free-snap',
			slides: {
				perView: 3,
				spacing: 30,
			},
			breakpoints: {
				'(max-width: 900px)': {
					slides: {
						perView: 1,
                        spacing: 40,
					},
				},
			},
			slideChanged: (s) => {
				current.value = s.track.details.rel;
			},
		});

		const dotHelper = computed(() =>
			slider.value
				? [...Array(slider.value.track.details.slides.length).keys()]
				: []
		);
		return { container, current, dotHelper, slider };
	},
};
</script>

<style>
[class^='number-slide'],
[class*=' number-slide'] {
	background: #000032;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 50px;
	color: #fff;
	font-weight: 500;
	height: 270px;
}
.number-slide1 {

	background: rgb(64, 175, 255);
	background: linear-gradient(
		128deg,
		rgba(64, 175, 255, 1) 0%,
		rgba(63, 97, 255, 1) 100%
	);
}
.number-slide2 {
	background: rgb(255, 75, 64);
	background: linear-gradient(
		128deg,
		rgba(255, 154, 63, 1) 0%,
		rgba(255, 75, 64, 1) 100%
	);
    height: 100px;
}
.number-slide3 {
	background: rgb(182, 255, 64);
	background: linear-gradient(
		128deg,
		rgba(182, 255, 64, 1) 0%,
		rgba(63, 255, 71, 1) 100%
	);
	background: linear-gradient(
		128deg,
		rgba(189, 255, 83, 1) 0%,
		rgba(43, 250, 82, 1) 100%
	);
}
.number-slide4 {
	background: rgb(64, 255, 242);
	background: linear-gradient(
		128deg,
		rgba(64, 255, 242, 1) 0%,
		rgba(63, 188, 255, 1) 100%
	);
}
.number-slide5 {
	background: rgb(255, 64, 156);
	background: linear-gradient(
		128deg,
		rgba(255, 64, 156, 1) 0%,
		rgba(255, 63, 63, 1) 100%
	);
}
.number-slide6 {
	background: rgb(64, 76, 255);
	background: linear-gradient(
		128deg,
		rgba(64, 76, 255, 1) 0%,
		rgba(174, 63, 255, 1) 100%
	);
}
.keen-slider{
    height: 600px; 
}
.navigation-wrapper {
	position: relative;
    height: 100;
}
.dots {
	display: flex;
	padding: 10px 0;
	justify-content: center;
}
.dot {
	border: none;
	width: 10px;
	height: 10px;
	background: #f8f6f6;
	border-radius: 50%;
	margin: 0 5px;
	padding: 5px;
	cursor: pointer;
}
.dot:focus {
	outline: none;
}
.dot.active {
	background: #fcfcfc;
}
.arrow {
	width: 30px;
	height: 30px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	-webkit-transform: translateY(-50%);
	fill: #fff;
	cursor: pointer;
}
.arrow--left {
	left: 5px;
}
.arrow--right {
	left: auto;
	right: 5px;
}
.arrow--disabled {
	fill: rgba(15, 201, 243, 0.5);
}
</style>
