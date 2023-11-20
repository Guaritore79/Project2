let bintangs = document.getElementById('bintang');
let meteors = document.getElementById('meteor');
let tekss = document.getElementById('teks');
let tombols = document.getElementById('tombol');

//efek paralaksnya
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    bintangs.style.left = value * 0.25 + 'px';
    tekss.style.marginBottom = value * 1 + 'px';
    tombols.style.marginBottom = value * 1 + 'px';
});