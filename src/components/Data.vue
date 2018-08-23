<template>
	<div id="dataPanel">
		<div class="dataPanel_row">Data Size <input type="text" v-model="dataSize" /></div>
		<div class="dataPanel_row">Repeatition?</div>
		<div style="margin-left: 15px;">
			<div><input type="radio" name="Repeatition" checked value="0" v-model="repeatition" />No</div>
			<div><input type="radio" name="Repeatition" value="1" v-model="repeatition" />Some</div>
			<div><input type="radio" name="Repeatition" value="2" v-model="repeatition" />A Lot</div>
		</div>
		<div class="dataPanel_row btn" v-on:click="generateData">Generate Data</div>
	</div>
</template>

<script>
import eventBus from '@/js/EventBus'
export default {
	data () {
    return {
			dataSize: 100,
			repeatition: '0'
		}
	},
	methods: {
		generateData() {
			if (this.dataSize > 1000) {
				if (confirm('Too much data can cause massive lag\nare you sure you want to continue?')) {

				} else {
					return
				}
			}
			let data = []
			switch(this.repeatition) {
				case '0':
					for (let i = 1; i <= this.dataSize; i++) {
						data.push(i)
					}
					break;
				case '1':
					for (let i = 1; i <= this.dataSize; i++) {
						data.push((Math.random() * this.dataSize + 1)|0)
					}
					break;
				case '2':
					for (let i = 1; i <= this.dataSize; i++) {
						data.push((Math.random() * this.dataSize/10 + 1)|0)
					}
					break;
			}
			eventBus.$emit('generateData', data)
		}
	}
}
</script>

<style scoped>
	#dataPanel {
		width: 100%;
		height: 100%;
		background-color: #fff;
		padding: 6px 40px 36px 40px;
		user-select: none;
		text-align: left;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		position: relative;
	}
	.dataPanel_row {
		height: 30px;
		line-height: 30px;
	}
	.btn {
		width: 120px;
		height: 30px;
		line-height: 30px;
		cursor: pointer;
		text-align: center;
		position: absolute;
		left: 0;
		bottom: 3px;
		left: 50%;
    transform: translateX(-50%);
		border: 1px solid lightgray;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		transition-property: border-color, color, bottom;
		transition-duration: 0.4s, 0.4s, 0.2s;
		transition-timing-function: ease, ease, ease;
	}
	.btn:hover {
		color: #0094FF;
		border-color: #00BDFF;
	}
	.btn:active {
		bottom: 2px;
	}
</style>
