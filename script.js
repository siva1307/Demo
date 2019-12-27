var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["sid"] = document.getElementById("sid").value;
    formData["sname"] = document.getElementById("sname").value;
    formData["mail"] = document.getElementById("mail").value;
    formData["lass"] = document.getElementById("lass").value;
    formData["enroll"] = document.getElementById("enroll").value;
    formData["city"] = document.getElementById("city").value;
    formData["country"] = document.getElementById("country").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.sid;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.sname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.mail;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.lass;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.enroll;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.city;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.country;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("sid").value = "";
    document.getElementById("sname").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("lass").value = "";
    document.getElementById("enroll").value = "";
    document.getElementById("city").value = "";
    document.getElementById("country").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("sid").value = selectedRow.cells[0].innerHTML;
    document.getElementById("sname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("mail").value = selectedRow.cells[2].innerHTML;
    document.getElementById("lass").value = selectedRow.cells[3].innerHTML;
    document.getElementById("enroll").value = selectedRow.cells[4].innerHTML;
    document.getElementById("city").value = selectedRow.cells[5].innerHTML;
    document.getElementById("country").value = selectedRow.cells[6].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.sid;
    selectedRow.cells[1].innerHTML = formData.sname;
    selectedRow.cells[2].innerHTML = formData.mail;
    selectedRow.cells[3].innerHTML = formData.lass;
    selectedRow.cells[4].innerHTML = formData.enroll;
    selectedRow.cells[5].innerHTML = formData.city;
    selectedRow.cells[6].innerHTML = formData.country;


}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("sid").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}