# What is KTNCanvas?

KTNCanvas is a *open source* library for **HTML5 canvas**. It includes *image loader*, display images, creates and display **subimages**. *KTNCanvas* includes drawing methods like: 'line', 'rect', 'poly'. Also, **2D sprite animations** can be created with it.

# What can be done with KTNCanvas?

With *2D sprite animations*, game characters can animate easily, so KTNCanvas can usable for 2D game developing. Also; image slideshows, web apps etc.

# Reference

## KTNP
### Properties
* imgs (Array)
* subimgs (Object)
* loop (boolean)
* w (Number)
* h (Number)
* ready (boolean)
* canvas (HTMLElement)
* c (CanvasRenderingContext2D)
### Methods
_____________________
#### constructor
##### Syntax
    new KTNP(?parentElem, ?...imgs)
##### Paramaters
* *?*parentElem*(optional)* (HTMLElement) [ default: document.body ]
* *?*imgs*(optional)* (String Array) [ default: [] ]
_____________________
#### noloop
##### Syntax
    ktnp.noloop()
##### Parameters
No parameters.
_____________________
#### loop
##### Syntax
    ktnp.loop()
##### Parameters
No parameters.
_____________________
#### noFill
##### Syntax
    ktnp.noFill()
##### Parameters
No parameters.
_____________________
#### fill
##### Syntax
    ktnp.fill(color)
##### Parameters
* color (color)
_____________________
#### noStroke
##### Syntax
    ktnp.noStroke()
##### Parameters
No parameters.
_____________________
#### stroke
##### Syntax
    ktnp.stroke(color)
##### Parameters
* color (color)
_____________________
#### lineWidth
##### Syntax
    ktnp.lineWidth(width)
##### Parameters
* width (Number)
_____________________
#### image
##### Syntax
    ktnp.image(index, x,y, ?w, ?h)
##### Parameters
* index (Number)
* x (Number)
* y (Number)
* *?*w*(optional)* (Number) [ default: images width ]
* *?*h*(optional)* (Number) [ default: images height ]
_____________________
#### subimage
##### Syntax
    ktnp.subimage(index, dx, dy, ?dw, ?dh, sx, sy, sw, sh)
##### Parameters
* index (Number)
* dx (Number)
* dy (Number)
* *?*dw*(optional)* (Number) [ default: sw ]
* *?*dh*(optional)* (Number) [ default: sh ]
* sx (Number)
* sy (Number)
* sw (Number)
* sh (Number)
_____________________
#### size
##### Syntax
    ktnp.size(?x, ?y)
##### Parameters
* *?*x*(optional)* (Number) [ default: 100 ]
* *?*y*(optional)* (Number) [ default: x ]
_____________________
#### clear
##### Syntax
    ktnp.clear()
##### Parameters
No parameters.
_____________________
#### background
##### Syntax
    ktnp.background(?color)
##### Parameters
* *?*color*(optional)* (color) [ default: '#000' ]
_____________________
#### line
##### Syntax
    ktnp.line(x1, y1, x2, y2)
##### Parameters
* x1 (Number)
* y1 (Number)
* x2 (Number)
* y2 (Number)
_____________________
#### rect
##### Syntax
    ktnp.rect(x, y, w, h)
##### Parameters
* x (Number)
* y (Number)
* w (Number)
* h (Number)
_____________________
#### poly
##### Syntax
    ktnp.poly(...vertices)
##### Parameters
* vertices (Number Array)
_____________________
#### createSubimage
##### Syntax
    ktnp.createSubimage(name, index, sx, sy, sw, sh)
##### Parameters
* name (String)
* index (Number)
* sx (Number)
* sy (Number)
* sw (Number)
* sh (Number)
_____________________
## Sprite
### Properties
* x (Number)
* y (Number)
* w (Number)
* h (Number)
* offsetX (Number)
* offsetY (Number)
* anims (*Animation* Array)
### Methods
_____________________
#### constructor
##### Syntax
    new Sprite(x, y, w, h, anims, ?state)
##### Parameters
* x (Number)
* y (Number)
* w (Number)
* h (Number)
* anims (*Animation* Array)
* *?*state*(optional)* (String) [ default: 'default' ]
_____________________
#### render
##### Syntax
    sprite.render(ktnp)
##### Parameters
* ktnp (*KTNP*)
_____________________



## Animation
### Properties
* fr (Number)
* arr (Number | Array | String)
* imgI (Number)
* frameI (Number)
### Methods
_____________________
#### constructor
##### Syntax
    new Animation(fr, ...arr)
##### Parameters
* fr (Number)
* ...arr (Array)
_____________________
#### play
##### Syntax
    animation.play(ktnp, x, y, w, h)
##### Parameters
* ktnp (*KTNP*)
* x (Number)
* y (Number)
* w (Number)
* h (Number)
_____________________
#### stop
##### Syntax
    animation.stop()
##### Parameters
No parameters.
_____________________
#### replay
##### Syntax
    animation.replay(ktnp, x, y, w, h)
##### Parameters
* ktnp (*KTNP*)
* x (Number)
* y (Number)
* w (Number)
* h (Number)