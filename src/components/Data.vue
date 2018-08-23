<template>
	<div id="dataPanel"></div>
</template>

<script>
export default {
	data () {
    return {

		}
	},
	methods: {
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
	}
}
</script>

<style scoped>
	#dataPanel {
		width: 100%;
		height: 100%;
		background-color: #fff;
	}
</style>
