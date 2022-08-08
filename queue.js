// estrutura de fila
class Queue {
    constructor() {
        this.items = [];
    }
    
    // add um novo elemento no fim da fila
    add(element) {
        return this.items.push(element);
    }
    
    // remove o primeiro elemento da fila
    remove() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    
    // exibe o primeiro elemento da fila
    firstElement() {
        return this.items[0];
    }
    
    // verifica se a fila está vazia
    isEmpty(){
       return this.items.length == 0;
    }
   
    // retorna o tamanho da fila
    size(){
        return this.items.length;
    }
 
    // esvazia a fila
    clear(){
        this.items = [];
    }
}

let stack = new Queue();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);

stack.remove();
console.log(stack.items);

console.log(stack.firstElement());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.items);