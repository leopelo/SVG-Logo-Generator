const { describe } = require('node:test');
const {Circle, Triangle, Square} = require('./shapes')

describe('Circle', () => {
    it('renders correctly', () => {
        const shape = new Circle(); 
        shape.setColor('red');
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red"/>`)
    })
})

describe('Triangle', () => {
    it('renders correctly', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

describe('Square', () => {
    it('renders correctly', () => {
        const shape = new Square();
        shape.setColor('yellow');
        expect(shape.render()).toEqual(`<rect x="90" y="40" width="130" height="130" fill="yellow"/>`)
    })
})
