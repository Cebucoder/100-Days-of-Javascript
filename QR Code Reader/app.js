const imageInput = document.getElementById('image-input');
const resultImage = document.getElementById('result-image')
const qrLink = document.getElementById('qr-link')
const loadingSpinner = document.getElementById('loading');

// Check if he FileReader Api is Supported
function hasFileReaderSupport(){
    return !!window.FileReader;
}

// Initialize the file input chnage event listener
function initFileInput(){
    imageInput.addEventListener('change', handleImageUpload);
}

// handle the image upload
function handleImageUpload(event){
    const file = event.target.files[0];
    if (file){
        const reader = new FileReader();
        reader.onload = function(event){
            const imageData = event.target.result;
            scanQRCode(imageData);
        };
        reader.readAsDataURL(file);
    }
}


// Scan the QR code

function scanQRCode(imageData){
    const image = new Image();
    image.onload = function(){
        const canvas = document.createElement('canvas');
        const canvasContext = canvas.getContext('2d');

        canvas.width = image.width;
        canvas.height = image.height;
        canvasContext.drawImage(image, 0 ,0, canvas.width, canvas.height);
        const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);


        const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
        });
        if(code){
            if(isURL(code.data)){
                showLoadingSpinner();
                qrLink.href = code.data; //set the href of the qrlink anchor tag
                qrLink.innerHTML = 'Visit Link <ion-icon name="arrow-forward-outline"></ion-icon>'; // set the link text and adding icon
                qrLink.style.display = 'flex' // show the qr link
                document.getElementById('hide-Upload-btn').style.display = 'none'; //hide the uplaod button after uploading qr image
                document.getElementById('refresh').style.display = 'flex'; //show the refresh button
                displayImageFromURL(code.data)
                .then(() => {
                    hideLoadingSpinner(); //Hide the loading spinner
                })
                .catch(() => {
                    hideLoadingSpinner(); //Hide the loading spinner
                    displayUploadImage(imageData); //display the uplaoded image
                });
            }else{
                displayUploadImage(imageData); //display the uplaod image
            }
        }
    
    };
    image.src = imageData;
}


// show loading spinner
function showLoadingSpinner(){
    loadingSpinner.style.display = 'block';
}

function hideLoadingSpinner(){
    loadingSpinner.style.display = 'none';
}



//Check if the string is a URl

function isURL(str){

    try {

        new URL(str);
        return true;
    }catch (error){
    return false;
    }
}


// Display the image from the URl if image url dont have image the uploaded iamge will display

function displayImageFromURL(url){
    return new Promise((resolve, reject) => {
        const img  = new Image();
        img.onload = function(){
            resultImage.src = url;
            resultImage.alt = 'Linked Image';
            resolve();
        };
        img.onerror = function(){
            reject();
        };
        img.src = url;
    });
}

// Display the uploaded image

function displayUploadImage(imageData){
    const canvas = document.createElement('canvas');
    const canvasContext = canvas.getContext('2d');
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    canvasContext.putImageData(imageData, 0, 0);
    resultImage.src = canvas.toDataURL();
    resultImage.alt = 'Uploaded Image';
}

// Check for filereader support and initilize the file input
if (hasFileReaderSupport()){
    initFileInput();
}else{
    resultImage.textContent = 'FileReader AP not Supported';
}


// adding function on refresh

function refresh(){
    resultImage.src = ''; //clear the image src
    resultImage.alt = '';
    qrLink.href = ''; //clear the href of the qr link anchor tag
    qrLink.innerHTML = ''; //clear the link text
    qrLink.style.display = 'none'; //hide the qr link anchor tag
    document.getElementById('hide-Upload-btn').style.display = 'flex'; //show the uplaod button after refresh
    document.getElementById('refresh').style.display = 'none' //hide the refresh button
    imageInput.value = ''; //clear image input prevous uplaod
}
