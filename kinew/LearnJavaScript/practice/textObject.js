t = document.getElementById('valueTarget').firstChild;
console.log(t.nodeValue);
console.log(t.data);

target = document.getElementById('target').firstChild;
data = document.getElementById('datasource');
start = document.getElementById('start');
end = document.getElementById('end');

function callAppendData() {
    target.appendData(data.value);
}

function callDeleteData() {
    target.deleteData(start.value, end.value);
}

function callInsertData() {
    target.insertData(start.value, data.value);
}

function callReplaceData() {
    target.replaceData(start.value, end.value, data.value);
}

function callSubstringData() {
    alert(target.subStringData(start.value, end.vale));
}