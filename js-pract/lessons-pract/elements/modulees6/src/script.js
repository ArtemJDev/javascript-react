//что мы хотим передать в другой файл
export let one = 1;

let two = 2;
//второй способ
export {two};

export function sayHi() {
    console.log('Hello!');
}
