<template>
	<div id="algorithmPanel">
		<div class="actionBar">
		</div>
		<div class="algorithmBar">
			<div class="algorithmBar_btn" v-for="(item, index) in data"
						v-bind:class="[{ selected: selected===item.algorithm }, { disabled: item.disabled }]" v-on:click="changeAlgorithm(item)">
				<div class="algorithmBar_btn_title">{{item.name}}</div>
				<div class="algorithmBar_btn_time" v-if="item.averageTime != ''">{{item.averageTime}}<span style="margin-left: 1px;"></span>ms</div>
			</div>
		</div>
	</div>
</template>

<script>
import algorithms from '../js/algorithm.js'
export default {
	data () {
    return {
			selected: '',
			data: [{
							name: 'SelectionSort',
							algorithm: 'selectionSort',
							averageTime: '',
							disabled: false
						},{
							name: 'InsertionSort',
							algorithm: 'insertionSort',
							averageTime: '',
							disabled: false
						},{
							name: 'BubbleSort',
							algorithm: 'bubbleSort',
							averageTime: '',
							disabled: false
						},{
							name: 'CocktailShakerSort',
							algorithm: 'cocktailShakerSort',
							averageTime: '',
							disabled: true
						},{
							name: 'QuickSort',
							algorithm: 'quickSort',
							averageTime: '',
							disabled: false
						},{
							name: 'MergeSort',
							algorithm: 'mergeSort',
							averageTime: '',
							disabled: true
						},{
							name: 'HeapSort',
							algorithm: 'heapSort',
							averageTime: '',
							disabled: true
						},{
							name: 'ShellSort',
							algorithm: 'shellSort',
							averageTime: '',
							disabled: true
						},{
							name: 'IntroSort',
							algorithm: 'introSort',
							averageTime: '',
							disabled: true
						},{
							name: 'Odd-EvenSort',
							algorithm: 'oddEvenSort',
							averageTime: '',
							disabled: true
						},{
							name: 'CycleSort',
							algorithm: 'cycleSort',
							averageTime: '',
							disabled: true
						},{
							name: 'Merge-InsertionSort',
							algorithm: 'mergeInsertionSort',
							averageTime: '',
							disabled: true
						},{
							name: 'SmoothSort',
							algorithm: 'smoothSort',
							averageTime: '',
							disabled: true
						},{
							name: 'TimSort',
							algorithm: 'timSort',
							averageTime: '',
							disabled: true
						}]
		}
	},
	methods: {
		getAlgorithm() {
			return algorithms[this.selected]
		},
		changeAlgorithm(algorithm) {
			if (!algorithm.disabled) this.selected = algorithm.algorithm
		}
	}
}
</script>

<style scoped>
	#algorithmPanel {
		background-color: white;
		width: 100%;
		height: 100%;
		padding-top: 40px;
		position: relative;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		user-select: none;
	}
	.actionBar {
		width: 100%;
		height: 40px;
		line-height: 40px;
		position: absolute;
		top: 0;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		border-bottom: 1px solid lightgray;
	}
	.algorithmBar {
		width: 100%;
		height: 100%;
		padding: 10px;
		padding-bottom: 0;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		text-align: left;
	}
	.algorithmBar_btn {
		display: inline-block;
		height: 60px;
		cursor: pointer;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		border: 1px solid lightgray;
		margin: 0 5px 10px 5px;
		padding: 5px;
		box-shadow: 0 0 0 0 gold;
		color: gray;
		transition-property: border-color, box-shadow, color;
		transition-duration: 0.4s, 0.4s, 0.4s;
		transition-timing-function: ease, ease, ease;
	}
	.algorithmBar_btn div {
		display: inline-block;
		height: 50px;
		line-height: 50px;
	}
	.algorithmBar_btn_title {
		margin-right: 5px;
	}
	.algorithmBar_btn_time {
		color: #00FF00;
		font-size: 14px;
	}

	.selected {
		color: #FF9D00;
		border-color: gold;
		box-shadow: 0 0 2px 0 gold;
	}
	.disabled {
		background-color: rgb(233, 233, 233)
	}
</style>
