function merge() {
    // DOM elements
    const dataInput = document.getElementById("datasource");
    const dataOutput = document.getElementById("output");

    // merge JSON strings
    const base = {};
    dataInput.value.split("\n").map(line => JSON.parse(line)).forEach(obj => {
        Object.keys(obj).forEach(k => {
            base[k] = obj[k];
        })
    });

    // sort the keys
    const final = Object.keys(base).sort().reduce((acc, key) => {
        acc[key] = base[key];
        return acc;
    }, {});

    dataOutput.innerText = JSON.stringify(final);
}