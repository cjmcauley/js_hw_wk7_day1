import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => { new Vue ({
  el: "#app",
  data: {
    items: [
      {task: "Make dinner", priority: 'high'},
      {task: "Wash the car", priority: 'Low'},
      {task: "Make bed", priority: 'high'}
    ],
    newTask: '',
    newPriority: ''
  },
  methods: {
    saveNewTask: function(e) {
      e.preventDefault();
      this.items.push({
        task: this.newTask,
        priority: this.newPriority
      });
      this.newTask= '';
      this.newPriority= '';
    },
    changePriority: function (index) {
      if (this.items[index].priority === 'high') {
        this.items[index].priority = 'low';
      } else {
        this.items[index].priority = 'high';
      };
    },
    taskComplete: function (index) {
      this.items.splice(index, 1);
    }
  }
});

});
