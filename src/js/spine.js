import { getDatabase, ref, set } from "firebase/database";
import { app } from "./db.js";

const db = getDatabase(app);

function writeUserData(pj){
    set(ref(db, 'users/' + pj.id), {
        id:pj.id,
        sim_type:pj.sim_type,
        sim_list:pj.sim_list,
        topic:pj.topic, 
        lead_author:pj.lead_author, 
        co_author:pj.co_author,
        email:pj.email,
        deadline:pj.deadline,
        status:pj.status
    });
}


class project{
    
    sim_list = ['YZiCS', 'NewHorizon', 'NewHorizon2', 'NewCluster'];
    sim_type = [false, false, false, false];
    
    id = 1;
    topic = 'null';
    lead_author = 'null';
    co_author = 'null';
    email = 'null';
    deadline = 'null';
    status = 'waiting'; // waiting, accepted
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('proposal_form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input value by accessing its 'value' property
        let pj;
        pj = new project();

        pj.id = 4;
        pj.topic = document.getElementById('topic').value;
        pj.lead_author = document.getElementById('lau').value;
        pj.co_author = document.getElementById('cau').value;
        pj.email = document.getElementById('email').value;
        pj.deadline = document.getElementById('deadline').value;

        //pj.sim_type[0] = st_yz = document.getElementById('st_yz').checked;
        //pj.sim_type[1] = st_yz = document.getElementById('st_nh').checked;
        //pj.sim_type[2] = st_yz = document.getElementById('st_nh2').checked;
        //pj.sim_type[3] = st_yz = document.getElementById('st_nc').checked;

        pj.sim_type[0] = document.getElementById('st_yz').checked;
        pj.sim_type[1] = document.getElementById('st_nh').checked;
        pj.sim_type[2] = document.getElementById('st_nh2').checked;
        pj.sim_type[3] = document.getElementById('st_nc').checked;


        // Display input value in console
        //console.log('Username:', topic, deadline, st_yz, st_nh, st_nh2, st_nc);
        console.log('Username:', pj.topic, pj.lead_author, pj.co_author, pj.email, pj.deadline, pj.sim_type[0], pj.sim_type[1], pj.sim_type[2], pj.sim_type[3]);
        alert('Submitted');

        // Send the project to the DB
        writeUserData(pj);
        //make_pjtable_foradmin(pj);
        // Writeup
    });
});

const make_pjtable_reject = (btn) =>{

  //const table = document.getElementById('approve_project_list');
  //const row_index = btn.closest('tr').rowIndex;
  //table.deleteRow(row_index);
};

export function make_pjtable_accept(pjlist, index, decision){

  console.log("aaa", pjlist[index].lead_author);
  if(decision == 1) pjlist[index].status = 'approved';
  if(decision == 0) pjlist[index].status = 'reject';
  console.log("aaa", pjlist[index].status);
  writeUserData(pjlist[index]);


 //const table = document.getElementById('approve_project_list');
 //const row_index = btn.closest('tr').rowIndex;
 //
 //var row = table.rows[row_index];
 //var tdsNum = row.childElementCount;

 //var str = "";
 //
 //var sim_list = row.cells[0].innerHTML;
 //var topic = row.cells[1].innerHTML;
 //var lead_author = row.cells[2].innerHTML;
 //var co_author = row.cells[3].innerHTML;
 //var email = row.cells[4].innerHTML;
 //var deadline = row.cells[5].innerHTML;

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

