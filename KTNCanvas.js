class KTNP {
	subimgs = {};
	enableLoop = true;
	width = 300;
	height = 300;
	frameCount = 0;
	imagesLoaded = false;
	initSetted = false;
	_init = ()=>{};
	loop = ()=>{};
	keydown = ()=>{};
	keyup = ()=>{};
	mousemove = ()=>{};
	click = ()=>{};
	mouseX = 0;
	mouseY = 0;
	winMouseX = 0;
	winMouseY = 0;
	constructor(parentElement=document.body, ...images) {
		this.imgs = images;

		this.loadImages();
		this.canvas = document.createElement('canvas');
		this.canvas.width = 300;
		this.canvas.height = 300;
		parentElement.appendChild(this.canvas);
		this.c = this.canvas.getContext('2d');


		this.c.strokeStyle = "#000000";
		this.c.fillStyle = "#ffffff";
		this.c.lineWidth = 1;
		this.c.font = "16px Arial";
		this.c.fontStyle = "#ffffff";
		this.c.textAlign = "start";
		this.c.textBaseline = "alphabetic";


		document.addEventListener("keydown", e=>{this.keydown(e)}, false);
		document.addEventListener("keyup", e=>{this.keyup(e)}, false);
		document.addEventListener("mousemove", e=>{
			this.mouseX = e.clientX - this.canvas.offsetLeft;
			this.mouseY = e.clientY - this.canvas.offsetTop;
			this.winMouseX = e.clientX;
			this.winMouseY = e.clientY;
			this.mousemove(e);
		}, false);
		document.addEventListener("click", e=>{this.click(e)})
	}
	get stroke() {
		return this.c.strokeStyle;
	}
	set stroke(stroke) {
		this.c.strokeStyle = stroke;
	}
	get fill() {
		return this.c.fillStyle;
	}
	set fill(fill) {
		this.c.fillStyle = fill;
	}
	get lineWidth() {
		return this.c.lineWidth;
	}
	set lineWidth(width) {
		this.c.lineWidth = width;
	}
	get font() {
		return this.c.font;
	}
	set font(font) {
		this.c.font = font;
	}
	get textAlign() {
		return this.c.textAlign;
	}
	set textAlign(align) {
		this.c.textAlign = align;
	}
	get textBaseline() {
		return this.c.textBaseline;
	}
	set textBaseline(baseline) {
		this.c.textBaseline = baseline;
	}
	get lineDash() {
		return this.c.getLineDash();
	}
	set lineDash(segments) {
		this.c.setLineDash(segments);
	}
	loadImages() {
		var load = (i=0) => {
			if (this.imgs[i] == undefined) {
				if (this.initSetted) {
					this._init();
					window.requestAnimationFrame(()=>{this.looper()});
				}
				this.imagesLoaded = true;
				return;
			}
			if (this.imgs[i].nodeName === "IMG") {
				load(i+1);
				return;
			}
			var src = this.imgs[i];
			this.imgs[i] = new Image();
			this.imgs[i].src = src;
			this.imgs[i].addEventListener("load",() => {
				load(i+1);
			}, false);
		};
		load();
	}
	get init() {
		return this._init;
	}
	set init(a) {
		this._init = a
		if (this.imagesLoaded) {
			this._init()
			window.requestAnimationFrame(()=>{this.looper()})
		}
		this.initSetted = true;
	}
	looper() {
		if (this.enableLoop) {
			this.loop.call(this);
		}
		this.frameCount++;
		window.requestAnimationFrame(()=>{this.looper()})
	}
	_r() {
		if (!!this.fill)
			this.c.fill()
		if (!!this.stroke)
			this.c.stroke()
	}
	measureText(text) {
		this.c.measureText(text);
	}
	image(index, x,y,w=this.imgs[index].width,h=this.imgs[index].height) {
		this.c.drawImage(this.imgs[index],x,y,w,h)
	}
	subimage(a, dx, dy, dw=sw, dh=sh, sx, sy, sw, sh) {
		if (typeof a == "number")
			this.c.drawImage(this.imgs[a], sx, sy, sw, sh, dx, dy, dw, dh)
		else if (typeof a == "string") {
			ni = this.subimgs[a]
			this.c.drawImage(this.imgs[ni[0]], ni[1],ni[2],ni[3],ni[4], dx, dy, dw, dh)
		}
		else if (Array.isArray(a))
			this.c.drawImage(this.imgs[a[0]], a[1],a[2],a[3],a[4], dx, dy, dw, dh)
		else {
			console.error("hata")
			return;
		}

	}
	size(w=100, h=w) {
		this.canvas.width = w
		this.canvas.height = h
		this.width = w
		this.height = h
	}
	clear() {
		this.c.clearRect(0,0,this.width, this.height)
	}
	background(color="#000") {
		this.c.fillStyle = color
		this.c.fillRect(0,0,this.width, this.height)
	}
	line(x1,y1,x2,y2) {
		this.c.beginPath()
		this.c.moveTo(x1,y1)
		this.c.lineTo(x2,y2)
		this.c.closePath()
		this._r()
	}
	rect(x, y, w, h) {
		this.c.beginPath()
		this.c.rect(x,y,w,h)
		this.c.closePath()
		this._r()
	}
	poly(...v) {
		this.c.beginPath()
		this.c.moveTo(v[0],v[1])
		for (let i = 2; i<v.length-1;i+=2) {
			this.c.lineTo(v[i],v[i+1])
		}
		this.c.closePath()
		this._r()
	}
	text(text, x, y, maxWidth) {
		if (!!this.stroke) {
			this.c.strokeText(text, x, y, maxWidth);
		}
		if (!!this.fill) {
			this.c.fillText(text, x, y, maxWidth);
		}
	}
	ellipse(x, y, radiusX, radiusY, rotation=0, startAngle=0, endAngle=Math.PI*2, anticlockwise=!1) {
		this.c.beginPath();
		this.c.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
		this._r();
	}
	arc(x, y, radius, startAngle=0, endAngle=Math.PI*2, anticlockwise=!1) {
		this.c.beginPath();
		this.c.arc(x, y, radius, startAngle, endAngle, anticlockwise);
		this._r();
	}
	arcTo(startX, startY, x1, y1, x2, y2, radius) {
		this.c.beginPath();
		this.c.moveTo(startX, startY);
		this.c.arcTo(x1, y1, x2, y2, radius);
		this._r();
	}
	bezierCurveTo(startX, startY, p1x, p1y, p2x, p2y, endX, endY) {
		this.c.beginPath();
		this.c.moveTo(startX, startY);
		this.c.bezierCurveTo(p1x, p1y, p2x, p2y, endX, endY);
		this._r();
	}
	quadraticCurveTo(startX, startY, px, py, endX, endY) {
		this.c.beginPath();
		this.c.moveTo(startX, startY);
		this.c.quadraticCurveTo(px, py, endX, endY);
		this._r();
	}
	clearRect(x, y, width, height) {
		this.c.clearRect(x, y, width, height);
	}
	save() {
		this.c.save();
	}
	restore() {
		this.c.restore();
	}
	scale(x, y) {
		this.c.scale(x, y);
	}
	setTransform(a, b, c, d, e, f) {
		this.c.setTransform(a, b, c, d, e, f);
	}
	transform(a, b, c, d, e, f) {
		this.c.transform(a, b, c, d, e, f);
	}
	translate(x, y) {
		this.c.translate(x, y);
	}
	createSubimage(name,index, sx,sy,sw,sh) {
		this.subimgs[name] = [index,sx,sy,sw,sh]
		return this.subimgs[name];
	}
}
class Animation {
	constructor(fr, ...arr) {
		this.fr = fr
		this.arr = arr
		this.imgI = 0
		this.frameI = 0
	}
	play(ktnp,x,y,w,h) {
		var now = this.arr[this.imgI]
		if (typeof now == "number")
			ktnp.image(now, x,y,w,h)
		else if (Array.isArray(now) || typeof now == "string")
			ktnp.subimage(now, x,y,w,h)
		else {
			console.error("hata")
			return false
		}
		if (this.frameI % this.fr==0) {
			this.imgI++
			if (this.imgI == this.arr.length)
				this.imgI = 0
		}
		this.frameI++
	}
	stop() {
		this.imgI = 0
		this.frameI = 0
	}
	replay(ktnp,x,y,w,h) {
		this.stop()
		this.play(ktnp,x,y,w,h)
	}
}
class Sprite {
	constructor(x,y,w,h,anims, state="default") {
		this.x = x
		this.y = y
		this.width = w
		this.height = h
		this.offsetX = 0
		this.offsetY = 0
		this.anims = anims
		this._state = state
	}
	render(ktnp) {
		this.anims[this._state].play(ktnp,this.gx,this.gy,this.width,this.height)
	}
	get state() {
		return this._state;
	}
	set state(a) {
		if (a in this.anims) {
			if (this.anims[this._state])
				this.anims[this._state].stop();
			this._state = a
		}
		else {
			console.error(`hata: ${a} adında bir animasyon yok.`)
		}
	}
	get gx() {
		return this.x - this.offsetX
	}
	get gy() {
		return this.y - this.offsetY
	}
}