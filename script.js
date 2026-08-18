// Передаём в Яндекс Метрику цели кликов по Telegram и ВК.
(function () {
  const source = document.querySelector('script[src*="mc.yandex.ru/metrika/tag.js?id="]');
  const match = source && source.src.match(/[?&]id=(\d+)/);
  const counterId = match ? Number(match[1]) : 0;

  document.addEventListener('click', function (event) {
    const link = event.target.closest('[data-goal]');
    if (!link || !counterId || typeof window.ym !== 'function') return;
    window.ym(counterId, 'reachGoal', link.dataset.goal, {
      destination: link.href,
      page: location.href
    });
  });
})();
