console.log("Hello Kesh..!")

let customerList = [];

function addCustomer(){
    let cusName = document.getElementById("name").value;
    let cusAdd = document.getElementById("address").value;
    let cusSalary = document.getElementById("salary").value;
    let cusPass = document.getElementById("password").value;
    
    let newCus = {
        name: cusName,
        address: cusAdd,
        salary: cusSalary,
        password: cusPass
    }

    customerList.push(newCus);

    console.log(customerList);

    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("password").value = "";


    loadTable(newCus);
}

function loadTable(newCustomerRef){
    let cusTable = document.getElementById("cusTable");

    cusTable.innerHTML += `
        <tr>
            <td>${newCustomerRef.name}</td>
            <td>${newCustomerRef.address}</td>
            <td>${newCustomerRef.salary}</td>
            <td>${newCustomerRef.password}</td>
        </tr>
    `
}