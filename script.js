const images = [
    'image1.jpg', // 첫 번째 이미지
    'image2.jpg', // 두 번째 이미지
    'image3.jpg'  // 세 번째 이미지
];
const lnk = [
    'https://juuuuuuuuuuuuuuuuuuuuuu.github.io/swjb_v2/', // 첫 번째 이미지
    'https://juuuuuuuuuuuuuuuuuuuuuu.github.io/Promising-in-the-future_v2/', // 첫 번째 이미지
    'https://en.wikipedia.org/wiki/C_(programming_language)', // 첫 번째 이미지
];

let currentIndex = 0;

// 이미지와 인덱스를 업데이트하는 함수
function updateImage() {
    const slide = document.getElementById('slide');
    const imageIndex = document.getElementById('imageIndex');
    const slideLink = document.getElementById("slideLink");

    imageIndex.textContent = `${currentIndex + 1} / ${images.length}`;
     
    slideLink.setAttribute("href",`${lnk[currentIndex]}`)
    slide.src = images[currentIndex];

    console.log(currentIndex)
}

// 이전 버튼 클릭 이벤트
document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

// 다음 버튼 클릭 이벤트
document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

// 초기 이미지 설정
updateImage();
