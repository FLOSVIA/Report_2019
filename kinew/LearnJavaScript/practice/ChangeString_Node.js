function get() {
    target = document.getElementById('target');
    alert(target.innerHTML);
}

function set() {
    target = document.getElementById('target');
    target.innerHTML = '<li>JavaScript Core</li><li>BOM</li><li>DOM</li>'
}