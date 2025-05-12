const canvas = document.getElementById('myCanvas');

const ctx = canvas.getContext('2d');
canvas.width = 200;

const car = new Car(100,100, 30, 50);
car.draw(ctx);

animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx);

    requestAnimationFrame(animate);
}