<template>
	<svg id="my-svg" v-bind:width="panelWidth" v-bind:height="panelHeight">
		<g v-for="(item, index) in data" class="bar" shape-rendering="crispEdges"
			v-bind:class="{ hidden: index === m || index === n }">
			<rect v-bind="{ 'x':index*barWidth, 'y':panelHeight-item*heightRatio }" v-bind:width="barWidth" v-bind:height="item*heightRatio"/>
    	</g>
		<g v-if="m >= 0" class="bar selected" shape-rendering="crispEdges">
			<rect v-bind="{ 'x':(m+diff)*barWidth, 'y':panelHeight-data[m]*heightRatio }" v-bind:width="barWidth" v-bind:height="data[m]*heightRatio"/>
    	</g>
		<g v-if="n >= 0" class="bar selected" shape-rendering="crispEdges">
			<rect v-bind="{ 'x':(n-diff)*barWidth, 'y':panelHeight-data[n]*heightRatio }" v-bind:width="barWidth" v-bind:height="data[n]*heightRatio"/>
    	</g>
	</svg>
</template>

<script>
export default {
	data () {
	    return {
			data: [],
			panelWidth: 1,
			panelHeight: 1,
			maxHeight: 1,
			m: -1,
			n: -1,
			diff: 0,
			speed: 100
		}
	},
	methods: {
		onResize(event) {
			let mySvg = document.querySelector('#my-svg')
			this.panelWidth = mySvg.parentNode.clientWidth
			this.panelHeight = mySvg.parentNode.clientHeight
			this.maxHeight = Math.max(...this.data)
		},
		async shuffle() {
			let array = this.data
			let currentIndex = array.length, temporaryValue, randomIndex;
			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				await this.swap(randomIndex, currentIndex)
			}
			this.data = array
			this.speed = 40
			return new Promise((resolve) => {
				resolve(0)
			})
		},
		swap(m, n) {
			this.m = Math.min(m, n)
			this.n = Math.max(m, n)
			let _this = this
			return new Promise((resolve) => {
				let done = Math.abs(_this.m - _this.n)
				let interval = setInterval(() => {
					if (_this.diff < done) _this.diff += this.speed
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
		let newData = this.data
		for (let i = 0; i < 1000; i++) {
			newData.push(i)
		}
		this.data = newData
		window.addEventListener('resize', this.onResize)
		this.onResize()
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
