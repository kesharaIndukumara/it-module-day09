console.log("Hello Kesh..!")

let customerList = [];

function addCustomer(){
    let cusName = document.getElementById("name").value;
    let cusTitle = document.getElementById("title").value;
    let cusAdd = document.getElementById("address").value;
    let cusSalary = document.getElementById("salary").value;
    let cusPass = document.getElementById("password").value;
    
    let newCus = {
        name: cusName,
        title: cusTitle,
        address: cusAdd,
        salary: cusSalary,
        password: cusPass
    }

    customerList.push(newCus);

    // customerList.push(
    //     {
    //         name:cusName,
    //         title:cusTitle,
    //         address: cusAdd,
    //         salary: cusSalary,
    //         password: cusPass
    //     }
    // );

    console.log(customerList);

    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("password").value = "";
    document.getElementById("title").value = "";


    loadTable(newCus);
    // loadTable();

    console.log(document.getElementById("btnReg"))
}

function loadTable(newCustomerRef){
    let cusTable = document.getElementById("cusTable");

    cusTable.innerHTML += `
        <tr>
            <td>${newCustomerRef.name}</td>
            <td>${newCustomerRef.title}.${newCustomerRef.name}</td>
            <td>${newCustomerRef.address}</td>
            <td>${newCustomerRef.salary}</td>
            <td>${newCustomerRef.password}</td>
        </tr>
    `
}

function loadTable(){
    let cusTable = document.getElementById("cusTable");

    customerList.forEach(customer =>{
        cusTable.innerHTML += `
            <tr>
                <td>${customer.name}</td>
                <td>${customer.title}.${customer.name}</td>
                <td>${customer.address}</td>
                <td>${customer.salary}</td>
                <td>${customer.password}</td>
            </tr>
        `
    })
}