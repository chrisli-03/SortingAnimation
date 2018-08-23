<template>
	<div id="app">
		<div id="canvasPanel" class="panel">
			<div class="holder"><my-canvas ref="MyCanvas"/></div>
		</div>
		<div id="algorithmPanel" class="panel">
			<div class="holder"><algorithm ref="Algorithm"/></div>
		</div>
		<div id="dataPanel" class="panel">
			<div class="holder"><my-data ref="MyData"/></div>
		</div>
	</div>
</template>

<script>
import MyCanvas from '@/components/MyCanvas'
import Algorithm from '@/components/Algorithm'
import MyData from '@/components/Data'
import eventBus from '@/js/EventBus'

export default {
	name: 'App',
	components: {
		MyCanvas,
		Algorithm,
		MyData
	},
	methods: {
		async sort() {
			let selected = this.$refs.Algorithm.getAlgorithm()
			if (await selected(this.$refs.MyCanvas.data, this.$refs.MyCanvas.swap)) {
				eventBus.$emit('sorted', 0)
				alert('done')
			}
		},
		async shuffle() {
			await this.$refs.MyCanvas.shuffleInst()
		}
	},
	created() {
		eventBus.$on('sort', id => {
			this.sort()
		})
		eventBus.$on('shuffle', id => {
			this.shuffle()
		})
	}
}
</script>

<style>
html, body { width: 100%; height: 100%; padding: 0; margin: 0; }
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	width: 100%;
	height: 100%;
	overflow: hidden;
	padding: 5px;
	box-sizing: border-box;
	background-color: rgb(235, 235, 235);
}
#canvasPanel {
	height: calc(100% - 200px);
	width: 100%;
}
#dataPanel {
	height: 200px;
	width: 30%;
}
#algorithmPanel {
	height: 200px;
	width: 70%;
}
.panel {
	float: left;
	box-sizing: border-box;
	padding: 5px;
}
.holder {
	width: 100%;
	height: 100%;
	border: 1px solid rgb(180, 180, 180);
	box-shadow: 1px 1px 3px 0 rgb(200, 200, 200);
	border-radius: 5px;
	overflow: hidden;
}
</style>
