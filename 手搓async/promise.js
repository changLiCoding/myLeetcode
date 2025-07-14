// function fetchConnection (userId) {
//   return new Promise((resolve, reject) => {
//     const delay = Math.random()*1000 + 500

//     setTimeout(() => {
//       if (userId % 2 === 0) {
//         resolve ( {
//             userId,
//             message: "Successfully fetched user data"
//           }
//         )
//       } else {
//         reject(new Error('User ' + userId + ' not found'));
//       }
//     }, delay);
//   }
//   )
// }

// // const userData = await fetchConnection(23);
// // console.log("userData: ", userData)


// const userIds = [23, 456,62, 123, 23561, 23, 211, 20];

// const usersPromise = userIds.map(id => fetchConnection(id));

// Promise.allSettled(usersPromise)
//   .then(results => {
//     results.forEach((result, index) => {
//       if (result.status === 'fulfilled') {
//         console.log(`User ${userIds[index]} success:`, result.value);
//       } else {
//         console.error(`User ${userIds[index]} error:`, result.reason.message);
//       }
//     });
//   })
//   .catch(error => {
//     console.error('This catch block will likely not be hit by Promise.allSettled:', error);
//   });

const fetchUserInfo = (userId) => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 2000 + 500
    setTimeout(() => {
      if (userId % 2 === 0) {
        resolve({
          userId,
          message: "User information fetches successfully"
        })
      } else {
        reject({
          error: `User ID ${userId} can not be found.`,
          userId,
        })
      }
    }, delay);
  })
}

// fetchUserInfo(21).then((res) => {
//   console.log('user res: ', res)
// }).catch((err) => {
//   console.error('error: ', err)
// })

const userIds = [23, 2451, 21,22, 20 , 2];

const userPromises = userIds.map(id => fetchUserInfo(id));

Promise.allSettled(userPromises).then(
  ([res1, res2, res3, res4, res5, res6]) => {
    console.log(res1, res2, res3, res4, res5, res6)
  }
).catch(error => {
  console.error("error: ", error);
  
})