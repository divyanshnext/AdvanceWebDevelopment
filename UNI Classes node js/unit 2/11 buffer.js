// const buffer = Buffer.alloc(10); 
// console.log(buffer);

// buffer.write('Hello', 'utf-8');
// const data = buffer.toString('utf-8', 0, buffer.indexOf(0));
// console.log(data); // output: Hello

// concatenation buffer 

const buffer1 = Buffer.from('Hello','utf-8');
const buffer1 = Buffer.from('World','utf-8');

const concatenatedBuffer = Buffer.concat([buffer1,buffer2]);

console.log(concatenatedBuffer.toString('utf-8'));
