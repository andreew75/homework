function Worker(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    this.who = function() {
        const capitalizedJob = this.job.charAt(0).toUpperCase() + this.job.slice(1) + 'ом';
        return `<b>Я ${this.name}, мне ${this.age} лет.</b> Я работаю <b>${capitalizedJob}.</b><br>`;
    };

    this.displayInfo = function() {
        document.writeln(this.who());
    };
}

const workers = [
    new Worker("Дмитрий", 26, "дизайнер"),
    new Worker("Станислав", 29, "программист"),
    new Worker("Сергей", 35, "менеджер")
];

workers.forEach(worker => worker.displayInfo());

// Вариант 2
//function Worker(name, age, job) {
//    this.name = name;
//    this.age = age;
//    this.job = job
//
//    this.who = function(){
//        document.writeln("<b>Я " + this.name + ", " + "мне " + this.age + " лет.</b> Я работаю " + "<b>" + this.job.charAt(0).toUpperCase() + this.job.slice(1) + "ом.</b>" + "<br>");
//    }
//}
//
//let designer = new Worker("Дмитрий", 26, "дизайнер");
//let programmer = new Worker("Станислав", 29, "программист");
//let manager = new Worker("Сергей", 35, "менеджер");
//designer.who();
//programmer.who();
//manager.who();