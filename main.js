//1.
const parent1 = {
    firstname : 'Audi',
    lastname : 'A8',
    addres : 'Delhi',
    fullname(){
        return (`${this.firstname} ${this.lastname}`)
    }

}


const child1 = {
    __proto__:parent1
}
console.log(child1.fullname());

//2.
const parent = {
    firstname : 'Audi',
    lastname : 'A8',
    addres : 'Delhi',
    fullname(){
        return (`${this.firstname} ${this.lastname}`)
    }

}

const child = {
    __proto__:parent
}
const son = {
    __proto__:child
}

console.log(son.fullname());

//3.
arr = [89, 23, 34, 9]
arr1 = [21, 34, 67, 12]
arr2 = [25, 23, 56, 41]
const array = {
add: function (a){
    sum=0;
    for(i=0; i < a.length; i++){
        sum = sum + a[i]
    }
    console.log(sum);
}
}
Array.__proto__=array
Array.add(arr1)

//4.
var obj = {
    name : "Sudhanshu",
    course : "Web Develope",
    college : "GBU",
    roll : 67
}
result = Object.keys(obj)
console.log(result);