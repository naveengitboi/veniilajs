class Sensor{
    constructor(car){
        this.car = car;
        this.rayCount = 5;
        this.rayLength = 250;
        this.rays = []
        this.raySpread = Math.PI/4;

        this.readings = [];
    }
    update(roadBorders, traffic){
        this.readings = [];

        for(let i=0; i< this.rays.length; i++){
            this.readings.push(
                this.#getReading(this.rays[i], roadBorders, traffic)
            );
        }
        this.#castRays();

    }

    #getReading(ray, roadBorders, traffic){
        let touches = [];
        for(let i = 0; i < roadBorders.length; i++){
            let border = roadBorders[i];

            const touch = getIntersection(
                ray[0], ray[1], border[0], border[1]
            );

            if(touch){
                touches.push(touch);
            }
        }

        for(let i = 0; i < traffic.length; i++){
            let poly = traffic[i].polygon;

            const touch = getIntersection(
                ray[0], ray[1], poly[0], poly[1]
            );

            if(touch){
                touches.push(touch);
            }
        }
        if(touches.length == 0){
            return null;
        }else{
            const offsets = touches.map(touch => touch.offset);
            const minOffset = Math.min(...offsets);
            return touches.find(touch => touch.offset == minOffset);
        }
    }

    #castRays(){
        this.rays = [];
        for(let i = 0; i < this.rayCount; i++){
            const rayAngle = lerp(
                this.raySpread/2,
                -this.raySpread/2,
                this.rayCount == 1? 0.5 : i/(this.rayCount - 1)
            ) + this.car.angle;

            const start = {x:this.car.x, y:this.car.y};
            const end = {x:this.car.x - Math.sin(rayAngle)*this.rayLength, y:this.car.y - Math.cos(rayAngle)*this.rayLength};


            this.rays.push([start, end]);
        }
    }

    draw(ctx){
        for(let i = 0;i<this.rayCount; i++){
            let curRay = this.rays[i];
            let end = curRay[1];

            if(this.readings[i]){
                end = this.readings[i];
            }
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "yellow";
            ctx.moveTo(curRay[0].x, curRay[0].y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "black";
            ctx.moveTo(curRay[1].x, curRay[1].y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke();
        }
    }

}