document.getElementById('currentYear').textContent = new Date().getFullYear();
      
       let imgBox = document.getElementById("imgBox");
       let qrImage = document.getElementById("qrImage");
       let qrText = document.getElementById("qrText");
       let downloadBtn = document.getElementById("downloadBtn");
       
       function generateQR(){

            if(qrText.value.length >0){
    
          // Fetching the API from goqr.me 
                let qrCodeURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);

                qrImage.src = qrCodeURL;

                imgBox.classList.add("show-img");

                downloadBtn.classList.add('download-active');
          //Download the QR_IMG     
                qrImage.onload = function () {

                    fetch(qrCodeURL)
                        .then(response => response.blob())
                        .then(blob => {
                            let qrBlobURL = URL.createObjectURL(blob);
                            downloadBtn.href = qrBlobURL;
                            downloadBtn.download = "QRCode.jpg";
                           
                        })
                        .catch(error => console.error("Error downloading QR code:", error));
                };


            }
           else{
            qrText.classList.add('error');
    
               setTimeout(()=>{
                    qrText.classList.remove('error');
                },1000);
    
           }

        
       }