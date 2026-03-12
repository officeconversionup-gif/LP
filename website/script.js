// script.js

document.addEventListener('DOMContentLoaded', () => {
    // スムーススクロールの実装 (Vanilla JS)
    // CSSの「scroll-behavior: smooth」が効かないブラウザへのフォールバックや、ヘッダーの高さを考慮したスクロール用
    const headerHeight = document.querySelector('.header').offsetHeight;
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ※今後の拡張: 申込フォームを作成した際、ここでバリデーション（必須項目のチェック等）を行います。
    // ※セキュリティ対応: ここにAPIキーを直接記述したり、機密情報を扱う処理は書きません。
});
