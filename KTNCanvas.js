class KTNP {
	constructor(parentElement=document.body, ...images) {
		this.imgs = images
		this.subimgs = {}
		this.enableloop = true
		this.w = 300
		this.h = 300

		this.stroke = "#000000"
		this.fill	= "#ffffff"
		this.lineWidth	= 1
		this.frameCount = 0;
		this.imagesLoaded = false;
		this.initSetted = false;

		this._init = ()=>{}
		this.loop = ()=>{}
		this.loadImages()
		this.canvas = document.createElement('canvas')
		this.canvas.width = 300
		this.canvas.height = 300
		parentElement.appendChild(this.canvas)
		this.c = this.canvas.getContext('2d')
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
		if (this.enableloop)
			this.loop.call(this);
		this.frameCount++;
		window.requestAnimationFrame(()=>{this.looper()})
	}
	_r() {
		if (this.fill != false)
			this.c.fill()
		if (this.stroke != false)
			this.c.stroke()
	}
	_rs() {
		if (this.fill != false) 
			this.c.fillStyle = this.fill
		if (this.stroke != false) {
			this.c.strokeStyle = this.stroke
			this.c.lineWidth = this.lineWidth
		}
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
		this.w = w
		this.h = h
	}
	clear() {
		this.c.clearRect(0,0,this.w, this.h)
	}
	background(color="#000") {
		this.c.fillStyle = color
		this.c.fillRect(0,0,this.w, this.h)
	}
	line(x1,y1,x2,y2) {
		this._rs()
		this.c.beginPath()
		this.c.moveTo(x1,y1)
		this.c.lineTo(x2,y2)
		this.c.closePath()
		this._r()
	}
	rect(x,y,w,h) {
		this._rs()
		this.c.beginPath()
		this.c.rect(x,y,w,h)
		this.c.closePath()
		this._r()
	}
	poly(...v) {
		this._rs()
		this.c.beginPath()
		this.c.moveTo(v[0],v[1])
		for (let i = 2; i<v.length-1;i+=2) {
			this.c.lineTo(v[i],v[i+1])
		}
		this.c.closePath()
		this._r()
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
		this.w = w
		this.h = h
		this.offsetX = 0
		this.offsetY = 0
		this.anims = anims
		this._state = state
	}
	render(ktnp) {
		this.anims[this._state].play(ktnp,this.gx,this.gy,this.w,this.h)
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