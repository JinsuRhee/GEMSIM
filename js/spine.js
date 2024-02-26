class project{
    
    sim_list = ['YZiCS', 'NewHorizon', 'NewHorizon2', 'NewCluster'];
    sim_type = [false, false, false, false];
    
    topic = 'null';
    lead_author = 'null';
    co_author = 'null';
    email = 'null';
    deadline = 'null';
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('proposal_form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input value by accessing its 'value' property
        pj = new project();

        pj.topic = document.getElementById('topic').value;
        pj.lead_author = document.getElementById('lau').value;
        pj.co_author = document.getElementById('cau').value;
        pj.email = document.getElementById('email').value;
        pj.deadline = document.getElementById('deadline').value;

        pj.sim_type[0] = st_yz = document.getElementById('st_yz').checked;
        pj.sim_type[1] = st_yz = document.getElementById('st_nh').checked;
        pj.sim_type[2] = st_yz = document.getElementById('st_nh2').checked;
        pj.sim_type[3] = st_yz = document.getElementById('st_nc').checked;

        // Display input value in console
        //console.log('Username:', topic, deadline, st_yz, st_nh, st_nh2, st_nc);
        console.log('Username:', pj.topic, pj.lead_author, pj.co_author, pj.email, pj.deadline, pj.sim_type[0], pj.sim_type[1], pj.sim_type[2], pj.sim_type[3]);
        alert('Submitted');

        make_pjtable_foradmin(pj);
        // Writeup
    });
});


function make_pjtable_foradmin(){
    const table = document.getElementById('approve_project_list');
    const new_row = table.insertRow();
    const cell_length = table.rows[0].cells.length;

    console.log('Cell length: ', cell_length);

    for(let i=0; i < cell_length; i++){
      const new_cell = new_row.insertCell(i);
      let temp_html = ``;
      
      if(i === 0){ // simtype
        temp_html = `<td>`
        for(let j=0; j<pj.sim_list.length; j++){
            if(pj.sim_type[j]){
                temp_html += pj.sim_list[j] + `<br>`;
            };
        };
        temp_html += `</td>`
      };

      if(i === 1){ // Topic
        temp_html = `<td>` + pj.topic + `</td>`; 
      };

      if(i === 2){ // Lead Author
        temp_html = `<td>` + pj.lead_author + `</td>`; 
      };

      if(i === 3){ // Co-author
        temp_html = `<td>` + pj.co_author + `</td>`; 
      };

      if(i === 4){ // Email
        temp_html = `<td>` + pj.email + `</td>`; 
      };

      if(i === 5){ // Deadline
        temp_html = `<td>` + pj.deadline + `</td>`; 
      };

      if(i === 6){ // Decision
        temp_html = `<td>`;
        temp_html += `<button onclick="make_pjtable_accept(this)"> Accept </botton>`;
        temp_html += `<button onclick="make_pjtable_reject(this)"> Reject </botton>`;
        temp_html += `</td>`;
      };

      new_cell.insertAdjacentHTML('afterbegin', temp_html);
    };

    
   
    // Adding the entire table to the body tag
    //doc.appendChild(table);
    //doc.innerText('Hi~~~');
    //document.getElementById('approve_project').innerText = '<p>hi~</p>'; // instead of inner text add text?
};

const make_pjtable_reject = (btn) =>{

    const table = document.getElementById('approve_project_list');
    const row_index = btn.closest('tr').rowIndex;
    table.deleteRow(row_index);
};

const make_pjtable_accept = (btn) =>{

    

    const table = document.getElementById('approve_project_list');
    const row_index = btn.closest('tr').rowIndex;
    
    var row = table.rows[row_index];
    var tdsNum = row.childElementCount;

    var str = "";
    
    var sim_list = row.cells[0].innerHTML;
    var topic = row.cells[1].innerHTML;
    var lead_author = row.cells[2].innerHTML;
    var co_author = row.cells[3].innerHTML;
    var email = row.cells[4].innerHTML;
    var deadline = row.cells[5].innerHTML;

    // Write project
    //var path = '/storage6/GEMHomepage/data/project_list.txt';
    //var fileobj = new ActiveXObject("Scripting.FileSystemObject");
    //fWrite = fileobj.CreateTextFile(path);
    //fWrite.write('aaa');
    //fWrite.close();
    //FileWriter fw = new FileWriter(file, true);

    //fw.write('aaa bbb');
    //fw.flush();
    //fw.close();
};

path = '/storage6/GEMHomepage/data/project_list.txt';
fetch(path)
    .then(response => response.text())
    .then(text => {
            // Split the text file content by lines
            const lines = text.split('\n');
            const tableBody = document.querySelector('#project_list_table tbody');

            // Iterate through each line and create table rows
            console.log(lines.length);
    })
