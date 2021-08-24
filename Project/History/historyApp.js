var hdc;

function byId(e){return document.getElementById(e);}

function drawPoly(coOrdStr)
{
    var mCoords = coOrdStr.split(',');
    var i, n;
    n = mCoords.length;

    hdc.beginPath();
    hdc.moveTo(mCoords[0], mCoords[1]);
    for (i=2; i<n; i+=2)
    {
        hdc.lineTo(mCoords[i], mCoords[i+1]);
    }
    hdc.lineTo(mCoords[0], mCoords[1]);
    hdc.stroke();
}

function drawRect(coOrdStr)
{
    var mCoords = coOrdStr.split(',');
    var top, left, bot, right;
    left = mCoords[0];
    top = mCoords[1];
    right = mCoords[2];
    bot = mCoords[3];
    hdc.strokeRect(left,top,right-left,bot-top);
}

function myHover(element)
{
    var hoveredElement = element;
    var coordStr = element.getAttribute('coords');
    var areaType = element.getAttribute('shape');

    switch (areaType)
    {
        case 'polygon':
        case 'poly':
            drawPoly(coordStr);
            break;

        case 'rect':
            drawRect(coordStr);
    }
}

function myLeave()
{
    var canvas = byId('Canvas');
    hdc.clearRect(0, 0, canvas.width, canvas.height);
}

function myInit()
{
    var img = byId('history');

    var x,y, w,h;

    x = img.offsetLeft;
    y = img.offsetTop;
    w = img.clientWidth;
    h = img.clientHeight;

    var imgParent = img.parentNode;
    var can = byId('Canvas');
    imgParent.appendChild(can);

    can.style.zIndex = 1;

    can.style.left = x+'px';
    can.style.top = y+'px';

    can.setAttribute('width', w+'px');
    can.setAttribute('height', h+'px');

    hdc = can.getContext('2d');

    hdc.fillStyle = 'yellow';
    hdc.strokeStyle = 'yellow';
    hdc.lineWidth = 5;
}

// 초기화
	var indicator = document.querySelectorAll('.indicator button');
	var modal = document.querySelector('#modal');
	var block = document.querySelector('#block');

function modal_open(num){
	modal.setAttribute('class', 'active');
	block.setAttribute('class', 'active');

	change_div(num);
	indicator[num-1].focus();
}

function modal_close(){
	modal.removeAttribute('class');
	block.removeAttribute('class');
}

function change_div(val){
  var divs = document.querySelectorAll('figure > div');

  for( var i=0; i< divs.length; i++){
    divs[i].removeAttribute('class');
  }
  divs[val-1].setAttribute('class', 'active');
}
