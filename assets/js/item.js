console.log("Hello Item")

let itemList = [];

function readJson(){
    fetch("../assets/json/item.json")
    .then(res => res.json())
    .then(data =>{
        itemList = data;
        // console.log(data);
        loadTable()
    })
}

readJson();

function loadTable(){
    let tblItem = document.getElementById("itemTable");

    itemList.forEach(item => {
        tblItem.innerHTML +=`
            <tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.price}</td>
                <td>${item.description}</td>
                <td>${item.category}</td>
                <td><img src="${item.image}" width ="150px" alt=""></td>
            </tr>
        `;
    })
}