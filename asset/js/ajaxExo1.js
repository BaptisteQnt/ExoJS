
fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(response => {
        console.log(response);
        const breeds = Object.keys(response.message);
        let sele = document.querySelector('select');
        breeds.forEach(breed => {
           
           let opt = document.createElement('option');
           opt.value = breed;
           opt.text = breed;
           sele.appendChild(opt);
        })
    })

    let btn = document.querySelector('#btn');
    btn.addEventListener('click', function () {
        let option = document.querySelector('#select').value;
        let url = "https://dog.ceo/api/breed/"+option+"/images/random";
        
        fetch(url)
            .then(response => response.json())
            .then(response =>{
                console.log(response);
                let image = document.querySelector("#img");
                let src = response.message

                image.setAttribute("src",src);
            })
    } );

    let sauvegarde = document.querySelector('#sauv');
    let savetable = [];
    let div = document.querySelector("#imgsave");
    
    sauvegarde.addEventListener('click', function () {
        let srcimg = document.querySelector("#img").src;
        savetable.push(srcimg);
        let lastimg = savetable.pop();
            let div2 = document.createElement("img")
            div2.src = lastimg;

            div.appendChild(div2);

    })

    






        
















// function dogs(index) {
//     if(index === 0){
//         let race = "akita";
//         let url = "https://dog.ceo/api/breed/"+race+"/images/random"
        
//         fetch(url)
//             .then(response => response.json())
//             .then(response =>{
//                 console.log(response);
//                 let image = document.querySelector("#img");
//                 let src = response.message

//                 image.setAttribute("src",src);
//             })
//     } else if (index === 1){
//         let race = "labrador";
//         let url = "https://dog.ceo/api/breed/"+race+"/images/random"
        
//         fetch(url)
//             .then(response => response.json())
//             .then(response =>{
//                 console.log(response);
//                 let image = document.querySelector("#img");
//                 let src = response.message

//                 image.setAttribute("src",src);
//             })
//     } else if (index === 2){
//         let race = "husky";
//         let url = "https://dog.ceo/api/breed/"+race+"/images/random"
        
//         fetch(url)
//             .then(response => response.json())
//             .then(response =>{
//                 console.log(response);
//                 let image = document.querySelector("#img");
//                 let src = response.message

//                 image.setAttribute("src",src);
//             })
//     } else if(index === 3){
//         let race = "bouvier";
//         let url = "https://dog.ceo/api/breed/"+race+"/images/random"
        
//         fetch(url)
//             .then(response => response.json())
//             .then(response =>{
//                 console.log(response);
//                 let image = document.querySelector("#img");
//                 let src = response.message

//                 image.setAttribute("src",src);
//             })
//     } else if(index === 4){
//         let race = "germanshepherd";
//         let url = "https://dog.ceo/api/breed/"+race+"/images/random"
        
//         fetch(url)
//             .then(response => response.json())
//             .then(response =>{
//                 console.log(response);
//                 let image = document.querySelector("#img");
//                 let src = response.message

//                 image.setAttribute("src",src);
//             })
//     }
// }



// btn.addEventListener('click', onc);


// switch (dogs) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// ------------------ TP1 ----------------------------

// function onc() {
//     let url = 'https://dog.ceo/api/breeds/image/random';

//     fetch(url) 
//         .then(response => response.json())
//         .then(response => {
//             let chien = response.message; 
//             let img = document.querySelector("#img");
//             img.setAttribute('src', chien);
//         }
//         );
// }

        





    

    