
function GenerateFont(){
    let input  = document.getElementById("textIput").value;

    // Check if input is empty, set default values
  if (input.trim() === "") {
    document.getElementById("poppins").innerHTML = "Poppins";
    document.getElementById("mrs-saint-delafield").innerHTML = "Mrs Saint Delafield";
    document.getElementById("mr-dafoe").innerHTML = "Mr Dafoe";
    document.getElementById("share-tech-mono").innerHTML = "Share Tech Mono";
    document.getElementById("wallpoet").innerHTML = "Wallpoet";
    document.getElementById("mrs-sheppards").innerHTML = "Mrs  Sheppards";
  } else {
    // Get the font
    document.getElementById("poppins").innerHTML = input;
    document.getElementById("mrs-saint-delafield").innerHTML = input;
    document.getElementById("mr-dafoe").innerHTML = input;
    document.getElementById("share-tech-mono").innerHTML = input;
    document.getElementById("wallpoet").innerHTML = input;
    document.getElementById("mrs-sheppards").innerHTML = input;
  }
}

// adding the funtion to change the font

let selectedFont = '';
function changeFont(font){
    selectedFont = font;

    // update teh display canvas
    previewImage();

    // lets try ato check if it works
}

// function for preview Image
function previewImage(){
    
    const text = document.getElementById('textIput').value;
    const previewImage = document.getElementById("previewImage");
    

    // crreate anew image element
    const image = new Image();
    image.src = generateImageURL(text, selectedFont);

    // clear previous image
    while(previewImage.firstChild){
        previewImage.firstChild.remove();
    }

    // Append the new image
    previewImage.appendChild(image);
}


// function to generate th etext into image
function generateImageURL(text, font){
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const fontSize = 60;
    const fontStyle = '';

    context.font = `${fontStyle} ${fontSize}px ${font}`;
    const textWidth = context.measureText(text).width;

    const canvasWidth = textWidth + fontSize;
    const canvasHeight = fontSize + 30;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    context.width = canvasWidth;
    context.height = canvasHeight;

    context.fillStyle = "white";
    context.fillRect(-0,-0, canvas.width, canvas.height);

    context.fillStyle = "black";
    context.font = `${fontStyle} ${fontSize}px ${font}`;
    context.fillText(text, fontSize / 2, fontSize);

    return canvas.toDataURL('image/png');
}


// function to download the image
function downloadImage(){
    const text = document.getElementById('textIput').value;
    const imageURL = generateImageURL(text, selectedFont);

    // to create the link of the image
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'text_image.png';
    link.click();
}


// funtion to show the preview Image
function showPrev(){
    let preview = document.getElementById("preview");
    preview.classList.add("show-prev");
}


// function to close the preview image
function closePrreview(){
    let preview = document.getElementById("preview");
    preview.classList.remove("show-prev");
}

