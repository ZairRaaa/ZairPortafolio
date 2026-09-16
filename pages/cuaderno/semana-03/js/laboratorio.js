// Comportamiento del ejercicio; el menú pertenece a Bootstrap.
(() => {
  'use strict';
  const origin = location.origin === 'null' ? '*' : location.origin;
  const parts = [...document.querySelectorAll('[data-part]')];
  const send = message => { if (window.parent !== window) window.parent.postMessage(message, origin); };
  const updateEmpty = () => { document.querySelector('#empty-preview').hidden = parts.some(part => !part.hidden); };
  let previousHeight = 0;
  const reportHeight = () => {
    const height = Math.ceil(document.body.getBoundingClientRect().height) + 2;
    if (height !== previousHeight) { previousHeight = height; send({ type: 'huellitas:height', height }); }
  };
  window.addEventListener('message', event => {
    if (event.source !== window.parent || (location.origin !== 'null' && event.origin !== location.origin)) return;
    const data = event.data;
    if (!data || data.type !== 'huellitas:state') return;
    if (Array.isArray(data.steps) && data.steps.length === 5 && data.steps.every(value => typeof value === 'boolean')) {
      parts.forEach(part => { part.hidden = !data.steps[Number(part.dataset.part) - 1]; });
      updateEmpty();
    }
    if (['light', 'dark'].includes(data.theme)) document.documentElement.dataset.bsTheme = data.theme;
    if (['green', 'red'].includes(data.palette)) document.documentElement.dataset.palette = data.palette;
    requestAnimationFrame(reportHeight);
  });
  const reveal = step => {
    const part = parts.find(item => Number(item.dataset.part) === step);
    if (part) { part.hidden = false; updateEmpty(); send({ type: 'huellitas:enable', step }); }
  };
  document.querySelectorAll('[data-reveal]').forEach(link => link.addEventListener('click', () => {
    reveal(Number(link.dataset.reveal));
    if (window.bootstrap) bootstrap.Collapse.getInstance(document.querySelector('#dog-menu'))?.hide();
  }));
  const form = document.querySelector('#meet-form');
  const name = document.querySelector('#person-name');
  const choice = document.querySelector('#pet-choice');
  const consent = document.querySelector('#demo-consent');
  const result = document.querySelector('#form-result');
  const fields = [name, document.querySelector('#person-email'), choice, consent];
  let submitted = false;
  const validateField = field => {
    if (field === name) name.setCustomValidity(name.value.trim().length < 2 ? 'Escribe al menos dos caracteres.' : '');
    const invalid = !field.validity.valid;
    field.classList.toggle('is-invalid', invalid);
    field.setAttribute('aria-invalid', String(invalid));
    if (field === consent) document.querySelector('#consent-error').hidden = !invalid;
    return !invalid;
  };
  fields.forEach(field => {
    ['input', 'change'].forEach(type => field.addEventListener(type, () => {
      result.hidden = true;
      if (submitted) validateField(field);
    }));
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    submitted = true;
    const validity = fields.map(validateField);
    if (validity.some(valid => !valid)) {
      result.hidden = true;
      fields[validity.indexOf(false)].focus();
      return;
    }
    result.textContent = `¡Bien, ${name.value.trim()}! Tu ejemplo para conocer a ${choice.value} pasó la validación. No se ha enviado ni guardado ningún dato.`;
    result.hidden = false;
  });
  form.addEventListener('reset', () => {
    submitted = false;
    fields.forEach(field => { field.setCustomValidity(''); field.classList.remove('is-invalid'); field.removeAttribute('aria-invalid'); });
    document.querySelector('#consent-error').hidden = true;
    result.hidden = true;
    result.textContent = '';
  });
  document.querySelectorAll('[data-dog]').forEach(button => button.addEventListener('click', () => {
    reveal(5);
    choice.value = button.dataset.dog;
    if (submitted) validateField(choice);
    result.hidden = true;
    name.focus({ preventScroll: true });
    document.querySelector('#encuentro').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }));
  if ('ResizeObserver' in window) new ResizeObserver(() => requestAnimationFrame(reportHeight)).observe(document.body);
  window.addEventListener('load', () => {
    const unavailable = !window.bootstrap || !window.tailwind;
    const notice = document.querySelector('#cdn-status');
    if (unavailable) { notice.hidden = false; notice.textContent = 'No se cargaron todos los recursos del ejercicio. Revisa tu conexión y recarga para usar el diseño y el menú completos.'; }
    reportHeight();
  });
  window.addEventListener('resize', reportHeight);
  send({ type: 'huellitas:ready' });
  reportHeight();
})();
