require("isomorphic-fetch");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const threeSec = 3 * 1000;
const url = `https://bubonic-mnemonic.loca.lt/call-me-maybe`;
const reqBody = { message: "version v3 call" };
let counter = 0;

(async () => {
  while (true) {
      counter++;
      if(counter == 5) {
          reqBody.error = 'error incomming';
      }
    const response = await fetch(url, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(reqBody),
    });
    if(counter == 5) {
        throw new Error("break");
    }
    if (response.status == 200) {
      console.log(await response.json());
    } else {
      console.log(response.status);
      console.log(response.statusText);
      console.log(await response.text());
    }
    await sleep(threeSec);
  }
})();
