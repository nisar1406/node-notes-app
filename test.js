// const fs = require('fs');

// const df = fs.readFileSync('test.json');

// const dj = df.toString();

// const user = JSON.parse(dj);

// user.name = 'Sabah';

// const uj = JSON.stringify(user);

// fs.writeFileSync('test.json', uj)
// console.log(uj);

const a = {
    name: 'Nisar',
    func () {
        console.log('Hello', this.name);
    }
}

a.func();