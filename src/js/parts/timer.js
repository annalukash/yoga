function timer() {
    let deadLine = '2020-05-11';

    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t/1000) % 60);
        let minutes = Math.floor((t/1000/60) % 60);
        let hours = Math.floor((t/(1000 * 60 * 60) % 24));
        let days = Math.floor(t/(1000 * 60 * 60 * 24));
    

        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id);
        let days = timer.querySelector('.days');
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInteerval = setInterval(updateClock, 1000); 

        function updateClock() {
            let t = getTimeRemaining(endtime);
            days.textContent = t.days < 10 ? '0' + t.days : t.days;
            hours.textContent = t.hours < 10 ? '0' + t.hours : t.hours;
            minutes.textContent = t.minutes < 10 ? '0' + t.minutes : t.minutes;
            seconds.textContent = t.seconds < 10 ? '0' + t.seconds : t.seconds;


            if (t.total <= 0) {
                clearInterval(timeInteerval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    };

    setClock('timer', deadLine);
}

module.exports = timer;