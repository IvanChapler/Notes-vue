
const { createApp } = Vue

createApp({
    data() {
        return {
            bootstrapClass: 'list-group-item',
            title: 'Список заметок',
            subtitle: 'Заметок пока нет...',
            myPlaceholder: 'Введите заметку',
            inputValue: '',
            notes: ['Лох'],
        }
    },

    methods: {
        pushToNotes() {
            console.log(this.$refs.myInput.value)
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            } else {
                this.subtitle = 'Пожалуйста, введите заметку',
                this.bootstrapClass = 'list-group-item red-bg'
                setTimeout(() => {
                    this.subtitle = 'Заметок пока нет...',
                    this.bootstrapClass = 'list-group-item'
                }, 1300)
            }
        },
        deleteNote(i) {
            this.notes.splice(i, 1)
        },
        asd(i, e) {
            this.notes.splice(i, 1)
            
        },
        log() {
            console.log('hello')
        }
    },

    computed: {
        doubleCount() {
            console.log('doubleCount')
            return this.eventNotes.length * 2
        },
        eventNotes() {
            return this.notes.filter((item) => item !== 'Лох' && item !== 'Пидр')
        },
    },

    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
            console.log(value)
        }
    }

}).mount('#app')

