function merge() {
    let dataInput = document.querySelector("#datasource");
    let data = dataInput.value;
    let lines = data.split("\n");
    let arr = lines.map(line => JSON.parse(line));
    const base = arr.shift();
    console.log("BASE: " + Object.keys(base).length);
    console.log(base);
    const final = {};
    Object.keys(base).forEach(k => {
        final[k] = base[k];
    });
    console.log("OTHERS");
    arr.forEach(obj => {
        console.log(obj);
        Object.keys(obj).forEach(k => {
            final[k] = obj[k];
        })
    });
    console.log("FINAL: " + Object.keys(final).length);
    console.log(final);
}