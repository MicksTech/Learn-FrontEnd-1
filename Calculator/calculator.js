const val = document.getElementById('inp');

function AT_add(v) {
    val.value += v;
}

function remove() {
    val.value= val.value.substr(0, val.value.length - 1);
}

function cancel() {
    val.value = '';
}

function exe() {
    try {
         val.value = eval(val.value)
    }
       catch (e) {
        val.value = 'Error';
    } 
}