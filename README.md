downplay
========

A simple, human readable, level markup.

![Example of Rendered Output](https://pbs.twimg.com/media/Bc-EwYXCMAA4YfJ.png "Rendered Example")


Level format
------------

3 chars x 1 line -> 1 grid space e.g. " B  B  B " would be three "blocks"

Define your level formats key

```
x = player
G = grass
S = spike
r = ring
```
Capital letters can be thought of as "blocks", lower case as items.  (Only a convention)

Define your levels layout (Think Sonic)
```
     r
   r   r           r  r
 x       T
 G ...          S  S  S  G ...
```

Z Index / Layering
------------------

You can have up to three items on one block.
An example would be a sword lying on a path, or a villager
standing on a path.  (Think top down Zelda-like)

```
x = player
s = sword
v = villager

P = path
H = house


             H
             Px
             P
             Ps
             P
           P P P ... Pv 
```
You can have up to three items on one grid space.
The order of the elements defines the view order (last is above first)
```
c = cherry
i = ice cream
b = bowl



        bic

```
In the previous example the cherry is draw on top of the ice cream.
And the ice cream is drawn on top of the bowl.

How to render the output JSON
-----------------------------

Every line should be an array of three character chunks.
The level is an array of arrays.
The position of the item can be defined as:

x: the index within it's row

y: the index of the items row in the containing array

You can then multiply these number by the resolution of the tiles
and draw them accordingly.

Note: the positions of the tiles are the centre of item (not the top left corner).
This allows you to place large items (such as a building) in your map and carefully align
other items based on it's position (such as roads

Another benefit is simpler radial collision.

Your key definitions are important, as the image loader can use the names to retrieve
spritesheets for each item.

There is no delimiters per se, every 3 characters is deemed a tile, every new line, is a new row.

