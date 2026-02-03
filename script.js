const wrapper = document.getElementById('main-wrapper');
const cards = document.querySelectorAll('.card');

// 카드 클릭 이벤트
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const overlay = document.getElementById('work-overlay');
        document.getElementById('project-title').innerText = card.getAttribute('data-title');
        
        // 모든 그룹 숨기고 선택된 그룹만 표시
        document.querySelectorAll('.project-group').forEach(g => g.classList.remove('active'));
        const groups = document.querySelectorAll('.project-group');
        if(groups[index]) groups[index].classList.add('active');

        wrapper.classList.add('out');
        setTimeout(() => {
            overlay.classList.add('active');
            overlay.scrollTo(0, 0);
        }, 300);
    });
});

// 상단 메뉴 로직
const menuItems = [
    { b: 'work-nav', o: 'work-overlay' },
    { b: 'about-btn', o: 'about-overlay' },
    { b: 'contact-btn', o: 'contact-overlay' }
];

menuItems.forEach(item => {
    const btn = document.getElementById(item.b);
    const overlay = document.getElementById(item.o);

    if(btn && overlay) {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('clicked'));
            btn.classList.add('clicked');
            wrapper.classList.add('out');
            
            // WORK 메뉴 클릭 시 기본적으로 첫번째 그룹 활성화
            if(item.b === 'work-nav') {
                document.querySelectorAll('.project-group').forEach(g => g.classList.remove('active'));
                document.getElementById('content-branding').classList.add('active');
            }

            setTimeout(() => {
                overlay.classList.add('active');
                overlay.scrollTo(0, 0);
            }, 300);
        });

        const close = overlay.querySelector('.close-btn');
        close.addEventListener('click', (e) => {
            e.stopPropagation();
            overlay.classList.remove('active');
            wrapper.classList.remove('out');
            btn.classList.remove('clicked');
        });
    }
});
// 카드 클릭 이벤트 부분에 이 조건문만 확인해 주세요
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const overlay = document.getElementById('work-overlay');
        const header = document.getElementById('common-header'); // 헤더 ID 확인
        
        // 카드 2번(index 1)일 때만 헤더 숨기기 (원하실 경우)
        if(index === 1 && header) {
            header.style.display = 'none';
        } else if(header) {
            header.style.display = 'block';
        }
        
        // ... 나머지 보내주신 코드와 동일 ...
    });
});