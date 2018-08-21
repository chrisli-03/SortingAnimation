<template>
	<div id="app">
		<div id="canvasPanel" class="panel">
			<div class="holder"><my-canvas ref="MyCanvas"/></div>
		</div>
		<div id="algorithmPanel" class="panel">
			<div class="holder"><algorithm ref="Algorithm"/></div>
		</div>
		<div id="dataPanel" class="panel">
			<div class="holder"></div>
		</div>
	</div>
</template>

<script>
import MyCanvas from './components/MyCanvas'
import Algorithm from './components/Algorithm'

export default {
	name: 'App',
	components: {
		MyCanvas,
		Algorithm
	},
	mounted: async function() {
		await this.$refs.MyCanvas.shuffle()
		let selected = this.$refs.Algorithm.getSelected()
		if (await selected(this.$refs.MyCanvas.data, this.$refs.MyCanvas.swap)) alert('done')
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
}
#canvasPanel {
	height: 65%;
	width: 100%;
}
#dataPanel {
	height: 35%;
	width: 30%;
}
#algorithmPanel {
	height: 35%;
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
	border: 1px solid coral;
	border-radius: 10px;
	overflow: hidden;
}
</style>
