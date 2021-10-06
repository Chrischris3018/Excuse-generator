let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const excuseGen = function(){
    const who1 = who[ getRandomInt(0,who.length -1 ) ];
    const action2 = action[getRandomInt(0,action.length -1)];
    const what3 = what[getRandomInt(0,what.length -1)];
    const when4 = when[getRandomInt(0,when.length -1)];

    return `${who1} ${action2} ${what3} ${when4}`;
}