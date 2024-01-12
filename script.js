function submitForm() {
    
    var course = document.getElementById("course").value;
    var specialty = document.getElementById("specialty").value;

   
    var group = specialty.split(' ').join('-') + '-' + course;

    
    var currentYear = new Date().getFullYear();
    var startYear = currentYear  - parseInt(course, 10); 

    
    var resultTableDiv = document.getElementById("resultTable");

    var table = document.createElement("table");
    var thead = table.createTHead();
    var row = thead.insertRow();
    var headings = ["Рік вступу", "Рік закінчення", "Назва групи"];
    for (var i = 0; i < headings.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = headings[i];
        row.appendChild(th);
    }

    var tbody = table.createTBody();
    var tr = tbody.insertRow();
    var tdStartYear = tr.insertCell();
    var tdEndYear = tr.insertCell();
    var tdGroup = tr.insertCell();

    tdStartYear.innerHTML = startYear;
    tdEndYear.innerHTML = startYear + 4; 
    tdGroup.innerHTML = group;




    
    resultTableDiv.innerHTML = "";
    resultTableDiv.appendChild(table);



    
    var resultList = document.getElementById("resultList");
    var listItem = document.createElement("li");
    listItem.innerHTML = `Група: ${group}, Рік вступу: ${startYear}, Рік закінчення: ${startYear + 4}`;
    resultList.appendChild(listItem);
}
