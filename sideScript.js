/* ------------------------------------------------------------------ */
const repairBox = document.querySelector('#openRepair');
const closeRepair = document.querySelector('#closeRepair');

repairBox.addEventListener('click', () => {
    document.querySelector('#mySidenav').style.width = "100%";
    showAnim();

    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current === end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 3500, 4000, 100);
});

closeRepair.addEventListener('click', () => {
    closeAnim();

    let delayAnim = 1000;

    setTimeout(function () {
        document.querySelector('#mySidenav').style.width = "0%";
    }, delayAnim);
});
/* ------------------------------------------------------------------ */


/* ------------------------------------------------------------------ */

const upgradeBox = document.querySelector('#openUpgrade');
const closeUpgrade = document.querySelector('#closeUpgrade');

upgradeBox.addEventListener('click', () => {
    document.querySelector('#myUpgrade').style.width = "100%";
    showAnim();

    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current === end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count2", 1750, 2500, 150);

});

closeUpgrade.addEventListener('click', () => {
    closeAnim();

    let delayAnim = 1000;

    setTimeout(function () {
        document.querySelector('#myUpgrade').style.width = "0%";
    }, delayAnim);
});
/* ------------------------------------------------------------------ */


/* ------------------------------------------------------------------ */

const recoverBox = document.querySelector('#openRecover');
const closeRecover = document.querySelector('#closeRecover');
recoverBox.addEventListener('click', () => {
    document.querySelector('#myRecover').style.width = "100%";
    showAnim();

    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current === end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count3", 300, 500, 4000);

});

closeRecover.addEventListener('click', () => {
    closeAnim();

    let delayAnim = 1000;

    setTimeout(function () {
        document.querySelector('#myRecover').style.width = "0%";
    }, delayAnim);
});
/* ------------------------------------------------------------------ */


/* ------------------------------------------------------------------ */
const purchaseBox = document.querySelector('#openPurchase');
const closePurchase = document.querySelector('#closePurchase');

purchaseBox.addEventListener('click', () => {
    document.querySelector('#myPurchase').style.width = "100%";
    showAnim();

    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current === end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count4", 22, 40, 4500);

});

closePurchase.addEventListener('click', () => {
    closeAnim();

    let delayAnim = 1000;

    setTimeout(function () {
        document.querySelector('#myPurchase').style.width = "0%";
    }, delayAnim);

});
/* ------------------------------------------------------------------ */
function showAnim () {
    let delayAnim = 1000;

    setTimeout(function () {

        let vis = document.querySelectorAll('.notVisible');
        if (vis.length === 0) {
            return null;
        } else {
            const hiddenElement = document.querySelectorAll('.notVisible');
            hiddenElement.forEach(el => el.classList.add('visible'));
        }

    }, delayAnim);
}

function closeAnim () {
    let vis = document.querySelectorAll('.visible');
    if (vis.length === 0) {
        return null;
    } else {
        const hiddenElement = document.querySelectorAll('.visible');
        hiddenElement.forEach(el => el.classList.replace('visible','notVisible'));
    }
}