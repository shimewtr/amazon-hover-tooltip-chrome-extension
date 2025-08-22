(function() {
  'use strict';

  let tooltip = null;

  function createTooltip() {
    const tooltipEl = document.createElement('div');
    tooltipEl.id = 'amazon-hover-tooltip';
    tooltipEl.style.display = 'none';
    document.body.appendChild(tooltipEl);
    return tooltipEl;
  }

  function showTooltip(event, title) {
    if (!tooltip) {
      tooltip = createTooltip();
    }

    tooltip.textContent = title;
    tooltip.style.display = 'block';
    tooltip.style.left = (event.pageX + 10) + 'px';
    tooltip.style.top = (event.pageY - 30) + 'px';
  }

  function hideTooltip() {
    if (tooltip) {
      tooltip.style.display = 'none';
    }
  }

  function handleMouseMove(event) {
    if (tooltip && tooltip.style.display === 'block') {
      tooltip.style.left = (event.pageX + 10) + 'px';
      tooltip.style.top = (event.pageY - 30) + 'px';
    }
  }

  const processedImages = new WeakSet();
  const targetClasses = ['product-image', 'a-dynamic-image', 'a-thumbnail-left', 'coverImage'];

  function attachHoverEvents() {
    const selector = targetClasses.map(cls => `img.${cls}`).join(', ');
    const images = document.querySelectorAll(selector);

    images.forEach(img => {
      if (processedImages.has(img)) return;
      processedImages.add(img);

      const altText = img.getAttribute('alt');
      if (!altText) return;

      img.addEventListener('mouseenter', (event) => {
        showTooltip(event, altText);
      });

      img.addEventListener('mousemove', handleMouseMove);

      img.addEventListener('mouseleave', hideTooltip);
    });
  }

  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', attachHoverEvents);
    } else {
      attachHoverEvents();
    }

    let timeoutId;
    const observer = new MutationObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(attachHoverEvents, 100);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  init();
})();
