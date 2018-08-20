<template>
	<div id="app">
		<div id="canvasPanel" class="panel">
			<div class="holder"><my-canvas /></div>
		</div>
		<div id="algorithmPanel" class="panel" style="padding-top: 0;">
			<div class="holder"></div>
		</div>
		<div id="dataPanel" class="panel" style="padding-top: 0;">
			<div class="holder"></div>
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
	padding: 10px;
}
.holder {
	width: 100%;
	height: 100%;
	border: 1px solid coral;
	border-radius: 10px;
	overflow: hidden;
}
</style>
