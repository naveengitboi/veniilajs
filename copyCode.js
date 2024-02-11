const codes = document.querySelector('.codes')
const viewCode = document.querySelectorAll('.viewCode')
const copyCode = document.querySelectorAll('.copyCode')
const preTag = codes.querySelectorAll('pre')
const codesTags = codes.querySelectorAll('code')
let clicked = false

function handleView() {
    preTag.forEach((snippet) => {
        if (snippet.dataset.type == this.dataset.language) {
            if (clicked) {
                snippet.style.display = 'block';
                clicked = false

            }
            else {
                clicked = true
                snippet.style.display = 'none'
            }
        }
    })
}


function handleCopyBtn() {
    this.style.backgroundColor = 'green';
    this.innerText = 'Copied'
    
    const intervalId = setTimeout(()=>{
        this.innerText = 'Copy'
        this.style.backgroundColor = 'transparent';
    }, 2000)
    
    
    codesTags.forEach((snippet) => {
        if (snippet.dataset.type == this.dataset.language) {
            navigator.clipboard.writeText(snippet.innerText);
        }
    })
    return () => clearInterval(intervalId)
}

viewCode.forEach((viewCodeBtn) => {
    viewCodeBtn.addEventListener('click', handleView);
})

copyCode.forEach((copyCodeBtn) => {
    copyCodeBtn.addEventListener('click', handleCopyBtn)
})