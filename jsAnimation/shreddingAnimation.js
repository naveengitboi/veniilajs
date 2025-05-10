

class ShreddingImage{
    constructor(img, width, height, shreddingSize, oddEven = 0){
        this.shreds = [];
        console.log(width, height, shreddingSize);
        for(let x = 0; x < width; x += shreddingSize){
            console.log('Executed', x);
            if((x/shreddingSize) %2 == oddEven){
                const shredCanvas = document.createElement('canvas');
                shredCanvas.width = shreddingSize;
                shredCanvas.height = height;

                const shredCtx = shredCanvas.getContext('2d');
                shredCtx.drawImage(img, -x,0, width, height);
                this.shreds.push(shredCanvas);
            }
        }
    }

    draw(ctx, left, top, spread = 1){
        for(let i = 0; i< this.shreds.length; i++){
            let shred = this.shreds[i];
            let x = left + i*shred.width + i*spread*shred.width;
            let y = top;
            ctx.drawImage(shred,x, y);
        }
    }
}