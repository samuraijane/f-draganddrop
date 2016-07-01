// make some boxes
function makeBoxes(num) {
  var el, boxes, node;
  for(var i = 0; i < num; i++) {
    el = document.getElementById('inner-wrap');
    boxes = document.createElement('div');
    node = document.createTextNode('');
    boxes.id = "target-"+i;
    boxes.className = 'box';
    boxes.appendChild(node);
    el.appendChild(boxes);
  }
}

function makeImages(num) {
  var el, images, image;
  for(var i = 0; i < num; i++) {
    el = document.getElementById('inner-wrap');
    images = document.createElement('div');
    image = document.createElement('img');
    image.src = '_/img/manik-rathee.jpg'
    images.id = "image-"+i;
    images.className = 'imagery';
    images.appendChild(image);
    el.appendChild(images);
  }
}

makeBoxes(6);
makeImages(6);

function dragStart(e) {
  e.dataTransfer.setData('text', this.id);
}

function draggedOver(e) {
	e.preventDefault();
}

function dropped(e) {
	e.preventDefault();
  var data = e.dataTransfer.getData('text');
  this.appendChild(document.getElementById(data));
}

function drag() {
  var images = document.getElementsByClassName('imagery');
  var boxes = document.getElementsByClassName('box');
  var myPic, myBox;
  for(i = 0; i < images.length; i++) {
    myPic = document.getElementById(images[i].id);
    myPic.addEventListener('dragstart', dragStart, false);
  }
  for(i = 0; i < boxes.length; i++) {
    myBox = document.getElementById(boxes[i].id);
    myBox.addEventListener( 'dragover', draggedOver, false )
    myBox.addEventListener( 'drop', dropped, false );
  }
}

drag();
