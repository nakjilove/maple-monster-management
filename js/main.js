const list = document.getElementById('list');
const addBtn = document.getElementById('add-button');
addBtn.addEventListener('click', showAddForm);

let items = [];

//로딩창
const loading_page = document.getElementById("load");
const loadingText = document.getElementById("loadingText");

setTimeout(function() {
  loadingText.textContent = "Loading complete"; // 로딩 텍스트 변경 (선택 사항)
  loading_page.style.display = 'none';
}, 3000);

// 등록 폼 열기
function showAddForm() {
    const addForm = document.getElementById("addForm");
    addForm.style.display = "block";
}

// 등록 폼 내부의 등록 버튼
const addFormBtn = document.getElementById('add-form-btn');
addFormBtn.addEventListener('click', function () {
    addMonster();
    saveToLocalStorage();
    closeAddForm();
});

// 등록 폼 내의 취소 버튼
const closeFormBtn = document.getElementById('close-form-btn');
closeFormBtn.addEventListener('click', closeAddForm);

// 등록 폼 닫기
function closeAddForm() {
    const addForm = document.getElementById("addForm");
    defaultPhoto.style.display = 'block'; // 기본 이미지 표시
    addForm.style.display = "none";
}


// 몬스턴 등록
function addMonster() {
  const image = document.getElementById("photo")
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const level = document.getElementById("level").value;
  const dropItem = document.getElementById("dropItem").value;
  const box = {
      image: uploadedPhoto.src,
      id: new Date().getTime(),
      name: name,
      email: email,
      phone: phone,
      category: category,
      checked: false
  }

  // 등록 폼 사진 올리기
const photoInput = document.getElementById('photo');
const defaultPhoto = document.getElementById('defaultPhoto');
const uploadedPhoto = document.getElementById('uploadedPhoto');

photoInput.addEventListener('change', function(event) {
  const file = event.target.files[0];

  if (file) {
      defaultPhoto.style.display = 'none'; // 기본 이미지 숨기기
      const reader = new FileReader();
      reader.onload = function(e) {
          uploadedPhoto.src = e.target.result;
      };
      reader.readAsDataURL(file);
  }
});}