<template>
	<svg id="my-svg" v-bind:width="panelWidth" v-bind:height="panelHeight">
		<g v-for="(item, index) in data" class="bar" shape-rendering="crispEdges"
			v-bind:class="{ hidden: index === m || index === n }">
			<rect v-bind="{ 'x':index*barWidth, 'y':panelHeight-item*heightRatio }" v-bind:width="barWidth" v-bind:height="item*heightRatio"/>
    	</g>
		<g v-if="m > 0" class="bar selected" shape-rendering="crispEdges">
			<rect v-bind="{ 'x':(m+diff)*barWidth, 'y':panelHeight-data[m]*heightRatio }" v-bind:width="barWidth" v-bind:height="data[m]*heightRatio"/>
    	</g>
		<g v-if="n > 0" class="bar selected" shape-rendering="crispEdges">
			<rect v-bind="{ 'x':(n-diff)*barWidth, 'y':panelHeight-data[n]*heightRatio }" v-bind:width="barWidth" v-bind:height="data[n]*heightRatio"/>
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
			maxHeight: 1,
			m: -1,
			n: -1,
			diff: 0
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
		},
		swap(m, n) {
			this.m = Math.min(m, n)
			this.n = Math.max(m, n)
			let _this = this
			let promise = new Promise((resolve) => {
				let done = Math.abs(_this.m - _this.n)
				let interval = setInterval(() => {
					if (_this.diff < done) _this.diff += 0.5
					else {
						[_this.data[_this.m], _this.data[_this.n]] = [_this.data[_this.n], _this.data[_this.m]]
						_this.m = -1
						_this.n = -1
						_this.diff = 0
						clearInterval(interval)
						resolve(0)
					}
				}, 1000/60)
			})
			promise.then((val) => {
				let length = this.data.length
				let m = Math.floor(Math.random()*length)
				let n = Math.floor(Math.random()*length)
				this.swap(m, n)
			})
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
	mounted: async function() {
		/* let newData = this.data
		for (let i = 0; i < 10000; i++) {
			newData.push(i)
		}
		this.data = newData
		this.shuffle() */
		window.addEventListener('resize', this.onResize)
		this.onResize()
		this.swap(0, 2)
	},
	beforeDestroy: function() {
		window.removeEventListener('resize', this.onResize)
	}
}
</script>

<style scoped>
	.bar { fill: gold }
	.selected { fill: lightskyblue }
	.hidden { fill: transparent }
</style>
