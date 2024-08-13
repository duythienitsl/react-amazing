export const getUser = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: 'Thien',
          age: 26,
          address: 'HN'
        },
        status: 200
      });
    }, 1500);
  });
