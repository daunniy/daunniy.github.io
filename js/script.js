function playSound(type) {
  let soundSource;
  if (type === 'nav') {
    soundSource = document.getElementById('navSound').src;
  } else if (type === 'profile') {
    soundSource = document.getElementById('profileSound').src;
  }

  if (soundSource) {
    const soundClone = new Audio(soundSource); // 새로운 오디오 인스턴스 생성
    soundClone.volume = 0.3;
    soundClone.play(); // 오디오 재생
  }
}



function showMainSection(sectionId, element) {
  // nav 소리 재생
  playSound('nav');

  // 모든 nav li와 home-nav li 항목에서 selected 클래스 제거
  document.querySelectorAll('.nav li, .home-nav li').forEach(navItem => {
    navItem.classList.remove('selected');
  });

  // 현재 클릭한 요소에 selected 클래스 추가
  element.classList.add('selected');

  // 모든 .section 요소를 비활성화
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  // 선택한 섹션 활성화
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add('active');
  }
}

// 홈 섹션 내부 서브 섹션 전환 함수
function showHomeSubSection(subSectionId, element) {
  // 소리 재생
  playSound();

  // 모든 .home-section 요소를 비활성화
  document.querySelectorAll('.home-section').forEach(subSection => {
    subSection.classList.remove('active');
  });

  // 클릭된 home-nav 요소에 'active' 클래스 추가
  document.querySelectorAll('.home-nav li').forEach(navItem => {
    navItem.classList.remove('active');
  });
  element.classList.add('active');

  // 선택한 서브 섹션 활성화
  const selectedSubSection = document.getElementById(subSectionId);
  if (selectedSubSection) {
    selectedSubSection.classList.add('active');
  }
}


// 홈 섹션 내부 서브 섹션 전환 함수
function showProjectSubSection(subSectionId, element) {
  // 소리 재생
  playSound();

  // 모든 .home-section 요소를 비활성화
  document.querySelectorAll('.projects-section').forEach(Project => {
    Project.classList.remove('active');
  });

  // 클릭된 home-nav 요소에 'active' 클래스 추가
  document.querySelectorAll('.projects-nav li').forEach(navItem => {
    navItem.classList.remove('active');
  });
  element.classList.add('active');

  // 선택한 서브 섹션 활성화
  const selectedSubSection = document.getElementById(ProjectId);
  if (selectedSubSection) {
    selectedSubSection.classList.add('active');
  }
}



let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideInterval = 8000;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  const offset = -index * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

function startAutoSlide() {
  setInterval(nextSlide, slideInterval); // 지정한 시간 간격마다 nextSlide 실행
}

// 페이지 로드 후 자동 슬라이드 시작
startAutoSlide();

// 처음 슬라이드를 보여주기 위해 초기 상태 설정
showSlide(currentIndex);

function toggleStatus() {
  const statusText = document.getElementById("statusText");
  const statusIndicator = document.querySelector(".profile .my .text span"); // 상태 원 아이콘 선택

  // 상태에 따라 텍스트와 클래스 토글
  if (statusText.innerText === "온라인") {
    statusText.innerText = "자리 비움";
    statusText.classList.add("away");
    statusIndicator.classList.add("away"); // 자리비움 상태에서 원 색 변경
  } else {
    statusText.innerText = "온라인";
    statusText.classList.remove("away");
    statusIndicator.classList.remove("away"); // 온라인 상태에서 원 색 복원
  }
}




const mainSect = document.querySelector('.main-sect');
const overlayImage = document.querySelector('.overlay-image');

// hover 시 overlay 이미지 나타내기
mainSect.addEventListener('mouseenter', () => {
  overlayImage.style.opacity = '1';
});

// hover 해제 시 overlay 이미지 숨기기
mainSect.addEventListener('mouseleave', () => {
  overlayImage.style.opacity = '0';
});

// 슬라이드 전환 시 overlay 이미지 숨기기
function hideOverlayImage() {
  overlayImage.style.opacity = '0'; // 슬라이드 전환 시 overlay 이미지 숨김
}

// 슬라이드 전환 함수에 overlay 이미지 숨기기 코드 추가
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
  hideOverlayImage(); // 슬라이드 넘길 때 overlay 이미지 숨김
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
  hideOverlayImage(); // 슬라이드 넘길 때 overlay 이미지 숨김
}



function openPopup(slideNumber) {
  // 모든 팝업 콘텐츠를 숨김
  document.querySelectorAll('.popup-content1, .popup-content2, .popup-content3, .popup-content4, .popup-content5, .popup-content6, .popup-content7').forEach(content => {
      content.style.display = 'none';
  });

  // 선택한 슬라이드 번호에 따라 해당 팝업 콘텐츠를 표시
  if (slideNumber === 1) {
      document.querySelector('.popup-content1').style.display = 'block';
  } else if (slideNumber === 2) {
      document.querySelector('.popup-content2').style.display = 'block';
  } else if (slideNumber === 3) {
      document.querySelector('.popup-content3').style.display = 'block';
  } else if (slideNumber === 4) {
    document.querySelector('.popup-content4').style.display = 'block';
  } else if (slideNumber === 5) {
    document.querySelector('.popup-content5').style.display = 'block';
  } else if (slideNumber === 6) {
    document.querySelector('.popup-content6').style.display = 'block';
  } else if (slideNumber === 7) {
    document.querySelector('.popup-content7').style.display = 'block';
}

  // 팝업을 표시
  document.getElementById('portfolioPopup').style.display = 'block';
}

function closePopup() {
  // 팝업을 숨김
  document.getElementById('portfolioPopup').style.display = 'none';
}




// 이미지를 클릭하면 크게 표시
function openImage(thumbnail) {
  const fullImageContainer = document.getElementById('fullImageContainer');
  const fullImage = document.getElementById('fullImage');

  // 클릭한 이미지의 src를 전체 이미지에 설정
  fullImage.src = thumbnail.src;

  // 전체 이미지를 표시
  fullImageContainer.style.visibility = 'visible';
  fullImageContainer.style.opacity = '1';

  // 이미지 외부 클릭 시 닫기
  fullImageContainer.addEventListener('click', function(event) {
    // 클릭한 곳이 이미지가 아닐 때만 닫기
    if (event.target === fullImageContainer) {
      closeImage();
    }
  });
}

// 이미지를 닫을 때
function closeImage() {
  const fullImageContainer = document.getElementById('fullImageContainer');

  // 전체 이미지를 숨김
  fullImageContainer.style.visibility = 'hidden';
  fullImageContainer.style.opacity = '0';
}




let selectedImage = '../image/5453.jpg'; // 기본 선택 이미지


// 페이지가 로드되었을 때 기본 선택 이미지에 'selected' 클래스 추가
window.onload = function() {
  // 기본 선택 이미지에 'selected' 클래스 추가
  document.querySelectorAll(".preview-image").forEach(img => {
    // 상대 경로를 비교하기 위해 getAttribute('src') 사용
    if (img.getAttribute('src') === selectedImage) {
      img.classList.add("selected");
    }
  });
};

// 모달 열기
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

// 모달 닫기
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function selectImage(imageSrc) {
  selectedImage = imageSrc;
  // 모든 미리보기 이미지에서 선택 클래스 제거
  document.querySelectorAll(".preview-image").forEach(img => img.classList.remove("selected"));
  // 클릭한 이미지에 선택 클래스 추가
  document.querySelectorAll(".preview-image").forEach(img => {
    if (img.getAttribute('src') === imageSrc) {
      img.classList.add("selected");
    }
  });
}

// 사용자 이미지를 업로드할 때 미리보기
function previewCustomImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      selectedImage = reader.result;
      // 사용자 이미지가 선택되면 기본 이미지 선택 해제
      document.querySelectorAll(".preview-image").forEach(img => img.classList.remove("selected"));
    };
    reader.readAsDataURL(file);
  }
}

// 메모 추가 함수
function addMemo() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const password = document.getElementById("password").value;
  
  if (!name || !message || !password) {
    alert("이름, 메시지, 비밀번호를 모두 입력해 주세요.");
    return;
  }

  // 비밀번호가 4자리 숫자인지 확인
  if (!/^\d{4}$/.test(password)) {
    alert("비밀번호는 4자리 숫자로만 입력해 주세요.");
    return;
  }

  const memo = { name, message, password, imageSrc: selectedImage };
  saveMemo(memo);  // 로컬 스토리지에 저장
  displayMemo(memo);  // 화면에 표시

  // 입력 필드 초기화
  document.getElementById("name").value = '';
  document.getElementById("message").value = '';
  document.getElementById("password").value = '';
  document.getElementById("customImage").value = '';
  closeModal();
}

// 메모 화면에 표시 함수
function displayMemo(memo) {
  const memoList = document.getElementById("memo-list");

  const memoDiv = document.createElement("div");
  memoDiv.classList.add("memo");

  const image = document.createElement("img");
  image.src = memo.imageSrc;
  image.alt = "User Image";
  image.classList.add("memo-image");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("memo-content");

  const nameHeading = document.createElement("h3");
  nameHeading.innerText = memo.name;

  const messageParagraph = document.createElement("p");
  messageParagraph.innerText = memo.message;

  // 삭제 버튼을 위한 컨테이너
  const actionsDiv = document.createElement("div");
  actionsDiv.classList.add("memo-actions");

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "삭제";
  deleteButton.onclick = () => {
    deleteButton.style.display = "none"; // 삭제 버튼 숨기기
    contentDiv.style.display = "none"; // 메모 콘텐츠 숨기기

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.placeholder = "비밀번호 입력";
    passwordInput.classList.add("password-input");

    const confirmButton = document.createElement("button");
    confirmButton.innerText = "확인";
    confirmButton.classList.add("confirm-button");
    confirmButton.onclick = () => {
      const inputPassword = passwordInput.value;
      if (inputPassword === memo.password) {
        memoDiv.remove();
        removeMemo(memo);
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    };

    const cancelButton = document.createElement("button");
    cancelButton.innerText = "취소";
    cancelButton.classList.add("cancel-button");
    cancelButton.onclick = resetContent; // 취소 버튼 클릭 시 resetContent 함수 실행

    // actionsDiv에 버튼 및 입력 필드 추가
    actionsDiv.appendChild(passwordInput);
    actionsDiv.appendChild(confirmButton);
    actionsDiv.appendChild(cancelButton);

    // 마우스가 메모 영역을 벗어날 때 resetContent 호출
    memoDiv.addEventListener("mouseleave", resetContent);
  };

  // 메모 콘텐츠와 삭제 버튼을 초기 상태로 되돌리는 함수
  function resetContent() {
    contentDiv.style.display = "flex"; // 메모 콘텐츠 다시 표시
    deleteButton.style.display = "inline"; // 삭제 버튼 다시 표시
    actionsDiv.querySelectorAll("input, .confirm-button, .cancel-button").forEach(element => element.remove());
  }

  contentDiv.appendChild(nameHeading);
  contentDiv.appendChild(messageParagraph);
  actionsDiv.appendChild(deleteButton); // deleteButton을 actionsDiv에 추가

  memoDiv.appendChild(image);
  memoDiv.appendChild(contentDiv);
  memoDiv.appendChild(actionsDiv); // actionsDiv를 memoDiv에 추가
  memoList.appendChild(memoDiv);
}




// 로컬 스토리지에 메모 저장
function saveMemo(memo) {
  const memos = JSON.parse(localStorage.getItem("memos") || "[]");
  memos.push(memo);
  localStorage.setItem("memos", JSON.stringify(memos));
}

// 로컬 스토리지에서 메모 삭제
function removeMemo(memoToRemove) {
  const memos = JSON.parse(localStorage.getItem("memos") || "[]");
  const updatedMemos = memos.filter(
    (memo) => memo.name !== memoToRemove.name || memo.message !== memoToRemove.message || memo.password !== memoToRemove.password
  );
  localStorage.setItem("memos", JSON.stringify(updatedMemos));
}

// 로컬 스토리지에서 메모 불러오기
function loadMemos() {
  const memos = JSON.parse(localStorage.getItem("memos") || "[]");
  memos.forEach((memo) => displayMemo(memo));
}

// 페이지 로드 시 로컬 스토리지에서 메모 로드
window.onload = () => {
  loadMemos();
};



const customCursor = document.querySelector('.custom-cursor');
const cursorDefault = document.querySelector('.cursor-default');
const cursorHover = document.querySelector('.cursor-hover');
const elementsToHover = document.querySelectorAll('.prev, .next, .close, button, a, nav, .home-nav, .projects-nav, input, .text span, .status-indicator, .memo, .projects-section');

// hover-target 클래스 추가
elementsToHover.forEach((element) => {
  element.classList.add('hover-target');
});


// 마우스 움직임에 따라 커서 위치 변경
document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});

// 특정 요소에서 호버 시 커서 전환
const hoverTargets = document.querySelectorAll('.hover-target');
hoverTargets.forEach((target) => {
  target.addEventListener('mouseover', () => {
    cursorDefault.style.display = 'none'; // 기본 커서 숨김
    cursorHover.style.display = 'block'; // 호버 커서 표시
  });

  target.addEventListener('mouseout', () => {
    cursorDefault.style.display = 'block'; // 기본 커서 표시
    cursorHover.style.display = 'none'; // 호버 커서 숨김
  });
});

