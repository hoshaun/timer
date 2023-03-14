const input = process.argv.slice(2);
for (const second of input) {
  if (Number(second) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(second) * 1000);
  }
}