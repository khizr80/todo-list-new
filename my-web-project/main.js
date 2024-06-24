var inputf = document.querySelector('#input');
var num = 1;

inputf.addEventListener('keydown', function(e) {
    // Check if the event key is Enter and if the event's default action is not prevented
    if (e.key === 'Enter' && !e.defaultPrevented) {
        // Prevent further default action by marking the event as handled
        e.preventDefault();

        var input = inputf.value.trim(); // Trim whitespace from input
        console.log(input + num);
        
        if (input === "") {
            alert("Error: Input cannot be empty");
        } else {
            // Create new item div
            let newitem = document.createElement('div');
            newitem.className = 'item flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow mb-4'; // Tailwind classes
            newitem.id = num;

            // Create text span
            let text = document.createElement('span');
            text.className = 'spa flex-1'; // Tailwind classes
            text.id = num + 's';
            text.innerText = input;

            // Create edit button
            let neweditb = document.createElement('button');
            neweditb.className = 'edi bg-blue-500 text-white px-2 py-1 rounded mr-2'; // Tailwind classes
            neweditb.id = num + 'e';
            neweditb.innerText = 'edit';

            // Create remove button
            let newremb = document.createElement('button');
            newremb.className = 'rem bg-red-500 text-white px-2 py-1 rounded'; // Tailwind classes
            newremb.id = num + 'r';
            newremb.innerText = 'remove';

            // Append elements to newitem div
            newitem.appendChild(text);
            newitem.appendChild(neweditb);
            newitem.appendChild(newremb);

            // Append newitem to list
            document.getElementById('list').appendChild(newitem);

            // Increment num for the next item
            num++;

            // Clear input field
            inputf.value = '';
        }
    }
});

document.addEventListener('click', function(e) {
    if (e.target.className.includes('rem')) {
        e.target.parentNode.remove();
    }
});

function addPropertyOnBlur(obj, nid) {
    let text = obj.value.trim(); // Trim whitespace from input
    let spann = document.createElement('span');
    spann.innerText = text;
    spann.id = nid + 's';
    spann.className = 'spa flex-1'; // Tailwind classes
    obj.parentNode.insertBefore(spann, obj);
    obj.remove();
}

document.addEventListener('click', function(e) {
    if (e.target.className.includes('edi')) {
        let nid = e.target.id.replace(/[^0-9]/g, "");
        let id = nid + 's';
        let spann = document.getElementById(id);
        let txt = spann.innerText.trim(); // Trim whitespace from text
        let inp = document.createElement('input');
        inp.value = txt;
        spann.parentNode.insertBefore(inp, e.target);
        spann.remove();
        inp.className = 'border border-gray-300 p-2 rounded w-full'; // Tailwind classes
        inp.setAttribute('onblur', `addPropertyOnBlur(this, ${nid})`);
        inp.focus();
    }
});
