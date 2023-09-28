   // Function to handle the download button click
   const dwnldBtn = document.querySelector("[downloadButton]");
   dwnldBtn.addEventListener('click', function () {
    // Replace 'pdf-file.pdf' with the actual URL of your PDF file
    var pdfUrl = 'https://drive.google.com/file/d/12dv86aphL-o7VrNBejiE8fU_HiuCWTF2/view?usp=sharing';
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Ayush_Singh_Resume.pdf'; // Optional: specify the name for the downloaded file
    link.target = '_blank'; // Optional: open in a new tab/window
    link.click();
});