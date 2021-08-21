// function memory input
function getMemoryInput(inputId, click) {
    const findMeomoryCost = document.getElementById('memory-cost');
    if (click == 'first') {
        findMeomoryCost.innerText = 0;
    }
    else {
        findMeomoryCost.innerText = 180;
    }

    const findDeliveryCost = document.getElementById('delivery-cost');
    const findStorageCost = document.getElementById('storage-cost');
    const totalPrice = 1299 + parseFloat(findMeomoryCost.innerText) + parseFloat(findStorageCost.innerText) + parseFloat(findDeliveryCost.innerText);
    const totalCost = document.getElementById('total-price');
    const finalAmount = document.getElementById('final-amount');
    totalCost.innerText = totalPrice;
    finalAmount.innerText = totalPrice;
}

// function of storage input
function getStorageInput(inputId, click) {
    const findStorageCost = document.getElementById('storage-cost');
    if (click == 'first') {
        findStorageCost.innerText = 0;
    }
    else if (click == 'second') {
        findStorageCost.innerText = 100;
    }
    else {
        findStorageCost.innerText = 180;
    }

    const findMeomoryCost = document.getElementById('memory-cost');
    const findDeliveryCost = document.getElementById('delivery-cost')
    const totalPrice = 1299 + parseFloat(findMeomoryCost.innerText) + parseFloat(findStorageCost.innerText) + parseFloat(findDeliveryCost.innerText);
    const totalCost = document.getElementById('total-price');
    const finalAmount = document.getElementById('final-amount');
    totalCost.innerText = totalPrice;
    finalAmount.innerText = totalPrice;
}

// function of delivery input
function getDeliveryInput(inputId, click) {
    const findDeliveryCost = document.getElementById('delivery-cost');
    if (click == 'first') {
        findDeliveryCost.innerText = 0;
    }
    else {
        findDeliveryCost.innerText = 20
    }
    const findMeomoryCost = document.getElementById('memory-cost');
    const findStorageCost = document.getElementById('storage-cost');
    const totalPrice = 1299 + parseFloat(findMeomoryCost.innerText) + parseFloat(findStorageCost.innerText) + parseFloat(findDeliveryCost.innerText);
    const totalCost = document.getElementById('total-price');
    const finalAmount = document.getElementById('final-amount');
    totalCost.innerText = totalPrice;
    finalAmount.innerText = totalPrice;
}

// event listener of memory
document.getElementById('memory-8gb').addEventListener('click', function () {
    getMemoryInput('memory-8gb', 'first');
});

document.getElementById('memory-16gb').addEventListener('click', function () {
    getMemoryInput('memory-16gb', 'second');
});

// event listener of storage
document.getElementById('storage-256gb').addEventListener('click', function () {
    getStorageInput('storage-256gb', 'first');
});
document.getElementById('storage-512gb').addEventListener('click', function () {
    getStorageInput('storage-512gb', 'second');
});
document.getElementById('storage-1tb').addEventListener('click', function () {
    getStorageInput('storage-1tb', 'third');
});

// event listener of delivery
document.getElementById('charge-free').addEventListener('click', function () {
    getDeliveryInput('charge-free', 'first');
});
document.getElementById('charge-20').addEventListener('click', function () {
    getDeliveryInput('charge-20', 'second')
})

// promo code
document.getElementById('promo-code-btn').addEventListener('click', function () {
    const findPromo = document.getElementById('promo-code');
    const finalAmount = document.getElementById('final-amount');
    const promoValue = findPromo.value;
    totalCost = document.getElementById('total-price').innerText;
    if (promoValue == 'stevekaku') {
        discount = totalCost * (20 / 100);
        finalAmount.innerText = totalCost - discount;
        findPromo.value = '';
    }
});