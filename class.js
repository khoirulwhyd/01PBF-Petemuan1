class Holiday {
    constructor(destionation, days){
        this.destionation = destionation;
        this.days = days;
    }

    info(){
        alert(`${this.destionation} will take ${this.days} days.`);
    }
}

//sub class
class Expedition extends Holiday{
    constructor(destionation, days, gear) {
        super(destionation, days);
        this.gear = gear;
    }

    info(){
        super.info();
        alert(`Bring your ${this.gear.join(' and your ')}`);
    }
}

const tripWithGear = new Expedition('Semeru', 10, ['Sunlasses', 'Flags', 'Camera']);
tripWithGear.info();