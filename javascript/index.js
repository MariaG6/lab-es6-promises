// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
        getInstruction('mashedPotatoes', 3, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
            getInstruction('mashedPotatoes', 4, (step4) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
      document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
     })
    })
    })
  }, (e) => {console.log(e)})
}, (e) => {console.log(e)});

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return steak[1]
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return steak[2]
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return steak[3]
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return steak[4]
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return steak[5]
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return steak[6]
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return steak[7]
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return steak[8]
  })
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
  })
  .catch(error => console.log(error))

// Iteration 3 using async/await
async function makeBroccoli() {
  const step0 = await obtainInstruction('broccoli',0);
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
  const step1 = await obtainInstruction('broccoli',1);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
  const step2 = await obtainInstruction('broccoli',2);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
  const step3 = await obtainInstruction('broccoli',3);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
  const step4 = await obtainInstruction('broccoli',4);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
  const step5 = await obtainInstruction('broccoli',5);
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
  const step6 = await obtainInstruction('broccoli',6);
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
  const step7 = await obtainInstruction('broccoli',6);
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
}

makeBroccoli()


// Bonus 2 - Promise all
Promise.all( [obtainInstruction] )
.then((step0) => {   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[0]}</li>`})
.then((step1) => {   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[1]}</li>`})
.then((step2) => {   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[2]}</li>`})
.then((step3) => {   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[3]}</li>`})
.then((step4) => {   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[4]}</li>`})
.then((step5) => {   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[5]}</li>`})
.then((step6) => {   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[6]}</li>`})
.then((step7) => {   document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[7]}</li>`})
.then((step8) => {   document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`})
.catch((error) => {})