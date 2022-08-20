(function(){
    var btnencriptar = document.getElementById('btnEncriptar'),
     btndesencriptar = document.getElementById('btnDesencriptar'),
     btncopiar = document.getElementById('btnCopiar');

    var textArea = document.getElementById('textarea'),
    textareaaside = document.getElementById('textareaAside');

    var imgaside = document.getElementById('imgAside');
    var tituloaside = document.getElementById('tituloAside');
    var Parrafoaside = document.getElementById('ParrafoAside');
    var colaside = document.getElementById('colAside');
    var formularioaside = document.getElementById('formularioAside');

    /*+++++++CLAVES PARA ENCRIPTAR+++++++

    letra a : ai
    letra e : enter
    letra i : imes
    letra o : ober
    letra u: ufat


    Ejemplo

    gato = gaitober

    gaitober = gato
    
    
    */
    var textEncriptar ="";
    
    function Encriptar(e){
        var texto = textArea.value;
        var textoArreglo =[];

        imgaside.style.display = "none";
        tituloaside.style.display = "none";
        Parrafoaside.style.display = "none";
        colaside.style.display = "block";
        formularioaside.style.display = "block";

        for(var i=0; i < texto.length; i++){
            var letra = texto[i];

            if(letra.match(/[aeiou]/)){
                if(letra == ("a")){
                    textoArreglo.push("ai");
                }else if(letra == ("e")){
                    textoArreglo.push("enter");

                }else if (letra == ("i")){
                    textoArreglo.push("imes");
                }else if(letra == ("o")){
                    textoArreglo.push("ober");
                }else if(letra == ("u")){
                    textoArreglo.push("ufat");
                }
            }else{
                textoArreglo.push(letra);

            }
        }
        textareaaside.value = textoArreglo.join("");
        textArea.value = "Ingrese El texto aquí";
        
        e.preventDefault();
    }
    function Desencriptar(e){
        var texto = textArea.value;
        var palabra = texto.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
        textareaaside.value = palabra;
        textArea.value = "Ingrese El texto aquí";

        e.preventDefault();
    }
    function copiar(e){

        textArea.value = textareaaside.value;
        e.preventDefault();
    }
    function clicTextArea(e){
        
        textArea.value ="";

        e.preventDefault();
    }
    
    btnencriptar.addEventListener('click',Encriptar);
    btndesencriptar.addEventListener('click',Desencriptar);
    btncopiar.addEventListener('click',copiar);
    textArea.addEventListener('click',clicTextArea);
})();
