document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('proposal_form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input value by accessing its 'value' property
        const topic = document.getElementById('topic').value;
        const lau = document.getElementById('lau').value;
        const cau = document.getElementById('cau').value;
        const email = document.getElementById('email').value;
        const deadline = document.getElementById('deadline').value;

        const st_yz = document.getElementById('st_yz').checked;
        const st_nh = document.getElementById('st_nh').checked;
        const st_nh2= document.getElementById('st_nh2').checked;
        const st_nc = document.getElementById('st_nc').checked;        
        

        // Display input value in console
        console.log('Username:', topic, deadline, st_yz, st_nh, st_nh2, st_nc);
        alert('Submitted');

       make_pjtable_foradmin();
        // Writeup
    });
});

function make_pjtable_foradmin(){
    const doc = document.getElementById('approve_project');

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    //doc.appendChild(table);
    //doc.innerText('Hi~~~');
    document.getElementById('approve_project').innerText = '<p>hi~</p>';
};