function showRandomImage() {
    // Array of image file names
    const imageSet = [
        'images/allahisthree.png', 
        'images/allegoricalbible.png',
        'images/therapist.jpg', 
        'images/ayo.png',
        'images/ballin.jpeg',
        'images/backfrommyprayers.png',
        'images/blueman.png',
        'images/ca3bath.png',
        'images/ca3strokes.png',
        'images/car.png',
        'images/clearlyoutnumbered.jpg',
        'images/charles.jpeg',
        'images/dryover.png',
        'images/englisheyes.png',
        'images/existenceover.png',
        'images/flooditagain.jpg',
        'images/fokisshug.webp',
        'images/foxchad.png',
        'images/foxshirt.webp',
        'images/freaky biden.jpg',
        'images/Fy3xT5DWYAAxEl6.png',
        'images/geocentrismback.png',
        'images/hathan.png',
        'images/heonlylooksatgaypeople.png',
        'images/inventiondenomination.png',
        'images/isoverstopbeing.png',
        'images/josephblack.png',
        'images/ISS.jpeg',
        'images/kanepet.gif',
        'images/livefortworeasons.png',
        'images/marriage.png',
        'images/moodboard.png',
        'images/moodboard2.png',
        'images/myca3isaca3thatturnsca3intohathanca3.png',
        'images/petersonshoot.png',
        'images/reformationoverstopprotestant.png',
        'images/satanistshatehim.png',
        'images/smithpentagon.png',
        'images/someofyouarecatholic.png',
        'images/THOMIST.png',
        'images/WLClookbad.png'
        
    ];

    // Select a random image from the array
    const randomImage = imageSet[Math.floor(Math.random() * imageSet.length)];

    // Open the image in a new tab
    window.open(randomImage, '_blank');
}
function toggleExpand(post) {
    post.classList.toggle('expanded');
}

