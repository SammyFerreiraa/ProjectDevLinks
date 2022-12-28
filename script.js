function  toggleMode() {
     const html = document.documentElement
     
     /*if (html.classList.contains('light')) {
     				html.classList.remove('light')
     } else {
     				html.classList.add('light')
     }*/
     
     html.classList.toggle('light')
     
     /* IMAGEM */
     
     const img = document.querySelector("#profile img")
     
     if (html.classList.contains('light')) {
     				img.setAttribute("src", "./assets/avatar-moon.png")
     }else {
     				img.setAttribute("src", "./assets/avatar.png")
     }
     
     const coment = document.querySelector("#profile img")
     
     if (html.classList.contains('light')) {
     				img.setAttribute("alt", "Sammy no lightmode")
     }else {
     				img.setAttribute("alt", "Sammy no darkmode")
     }
} 

   
