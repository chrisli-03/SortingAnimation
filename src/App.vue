<template>
	<div id="app">
		<div id="canvasPanel" class="panel">
			<div style="height: 100%; width: 100%;"><my-canvas /></div>
		</div>
		<div id="dataPanel" class="panel">
		</div>
		<div id="algorithmPanel" class="panel">
		</div>
	</div>
</template>

<script>
import MyCanvas from './components/MyCanvas'

export default {
	name: 'App',
	components: {
		MyCanvas
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
}
#canvasPanel {
	height: 70%;
	width: 80%;
	padding: 0;
}
#dataPanel {
	height: 70%;
	width: 20%;
}
#algorithmPanel {
	height: 30%;
	width: 100%;
}
.panel {
	float: left;
	box-sizing: border-box;
	padding: 10px;
	border: 1px solid silver;
}
</style>
