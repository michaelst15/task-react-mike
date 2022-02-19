function getData(url, callback) {
    let get = new XMLHttpRequest();
    get.onload = function () {
        if (get.status === 200) {
            return callback(JSON.parse(get.responseText));
        }
    };
    get.open("GET", url)
    get.send();
}

const data = getData("https://jsonplaceholder.typicode.com/users", function(data) {
    console.log(data);
})