let options = {
    width : 1366,
    height: 768,
    background :'red',
    font : {
        size : "16px",
        color:"#fff"
    }
}

//In JSON
console.log(JSON.stringify(options));

//In object
console.log(JSON.parse(JSON.stringify(options)));

//ajax - communicate with server for receive data
//1) Create object request
let request = new XMLHttpRequest();

//2) request setting
request.open("GET","server.php", true, login, password);

//3) Sending request , can contain body (except GET request)
request.send();

//4)  Server responces
//http code response 404...
request.status;

//not found...
request.statusText;

//text responce (backend send us)
request.responseText;

/*
 * current state our request (5 states -  0 1 2 3 4 5)
 * 0 unsent - object is created. open() doesn't call
 * 1 opened - open()  called
 * 2 headers_received - send() called, headers and status is available
 * 3 loading = loading responseText, contain incompele data
 * 4 done - the operation complete
*/
request.readyState;

//event readyStateChange
