let args = process.argv;
args = args.slice(2);

const timer = num => {
    for (let i = 0; i  < num.length; i ++) {
        setTimeout(() => {
          process.stdout.write('\x07');
        }, num[i] * 1000);
    }
};

timer(args);