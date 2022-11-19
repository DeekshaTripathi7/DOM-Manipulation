'use strict'

document.getElementById('addFormData').addEventListener('click', (event) => {

    //while form submitting, it prevents page to reload
    event.preventDefault();

    let first_name = document.getElementById('fname');
    let last_name = document.getElementById('lname');
    let gender = document.getElementById('gender');
    let state_name = document.getElementById('state');
    let country_name = document.getElementById('country');
    let checked_food  = document.getElementsByClassName('form-check-input');
    
    let table = document.getElementById('info_table');
 
    if((first_name.value.length == 0) || (last_name.value.length==0)){
        alert("Please fill the form");
    }
    else{
        //inserting data into table
        let row_count = table.rows.length;
        let row = table.insertRow(row_count);
    
        row.insertCell(0).innerHTML = '<input type="button" class="btn btn-danger" value="Delete" onClick="delete_row(this)">';
        row.insertCell(1).innerHTML = `${first_name.value}  ${last_name.value}`;
        row.insertCell(2).innerHTML = gender.value;
        row.insertCell(3).innerHTML = state_name.value;
        row.insertCell(4).innerHTML = country_name.value;
        
        for(let i = 0; i < checked_food.length; i++){
            if(checked_food[i].checked) {
                console.log("food" + checked_food[i].value)
                row.insertCell(5).innerHTML = checked_food[i].value;
            }
        }
    }
    
    //Clearing the form fields after adding data to table
    const inputs = document.querySelectorAll("#fname, #lname, #gender, #state, #country, #address, #pincode");

    inputs.forEach(input => {
        input.value = '';
      });
    
    //Unchecking the checkboxes
    let checkboxes = document.getElementsByClassName('form-check-input');
    for (let checkbox of checkboxes) {
        checkbox.checked = false;
    }

});

function delete_row(data){
    let index = data.parentNode.parentNode.rowIndex;
    let table = document.getElementById('info_table');
    let row_count = table.rows.length;
    let row = table.deleteRow(index);
}

