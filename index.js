const record = document.querySelector('#record'),
    enemy = document.querySelector('#enemy')
    shot = document.querySelector('#shot'),
    hit = document.querySelector('#hit'),
    dead = document.querySelector('#dead');

const play = {
    record: 0,
    shot: 0,
    hit: 0,
    dead: 0,
    set updateData(data) {
        this[data] += 1;
        this.render();
    },
    render() {
        record.textContent = this.record;
        shot.textContent = this.shot;
        hit.textContent = this.hit;
        dead.textContent = this.dead
                         
    }
}

const show = {
    miss(elem) {
       this.changeClass(elem, 'miss');
    },
    hit() {

    },
    dead() {

    },
    changeClass(elem, value) {
        elem.className = value;
    }
}


const fire = (e) => {
    const target = e.target;
    if (target.className != 'miss') {
    show.miss(target);
    play.updateData = 'shot';
    }
}

const init = () => {
    enemy.addEventListener('click', fire)
}

init();

