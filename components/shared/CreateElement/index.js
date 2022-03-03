export const CreateElement = (type, props) => {
  const elem = document.createElement(type);

  for (const key in props) {
    if (key === 'class' && !Array.isArray(props[key])) {
      elem.classList.add(props[key]);
      continue;
    }

    if (key === 'class' && Array.isArray(props[key])) {
      elem.classList.add(...props[key]);
      continue;
    }

    if (key === 'children' && !Array.isArray(props[key])) {
      if (props[key] === undefined || props[key] === null) continue;
      elem.appendChild(props[key]);
      continue;
    }

    if (key === 'children' && Array.isArray(props[key])) {
      for (const item of props[key]) {
        if (item === undefined || item === null) continue;
        elem.appendChild(item);
      }
      continue;
    }

    if (key.toLowerCase() === 'textcontent') {
      elem.textContent = props[key];
      continue;
    }

    if (key.toLowerCase() === 'onclick') {
      elem.addEventListener('click', props[key]);
      continue;
    }

    if (key.toLowerCase() === 'onchange') {
      elem.addEventListener('change', props[key]);
      continue;
    }

    if (key.toLowerCase() === 'keyup') {
      elem.addEventListener('keyup', props[key]);
      continue;
    }

    elem.setAttribute(key, props[key]);
  }
  return elem;
};
