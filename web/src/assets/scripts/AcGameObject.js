const AC_GAME_OBJECTS = [];

export class AcGameObject { //this is a class
    constructor(){
        AC_GAME_OBJECTS.push(this);
        this.timedelta = 0; //The time interval between the current frame and the previous frame
        this.has_called_start = false;
    }

    start(){ //only execute once

    }

    update(){ //execute each frame except for the first frame

    }

    destroy(){

        this.on_destroy(); //make the execution of the on_destroy function before destroy.

        for(let i in AC_GAME_OBJECTS){
            const obj = AC_GAME_OBJECTS[i];
            if(obj == this){
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp; //The timing of sequential execution
const step = timestamp =>{ //if fps=60, this function will be called 60 times each second
    for (let obj of AC_GAME_OBJECTS){ //in js, 'of' traverses values, while 'in' traverses index
        if(!obj.has_called_start){ //if has not been called, then start the obj
            obj.has_called_start = true;
            obj.start();
        }else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;// renew last_timestamp
    requestAnimationFrame(step)
}

requestAnimationFrame(step)