const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  const sum = await add(1, 2);
  const sum2 = await add(sum, 3);
  const sum3 = await add(sum2, 4);
  return sum3;
};

doWork()
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
