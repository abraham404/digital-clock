const digitalClock = () => {
     //get the corrent time
     let now = new Date();
     let hours = now.getHours();
     let minutes = now.getMinutes();
     let seconds = now.getSeconds();
     let AmOrPm = hours >= 12 ? 'pm' : 'am';
     
     hours = (hours % 12) || 12;

     hours = (hours < 10) ? '0' + hours : hours;
     minutes = (minutes < 10) ? '0' + minutes : minutes;
     seconds = (seconds < 10) ? '0' + seconds : seconds;   

     document.querySelector('.hours').textContent = hours + ':';
     document.querySelector('.minutes').textContent = minutes + ':';
     document.querySelector('.seconds').textContent = seconds;
     document.querySelector('.amorpm').textContent = AmOrPm;
}


setInterval(digitalClock, 1000);
