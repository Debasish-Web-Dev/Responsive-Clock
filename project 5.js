setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    let hrotation = 30 * htime + mtime / 2;
    let mrotation = 6 * mtime;
    let srotation = 6 * stime;

    document.querySelector('.hour').style.transform = `rotate(${hrotation}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${mrotation}deg)`;
    document.querySelector('.second').style.transform = `rotate(${srotation}deg)`;
}, 1000);
