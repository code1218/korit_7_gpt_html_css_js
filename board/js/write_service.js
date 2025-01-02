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

function handleBoardInputOnChange(e) {
    boardInputDatas = {
        ...boardInputDatas,
        [e.target.name]: e.target.value,
    };
}

setInputsEvent();