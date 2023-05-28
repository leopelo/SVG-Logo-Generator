

//created parent 'Shape' class and used inheritance for circle, triangle and square classes.
class Shape{

    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = (color);
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="150" r="80" fill="${this.color}"/>`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon height="200" width="200"points="250,60 100,400 400,400" fill="${this.color}"/>`
       
    }
}

class Square extends Shape{
    render(){
        return `<rect x="100" y="150" width="200" height="200" fill="${this.color}"/>`
    }
}


module.exports = {Circle, Triangle, Square}