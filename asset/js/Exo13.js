// const click = document.querySelector('.img1').addEventListener('click',function zoom(){
//    document.querySelector('#XXL').classList.add('img1xxl')

//    document.querySelector('.img').addEventListener('click', function reset(){
//     document.querySelector('#XXL').classList.remove('img1xxl');
//    })
// }) 

// const click1 = document.querySelector('.img2').addEventListener('click',function zoom(){
//     document.querySelector('#XXL').classList.add('img2xxl')

//     document.querySelector('.img').addEventListener('click', function reset(){
//     document.querySelector('#XXL').classList.remove('img2xxl');
//  }) 
// })
// //  Et on fais ça pour toute les images a zoommer lors d'un click.

let smallImages = document.querySelectorAll('.small');
let bigImage = document.querySelector('.big');
let saveImage = smallImages[0];

smallImages.forEach(image => {
  image.addEventListener('click', displayImage);
});

function displayImage(event) {
  bigImage.src = event.target.src;
  saveImage.classList.remove('focus');
  saveImage = event.target;

  // smallImages.forEach(image => {
  //   image.classList.remove('focus');
  // });
  event.target.classList.add('focus');
};