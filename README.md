# What is KTNCanvas?

KTNCanvas is a *open source* library for **HTML5 canvas**. It includes *image loader*, display images, creates and display **subimages**. *KTNCanvas* includes drawing methods like: 'line', 'rect', 'poly'. Also, **2D sprite animations** can be created with it.

# What can be done with KTNCanvas?

With *2D sprite animations*, game characters can animate easily, so KTNCanvas can usable for 2D game developing. Also; image slideshows, web apps etc.

# Examples
To run examples follow the steps:
* Clone this repo
```
git clone https://github.com/ketenburhan/KTNCanvas.git
cd KTNCanvas
```
* Run localhost (for example in python3)
```
python3 -m http.server 3000
```
* And run browser and go '[http://localhost:3000/examples/](http://localhost:3000/examples/)'
* That's all!

# Get started
* [download KTNCanvas.js here](https://github.com/ketenburhan/KTNCanvas/releases/download/0.1.0/KTNCanvas.js)
* add to html and use it
	<script src="KTNCanvas.js"></script>

# Reference
## <a name="classKTNP">KTNP</a>
### properties
* imgs (Image Array)
* subimgs (Object)
* enableloop (boolean)
* w (Number)
* h (Number)
* stroke (color)
* fill (color)
* lineWidth (Number)
* frameCount (Number)
* imagesLoaded (boolean)
* initSetted (boolean)
* init (Function)
* loop (Function)
* canvas (HTMLCanvasElement)
* c (CanvasRenderingContext2D)
### methods
* [constructor](#classKTNPconstructor)
* [loadImages](#classKTNPloadImages)
* [image](#classKTNPimage)
* [subimage](#classKTNPsubimage)
* [size](#classKTNPsize)
* [clear](#classKTNPclear)
* [background](#classKTNPbackground)
* [line](#classKTNPline)
* [rect](#classKTNPrect)
* [poly](#classKTNPpoly)
* [createSubimage](#classKTNPcreateSubimage)

#### <a name="classKTNPconstructor">constructor</a>
##### syntax
	new KTNP(parentElement, ...images)
##### parameters
- parentElement (HTMLElement)
- ...images (String Array)

#### <a name="classKTNPloadImages">loadImages</a>
Load ktnp.imgs.
##### syntax
	ktnp.loadImages()
##### parameters
No parameters

#### <a name="classKTNPimage">image</a>
Draws image on canvas.
##### syntax
	ktnp.image(index, x, y, ?w, ?h)
##### parameters
- index (Number)
- x (Number)
- y (Number)
- *?*w *optional*(Number) // default: images width
- *?*h *optional*(Number) // default: images height

#### <a name="classKTNPsubimage">subimage</a>
Draws a subimage.
##### syntax
	ktnp.subimage(index, dx, dy, ?dw, ?dh, sx, sy, sw, sh)
	ktnp.subimage(name, dx, dy, ?dw, ?dh)
	ktnp.subimage(data, dx, dy, ?dw, ?dh)
##### parameters
- index (Number)
- name (String)
- data (Array) // syntax: [index (Number), sx (Number), sy (Number), sw (Number), sh (Number)]
- dx (Number)
- dy (Number)
- *?*dw *optional*(Number) // default: *sw* or *undefined*
- *?*dh *optional*(Number) // default: *sh* or *undefined*
- sx (Number)
- sy (Number)
- sw (Number)
- sh (Number)

#### <a name="classKTNPsize">size</a>
Resizes the canvas.
##### syntax
	ktnp.size(?w, ?h)
##### parameters
- *?*w *optional*(Number) // default: 100
- *?*h *optional*(Number) // default: *w*
- sh (Number)

#### <a name="classKTNPclear">clear</a>
Clears the canvas.
##### syntax
	ktnp.clear()
##### parameters
No parameters
- sh (Number)

#### <a name="classKTNPbackground">background</a>
Sets a background color to canvas.
##### syntax
	ktnp.background(?color)
##### parameters
- *?*color *optional*(color) // default: "#000"

#### <a name="classKTNPline">line</a>
Draws a line.
##### syntax
	ktnp.line(x1, y1, x2, y2)
##### parameters
- x1 (Number)
- y1 (Number)
- x2 (Number)
- y2 (Number)

#### <a name="classKTNPrect">rect</a>
Draws a rectangle.
##### syntax
	ktnp.rect(x, y, w, h)
##### parameters
- x (Number)
- y (Number)
- w (Number)
- h (Number)

#### <a name="classKTNPpoly">poly</a>
Draws a polygon.
##### syntax
	ktnp.poly(...v)
##### parameters
- ...v (Number Array)

#### <a name="classKTNPcreateSubimage">createSubimage</a>
Creates a subimage with a name.
##### syntax
	ktnp.createSubimage(name, index, sx, sy, sw, sh)
##### parameters
- name (String)
- index (Number)
- sx (Number)
- sy (Number)
- sw (Number)
- sh (Number)
##### retruns
- (Array) // syntax: [index (Number), sx (Number), sy (Number), sw (Number), sh (Number)]

## <a name="classAnimation">Animation</a>
### properties
* fr (Number)
* arr (\[Number|Array|String] Array)
* imgI (Number)
* frameI (Number)
### methods
* [constructor](#classAnimationconstructor)
* [play](#classAnimationplay)
* [stop](#classAnimationstop)
* [replay](#classAnimationreplay)

#### <a name="classAnimationconstructor">constructor</a>
##### syntax
	new Animation(fr, ...arr)
##### parameters
- fr (Number)
- ...arr (\[Number|Array|String] Array)

#### <a name="classAnimationplay">play</a>
Plays the animation for a single time.
##### syntax
	ktnp.play(ktnp, x, y, w, h)
##### parameters
- ktnp ([*KTNP*](#classKTNP))
- x (Number)
- y (Number)
- w (Number)
- h (Number)
- ...arr (\[Number|Array|String] Array)

#### <a name="classAnimationstop">stop</a>
Resets the animation.
##### syntax
	ktnp.stop()
##### parameters
No parameters

#### <a name="classAnimationreplay">replay</a>
Resets and plays the animation.
##### syntax
	ktnp.replay(ktnp, x, y, w, h)
##### parameters
- ktnp ([*KTNP*](#classKTNP))
- x (Number)
- y (Number)
- w (Number)
- h (Number)

## <a name="classSprite">Sprite</a>
### properties
* x (Number)
* y (Number)
* w (Number)
* h (Number)
* offsetX (Number)
* offsetY (Number)
* anims (Object)
* state (String)
### methods
* [constructor](#classSpriteconstructor)
* [render](#classSpriterender)
* [get\ gx](#classSpriteGetgx)
* [get\ gy](#classSpriteGetgy)
#### <a name="classSpriteconstructor"></a>
##### syntax
	new Sprite(x, y, w, h, anims, ?state)
##### parameters
- x (Number)
- y (Number)
- w (Number)
- h (Number)
- anims (Object)
- ?state // default: "default"

#### <a name="classSpriterender">render</a>
Renders the sprite for a single time.
##### syntax
	ktnp.render(ktnp)
##### parameters
- ktnp ([*KTNP*](#classKTNP))

#### <a name="classSpriteGetgx">get gx</a>
gets the global x (x - offsetX)
##### syntax
	ktnp.gx
##### returns
- (Number) ktnp.x - ktnp.offsetX

#### <a name="classSpriteGetgy">get gy</a>
gets the global y (y - offsetY)
##### syntax
	ktnp.gy
##### returns
- (Number) ktnp.y - ktnp.offsetY