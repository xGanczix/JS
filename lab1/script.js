
function oblicz() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);
    let d = parseInt(document.getElementById("d").value);
    console.log(a);
    let sum = a + b + c + d;
    let sred = (a + b + c + d) / 4;
    let min = Math.min(a, b, c, d);
    let max = Math.max(a, b, c, d);
    document.getElementById("sum").value = sum;
    document.getElementById("sred").value = sred;
    document.getElementById("min").value = min;
    document.getElementById("max").value = max;
}
