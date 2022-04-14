// 프로토타입 문법을 깔끔하게 작성할 수 있는 Class문법 도입

// 과거
var Human = function(type){
    this.type = type || 'human';
};

Human.isHuman = function(human){
    return human instanceof Human;
}

Human.prototype.breathe = function(){
    alert('h-a-a-a-m');
};

// 클래스 문법
class Human {
    constructor(type = 'human'){
        this.type = type;
    }

    static isHuman(human){
        return human instanceof Human;
    }

    breathe(){
        alert('h-a-a-a-m');
    }
}

// =============================================

// 상속
// 과거
var Zero = function(type, firstName, lastName){
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
}

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero; // 상속하는 부분
Zero.prototype.sayName = function(){
    alert(this.firstName + ' ' + this.lastName);
};
var oldZero = new Zero('human', 'Zero', 'cho');
Human.isHuman(oldZero); // true

// 최근 문법
class Zero extends Human{
    constructor(type, firstName, lastName){
        super(type);
        /*
            super(type);
            ->
            constructor(type = 'human'){
                this.type = type;
            }
            이 부분이 실행됨
        */

        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}