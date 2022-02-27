const container = document.querySelector('.placeholder').parentElement;
const item = container.querySelector('.item');
const placeholders = container.querySelectorAll('.placeholder');


item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);
placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragleave', dragLeave);
  placeholder.addEventListener('dragenter', dragEnter);
  placeholder.addEventListener('dragover', dragOver);
  placeholder.addEventListener('drop', drop);
});


function dragStart(e) {
  setTimeout(() => e.target.classList.add('hide'), 0);
  e.target.classList.add('drag');
  container.classList.add('dropzone');
}

function dragEnd(e) {
  e.target.classList.remove('hide', 'drag');
  container.classList.remove('dropzone');
}

function dragLeave(e) {
  e.target.classList.remove('over')
}

function dragEnter(e) {
  e.target.classList.add('over')
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.target.classList.remove('over')
  e.target.append(item)
}