let boardInputDatas = {
    title: "",
    content: "",
    writer: "",
};

function setInputsEvent() {
    const titleInput = document.querySelector(".main-article > input:nth-of-type(1)");
    const contentInput = document.querySelector(".main-article > textarea");
    const writerInput = document.querySelector(".main-article > input:nth-of-type(2)");
    titleInput.onkeyup = handleBoardInputOnChange;
    contentInput.onkeyup = handleBoardInputOnChange;
    writerInput.onkeyup = handleBoardInputOnChange;
}

function setButtonEvent() {
    const submitButton = document.querySelector(".write-submit-button");
    submitButton.onclick = handleSubmitOnClick;
}

function handleSubmitOnClick() {
    console.log(boardInputDatas);
    clear();

}

function clear() {
    const titleInput = document.querySelector(".main-article > input:nth-of-type(1)");
    const contentInput = document.querySelector(".main-article > textarea");
    const writerInput = document.querySelector(".main-article > input:nth-of-type(2)");
    const inputs = [titleInput, contentInput, writerInput];
    inputs.forEach(input => input.value = "");
    boardInputDatas = {
        title: "",
        content: "",
        writer: "",
    };
} 

function handleBoardInputOnChange(e) {
    boardInputDatas = {
        ...boardInputDatas,
        [e.target.name]: e.target.value,
    };
}

setInputsEvent();
setButtonEvent();