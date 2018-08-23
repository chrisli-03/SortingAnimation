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
			speed: 10
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
			let currentIndex = array.length-1, randomIndex
			while (currentIndex > -1) {
				randomIndex = (Math.random() * array.length)|0
				await this.swap(randomIndex, currentIndex)
				currentIndex -= 1
			}
			this.data = array
			return new Promise((resolve) => {
				resolve(0)
			})
		},
		shuffleInst() {
			let array = this.data
			let currentIndex = array.length-1, randomIndex
			let promise = new Promise((resolve) => {
				while (currentIndex > -1) {
					randomIndex = (Math.random() * array.length)|0;
					[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
					currentIndex -= 1
				}
				resolve(0)
			})
			promise.then(() => { return })
		},
		swap(m, n) {
			this.m = Math.min(m, n)
			this.n = Math.max(m, n)
			let _this = this
			let done = Math.abs(_this.m - _this.n)
			let speed = done/_this.speed
			return new Promise((resolve) => {
				if (_this.diff+speed >= done) {
					[_this.data[_this.m], _this.data[_this.n]] = [_this.data[_this.n], _this.data[_this.m]]
					_this.m = -1
					_this.n = -1
					_this.diff = 0
					resolve(0)
				} else {
					let interval = setInterval(() => {
						if (_this.diff < done) _this.diff = Math.min(_this.diff+speed, done)
						else {
							[_this.data[_this.m], _this.data[_this.n]] = [_this.data[_this.n], _this.data[_this.m]]
							_this.m = -1
							_this.n = -1
							_this.diff = 0
							clearInterval(interval)
							resolve(0)
						}
					}, 1000/60)
				}
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
		for (let i = 1; i < 100; i++) {
			newData.push(i)
		}
		/* for (let i = 0; i < 100; i++) {
			newData.push((Math.random() * 10 + 1)|0)
		} */
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
	#my-svg { background-color: white; }
</style>
