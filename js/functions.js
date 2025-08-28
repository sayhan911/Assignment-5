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
const callBtn = document.querySelectorAll(".btn-call")
const serviceName = document.querySelectorAll('.service-name')
const serviceNum = document.querySelectorAll('.service-number')
const availCoins = document.getElementById('available-coins')

callBtn.forEach(function(call, index){
    call.addEventListener('click', function(){
        let currentCoins = parseInt(availCoins.innerText)
        if(currentCoins<20){
            alert("❌ Not enough coin. You need minimum 20 coins to make a call.")
            return;
        }
        alert('📞 Calling '+ serviceName[index].innerText+ ' (' + serviceNum[index].innerText+')')
        availCoins.innerText = currentCoins-20;
        
    })
})
// Copy button functionality
const copyBtn = document.querySelectorAll(".btn-copy")

copyBtn.forEach(function(call){
    call.addEventListener('click', function(){
        console.log('copy button clicked')
    })
})