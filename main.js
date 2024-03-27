
const clock = () => {
    const secondsDom = document.querySelector('.seconds');
    const minutesDom = document.querySelector('.minutes');
    const hoursDom = document.querySelector('.hours');
    
    const date = new Date();
    console.log(date);
    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    console.log(minutes);
    const seconds = date.getSeconds();
    
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;
    
    secondsDom.style.transform = `rotate(${second}deg)`;
    minutesDom.style.transform = `rotate(${minute}deg)`;
    hoursDom.style.transform = `rotate(${hour}deg)`;
}

clock();

setTimeout(clock, 1000);
