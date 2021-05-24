let APIURL = "";

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3030';
        break;
    case 'gif-gallery-server.herokuapp.com' :
        APIURL = 'https://gif-gallery-server.herokuapp.com'
}

export default APIURL;