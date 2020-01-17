function fullItems(arrItem) {
    let elemContainer = document.getElementsByClassName("items-container");
    if (elemContainer.length > 0) {
        arrItem.forEach(element => {
            let elemItem = document.createElement("div");
            elemItem.innerHTML = `100`;
            elemContainer[0].appendChild(elemItem);
        });
    }


}


let item = {
    code: "IBS1024632",
    author: "Толстой Л.Н.",
    name: 'Война и мир',
    descr: 'Основательное произведение, много французских слов, 4 тома, твердый переплёт, в хозяйстве пригодится.',
}

let arrItems = [];
for (let i = 0; i < 100; i++) {
    arrItems.push(item);
}

fullItems(arrItems);