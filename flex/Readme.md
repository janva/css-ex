# Getting basics of flexbox
So this is another two column layout. There are a few imperfections to the layout, luckily the focus 
for this exercise was not UI design but learning basics of flexbox :-). 

![layout](./img/readme/layout.png)

## Short note on CSS versioning.
W3C (world wide web consortium) is handling the specification of the CSS language. It use to be that they published sets of new features and changes under single version number such as CSS 2.0. The last in line was pushed out back in 2011 versioned as  CSS 2.1.
More recent CSS has been broken down into modules which each have their own versions. W3C uses the term level to indicate different version of those modules. For instance a level 2 feature has evolved further from level 1.  Simply put the higher the level a feature has the further it has evolved. Flexbox layout module is a level 1 feature at time of writing. CSS3 is sometimes used as an informal version to mean certain modules of CSS that was introduced after CSS 2.1 in 2011.

## Flex layout
Is a layout mode intended for more complex webpage and application layouts.
To my understanding (from reading the W3C Candidate Recommendation, 19 November 2018)
flex layout was introduced to get a flexible as well as more focused way of laying out content of pages. It circumvents some complexities of floats and columns and introduces alternative ways of handling content alignment and space distribution, drawing from box alignment module (justify-content, align-items, align-self, align-content). 

The pre-existing layout 

block layout for laying out documents, floats etc
inline layout for text 
table layout 2D tabular
positioned layout. Not part of normal document flow decoupled from other elements of document.

(TODO think this through Some of the older techniques are centered around other concepts such as text or document-centric concepts.)

Flex boxes creates a flex formatting context (basically same as bfc) which contains the effect of the layout within its element.
some block container properties are not applicable in flex layout context
float, clear, vertical-align ,::first-line, ::first-letter 

## Basic concepts
Flexbox is in some sense single dimensioned but can can be nested to create even more complex layouts. What I see people recommend is to use for simple small scaled layout in single direction and use grid instead things becomes more complex and large scale. Flex layout module introduced 12 properties (including shorthands) which is a fair bit of things to keep track of. Below I try to introduce basics to get going and as hopefully not to over complicate things.

### Flex container & its items
Elements declared `display:flex` or `display:inline-flex` are  *flex-containers*. Direct children's of such an element are *flex-items* and layed out according to flex layout box model.

### Directions
Directions in which flex-items are layed out works somewhat differently than other layout modes. Two axis are defined, the primary axis is called the *main axis* and a perpendicular axis called *cross axis*. The main-axis extends from main-start to main-end and cross-axis from cross-start to cross-end. Flex items are layed along the main-axis.
how these map to physical directions are determined by flex-flow and writing mode. 

image goes here

#### flex-direction property
Will set the direction of main-axis thus determining in which direction flex items are layed out. The direction is also dependent on writing mode. Writing mode is used to support international writing modes. Using english we get the following 

`flex-direction: row`
main axis follows inline axis which in our case would be horizontal axis left to right.
`flex-direction: column`
Same direction as your block axis, in our case the vertical axis top to bottom. 

The reversed directions of the above are also available if you have a need for that. These are the `row-reverse` and `column-reverse` 
#### Wrapping items
FLex-wrap determine if flex container should be layed out in single flex-line or in several flex-lines. If an item  wrap it will be stacked along flex containers cross-axis.
`flex-wrap: no-wrap` 
    single line no wrapping.
`flex-wrap: wrap` 
    wrap onto multiple lines (in cross axis direction)
`flex-wrap: wrap-reverse` 
    wrap onto multiple lines (in cross axis reversed direction swapping the cross-start and cross-end)

#### Direction and wrapping shorthand
Flex-flow is just a shorthand for flex-direction and flex-wrap
default values for this short-hand is code row and nowrap. We could for instance do
```css
flex-flow: column wrap;
```
to set main-axis to column and to allow wrapping.

## Flexible Sizes
Flex items are able to alter their width/height  (to flex) as to fill available space in the main dimension(TODO Have not defined term maybe choose other wording). The flex property controls the sizes along main axis direction. The flex property is shorthand for `flex-grow`, `flex-shrink` and `flex-basis` properties. These can be used as individual properties but the recommendation is use the shorthand. unless `flex-grow`, `flex-shrink` are set to 0 items will fill remaining space. If they are set to 0 items will be fully inflexible. These properties are set on the flex-items them self. 

`flex-grow`
    Specifies a flex grow factor. It determines at what rate item will grow in relation to other items when distributing remaining space. The default value is 1. No negative number are allowed.
`flex-shrink`
Specifies a flex shrink factor. It determines at what rate item will shrink in relation to other items if necessary. This can occur after space has been distributed in situation where sizes become larger then it's flex container. The default is 1.No negative number are allowed.
`flex-basis`
    Specifiec the initial main size  of flex-item, before remaining free space has been distributed. Values can be same as `width` and `height` properties but `auto` and `content` get some special treatment. `auto` uses the `main size`  width and height property to determine base size. `content` set size automatically based on flex item's content, be ware this might not be supported in your browser. 
`none` 
    is equivalent to 0 0 auto. 

flex-basis is first calculated before remaining space is distributed by flex-grow and flex-shrink. We can use auto margins to absorb extra space. This can be useful if we want to push some item(s) in some direction. Spacing is applied after margins and flex-grow values are calculated so item having flex-grow none-zero value or auto margin will grow to fill remaining space thus justify-content will have no effect.  

## Alignment & spacing 
Once content is broken into lines, each line is laid out independently; flexible lengths and the justify-content and align-self properties only consider the items on a single line at a time.

 a single-line flex container, the cross size of the line is the cross size of the flex container, and align-content has no effect. 

[using auto margin
](https://www.w3.org/TR/css-flexbox-1/#item-margins)

[css tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
[w3c ](https://www.w3.org/TR/css-flexbox-1/)

