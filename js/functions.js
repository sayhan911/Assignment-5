// Heart icon functionality
const heartIcon = document.querySelectorAll(".fa-heart");
const heartCount = document.getElementById("heart-count");

heartIcon.forEach(function (icon) {
  icon.addEventListener("click", function () {
    let currentHeart = parseInt(heartCount.innerText);
    heartCount.innerText = currentHeart + 1;
  });
});

// Call button functionality
const callBtn = document.querySelectorAll(".btn-call");
const serviceTitle = document.querySelectorAll(".service-title");
const serviceName = document.querySelectorAll(".service-name");
const serviceNum = document.querySelectorAll(".service-number");
const availCoins = document.getElementById("available-coins");

callBtn.forEach(function (call, index) {
  call.addEventListener("click", function () {
    let currentCoins = parseInt(availCoins.innerText);
    if (currentCoins < 20) {
      alert("❌ Not enough coin. You need minimum 20 coins to make a call.");
      return;
    }
    alert(
      "📞 Calling " +
        serviceName[index].innerText +
        " (" +
        serviceNum[index].innerText +
        ")"
    );
    availCoins.innerText = currentCoins - 20;
    addCallHistory(serviceTitle[index].innerText, serviceNum[index].innerText);
  });
});
// Call history & clear button functionality
const clearBtn = document.getElementById("btn-clear");
const callHistory = document.getElementById("call-history");
// call history part
function addCallHistory(name, number) {
  const now = new Date();
  let time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  time = time.toUpperCase();

  const record = `
  <div class="flex justify-between items-center bg-[#fafafa] p-3 mb-2 rounded-xl">
  <div class="w-2/3">
    <h1 class="font-medium mb-1 text-lg">${name}</h1>
    <p class="font-light text-gray-600">${number}</p>
  </div>
  <span class="font-light text-sm">${time}</span>
</div>`;
  callHistory.innerHTML += record;
}
// clear button part
clearBtn.addEventListener("click", function () {
  callHistory.innerHTML = "";
});

// Copy button functionality
const copyBtn = document.querySelectorAll(".btn-copy");
const copyCount = document.getElementById("copy-count");

copyBtn.forEach(function (copy, index) {
  copy.addEventListener("click", function () {
    const number = serviceNum[index].innerText;
    navigator.clipboard
      .writeText(number)
      .then(function () {
        alert("📋Number copied to clipboard: " + number);
        let currentCopy = parseInt(copyCount.innerText);
        copyCount.innerText = currentCopy + 1;
      })
      .catch(function (err) {
        alert("Copy failed. Try again!");
        console.error(err);
      });
  });
});
