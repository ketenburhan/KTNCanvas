# What is KTNCanvas?

KTNCanvas is a *open source* library for **HTML5 canvas**. It includes *image loader*, display images, creates and display **subimages**. *KTNCanvas* includes drawing methods like: 'line', 'rect', 'poly' etc. Also, **2D sprite animations** can be created with it.

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
* enableLoop (boolean)
* width (Number)
* height (Number)
* stroke (color)
* fill (color)
* lineWidth (Number)
* font (font)
* textAlign (String)
* textBaseline (String)
* lineDash (Number Array)
* frameCount (Number)
* imagesLoaded (boolean)
* initSetted (boolean)
* init (Function)
* loop (Function)
* keydown (Function)
* keyup (Function)
* mouseX (Number)
* mouseY (Number)
* winMouseX (Number)
* winMouseY (Number)
* mousemove (Function)
* click (Function)
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
* [text](#classKTNPtext)
* [ellpse](#classKTNPellipse)
* [arc](#classKTNParc)
* [arcTo](#classKTNParc)
* [bezierCurveTo](#classKTNPbezierCurveTo)
* [quadraticCurveTo](#classKTNPquadraticCurveTo)
* [clearRect](#classKTNPclearRect)
* [save](#classKTNPsave)
* [restore](#classKTNPrestore)
* [scale](#classKTNPscale)
* [setTransform](#classKTNPsetTransform)
* [transform](#classKTNPtransform)
* [translate](#classKTNPtranslate)
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

#### <a name="classKTNPtext">text</a>
Types a text.
##### syntax
	ktnp.text(text, x, y, ?maxWidth)
##### parameters
- text (String)
- x (Number)
- y (Number)
- *?*maxWidth *optional*(Number) // default: undefined

#### <a name="classKTNPellipse">ellipse</a>
Draws a ellipse.
##### syntax
	ktnp.ellipse(x, y, radiusX, radiusY, ?rotation, ?startAngle, ?endAngle, ?anticlockwise)
##### parameters
- x (Number)
- y (Number)
- radiusX (Number)
- radiusY (Number)
- *?*rotation (Number) // default: 0
- *?*startAngle (Number) // default: 0
- *?*endAngle (Number) // default: Math.PI * 2
- *?*anticlockwise *optional*(boolean) // default: false

#### <a name="classKTNParc">arc</a>
Draws a arc.
##### syntax
	ktnp.arc(x, y, radius, ?startAngle, ?endAngle, ?anticlockwise)
##### parameters
- x (Number)
- y (Number)
- radius (Number)
- *?*rotation (Number) // default: 0
- *?*startAngle (Number) // default: 0
- *?*endAngle (Number) // default: Math.PI * 2
- *?*anticlockwise *optional*(boolean) // default: false

#### <a name="classKTNParcTo">arcTo</a>
arcTo.
##### syntax
	ktnp.arcTo(startX, startY, x1, y1, x2, y2, radius)
##### parameters
- startX (Number)
- startY (Number)
- x1 (Number)
- y1 (Number)
- x2 (Number)
- y2 (Number)
- radius (Number)

#### <a name="classKTNPbezierCurveTo">bezierCurveTo</a>
Draws a bezier curve.
##### syntax
	ktnp.bezierCurveTo(startX, startY, p1x, p1y, p2x, p2y, endX, endY)
##### parameters
- startX (Number)
- startY (Number)
- p1x (Number)
- p1y (Number)
- p2x (Number)
- p2y (Number)
- endX (Number)
- endY (Number)

#### <a name="classKTNPquadraticCurveTo">quadraticCurveTo</a>
Draws a quadratic curve.
##### syntax
	ktnp.quadraticCurveTo(startX, startY, px, py, endX, endY)
##### parameters
- startX (Number)
- startY (Number)
- px (Number)
- py (Number)
- endX (Number)
- endY (Number)

#### <a name="classKTNPclearRect">clearRect</a>
clear a rectangle shaped area.
##### syntax
	ktnp.clearRect(x, y, width, height)
##### parameters
- x (Number)
- y (Number)
- width (Number)
- height (Number)

#### <a name="classKTNPsave">save</a>
Saves the default state.
##### syntax
	ktnp.save()
##### parameters
No parameters.

#### <a name="classKTNPrestore">restore</a>
Restore the default state.
##### syntax
	ktnp.restore()
##### parameters
No parameters.

#### <a name="classKTNPscale">scale</a>
Adds a scaling transformation to the canvas units.
##### syntax
	ktnp.scale(x, y)
##### parameters
- x (Number)
- y (Number)

#### <a name="classKTNPsetTransform">setTransform</a>
Sets transform.
##### syntax
	ktnp.setTransform(a, b, c, d, e, f)
##### parameters
- a (Number)
- b (Number)
- c (Number)
- d (Number)
- e (Number)
- f (Number)

#### <a name="classKTNPtransform">transform</a>
transform.
##### syntax
	ktnp.transform(a, b, c, d, e, f)
##### parameters
- a (Number)
- b (Number)
- c (Number)
- d (Number)
- e (Number)
- f (Number)

#### <a name="classKTNPtranslate">translate</a>
Translatethe position.
##### syntax
	ktnp.translate(x, y)
##### parameters
- x (Number)
- y (Number)

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