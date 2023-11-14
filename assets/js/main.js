const nestedItem = document.querySelector(".nestedItem")
const nestedToggleMenu = document.querySelector(".nestedToggleMenu")
const arrow = document.querySelector(".arrow")

const writeInpToggle = document.querySelector(".writeInpRight p")
const writeInpLeft = document.querySelector(".writeInpLeft")


nestedItem.addEventListener("click", () => {
    nestedToggleMenu.classList.toggle("active")
    arrow.classList.toggle("active")
})



let isOpen = true
writeInpToggle.addEventListener("click", () => {
    if (isOpen) {
        writeInpLeft.style.opacity = "0"
        setTimeout(() => {
            writeInpLeft.classList.add("active")
        }, 300);
        isOpen = false
    } else {
        writeInpLeft.style.opacity = "1"
        writeInpLeft.classList.remove("active")
        isOpen = true
    }
})



// custom dropdown functionality
function setupCustomSelect(selectId) {
    const selectContainer = document.getElementById(selectId);
    const selectStyled = selectContainer.querySelector('.select-styled');
    const selectOptions = selectContainer.querySelector('.select-options');

    selectStyled.addEventListener('click', function () {
        selectOptions.style.display = (selectOptions.style.display === 'block') ? 'none' : 'block';
    });

    selectContainer.querySelectorAll('.select-options div').forEach(function (option) {
        option.addEventListener('click', function () {
            selectStyled.innerText = this.innerText;
            selectOptions.style.display = 'none';
        });
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener('click', function (e) {
        if (!e.target.closest('.custom-select') || e.target.closest('.custom-select') !== selectContainer) {
            selectOptions.style.display = 'none';
        }
    });
}

// Set up the custom selects
setupCustomSelect('customSelect1');
setupCustomSelect('customSelect2');