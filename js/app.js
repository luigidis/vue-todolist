toDoList = [
    {
        text: 'Lavare i Piatti',
        done: true,
    },
    {
        text: 'Fare la lavatrice',
        done: false,
    },
    {
        text: 'Fare la spesa',
        done: false,
    },
    {
        text: 'Andare a comprare le batterie',
        done: false,
    },
    {
        text: 'Prendere il pane',
        done: false,
    },
]

const app = new Vue ({
    el: '#root',
    data: {
        toDoList : toDoList,
    },
    methods: {
        
    },
})

