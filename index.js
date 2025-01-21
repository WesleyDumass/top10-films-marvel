const backgrounds = [
    'https://wallpapercave.com/wp/wp12604071.png',
    'https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/LZwiAzAuOfQKlIOER4UGK5wDvq7Jlb.jpg',
    'https://c4.wallpaperflare.com/wallpaper/566/514/449/marvel-cinematic-universe-marvel-comics-iron-man-spider-man-wallpaper-preview.jpg',
    'https://wallpapercave.com/wp/wp8931656.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/df9lfs4-47f69135-dfb7-4df4-9880-1d2fbe84ebd7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGY5bGZzNC00N2Y2OTEzNS1kZmI3LTRkZjQtOTg4MC0xZDJmYmU4NGViZDcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sMa0lQWMpkVyGi_qtj2T_OJf7FgaCQricGQygsZZHvg',
    'https://wallpapercat.com/w/full/c/4/9/951009-2560x1440-desktop-hd-mcu-wallpaper-photo.jpg'

];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % backgrounds.length;
}

setInterval(changeBackground, 2000);
changeBackground();