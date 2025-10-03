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

            {
        img: "https://i.ibb.co/XpgWMm9/IMG-3309.jpg"
    },
    {
        img: "https://i.ibb.co/x79zG2R/IMG-3310.jpg"
    },
    {
        img: "https://i.ibb.co/Wngj74P/IMG-3311.jpg"
    },
    {
        img: "https://i.ibb.co/k59CyjJ/IMG-3312.jpg"
    },
    {
        img: "https://i.ibb.co/VgHMRDs/IMG-3312.png"
    },
    {
        img: "https://i.ibb.co/q5m6xf3/IMG-3313.jpg"
    },
    {
        img: "https://i.ibb.co/VHq2Tz6/IMG-3314.jpg"
    },
    {
        img: "https://i.ibb.co/YB7FTkN/IMG-3315.jpg"
    },
    {
        img: "https://i.ibb.co/swfH6q6/IMG-3316.jpg"
    },
    {
        img: "https://i.ibb.co/RYskB8N/IMG-3317.jpg"
    },
    {
        img: "https://i.ibb.co/ZNqrC0c/IMG-3318.jpg"
    },
    {
        img: "https://i.ibb.co/M904NM7/IMG-3319.jpg"
    },
    {
        img: "https://i.ibb.co/7RPnxVZ/IMG-3320.jpg"
    },
    {
        img: "https://i.ibb.co/1vL0NmB/IMG-3321.jpg"
    },
    {
        img: "https://i.ibb.co/sqk6z2F/IMG-3322.jpg"
    },
    {
        img: "https://i.ibb.co/x166BNY/IMG-3323.jpg"
    },
    {
        img: "https://i.ibb.co/cTsK4Yf/IMG-3324.jpg"
    },
    {
        img: "https://i.ibb.co/gP8sk4N/IMG-3325.jpg"
    },
    {
        img: "https://i.ibb.co/jfTGrDm/IMG-3326.jpg"
    },
    {
        img: "https://i.ibb.co/270Dv5D/IMG-3327.jpg"
    },
    {
        img: "https://i.ibb.co/zbDcV31/IMG-3328.jpg"
    },
    {
        img: "https://i.ibb.co/k1DSbJf/IMG-3329.jpg"
    },
    {
        img: "https://i.ibb.co/k3jYqTt/IMG-3330.jpg"
    },
    {
        img: "https://i.ibb.co/wM147PK/IMG-3331.jpg"
    },
    {
        img: "https://i.ibb.co/3YWBSkd/IMG-3332.jpg"
    },
    {
        img: "https://i.ibb.co/Yc65yLX/IMG-3333.jpg"
    },
    {
        img: "https://i.ibb.co/vm1bzmP/IMG-3334.jpg"
    },
    {
        img: "https://i.ibb.co/ns62yp9/IMG-3335.jpg"
    },
    {
        img: "https://i.ibb.co/r3sDDzN/IMG-3336.jpg"
    },
    {
        img: "https://i.ibb.co/sw5r8zW/IMG-3337.jpg"
    },
    {
        img: "https://i.ibb.co/hLKFfzS/IMG-3338.jpg"
    },
    {
        img: "https://i.ibb.co/FqMZF3Q/IMG-3339.jpg"
    },
    {
        img: "https://i.ibb.co/CMZSFP5/IMG-3340.jpg"
    },
    {
        img: "https://i.ibb.co/vdVHYNQ/IMG-3341.jpg"
    },
    {
        img: "https://i.ibb.co/ChZRjDv/IMG-3342.jpg"
    },
    {
        img: "https://i.ibb.co/xDczKQG/IMG-3343.jpg"
    },
    {
        img: "https://i.ibb.co/z69X5hR/IMG-3344.jpg"
    },
    {
        img: "https://i.ibb.co/BwnzXTq/IMG-3345.jpg"
    },
    {
        img: "https://i.ibb.co/X2tdPKc/IMG-3346.jpg"
    },
    {
        img: "https://i.ibb.co/SXh13Pb/IMG-3347.jpg"
    },
    {
        img: "https://i.ibb.co/R2ZKYrY/IMG-3348.jpg"
    },
    {
        img: "https://i.ibb.co/pwrTysK/IMG-3349.jpg"
    },
    {
        img: "https://i.ibb.co/x1WYWSZ/IMG-3350.jpg"
    },
    {
        img: "https://i.ibb.co/j65zs1X/IMG-3351.jpg"
    },
    {
        img: "https://i.ibb.co/T4YMGQk/IMG-3352.jpg"
    },
    {
        img: "https://i.ibb.co/d7BB285/IMG-3353.jpg"
    },
    {
        img: "https://i.ibb.co/2cRgVkp/IMG-3354.jpg"
    },
    {
        img: "https://i.ibb.co/KKXWcN4/IMG-3355.jpg"
    },
    {
        img: "https://i.ibb.co/HF3QJjQ/IMG-3356.jpg"
    },
    {
        img: "https://i.ibb.co/hZtKSvN/IMG-3357.jpg"
    },
    {
        img: "https://i.ibb.co/jwch1NJ/IMG-3358.jpg"
    },
    {
        img: "https://i.ibb.co/8gmfPqB/IMG-3359.jpg"
    },
    {
        img: "https://i.ibb.co/gPPBtNR/IMG-3360.jpg"
    },
    {
        img: "https://i.ibb.co/DgKh6rN/IMG-3361.jpg"
    },
    {
        img: "https://i.ibb.co/8sVWf58/IMG-3362.jpg"
    },
    {
        img: "https://i.ibb.co/gV98Qkw/IMG-3363.jpg"
    },
    {
        img: "https://i.ibb.co/PxVHMnt/IMG-3364.jpg"
    },
    {
        img: "https://i.ibb.co/wSkNFcg/IMG-3365.jpg"
    },
    {
        img: "https://i.ibb.co/DVKg4bT/IMG-3366.jpg"
    },
    {
        img: "https://i.ibb.co/NS1yHT9/IMG-3367.jpg"
    },
    {
        img: "https://i.ibb.co/TRSZ6mS/IMG-3368.jpg"
    },
    {
        img: "https://i.ibb.co/bb2HtR5/IMG-3369.jpg"
    },
    {
        img: "https://i.ibb.co/F8pWn88/IMG-3371.jpg"
    },
    {
        img: "https://i.ibb.co/n38xz3m/IMG-3372.jpg"
    },
    {
        img: "https://i.ibb.co/ncQB1xV/IMG-3373.jpg"
    },
    {
        img: "https://i.ibb.co/qkZL6Jz/IMG-3374.jpg"
    },
    {
        img: "https://i.ibb.co/MRP0BHT/IMG-3375.jpg"
    },
    {
        img: "https://i.ibb.co/mczJYWH/IMG-3376.jpg"
    }
      
			],
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
