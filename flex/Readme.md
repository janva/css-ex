
# Getting basics of flexbox
- [Getting basics of flexbox](#getting-basics-of-flexbox)
- [The layout](#the-layout)
- [A side note on CSS versioning.](#a-side-note-on-css-versioning)
- [Flex layout](#flex-layout)
  - [Basic concepts](#basic-concepts)
  - [Flex container & its items](#flex-container--its-items)
  - [Directions](#directions)
    - [Flex-direction property](#flex-direction-property)
    - [Wrapping items](#wrapping-items)
    - [Direction and wrapping shorthand](#direction-and-wrapping-shorthand)
  - [Flexible Sizes](#flexible-sizes)
  - [Alignment & spacing](#alignment--spacing)
    - [Auto margins](#auto-margins)
    - [Alignment properties](#alignment-properties)
    - [justify content](#justify-content)
    - [Align-items](#align-items)
    - [Align-self](#align-self)
    - [Align-content (multiline alignment)](#align-content-multiline-alignment)
- [Links](#links)

# The layout
So this is another two column layout. There are a few imperfections to the layout, luckily the focus for this exercise was not UI design but learning basics of flexbox :-). 

![layout](./img/readme/layout.png)

# A side note on CSS versioning.
Before you read the following do know that I'm talking about specifications below. Specifications are not manuals. Even if the CSS specifications contain a lot of interesting and useful material they are not so much intended for end user of CSS to
be used at their daily work. For instance [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) will probably serve you better if you are looking for a manual.Implementors of CSS  on the other hand will find specifications invaluable. I don't usually spend days at end reading specifications but every now and than some twisted part of my brain gets activated and takes me down one of these rabbit holes. 

Specifications put a lot of emphasis on vocabulary. For instance verbs as shall, must and should have formal and well defined meaning. In contrast the text herein just consists of words by a humble man trying to make sense of things.

W3C (world wide web consortium) is handling the specification of the CSS language. CSS  has changed the way they publish changes to specifications over the years. Now days the CSS specification is broken down into modules rather than a single monolithic document. Each module has its own line of history. How far a single module has evolved from it's origin is indicated by its level (level 1, level 2, etc). Higher level  modules have evolved from previous levels through refinement and by adding features to them. Breaking down the specification into modules allows for changes to be published independently of each other. 
You still see CSS3 used in different places as an informal version but it doesn't really reflect how specification versioning work these days.

In  addition to levels of modules W3C indicates stability and status of document by using following common vocabulary Working Draft (WD),Candidate Recommendation(CR),Proposed Recommendation(PR) and RECommendation (REC). CR signals a call for implementation. This happens when the work group have enough confidence in document to say that they consider it to be complete enough to be tested in practice. At this stage there shall not be any more known unresolved issues. For more information on the other document maturity levels see  [the CSS standardization process](https://www.w3.org/Style/2011/CSS-process). It is a short and useful read. Specification documents are  published as Technical Report(TR). 

The workgroup publishes a separate document  called snapshot intended for software makers to indicate which modules and features are considered stable and should be implemented. 
Features being mentioned in snapshot are neither any guarantee for features being correctly implemented or features being frozen.Some parts in snapshot document may still be at W3C candidate recommendation maturity level.

So that was a tiny glimpse into CSS version. If you like to read some of the specifications then maybe following link can avail  

[CSS specifications](https://www.w3.org/Style/CSS/current-work).

# Flex layout
Is a layout mode intended for more complex webpage and application layouts. To my understanding (from reading the W3C Candidate Recommendation, 19 November 2018) flex layout was introduced as an extension to display property to get a flexible as well as more focused way of laying out content of pages (as opposed to documents). It rids of some complexities of block layouts and provides simple yet powerful tools for distributing space and aligning content in ways that are more in line with modern web application layouts. Flex layout draws some of these properties from box alignment module (justify-content, align-items, align-self, align-content). Some block container properties are not applicable in flex layout context for instance float, clear, vertical-align ,::first-line, ::first-letter. Often common design pattern can be simplified with the use of flex layout. 


<!--
CSS 2.1 provides block, inline, table and positioned layout modes. 

 provides 4 layout modes block, inline, table and positioned layout. To my understanding the three first revolve around more traditional document concepts. For instance inline is designed with text layout in mind. Block layout was intended for document layout in columns and flowing text around images. Table layout for tabular layout of tables of data. The last (positioned layout) gives us freedom to layout things with a lot of great degree of freedom but is decoupled from other elements of the document, positioned elements are removed from normal document flow. 
-->

## Basic concepts
Flexbox is in some sense single dimensioned layout tool. It allows for content wrapping but whilst doing so each line will be laid out independently and there is no simple way to aligning content in one row followed by another row. Working in single dimension does not prevent flexbox from being  agnostic about directions in which items are layed out. You can layout items horizontally or vertically to your liking. If you want to create more complex layouts with flexbox you can nest a flexbox within another. Flexbox works from content out. Items are layed out in rows or columns and content determines how much space each item needs. An algorithm will determine sizes, spacing and distribute space used by each item. Explicit sizes of items are not necessarily needed. 

Flex layout module introduced 12 properties (including shorthands) which is a fair bit of things to keep track of. Following is a short introduction to some of the properties. 

## Flex container & its items
As mentioned, flexbox extends the display property. Display property, in it self,  defines inner and outer display types. The inner display property dictates decedents formatting context, ruling how decedents are laid out. Outer display dictates the principle box which governs how it interacts in the flow layout.
In the case of flex-boxes the principle box is either inline or block-level and the formatting context is flex-container. In practice elements declared `display:flex` or `display:inline-flex` are  *flex-containers* and the decedents are called  *flex-items*.
So flex-containers of type flex have block-level principle box and flex-containers of type inline of course have inline-level principle box. The inner display type of both are of type flex-container.These generate  flex formatting contexts (similar to BFC). Items are layed out according to [flex layout  model]([https://link](https://www.w3.org/TR/css-flexbox-1/#box-model)).


## Directions
Directions in which flex-items are layed out, works somewhat differently than older layout modes. Two axis are defined, the primary axis is called the *main axis* and perpendicularly to main axis we have the *cross axis*. The main-axis extends from main-start to main-end and cross-axis from cross-start to cross-end. Flex items are layed along the main-axis. How axises are mapped in physical worlds directions are determined by flex-flow and [writing mode](https://www.w3.org/TR/css-writing-modes-3/).  

![Axis ](img/readme/axis.svg)

### Flex-direction property
Will set the direction of main-axis thus determining in which direction flex items are layed out. The direction is also dependent on writing mode. Writing mode is used to support international writing modes. The values i mostly use are. 

`flex-direction: row`
: main axis follows inline axis which in my case would be horizontal axis left to right.

`flex-direction: column` 
: Same direction as your block axis, in my case the vertical axis top to bottom. 

The reversed directions of the above are also available  through `row-reverse` and `column-reverse` if in case you have such needs.

### Wrapping items
FLex-wrap determine if flex container should be layed out in single line (single-line flex container) or in several lines (multi-line flex container). Normally items do their best to fit on single line. Flex wrap allows you to change this behavior. In case an item  wraps it will be stacked along flex containers cross-axis. If wrapping occurs each line is layed out independently. In effect flexible lengths, justify content and align-self will be applied onto each line of items separately. Also notice that align-content only applies to multiline flex containers. That is it has no effect on single-line flex containers. Lets have a quick overview of some properties.

`flex-wrap: no-wrap` 
: single line no wrapping.

`flex-wrap: wrap` 
: wrap onto multiple lines in cross axis direction

`flex-wrap: wrap-reverse` 
: wrap onto multiple lines in cross axis reversed direction swapping the cross-start and cross-end

### Direction and wrapping shorthand
Flex-flow is just a shorthand for flex-direction and flex-wrap. Valid values are hence same as flex-direction and flex-wrap. Default values for this short-hand is code row and nowrap.

`flex-flow`
: <'flexdirection'>||<'flex-wrap'>;

## Flexible Sizes
Flex items are able to alter their width/height  (to flex) as to fill available space in the main dimension. The 
flex properties controls the sizes along main axis direction. The `flex` property is shorthand for `flex-grow`, `flex-shrink` and `flex-basis` properties. These can be used as individual properties but the recommendation is use the shorthand. unless `flex-grow`, `flex-shrink` are set to 0 items will fill remaining space. If they are set to 0 items will be fully inflexible. These properties are set on the flex-items them self. 

`flex-grow:<number>`
: Specifies a flex grow factor. It determines at what rate item will grow in relation to other items when distributing remaining space. The default value is 1. No negative number are allowed.

`flex-shrink:<number>`
: Specifies a flex shrink factor. It determines at what rate item will shrink in relation to other items if necessary. This can occur after space has been distributed in situation where sizes become larger then it's flex container. The default is 1.No negative number are allowed.
Shrink does not apply if wrapping is active.

`flex-basis:<'width'>`
:  Specifiec the initial main size  of flex-item, before remaining free space has been distributed. Values can be same as `width` , `height` plus the value `content`  properties but `auto` and  `content`
 get some special treatment. `auto` uses the `main size`  width and height property to determine base size. `content` set size automatically based on flex item's content, be ware this might not be supported in your browser. 

`flex : <'flex-grow'><'flex-shrink'><'flex-basis'>`
 : shortand property for above three properties. In addition we can set flex value to `none`. This is  
  is equivalent to setting  values to  0 0 auto. 

flex-basis is calculated before remaining space is distributed by flex-grow and flex-shrink.  Auto margins can be used to absorb extra space. This can be useful if we want to push some item(s) in some direction. Spacing is applied after margins and flex-grow values are calculated so item having flex-grow none-zero value or auto margin will grow to fill remaining space thus justify-content will have no effect in such cases.  

## Alignment & spacing
Alignment within flex container is applied after flex has finalized it work. That is when sizes have been calculated and space has been distributed among the different items. Before going into flex specific properties lets take glimpse at how the ordinary auto margin work together with flexbox. 

Box aligment propreties are also respected in flex layouts.

### Auto margins
Auto margins can be used inside flex container. Take a look at the navigation links in following image.
![pushing item right with auto margin](./img/readme/flexautomargin.png)
The about link has been pushed to right and the rest of the links are group to left. This was achieved simply by applying `margin-left:auto` to about item which sits inside a flex container. This was  all it took to achieve the layout of  main navigation.But there are some things we need to be aware of when working with auto-margins and flexbox. One gotcha using auto margins arise  when boxes  overflow. In such cases auto margins are just ignored. The effect of this can be seen in following image.

![auto layout vs align-self](./img/readme/auto-margin.png)

Left images uses  auto-margins  attempting to center items. On the right the align-self property has been used instead. As can be seen when using auto margin items behaves as if no auto margins had been set when item overflows. 

While flex basis and flexible length are calculated auto margins are treated as being 0. After sizes have been calculated remaining space distributed to auto margins and thus absorbed. The consequence of all this is basically that using positive auto margin or flex-grow  will circumvent alignment properties justify-content and align-self as all free space has already been consumed at this point. These will thus in such cases have any effect what so ever.

### Alignment properties
justify-content, align-items, align-content are applied onto flex-container and align-self is applied onto items. Justify-content is applied to main-axis. Align-items and Align-self is applied to cross-axis. these are all single-line alignment properties. There's a separate property named align-content to handle alignment of multiline content.

### justify content
aligns flexitems along main axis this can take on the values `flex-start`, `flex-end`, `center`, `space-between`, `space-around` and `space-evenly`. The three first just pack all the items at start, center or end along the main axis. The two last distributes the remain spain between the items. The difference between the two being that space-around adds space before first item and after last item whereas space between only adds space between elements. Space-evenly distributes space between items so that there is same amount of space between any two items.

### Align-items
The aligns items works along the cross-axis and is applied to all items in flex-container.It takes the values  `flex-start`, `flex-end`, `center`,  `stretch` and `baseline`. The flex-start, flex-end and center, work in similar fashion as justify-content but along cross-axis.The stretch will stretch item to the cross-end. baseline will align items to axis baselines.W3C has [introdoction to baselines](https://www.w3.org/TR/css-writing-modes-3/#intro-baselines) in case you want to know more about baselines.

### Align-self
Align-self overides align-items values per item. It pretty much works as align-items and takes the same values with the addition of `auto`. Auto is the default and hands over cross-axis alignment control to parents align-item value.

### Align-content (multiline alignment)
Aligns container lines within flex container when there is extra space in the cross axis. This property does not work on single content.
This works similar to justify content but in cross-axis direction on wrapped content. Valid values are `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, and `stretch`

# Links
And here are a couple of useful flexbox related links. 

[MDN web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox).

[css tricks complete guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

[w3c flexible box layout specification ](https://www.w3.org/TR/css-flexbox-1/).

