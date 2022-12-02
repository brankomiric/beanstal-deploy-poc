require("isomorphic-fetch");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const threeSec = 3 * 1000;
const url = `https://bubonic-mnemonic.loca.lt/call-me-maybe`;
const reqBody = { message: "version v2 call" };

(async () => {
  while (true) {
    const response = await fetch(url, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(reqBody),
    });
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
