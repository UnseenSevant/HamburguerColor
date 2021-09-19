// OBJETO QUE SIGUE AL PUNTERO DEL MOUSE 

var cursor = document.getElementById('cursor') // CREO UN ELEMENTO PARA QUE SIGA AL MOUSE
let getButtons = document.getElementById('cursor')


// CREO EL EVENTO MOUSE MOVE DENTRO DE TODO EL DOM

document.addEventListener('mousemove', function(e){
    //SIEMPRE QUE EL MOUSE SE MUEVA SE EJECUTARAN TODOAS LAS CONDICIONES
    // DECLARO LA POSICION X e Y DEL MOSUE DENTRo DE LAS 2 VARIABLES

    var X = e.clientX
    var Y = e.clientY

    //REDECLARO LA POSICION DEL ELEMENTO 'CURSOR' Y LES INTRODUZCO CON LAS VARIABLES EL VALOR 
    //DE 'var X' y 'var Y'

    cursor.style.left = X + 'px'
    cursor.style.top = Y + 'px'

    //ANIMO EL ANCHO Y EL ALTO REASIGNANDO SU VALORES CON LOS DE CLIENTx Y CLIENTy
    cursor.style.height= X+ -200 + 'px'
    cursor.style.width= Y  + -200 + 'px'

    //ASEGURO LA POSICION DEL PUNTERO CON 'position:fixed;
    cursor.style.position = 'fixed'
   
    // ANIMACION DEL BORDE 
    cursor.style.borderTopLeftRadius = e.x + 'px'
    cursor.style.borderTopRightRadius= e.x + 'px'
    cursor.style.borderBottomLeftRadius = e.y + 'px'
    cursor.style.borderBottomRightRadius = e.y + 'px'  
   
   // CAMBIO DE COLOR DEL PUNTERO LUEGO DE LASCORDENADAS
   
    if (e.x === e.x){
        
        //CONSTRUYO EL  ELEMENTOS DEl ARRAY QUE LUEGO SER EL COLOR 'RGB' CON LAS VARIABLES X + Y 
        let reservada = 'rgb'
        let reservada2 = 'deg'
        let rotation = 'rotate'
        let skewWord = 'skewY'
        let skewWord2 = 'skewX'
        let parentesisA = '('
        let parentesisB = ')'
        var X = e.clientX
        var Y = e.clientY
        let xColor = X 
        let yColor = Y 

      
        //GENERO NUMEROS ALEATORIOS PARA CAMBIAR LOS COLOERS Y EL MOVIMIENTO ALEATORIAMENTE
        if(e.x  > 550 ){
        let number = 0
        let randomColorX = (Math.random(100)*150)
        let randomColorY = (Math.random(50)*200)
       
       

       xColor = Math.ceil(randomColorX)
       yColor = Math.ceil(randomColorY)
     }   
        
        //DECLARO LA VARIABLE QUE USARE COMO COLOR

        let rgbaa = [reservada + parentesisA + xColor + "," + yColor + "," + yColor + "," + 1 + parentesisB]

        //DECLARO EL ESTILO DEL NUEVOPUNTERO
        cursor.style.minWidth = '50px'
        cursor.style.minHeight = '50px'
        cursor.style.maxWidth = '70px'
        cursor.style.maxHeight = '70px'
        cursor.style.margin = '0'
        cursor.style.overflow = 'hidden'
        cursor.style.cursor = 'none'

        //INSERTO EL ARRAY 'rgbaa' 
        cursor.style.background = rgbaa
        console.log(rgbaa)
       
        let transformerRotation = [rotation + parentesisA + yColor + reservada2 + parentesisB].toString()
        let skewY = [skewWord + parentesisA + yColor + reservada2 + parentesisB].toString()
        let skewX = [skewWord2 + parentesisA + yColor + reservada2 + parentesisB].toString()
        let BorderRandom = [skewWord2 + parentesisA + yColor + reservada2 + parentesisB].toString()
        
        if( e.x === e.x){
          
            cursor.style.transform = transformerRotation
              // cursor.style.transform = skewX
             //cursor.style.transform = skewY                
        } 
}})
    
// ANIMACION 'BORDER COLOR'


document.addEventListener('mousemove',(e)=>{

    let reservada = 'rgb'
    let parentesisA = '('
    let parentesisB = ')'
    var X = e.clientX
    var Y = e.clientY
    let xColor = X 
    let yColor = Y 
    
    let rgbaa = [reservada + parentesisA + xColor + "," + yColor + "," + yColor + "," + 1 + parentesisB]
    cursor.borderColor = rgbaa
   


// ANIMACION 'BORDER WIDTH'
  
    let randomColorBorder = (Math.random(1)*20)
    let BorderCeil = (Math.round(randomColorBorder)) 
    let randomColorBorder2 = (Math.random(0)*50)
    let BorderCeil2 = (Math.round(randomColorBorder2)) 

    cursor.style.borderStyle = 'dashed double'
    cursor.style.borderWidth = BorderCeil + 'px'
    cursor.style.borderColor = rgbaa
    cursor.innerText = '`${$$♫ BY PETER ♫$$</p>}`'
  /*     
    cursor.style.maxwWidth = '40px'
    cursor.style.maxHeight = '40px' */
 

    //ANIMACION COLOR DE FONDO DE #selContainer

    let rgbaa2 = [reservada + parentesisA + yColor + "," + xColor + "," + xColor + "," + 1 + parentesisB]
   let GetBtnA = document.querySelector('a')
   let GetBtnLi = document.querySelector('li')

   let ANth1 = document.getElementById('ANth1')
   let LiNth1 = document.getElementById('LiNth1')

   let ANth2 = document.getElementById('ANth2')
   let LiNth2 = document.getElementById('LiNth2')

   let ANth3 = document.getElementById('ANth3')
   let LiNth3 = document.getElementById('LiNth3')
   

   //HEADER COLOR CHANGE
   getHeader.style.background = rgbaa2
    //MENU BAR COLOR CHANGE
   actionBttn.style.background = rgbaa
   //BUTTON [0] COLOR CHANGE
   GetBtnLi.style.background = rgbaa2
   GetBtnA.style.background = rgbaa2 
   GetBtnA.style.borderColor = rgbaa2
   GetBtnA.style.color = rgbaa
   //BUTTON [1] COLOR CHANGE
   ANth1.style.borderColor = rgbaa2
   ANth1.style.color = rgbaa
  
   LiNth1.style.background = rgbaa2
   LiNth1.style.borderColor = rgbaa
   LiNth1.style.borderRadius = BorderCeil2 + 'px'
 

    //BUTTON [2] COLOR CHANGE
   ANth2.style.borderColor = rgbaa2
   ANth2.style.color = rgbaa
   LiNth2.style.background = rgbaa2
   LiNth2.style.borderColor = rgbaa
   LiNth2.style.borderRadius = BorderCeil2 + 'px'
   

   //BUTTON [3] COLOR CHANGE
   ANth3.style.background = rgbaa2
   ANth3.style.borderColor = rgbaa2
   ANth3.style.color = rgbaa
   ANth3.style.borderRadius = BorderCeil2 + 'px'
   LiNth3.style.background = rgbaa2
   LiNth3.style.borderColor = rgbaa
   LiNth3.style.borderRadius = BorderCeil2 + 'px'
   
   let GetBody = document.getElementById('GetBody')
 
   
   

    if(e.y > 300){

       GetBody.style.background = 'black'
       GetBody.style.width = '100%'
       GetBody.style.height = '1200px' 
       GetBtnA.style.color= 'black' 
       ANth1.style.color = 'black'
       ANth2.style.color = 'black'
       ANth3.style.color = 'black'
         }else{

        GetBody.style.background = 'white'  

         }
    
})

/*  let ArticleId = document.getElementById('ArticleId')

 document.addEventListener('click',()=>{   

    ArticleId.classList.toggle('AarticleOpen')
    console.log('EL CLIK')
    ArticleId.style.background = 'red'
    
    })  */

    //CAMBIO DEL PUNTERO 'ON CLICK
    document.addEventListener('click',() =>{ 
        
        cursor.style.minWidth = '50px'
        cursor.style.minHeight = '50px'
        cursor.style.maxWidth = '1000px'
        cursor.style.maxHeight = '1000px'
        cursor.style.width = '8%'
        cursor.style.height = '16%'
       
})


//CAMBIO DE ESTILOS DE LA BARRA DE Menu

let actionbttn = document.getElementById('actionbttn')
actionBttn.addEventListener('click',()=>{   

selContainer.classList.toggle('ulActive')


})

let ArticleId = document.getElementById('ArticleId')
  
document.addEventListener('click',() => {   
 console.log('EL CLIK')
 ArticleId.classList.toggle('AarticleOpen')
 
 })
