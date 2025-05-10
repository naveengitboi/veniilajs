let canvas = document.getElementById('myCanvas');
const control = document.querySelector('.controls input');
const shredWidhtTextBox = document.querySelector('.shredWidthTextBox');
let ctx = canvas.getContext('2d');
let animationId = null;
let shredWidth = 10;
const { width, height } = canvas;
const img = new Image();
img.src = "./god.jpg";
let shreddingImages = []
let framesCount = 0;

function constructShreddingImages(shredWidth = 10) {
    shreddingImages = []
    console.log(shredWidth)
    const imgWidth = width / 2;
    const scale = img.width / img.height;
    const imgHeight = imgWidth / scale;
    shreddingImages.push(new ShreddingImage(img, imgWidth, imgHeight, shredWidth));
    shreddingImages.push(new ShreddingImage(img, imgWidth, imgHeight, shredWidth, 1));
    console.log(shreddingImages)
    framesCount = 0;
    animate();
}
const up = 0;
let down = 550;
const left = 0;
img.addEventListener('load', () => {
    down = img.height  + 20;
    constructShreddingImages();
})

control.addEventListener('change', () => {
    const value = control.value;
    shredWidth = Number(value);
    cancelAnimationFrame(animationId);
    ctx.clearRect(0, 0, width, height);
    shredWidhtTextBox.textContent = shredWidth;
    constructShreddingImages(shredWidth);
})

const keys = [
    [
        { x: left, y: up, s: 1 },
        { x: left + shredWidth, y: up, s: 1 }
    ],
    [
        { x: left, y: up, s: 1 },
        { x: left + shredWidth, y: down, s: 1 }
    ],
    [
        { x: left, y: up, s: 0 },
        { x: left, y: down, s: 0 }
    ],
    [
        { x: left, y: up, s: 1 },
        { x: left + shredWidth, y: down, s: 1 }
    ]
]

function lerp(a, b, t) {
    return a + (b - a) * t;
}
function animate() {
    framesCount++;
    const iFrames = 100;
    const key = Math.floor(framesCount / iFrames) % keys.length;
    const nextKey = (key + 1) % keys.length;
    const t = (framesCount % iFrames) / iFrames;
    const e = 0.5 - Math.cos(t * Math.PI) * 0.5;

    ctx.clearRect(0, 0, width, height);
    // console.log("Hey Values",key, nextKey, t, framesCount);
    shreddingImages.forEach((img, index) => {
        const x = lerp(keys[key][index].x, keys[nextKey][index].x, e);
        const y = lerp(keys[key][index].y, keys[nextKey][index].y, e);
        const s = lerp(keys[key][index].s, keys[nextKey][index].s, e);
        img.draw(ctx, x, y, s);
    })

    animationId = requestAnimationFrame(animate);
}
