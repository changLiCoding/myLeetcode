function processPayment(amount) {
  return new Promise((resolve, reject) => {
    const delay = 1200;
    setTimeout(() => {
      if (amount < 0) {
        reject({
          error: "Amount should be bigger than 0",
        });
      } else {
        resolve({
          status: "paid",
          transactionId: "TXN" + Math.random().toString(36).substr(2, 9),
        });
      }
    }, delay);
  });
}

function processOrder(orderId) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 1000 + 1000;
    setTimeout(() => {
      if (userId === 0) {
        reject({});
      } else {
        resolve({
          orderId,
          message: "Get order successfully",
        });
      }
    }, delay);
  });
}

function sendConfirmationEmail(orderId, email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: "email_sent",
      });
    }, 600);
  });
}
