console.log("funcionando...");
const hbs = require('hbs');
var fs=require('fs');
let data=fs.readFileSync('./data/menuinv.json','utf8');
var menuinv = JSON.parse(data);
//comprobar la conexión con el archivo json console.log(menuinv);
let res = document.querySelector('#res');
res.innerHTML='';
hbs.registerHelper('getProduct',function(){
    menuinv.forEach(element => {
        res.innerHTML += `
            <tr> 
                <td>${item.nombre}</td>
                <td>${item.precio}</td>
                <td>${item.descripcion}</td>
            </tr>
        `
    });
});