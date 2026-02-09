
// DOCUMENT READY
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("ready");
    //
    // scroll à la position par défaut (ici on veut centrer)
    const $mapWrapper = document.getElementById('map-wrapper');
    const $map = document.getElementById('map');
    const mapWidth = $map.getBoundingClientRect().width;
    const mapHeight = $map.getBoundingClientRect().height;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    // on calcule la position pour avoir le centre de la carte au centre de l'écran
    let centerX = (mapWidth / 2) - (screenWidth/2);
    let centerY = (mapHeight / 2) - (screenHeight/2);
    // on scroll vers la position calculée
    $mapWrapper.scrollTo(centerX, centerY);
    //
    //
    // navigation dans la carte
    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;
    // début (souris enfoncée)
    $mapWrapper.addEventListener('mousedown', (event) => {
        console.log('souris pressée');
        isDragging = true;
        startX = event.pageX - $mapWrapper.offsetLeft;
        startY = event.pageY - $mapWrapper.offsetTop;
        scrollLeft = $mapWrapper.scrollLeft;
        scrollTop = $mapWrapper.scrollTop;
        /**/
        $mapWrapper.style.cursor = "grabbing";
    });
    // mouvement (souris déplacée)
    $mapWrapper.addEventListener('mousemove', (event) => {
        if (!isDragging){ 
            return 
        } else {
            console.log('souris pressée et bouge');
            event.preventDefault();
            const x = event.pageX - $mapWrapper.offsetLeft;
            const y = event.pageY - $mapWrapper.offsetTop;
            $mapWrapper.scrollLeft = scrollLeft - (x - startX);
            $mapWrapper.scrollTop = scrollTop - (y - startY);
        }
      });
    // arrêt (souris relachée)
    $mapWrapper.addEventListener('mouseup', () => {
        console.log('souris relachée');
        isDragging = false;
        /**/
        $mapWrapper.style.cursor = "grab";
    });









// Cible tous les éléments et le conteneur pour afficher l'image
    const elements = document.querySelectorAll('.elem, .circle, .triangle, .diamond');
    const imageContainer = document.getElementById('image-container');


    
const images = {
    circle1: 'src/img/imgCircle1.jpg',
    text: 'Ceci est une description pour le cercle 7',
    circle2: 'src/img/imgCircle2.jpg',
    circle3: 'src/img/imgCircle3.jpg',
    circle4: 'src/img/imgCircle4.jpg',
    circle5: 'src/img/imgCircle5.jpg',
    circle6: 'src/img/imgCircle6.jpg',
    circle7: 'src/img/imgCircle7.jpg',

    triangle1: 'src/img/imgTriangle1.jpg',
    triangle2: 'src/img/imgTriangle2.jpg',
    triangle3: 'src/img/imgTriangle3.jpg',
    triangle4: 'src/img/imgTriangle4.jpg',
    triangle5: 'src/img/imgTriangle5.jpg',
    triangle6: 'src/img/imgTriangle6.jpg',
    triangle7: 'src/img/imgTriangle7.jpg',
    triangle8: 'src/img/imgTriangle8.jpg',
    triangle9: 'src/img/imgTriangle9.jpg',
    triangle10: 'src/img/imgTriangle10.jpg',

    diamond1: 'src/img/imgDiamond1.jpg',
    diamond2: 'src/img/imgDiamond2.jpg',
    diamond3: 'src/img/imgDiamond3.jpg',
    diamond4: 'src/img/imgDiamond4.jpg',
    diamond5: 'src/img/imgDiamond5.jpg',
    diamond6: 'src/img/imgDiamond6.jpg',
    diamond7: 'src/img/imgDiamond7.jpg',
    diamond8: 'src/img/imgDiamond8.jpg',
    diamond9: 'src/img/imgDiamond9.jpg',
    diamond10: 'src/img/imgDiamond10.jpg',
    diamond11: 'src/img/imgDiamond11.jpg',
    diamond12: 'src/img/imgDiamond12.jpg',
    diamond13: 'src/img/imgDiamond13.jpg',
    diamond14: 'src/img/imgDiamond14.jpg',

    elem1: 'src/img/imgElem1.jpg',
    elem2: 'src/img/imgElem2.jpg',
    elem3: 'src/img/imgElem3.jpg',
    elem4: 'src/img/imgElem4.jpg',
    elem5: 'src/img/imgElem5.jpg',
    elem6: 'src/img/imgElem6.jpg',
    elem7: 'src/img/imgElem7.jpg',
    elem8: 'src/img/imgElem8.jpg',
    elem9: 'src/img/imgElem9.jpg',
    elem10: 'src/img/imgElem10.jpg',
    elem11: 'src/img/imgElem11.jpg',
};


// afficher image
function afficherImage(elementId) {
    const imagePath = images[elementId];
    if (imagePath) {
        imageContainer.innerHTML = `<img src="${imagePath}" alt="Image associée à ${elementId}">`;
        imageContainer.style.display = 'block';
        imageContainer.classList.add('fade-in');
    } else {
        alert('Aucune image trouvée pour cet élément.');
    }
}

// clic image
elements.forEach(element => {
    element.addEventListener('click', () => {
        afficherImage(element.id);
    });
});

// clic cacher image
imageContainer.addEventListener('click', () => {
    imageContainer.style.display = 'none';
    imageContainer.classList.remove('fade-in');
});












// descriptions
const descriptions = {
    circle1: "Une prêtresse d'antan ?",
    circle2: 'Ici, Van Gogh a déposer son oreille.',
    circle3: 'Le lion mécanique de la rue Sainte Catherine.',
    circle4: 'La magicienne.',
    circle5: "Cet oiseau veut aussi des vêtements pour l'hiver.",
    circle6: 'Des mots doux sous les ponts.',
    circle7: 'Tu souris, je sais que tu souris.',

    triangle1: "Message d'espoir.",
    triangle2: "Rencontrer l'amour dans la rue.",
    triangle3: 'Il y a de la vie derrière les bosquets.',
    triangle4: 'Petit lapin tout doux.',
    triangle5: 'Pour jouer aux fléchettes même sur les toîts.',
    triangle6: 'Eclosion.',
    triangle7: 'Des fleurs dans tous les coins.',
    triangle8: 'Il renvoie tous les regards.',
    triangle9: "Peut-être la porte d'un sanctuaire.",
    triangle10: "Parfum de rue",


    diamond1: 'Trace de vie extraterrestre.',
    diamond2: "Le chat s'amuse, il se cache dans l'architecture.",
    diamond3: "Ils préparent une armée.",
    diamond4: 'Un oeil sur toi.',
    diamond5: "Les oursons se parachutent sur terre.",
    diamond6: "Une ancienne forme d'écriture.",
    diamond7: "Elle attend de la compagnie depuis longtemps.",
    diamond8: 'Le cimetière des garages.',
    diamond9: 'Attend sagement sa libération.',
    diamond10: 'Ne pas tourner à gauche',
    diamond11: 'Là où tout est possible',
    diamond12: "La porte de l'Enfer",
    diamond13: "Rare vision d'une mue de mur",
    diamond14: 'Lève les yeux vers le ciel',

    elem1: "Magritte. Pomme au chapeau melon.",
    elem2: 'Colibri onirique.',
    elem3: "Jeune homme en jaune sur coin de rue.",
    elem4: "Amour à l'hélium.",
    elem5: 'Le fameux losange multicolor.',
    elem6: 'Un regard qui interroge.',
    elem7: 'là où la nourriture se trouve, il est aussi.',
    elem8: "Peut-être qu'il a rendez-vous ?",
    elem9: 'Cours, cours cours.',
    elem10: 'Fait des réserves sous le rideau rouge.',
    elem11: 'Miaou et Tchou Tchou.',
};

// afficher image avec texte
function afficherImage(elementId, imageSrc) {
    const description = descriptions[elementId] || 'Description non disponible';
    imageContainer.innerHTML = `
        <img src="${imageSrc}" alt="${elementId}">
        <div class="description">${description}</div>
    `;
    imageContainer.style.display = 'block';
    imageContainer.classList.add('fade-in');
}

// événements pour tous les éléments
document.querySelectorAll('.circle, .triangle, .diamond, .elem').forEach(element => {
    element.addEventListener('click', () => {
        const elementId = element.id;
        const imageSrc = `src/img/img${elementId.charAt(0).toUpperCase() + elementId.slice(1)}.jpg`;
        afficherImage(elementId, imageSrc);
    });
});

// clic cacher image et texte
imageContainer.addEventListener('click', () => {
    imageContainer.style.display = 'none';
    imageContainer.classList.remove('fade-in');
});




});
