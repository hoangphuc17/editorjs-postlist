// helpers function
export const makeElement = function make(
  tagName,
  classNames = null,
  attributes = {}
) {
  const el = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (classNames) {
    el.classList.add(classNames);
  }

  for (const attrName in attributes) {
    el[attrName] = attributes[attrName];
  }

  return el;
};

export const makePostElement = function make(post, classNames, removeFunction) {
  const el = document.createElement("div");
  const img = document.createElement("img");

  const info = document.createElement("div");
  const title = document.createElement("h4");
  const removeBtn = document.createElement("button");

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (classNames) {
    el.classList.add(classNames);
  }

  img.src = post.thumbnail.url;
  img.classList.add("thumbnail");

  
  title.classList.add("title");
  title.innerHTML = post.title;

  removeBtn.classList.add("remove-btn");
  removeBtn.innerHTML = 'Remove';
  removeBtn.addEventListener('click', () => {
    removeFunction();
  })

  el.appendChild(img);

  info.appendChild(title);
  el.appendChild(info);
  
  el.appendChild(removeBtn);

  return el;
};
