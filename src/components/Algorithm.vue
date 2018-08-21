<template>

</template>

<script>
import algorithms from '../js/algorithm.js'
export default {
	data () {
	    return {
			selected: 'bubbleSort'
		}
	},
	methods: {
		getSelected() {
			return algorithms[this.selected]
		}
	}
}
</script>

<style scoped>

</style>
