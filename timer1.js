let args = process.argv;
args = args.slice(2); 

function timer(num) {
  if (isNaN(num) || num < 0) {
    return
  }
console.log("Timer");
  let counter = 0
  for (let i = 0; i <= num; i++) {
    counter += 1000;

    setTimeout(() => {
      console.log(i);
      if (i % 2 !== 0) {
        process.stdout.write('\x07');
      }


    }, counter)

  }
}


console.log(timer(args));
