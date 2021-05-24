let APIURL = "";

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3030';
        break;
    case 'final-project-client.herokuapp.com' :
        APIURL = 'https://final-project-client.herokuapp.com'
}

export default APIURL;