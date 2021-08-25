Vue.config.devtools = true;

console.log(students);

var root = new Vue(
    {
        el: '#root',
        data: {
            students,
        },
        methods: {
            getAverage(materia) {
                let average = 0;
                materia.forEach(vote => {
                    average += vote;
                });
                return (average / materia.length).toFixed(1);
            },
            getTotalAverage(voti) {
                let allVotes = [];
                for (materia in voti) {
                    allVotes.push(...voti[materia]);
                }
                return this.getAverage(allVotes);
            },
            hasBeenRejected(voti) {
                return this.getTotalAverage(voti) < 6;
            },

        },
    });