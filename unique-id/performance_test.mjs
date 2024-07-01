// Core
import { v4 } from 'uuid';
import { nanoid } from 'nanoid';
import shortId from 'shortid';

const iterations = 1000000;

function testUuid() {
    for (let i = 0; i < iterations; i++) {
        v4();
    }
}

function testNanoid() {
    for (let i = 0; i < iterations; i++) {
        nanoid();
    }
}

function testShortId() {
    for (let i = 0; i < iterations; i++) {
        shortId.generate();
    }
}

console.time('UUID');
testUuid();
console.timeEnd('UUID');

console.time('NanoID');
testNanoid();
console.timeEnd('NanoID');

console.time('ShortID');
testShortId();
console.timeEnd('ShortID');
