const array = ['Paris', 'Lyon', 'Montreal', 'Bordeaux']
const array1 = ['Paris', 33, ['Montreal', 'Bordeaux'], true]

// console.log(array[2][5]); 


for (i = 0; i < array1.length; i ++) {
    console.log(typeof array1[i]);  /* type of permet de connaitre le genre de données entrée dans le tableau */
}

array.sort() /* range les tableaux dans l'ordre */
console.log(array)

const numbers = [21, 45, 1,22, 44, 7]
console.log(numbers.sort())



// insérer une vidéo utube

const input = document.getElementById('inputvid')
const video = document.getElementById('video')
let link = "https://www.youtube.com/embed/l6qKAW8AZbM" ;

input.addEventListener('input', (e) => {
    changeLink(e.target.value);

    video.innerHTML = `<iframe width="560" height="315" src=${link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

const changeLink = (linkToChange) => {
    let embed = linkToChange.replace('watch?v=', "embed/")
    link = embed.split('&')[0];  /* le split permet de séparer en tableaux à partir du caractère "&" et le [0 permet de sélectionner uniquement le 1 er tableau] */
}
// "https://www.youtube.com/embed/l6qKAW8AZbM" 
// https://www.youtube.com/watch?v=l6qKAW8AZbM

