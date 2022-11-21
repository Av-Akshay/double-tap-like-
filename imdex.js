const clickCount = document.querySelector('.clickCount');
const clickArea = document.querySelector('.doubleTap')

let showHeart = ()=>{
    let heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    clickArea.appendChild(heart);
    setTimeout(()=>{
       heart.remove();
    },800)
};

let likeCount = 0;
clickArea.addEventListener('dblclick', () => {
    clickCount.innerHTML = ++likeCount;
    showHeart();
});
