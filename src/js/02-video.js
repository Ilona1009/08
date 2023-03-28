import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

 const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    
const onPlay = function (data) {
    const localCurrentTime = localStorage.setItem("videoplayer-current-time",data.seconds)
}

player.on('timeupdate', throttle(onPlay, 1000));

    player.setCurrentTime(localStorage.getItem('localCurrentTime') || 0)