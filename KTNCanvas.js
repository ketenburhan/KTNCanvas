class KTNP {
	constructor(parentElem=document.body,...imgs) {
		this.imgs = imgs
		this.subimgs = {}
		this._loop = true
		this.w = 300
		this.h = 300

		this._stroke = "#000000"
		this._fill	= "#ffffff"
		this._lineWidth	= 1
		this.ready = false

		this._init = ()=>{}
		this.draw = ()=>{}
		this._load()
		this.canvas = document.createElement('canvas')
		this.canvas.width = 300
		this.canvas.height = 300
		parentElem.appendChild(this.canvas)
		this.c = this.canvas.getContext('2d')
	}
	_load(i=0) {
		if (this.imgs[i] != undefined && typeof this.imgs[i] == "string") {
			var src = this.imgs[i]
			this.imgs[i] = new Image()
			this.imgs[i].src = src
			this.imgs[i].addEventListener("load",() => {
				this._load(i+1)
			}, false)
		}
		else  {
			if (this.ready === false)
				this.ready = true
			else {
				this._init()
				window.requestAnimationFrame(()=>{this._draw()})
			}
		}
	}
	set init(a) {
		this._init = a
		if (this.ready) {
			this._init()
			window.requestAnimationFrame(()=>{this._draw()})
		}
		this.ready = true
	}
	_draw() {
		if (this._loop)
			window.requestAnimationFrame(this.draw)
		window.requestAnimationFrame(()=>{this._draw()})
	}
	noloop() {
		this._loop=false
	}
	loop() {
		this._loop=true
	}
	noFill() {
		this._fill = false
	}
	fill(color) {
		this._fill = color
	}
	noStroke() {
		this._stroke = false
	}
	stroke(color) {
		this._stroke = color
	}
	lineWidth(width) {
		this._lineWidth = width
	}
	_r() {
		if (this._fill != false)
			this.c.fill()
		if (this._stroke != false)
			this.c.stroke()
	}
	_rs() {
		if (this._fill != false) 
			this.c.fillStyle = this._fill
		if (this._stroke != false) {
			this.c.strokeStyle = this._stroke
			this.c.lineWidth = this._lineWidth
		}
	}
	image(index, x,y,w=this.imgs[index].width,h=this.imgs[index].height) {
		type.check(index,"number", x,"number", y,"number", w,"number", h,"number")
		this.c.drawImage(this.imgs[index],x,y,w,h)
	}
	subimage(index, dx, dy, dw=sw, dh=sh, sx, sy, sw, sh) {
		type.check(index,true, dx,"number", dy,"number", dw,"number", dh,"number")

		if (typeof index == "number")
			this.c.drawImage(this.imgs[index], sx, sy, sw, sh, dx, dy, dw, dh)
		else if (typeof index == "string") {
			ni = this.subimgs[index]
			this.c.drawImage(this.imgs[ni[0]], ni[1],ni[2],ni[3],ni[4], dx, dy, dw, dh)
		}
		else if (Array.isArray(index))
			this.c.drawImage(this.imgs[index[0]], index[1],index[2],index[3],index[4], dx, dy, dw, dh)
		else {
			console.error("hata")
			return false
		}

	}
	size(x=100, y=x) {
		type.check(x,"number", y,"number")
		this.canvas.width = x
		this.canvas.height = y
		this.w = x
		this.h = y
	}
	clear() {
		this.c.clearRect(0,0,this.w, this.h)
	}
	background(color="#000") {
		this.c.fillStyle = color
		this.c.fillRect(0,0,this.w, this.h)
	}
	line(x1,y1,x2,y2) {
		type.check(x1,"number", y1,"number", x2,"number", y2,"number")
		this._rs()
		this.c.beginPath()
		this.c.moveTo(x1,y1)
		this.c.lineTo(x2,y2)
		this.c.closePath()
		this._r()
	}
	rect(x,y,w,h) {
		type.check(x,"number", y,"number", w,"number", h,"number")
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
		type.check(name,"string", index,"number", sx,"number", sy,"number", sw,"number", sh,"number")
		this.subimgs[name] = [index,sx,sy,sw,sh]
		return this.subimgs[name]
	}
}
class Sprite {
	constructor(x,y,w,h,anims, state="default") {
		type.check(x,"number", y,"number", w,"number", h,"number", anims,true)
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
			this.anims[this._state].stop()
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