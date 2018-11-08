//cargar la aplicacion de electron
const app=require('electron').app;
//crear ventanas del sistema operativo
const BrowserWindow=require('electron').BrowserWindow;
//Ruta de archivos de s.o
const path=require('path');
const url=require('url');
//Otra forma de declarar una constante
//Pantalla principal
let PantallaPrincipal;

function muestraPantallaPrincipal(){
	//Creamos una pantalla vacia
	PantallaPrincipal=new BrowserWindow({width:380, height:420});
	//cargamos en la pantalla el contenido de nuestra pagina
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}))
	//mostramos la panatalla
	PantallaPrincipal.show();
}

app.on('ready',muestraPantallaPrincipal);
