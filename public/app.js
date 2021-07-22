const imgSizeText = document.getElementById('imgSize');
const uploadInput = document.getElementById('uploadInput');
const fileCheckerMessage = document.getElementById('fileCheckerMessage');
const previewImage = document.getElementById('previewImage');
const copyBtn = document.getElementsByClassName('copyBtn');
const copyText = document.getElementsByClassName('copyText');
let selectedFile;
let imgUrl = '';

for(let i = 0; i < copyBtn.length; i++) {
    copyBtn[i].onclick = () => {
        copyText[i].select();
        document.execCommand('copy');
        copyBtn[i].innerText = 'Copied';
        setTimeout(() => {
            copyBtn[i].innerText = 'Copy';
        }, 2000)
    }
}


copyBtn.onclick = () => {
  copyText.select();
  document.execCommand('copy');
  copyBtn.innerText = 'Copied';
  setTimeout(() => {
      copyBtn.innerText = 'Copy';
  }, 2000)
}

uploadInput.onchange = (event) => {
    if (event.target.files) {
        let reader = new FileReader();
        selectedFile = event.target.files[0];
        let imgSize = (selectedFile.size / 1024 / 1024).toFixed(2);
        imgSizeText.innerText = imgSize;
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
            imgUrl = event.target.result;
            previewImage.setAttribute('src', imgUrl);
            previewImage.style.width = '150px';
        }
        if (imgSize > 9.8) {
            fileCheckerMessage.innerText = 'File nặng qua trên 10MB rồi';
            fileCheckerMessage.setAttribute('class', 'text-danger');
        }
        else {
            fileCheckerMessage.innerText = 'Ổn áp đó Submit đi';
            fileCheckerMessage.setAttribute('class', 'text-success');
        }
    }
}