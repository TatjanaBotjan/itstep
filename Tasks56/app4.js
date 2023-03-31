let blocks = document.querySelector(".blocks");
let selectedDiv;

blocks.onclick = function (event) {
    let target = event.target; // где был клик?

    if (target.tagName != 'DIV') return; // не на div? тогда не интересует

    highlight(target); // подсветить div
};

function highlight(div) {
    if (selectedDiv) { // убрать существующую подсветку, если есть
        selectedDiv.classList.remove('highlight');
    }
    selectedDiv = div;
    selectedDiv.classList.add('highlight'); // подсветить новый div
}
