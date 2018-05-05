<template>
	<div id="todo">
		<div class="header">
			<input type="text" v-model="message" @keyup.enter="saveMessage" placeholder="Press enter to add">
			<button @click="enableSortList =!enableSortList">Sort by task name/task number</button>
			<button @click="sortingList *= -1">Change sort order</button><br>
			<input type="text" v-model="search" placeholder="Search" autofocus>
		</div>	
		<ul>
			<li v-for="(list, index) in sortedLists"
				:class="{strike: list.isDone}"
				v-model="list.isDone"
				@click="isDone(list)"> {{list.text}}
				<i class="fa fa-times" @click='deleteList(index)'></i>
			</li>	
		</ul>
	</div>
</template>


<script>
export default {
	data() {
		return {
			message: '',
			search: '',
			lists: [
				{text:'do homework',
				isDone: false,
				},
				{text:'make dinner',
				isDone: false,
				},	
				{text:'clean in the apartment',
				isDone: false,
				},		
				{text:'watch a movie',
				isDone: false,
				}
			],
			enableSortList: false,
  			sortingList: -1,
		}
	},
	methods: {
		saveMessage(index) {
			this.lists.push({text: this.message, isDone: false});
			this.message = '';
			console.log(this.lists);
		},
		isDone(list) {
			list.isDone = !list.isDone;
			console.log(this.lists);
	    },
		deleteList(index) {
			this.lists.splice(index, 1);
			console.log(this.lists);
		},
	},
	computed: {
		sortedLists () {
			let lists = this.lists.filter((list) => {
				return list.text.toLowerCase().indexOf(this.search) !== -1;
			});

			if (this.enableSortList) {
				return lists.slice(0).sort((a, b) => a.text < b.text ? this.sortingList : -this.sortingList );
			}
			else {
				return lists;
			}
		},
	}	
}
</script>

<style lang='scss' scoped>

#todo {
	width: 50%;
	margin: 0 auto;

	.header {
		background-color: #f44336;
		padding: 30px 40px;
		color: white;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		input {
			border: none;
			width: 95%;
			padding: 10px;
			font-size: 16px;
			&:focus {
				outline: none;
			}
		}
		button {
			cursor: pointer;
			font-size: 16px;
			width: 40%;
			padding: 10px;
			margin-top: 15px;
			color: #555;
			&:focus {
				outline: none;
			}
			&:hover {
				background-color: #bbb;
				transition: 0.3s;
			}
		}
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;

		li {
			cursor: pointer;
    		position: relative;
    		padding: 12px 8px 12px 40px;
    		background: #eee;
    		font-size: 18px;
    		transition: 0.2s;
    		-webkit-user-select: none;
    		-moz-user-select: none;
    		-ms-user-select: none;
    		user-select: none;
    		&:hover {
    			background: #ddd;
    			transition: 0.3s;
    		}
    		&:nth-child(2n) {
				background: #f9f9f9;
				&:hover {
					background: #ddd;
    				transition: 0.3s;
				}
			}

    		.fa-times {
				font-size: 45px;
				color: #888;
				position: absolute;
				right: 0;
				top: 0;
				padding: 0 5px;
				&:hover {
    				background-color: #f44336;
    				color: #fff;
    				transition: 0.3s;
    			}
    		}
		}
		.strike {
			background: #888;
			color: #fff;
			text-decoration: line-through;
			&:nth-child(2n) {
				background: #888;
				&:hover {
					background: #888;
					transition: 0.3s;
				}
			}
			&:hover {
				background: #888;
				transition: 0.3s;
			}
			.fa-times {
				font-size: 45px;
				color: #fff;
				position: absolute;
				right: 0;
				top: 0;
				padding: 0 5px;
				&:hover {
    				background-color: #f44336;
    				color: #fff;
    				transition: 0.3s;
    			}
    		}	
		}
	}
}	
</style>