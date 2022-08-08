// estrutura de pilha
class Stack {
    constructor() {
        this.items = [];
    }
    
    // add um novo elemento no fim da pilha
    add(element) {
        return this.items.push(element);
    }
    
    // remove e exibe o último elemento da pilha
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // exibe o último elemento
    lastElement() {
        return this.items[this.items.length - 1];
    }
    
    // verifica se a pilha está vazia
    isEmpty(){
       return this.items.length == 0;
    }
   
    // retorna o tamanho da pilha
    size(){
        return this.items.length;
    }
 
    // esvazia a pilha
    clear(){
        this.items = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);

stack.remove();
console.log(stack.items);

console.log(stack.lastElement());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.items);