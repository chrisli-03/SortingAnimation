<template>
	<svg id="my-svg" v-bind:width="panelWidth" v-bind:height="panelHeight">
		<g v-for="(item, index) in data" class="bar">
			<rect v-bind="{ 'x':index*barWidth, 'y':panelHeight-item*heightRatio }" v-bind:width="barWidth+0.3" v-bind:height="item*heightRatio"/>
    	</g>
	</svg>
</template>

<script>
export default {
	data () {
	    return {
			data: [1, 10, 37, 15, 13, 25, 30, 11, 17, 35, 10, 25, 15, 5, 27, 15, 13, 25, 36, 15, 14, 35, 10, 14, 15, 35, 17, 12, 13, 25, 30, 14, 17, 35, 10, 25, 15],
			panelWidth: 1,
			panelHeight: 1,
			maxHeight: 1
		}
	},
	methods: {
		onResize(event) {
			let mySvg = document.querySelector('#my-svg')
			this.panelWidth = mySvg.parentNode.clientWidth
			this.panelHeight = mySvg.parentNode.clientHeight
			this.maxHeight = Math.max(...this.data)
		},
		shuffle() {
			let array = this.data
			let currentIndex = array.length, temporaryValue, randomIndex;
			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}
			this.data = array
		}
	},
	computed: {
		barWidth: function() {
			return this.panelWidth/this.data.length
		},
		heightRatio: function() {
			return this.panelHeight/this.maxHeight
		}
	},
	mounted: function() {
		window.addEventListener('resize', this.onResize)
		this.onResize()
	},
	beforeDestroy: function() {
		window.removeEventListener('resize', this.onResize)
	}
}
</script>

<style scoped>
	.bar { fill: tomato }
</style>
