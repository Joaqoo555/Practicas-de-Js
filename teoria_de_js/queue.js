//Es una estructura de datos compuesta que posee una serie de elementos, donde se inserta data al final de la serie y se retira data por el frente, es una estructura FIFO (first in, first out), primero que ingresa es lo primero que sale

//Stacks => utilizan la metodologia LIFO, lo ultimo que ingresa es lo primero que sale, metodos push y pop

class Queue {
    constructor(){
        this.q = [undefined]
    }
    size(){
        return this.q.length
    }
    enqueue(e){
        this.q.push(e)
    }
    dequeue(e){
        let pop = this.q.pop(e)
        return pop
        
    }
}
const queue = new Queue()
console.log(queue.size());
queue.enqueue("hola");
console.log(queue.size());
console.log(queue.dequeue("hola"));
console.log(queue.size());



