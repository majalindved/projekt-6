let tasker = {
	construct: function() {
		this.selectElements();
		this.bindEvents();
		this.scanTaskList();
	},
	selectElements: function() {
		this.taskInput = document.getElementById("input-task");
		this.taskList = document.getElementById("tasks");
		this.taskListChildren = this.taskList.children;
		this.addButton = document.getElementById("add-task-btn");
		this.errorMessage = document.getElementById("error")
	},
	buildTask: function() {
		let taskListItem, taskValue, taskButton, taskTrash;
		taskListItem = document.createElement("li");
		taskListItem.setAttribute("class", "task");
		taskValue = document.createTextNode(this.taskInput.value);

		taskButton = document.createElement("button");

		taskTrash = document.createElement("i");
		taskTrash.setAttribute("class","fa fa-trash");

		taskButton.appendChild(taskTrash);

		taskListItem.appendChild(taskValue);
		taskListItem.appendChild(taskButton);

		this.taskList.appendChild(taskListItem);
	},
	error: function() {
		this.errorMessage.style.display = "block";
	},
	addTask: function() {
		let taskValue = this.taskInput.value;
		this.errorMessage.style.display = "none";
		
		if(taskValue === ""){
			this.error();
		}
		else {
			this.buildTask();
			this.taskInput.value = "";
			this.scanTaskList();
		}
	},
	enterKey: function(event){
		if (event.keyCode === 13 || event.which === 13 ){
			this.addTask();
		}
	},
	bindEvents: function(){
		
		//add click event to button
		this.addButton.onclick = this.addTask.bind(this);

		//add enter key to task textbox
		this.taskInput.onkeypress = this.enterKey.bind(this);
	},
	scanTaskList: function() {
		let taskListItem, deleteButton;


		for (i = 0; i < this.taskListChildren.length; i++){
			taskListItem = this.taskListChildren[i];

			deleteButton.onclick = this.deleteTask.bind(this, i);
		}
	},
	deleteTask: function(i) {
		this.taskListChildren[i].remove();
		this.scanTaskList();
