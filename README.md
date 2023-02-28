<pre>                                        <b> HTML </b> <hr/>
9/12/2022 (Friday)
    => Only one h1 should be present in one HTML page
    => h1-h6 tags should only be used for headings
    => semantic tags : 
        these tags have some descriptive meaning
        => header : used for the top header part of the page
        => nav : used for the navigation menu containing links of the page
        => section : used for a section in a document
        => article : defines independent , self-contained content
        => aside : usually used for some info not related to the document eg ads
        => footer : generally used for site map, copyright/contact info
    => Lists
        => unordered list (ul)  : list items are prefixed with bullets which are of types: square,
                                  circle, disc
        => ordererd list (ol)  : list items are prefixed with bullets which are of types: 1,A,a,I,i

    =>References : => https://www.w3schools.com/html/html5_semantic_elements.asp
    
    


12/12/2022(Monday)
    => anchor tag 
        => used for routing in the markup
        => href: this attribute contains the path or the link of the page you want to route to

            =>  suppose we are currently at https://www.sampledomain.com/user/profile
                 =>href=" /abc.html"  : this will redirect to https://www.sampledomain.com/abc.html
                => href= " abc.html" : this will redirect to https://www.sampledomain.com/user/profile/abc.html
    => img tag : used for inserting images in the markup
        => important attributes:
            =>src: this is the path/link of the image you ate inserting
            =>alt : this is short text which shows up in themarkup untill the image is being loaded or if image failed to load,  should not be long text (as it should take the same size as image and not overflow )
    => audio tag : used for inserting an audio file to the markup
        =>  < audio controls autoplay muted>
                < source src="horse.ogg" type="audio/ogg" />
                < source src="horse.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            < /audio>
        => attributes : 
            =>controls: this is used to introduce controls in the audio
            =>autoplay: this is used to automatically play the audio when page loads 
        =>source: this is used for different fallback sources for the file if file not supported 
    =>video tag : used for inserting video file to the markup
        => additional attributes from audio tag:
            => width, height : for setting the height and width of the video player
    
    =>Working Files :: =>  HTML/htmlPractice.html
                       =>  README.md
    =>References : => https://www.w3schools.com/tags/tag_a.asp
                   =>https://www.w3schools.com/tags/tag_img.asp
                   => https://www.w3schools.com/tags/tag_audio.asp
                   =>https://www.w3schools.com/tags/tag_video.asp



13/12/2022(Tuesday) 
    => Table Tag
        => thead tag :
            => used to group header content in an HTML table
            => The thead element must have one or more tr tags inside.

        => tbody tag : used to group the body content in an HTML table
            => conatins tr tags for each row 
        => tfoot tag :
            =>used to group footer content in an HTML table
            => The tfoot element must have one or more tr tags inside.
        => tr tag :
            => The tr tag defines a row in an HTML table.
            => A tr element contains one or more th or td elements.
        => td tag :
            => The td tag defines a standard data cell in an HTML table
            =>An HTML table has two kinds of cells:
                =>Header cells - contains header information (created with the th element)
                =>Data cells - contains data (created with the td element)
            =>The text in td elements are regular and left-aligned by default.
        => th tag:
            =>The th tag defines a header cell in an HTML table.
            =>The text in th elements are bold and centered by default.
        
    =>Working Files :: =>  HTML/htmlPractice.html
                       =>  README.md
                       =>  HTML/Task1-Table/index.html
                       =>  HTML/Task1-Table/Description.txt 


    => References : => https://www.w3schools.com/tags/tag_table.asp
                    => https://www.w3schools.com/tags/tag_thead.asp
                    => https://www.w3schools.com/tags/tag_tbody.asp
                    => https://www.w3schools.com/tags/tag_tfoot.asp
                    => https://www.w3schools.com/tags/tag_tr.asp
                    => https://www.w3schools.com/tags/tag_td.asp

14/12/2022 (Wednesday)
    => Form Tag : used for creating form in the markup
        => Form Elements :
            =>input element: this is the tag responsible for showing the input field of different types based on its attribute "type"
                => input types: 
                    =>text : used for taking text as input 
                    =>password: used for taking password as input, characters are not shown
                    =>number:used for taking number as input , only 10 digits alongwith e(representing power of 10) is acceptable
                    =>email : used for taking email as input , validates input as a valid email address
                    =>date : used for taking date as input, date picker opens
                    =>datetime-local: used for taking date and time as input
                    =>radio : used for selecting one option out of many, radio buttons are used
                    =>checkbox: used for selecting one/many/none out of many options, checkboxes are shown to choose from options
                    =>button: used for showing a button
                    =>file: used for letting users upload a file 
                    =>submit: used for submitting the form , it is basically a button
            =>label element: this is used for the text for the particular input field, to autofocus the linked input field when clicked on label- the "for" attribute of label tag should have same value as that of "id " of input tag
            =>select element:this is used for dropdown options from which an option can be choosen
                => we can also group the options using optgroup tag
            =>textarea element: this shows an text input field , width and height of this field is larger as compared to normal text field , can also be resized
            => fieldset and legend elements: fieldset allows us to group multiple fields using a box , making it as a section of the form 
                => legend is used to give a name to that section created by fieldset
    
    Working Files :: =>  HTML/htmlPractice.html
                     =>  README.md
                     =>  HTML/Task2-Form/
    
    References ::  => https://www.w3schools.com/tags/tag_form.asp
                   =>https://www.w3schools.com/tags/tag_input.asp
                   =>https://www.w3schools.com/tags/tag_select.asp
                   =>https://www.w3schools.com/tags/tag_label.asp
    
15/12/2022(Thursday): 
    =>Practice differerent tags of form

    => Working Files: =>  HTML/htmlPractice.html
                     =>  README.md
                     =>  HTML/Task2-Form/
16/12/2022 (Friday):
    => Worked on the Project 

    => Working Files: =>  Project/



19/12/2022 (Monday):
    => Worked on the Project 
        => Added Features Section

    => Working Files: =>  Project/


20/12/2022 (Tuesday):
    => Worked on the Project 
        => Added Features Section

    => Working Files: =>  Project/

    => References : https://www.w3schools.com/cssref/css3_pr_box-shadow.php


21/12/2022 (Wednesday):
    => Worked on the Project 
        => Added More Features Section
        => Added Get_started Section
        => Added Footer Section
        => Worked on CSS of sections

    => Working Files: =>  Project/

    => References : https://www.w3schools.com/cssref/css3_pr_box-shadow.php
                    =>https://www.w3schools.com/howto/howto_css_aspect_ratio.asp
                    =>https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_aspect_ratio_css
                    =>https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_rounded_images
                    =>https://css-tricks.com/almanac/properties/a/align-content/#:~:text=flex%2Dstart%20%3A%20lines%20packed%20to,one%20is%20at%20the%20end
                    =>https://www.educba.com/css-inner-border/
    <hr/>                                           <b>CSS</b> <hr/>

22/12/2022 (Thursday) : 
    => Different Ways to add CSS(Cascading Style Sheets) to the markup
        => INLINE CSS : This is done by adding style attribute directly to the element in the HTML file
            => < div style=" font-size:16px; color: red"> Test < /div>
        => INTERNAL CSS : This is done by writing CSS properties and corresponding values in the style tag in which is put in header tag
            => < head >
                    < style>
                        div{
                            background-color: red;
                            display: flex;
                        }
                    < /style>
                < /head>
        => EXTERNAL CSS : 
            => This is done by writing CSS properties and its corresponding values in a different file (stylesheet) with extension .css, and then this file is linked(via link tag) in head tag of the HTML file
    => Common ways of selecting th elements for giving them CSS (Simple Selectors)
        => Element Selector : CSS is given directly to the element 
            =>div{
                    background-color: red;
                    display: flex;
                }
        => Class Selector : We add a class attribute , the value of which is the className to target while giving CSS to all the elements which have the same class given in the .html file
            => . (dot) is used for styling using class selector
            => < p class="para"> Test Paragraph < /p> 
            => now to give style to the p tag , we write 
                    => .para{
                        color: blue;
                        font-size: 20px;
                    }
        => ID Selector : we add an id attribute , the value of which is the idName to target while giving CSS to only that element which is given this id 
            => we can give a particular id only to one element in the whole webpage
            => # (hasgtag) is used for styling using id selector
            => < p id="para2"> Test Paragraph < /p> 
            => now to give style only to this p tag , we write 
                    => #para2{
                        color: red;
                        font-size: 18px;
                    }
        

    => Worked on the Project 
            

    => Working Files: => Project/
                      => CSS/
                      => README.md

    => References : https://www.w3schools.com/css/css_selectors.asp


23/12/2022 (Friday):
    => CSS Combinators : 
        => 1) Descendent Selector(space) : matches all elements that are descendants of a specified element
        => 2) Child selector (>) : selects all elements that are the children of a specified element
        => 3) Adjacent sibling selector (+) : select an element that is directly after another specific element
        => 4) General sibling selector (~): selects all elements that are next siblings of a specified element

    => Attribute Selectors : 
        =>   [attribute]	          [target]	               Selects all elements with a target attribute
        =>   [attribute=value]	      [target=_blank]	       Selects all elements with target="_blank"
        =>   [attribute~=value]	      [title~=flower]	       Selects all elements with a title attribute
                                                                    containing the word "flower"
        =>   [attribute|=value]	      [lang|=en]	           Selects all elements with a lang attribute 
                                                                    value starting with "en"
        =>   [attribute^=value]	      a[href^="https"]	       Selects every < a> element whose href attribute 
                                                                    value begins with "https"
        =>   [attribute$=value]	      a[href$=".pdf"]	       Selects every < a> element whose href attribute 
                                                                    value ends with ".pdf"
        =>   [attribute*=value]	      a[href*="w3schools"]	   Selects every < a> element whose href attribute 
                                                                     value contains the substring "w3schools"
    
    => Pseudo Class
        => used to define a special state of an element
            => Examples :   :active, :hover, :link, :visited, :first-child, :nth-child, :not()
    => Pseudo Element
        => A CSS pseudo-element is used to style specified parts of an element
        => For example, it can be used to:
                => Style the first letter, or line, of an element
                => Insert content before, or after, the content of an element
        => All Pseudo Elements
            => ::after	        p::after	       Insert something after the content of each < p> element
            => ::before	        p::before	       Insert something before the content of each < p> element
            => ::first-letter	p::first-letter	   Selects the first letter of each < p> element
            => ::first-line	    p::first-line	   Selects the first line of each < p> element
            => ::marker	        ::marker	       Selects the markers of list items
            => ::selection	    p::selection	   Selects the portion of an element that is selected by a user
    

    => Worked on the Project 
    => Practiced CSS Combinators, Attribute Selectors, Pseudo Class 
            => Practice Link : https://flukeout.github.io/    (an interactive game for learning differernt selectors)

    => Working Files: => Project/
                      => CSS/
                      => README.md

    => References : https://www.w3schools.com/css/css_combinators.asp
                    =>https://www.w3schools.com/css/css_attribute_selectors.asp
                    => https://www.w3schools.com/css/css_pseudo_elements.asp
                    => https://www.w3schools.com/css/css_pseudo_classes.asp
                    => https://developer.mozilla.org/en-US/docs/Web/CSS/:link
                    => https://quirksmode.org/css/selectors/hover.html (difference b/w hover and active)

26/12/2022(Monday):

    => Order of preference : 
        1) inline CSS > internal CSS > external CSS
        2) inline > id > Classes/Pseudo classes/ Attribute Selectors > Element/Pseudo Elements
    => When importing multiple stylesheets, the sheet which is imported later in the head gets higher priority

    =>Colors 
        => Different Methods to give colors
            => Color Name : eg red,yellow,green
            => HEX code : 
                => sample hex code : #ffffff   (this is for white)
                => starts with # , followed with 6 hex digits, 2 each for R,G,B
                => if the hex code is #RRGGBB then it can also be written #RGB in short 
                => hex code can also include 2 more additional digits for opacity
            => RGBA
                => sample color: rgba(255,255,255,1)
                => the integral values of rgb are in range [0,255]  , the fourth digit is for opacity which lies in range[0.00, 1.00] 
                => the default value of opacity is 1 if not given otherwise, i.e color can also be given in this form: rgb(10,23,56) 
            => HSLA 
                => HSL(Hue, Saturation, Lightness)
                    => Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.
                    => Saturation is a percentage value. 0% means a shade of gray, and 100% is the full color.
                    => Lightness is also a percentage value. 0% is black, and 100% is white.
                    => sample HSL color : hsl(0, 100%, 50%)
                => HSLA : here an extra parameter can be given for opacity which is in range [0.00, 1.00]
                    => Sample HSLA color : hsla(9, 100%, 64%, 1)


    => Worked on the Project 
    => Practiced CSS Colors

    => Working Files: => Project/
                      => CSS/
                      => README.md

    => References : https://www.w3schools.com/css/css_colors.asp
                    => https://www.w3schools.com/css/css_colors_rgb.asp
                    => https://www.w3schools.com/css/css_colors_hex.asp
                    => https://www.w3schools.com/css/css_colors_hsl.asp

27/12/2022 (Tuesday) : 
    => CSS Box Model 
        => All HTML elements can be considered as boxes
        => The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content
        => Content - The content of the box, where text and images appear
        => Padding - Clears an area around the content. The padding is transparent
        => Border - A border that goes around the padding and content
        => Margin - Clears an area outside the border. The margin is transparent
        => Margin Collapse : 
            => Margin top of lower element  and margin bottom of upper element collapses to a margin equal to greater of two values (margin top, margin bottom) between the two elements.
            => Margin collapse happens with only margin-top & bottom and not with margin-left & right
    => Box-Sizing
        => content-box
            => This is the default value of box-sizing. The dimension of element only includes 'height' and 'width' and does not include 'border' and 'padding' given to element. Padding and Border take space outside the element.
        => border-box 
            => In this value, not only width and height properties are included but you will find padding and border inside of the box for example .box {width: 200px; border: 10px solid black;} renders a box that is 200px wide
    = Display Property
        => inline
            => takes space as required
            => does not add a new line at the end of itself
        => block
            => takes full width of the screen
            => adds a new line at the end of itself
            => next element (inline/block) will appear in next line
        => inline-block
            => Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.
            => Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.
            => Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements

    => References : https://www.w3schools.com/css/css_boxmodel.asp
                    => https://www.w3schools.com/css/css3_box-sizing.asp
                    => https://www.geeksforgeeks.org/how-is-border-box-different-from-content-box/

    => Working Files: => Project/
                      => CSS/
                      => README.md

28/12/2022 (Wednesday):
    => Worked on the Project 

    => Working Files: =>  Project/


29/12/2022 (Thursday):
    => Position Property :
        => static : it is default value of the position property
            => Static positioned elements are not affected by the top, bottom, left, and right properties
            => positioned according to the normal flow of the page
        => relative : 
            => An element with position: relative; is positioned relative to its normal position
            => The element moves relative to itself if top,left,right,bottom is given
            => Other content will not be adjusted to fit into any gap left by the element
        => absolute : 
            => An element with position: absolute; is positioned relative to the nearest positioned ancestor
            => However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling
            => Absolute positioned elements are removed from the normal flow, and can overlap elements
            => layout changes ie other content will be adjusted to fit into any gap left by the element
        
        => sticky : 
            => An element with position: sticky; is positioned based on the user's scroll position
            => A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed)
            => layout doesn't change
            => sticky remains in action until its parent is in viewport
        
        => fixed : 
            => An element with position: fixed; is positioned relative to the viewport
            => Which means it always stays in the same place even if the page is scrolled
            => The top, right, bottom, and left properties are used to position the element
            => A fixed element does not leave a gap in the page where it would normally have been located
            => layout changes ie other content will be adjusted to fit into any gap left by the element
        
    => z-index :
        => The z-index property specifies the stack order of an element.
        => An element with greater stack order is always in front of an element with a lower stack order
        => z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items (elements that are direct children of display:flex elements)
        => If two positioned elements overlap without a z-index specified, the element positioned last in the HTML code will be shown on top

    => opacity : 
        => The opacity property specifies the opacity/transparency of an element
        => The opacity property can take a value from 0.00 - 1.00. 
        => The lower the value, the more transparent
    
    => Flexbox : 
        => Flex Container : 
            => The flex container becomes flexible by setting the display property to flex
            => The flex container properties are:
                => flex-direction
                => flex-wrap
                => flex-flow
                => justify-content
                => align-items
                => align-content
        => Flex Items : 
            => The direct child elements of a flex container automatically becomes flexible (flex) items
            => The flex item properties are:
                => order
                => flex-grow
                => flex-shrink
                => flex-basis
                => flex
                => align-self

    => Worked on the Project 

    => Working Files: =>  Project/
                      => => CSS/
                      => README.md
                    

    => References :
                    => https://www.w3schools.com/css/css_positioning.asp
                    => https://www.w3schools.com/cssref/pr_pos_z-index.php
                    => https://www.w3schools.com/css/css_image_transparency.asp
                    => https://www.w3schools.com/css/css3_flexbox.asp
                    => https://www.w3schools.com/css/css3_flexbox_container.asp
                    => https://www.w3schools.com/css/css3_flexbox_items.asp


30/12/2022 (Friday)
    => CSS Grid System
        => The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning
        => A grid layout consists of a parent element, with one or more child elements
        => syntax : 
            => display : grid;
            => display : inline-grid;
        => Grid Container Properties
            =>grid-template-columns : defines the number of columns in your grid layout
                => grid-template-columns: auto auto auto auto;
            => grid-template-rows :  property defines the height of each row
                => grid-template-rows: 80px 200px;
            => justify-content: used to align the whole grid inside the container
            => align-content:  used to vertically align the whole grid inside the container
        => Grid Item Properties
            => grid-column : defines on which column(s) to place an item
                => shorthand for the grid-column-start and the grid-column-end properties
                => grid-column: 1 / 5;
                => grid-column: 1 / span 3;
            => grid-row : defines on which row to place an item
            => grid-area: 
                => shorthand property for the grid-row-start, grid-column-start, grid-row-end and the grid-column-end properties
                => grid-area: 1 / 2 / 5 / 6;
                    => start on row-line 1 and column-line 2, and end on row-line 5 and column line 6
        => Grid Gap
            => You can adjust the gap size by using one of the following properties:
                => column-gap
                => row-gap
                => gap
        => Grid Lines
            =>The lines between columns are called column lines.
            => The lines between rows are called row lines.
            => we can place a grid item in the grid layout by pointing to the column and row 
                => grid-column-start, grid-column-end
                => grid-row-start, grid-row-end
    

    => CSS Resonsive Design 
        => Media Query
            => A media query consists of a media type and can contain one or more expressions, which resolve to either true or false
            => Syntax : 
                => @media not|only mediatype and (expressions) {
                        <!-- CSS-Code; -->
                    }
            => Media types 
                => all	    Used for all media type devices
                => print	Used for printers
                => screen	Used for computer screens, tablets, smart-phones etc.
                => speech	Used for screenreaders that "reads" the page out loud
            
            => example 
                => @media only screen and (min-width: 480px) {
                        body {
                            background-color: lightgreen;
                        }
                    }

    =>  Worked on the Project 

    => Working Files: =>  Project/
                      => => CSS/
                      => README.md
                    

    => References :   https://www.w3schools.com/css/css_grid.asp
                     => https://www.w3schools.com/css/css_grid_container.asp
                     => https://www.w3schools.com/css/css_grid_item.asp
                     => https://www.w3schools.com/css/css_rwd_mediaqueries.asp
                     => https://www.w3schools.com/css/css3_mediaqueries.asp
                    
02/01/2023 (Monday): 
     => Worked on the Project 

    => Working Files: =>  Project/
                      => README.md


03/01/2023 (Tuesday): 
     => Worked on the Project 

    => Working Files: =>  Project/
                      => README.md


04/01/2023 (Wednesday): 
     => Worked on the Project 

    => Working Files: =>  Project/
                      => README.md


05/01/2023 (Thursday): 
    => Worked on the Project 

    => Working Files: =>  Project/
                      => README.md

06/01/2023 (Friday):
    => Worked on the Project 
    => Self Study 
    
    => Working Files : => Project/

    => References : 
        => https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt
        => https://learn.namastedev.com/

09/01/2023 (Monday):
    => Self Study 

    => References : 
        => https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt
        => https://learn.namastedev.com/

<hr/>                                           <b>JavaScript</b> <hr/>
10/01/2023 ( Tuesday): 
    => Javascript 
        => JavaScript makes web pages dynamic
        => JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else
        => JavaScript is a programming language that adds interactivity to your website
    => Ways to add javascript
        =>You can include JavaScript in your HTML in two ways:
            =>Writing the code in your HTML
                => < script type="text/javascript">
                        alert("This alert box was called with the onload event");
                    < /script>
            => Including it as a link to an external file    
                => < script type="text/javascript" src="path-to-javascript-file.js">< /script>
    => JavaScript Files
        => JavaScript files are not HTML files or CSS files.
        => Always end with the js extension
        => Only include JavaScript
    => Javascript data types 
        => Primitive data types
        => Non-primitive data types
    => Primitive data types 
        => string
        => number
        => bigint
        => boolean
        => undefined
        => symbol
        => null
    => Number  
        => JavaScript has only one type of number. Numbers can be written with or without decimals
        => JavaScript Numbers are Always 64-bit Floating Point
        => Integers (numbers without a period or exponent notation) are accurate up to 15 digits
        => The maximum number of decimals is 17
        => operations : + , - , * , / , % , etc.
        => NaN
            => NaN is a JavaScript reserved word indicating that a number is not a legal number
            => You can use the global JavaScript function isNaN() to find out if a value is a not a number
            => NaN is a number: typeof NaN returns number
    => Javascript comments
        => single line comment : Single line comments start with //
        => multiline line comment : Multi-line comments start with /* and end with */
    
    => Self Study 
        => https://wordpress.org/
    
    => References : 
        => https://www.w3schools.com/js/js_whereto.asp
        => https://www.w3schools.com/js/js_comments.asp
        => https://www.w3schools.com/js/js_operators.asp
        => https://www.w3schools.com/js/js_datatypes.asp
        => https://www.w3schools.com/js/js_numbers.asp

11/01/2023 (Wednesday): 
    => Worked on Angler LA Project  
    => JavaScript Variables
        => Variable declared without value takes the value undefined
        => If you put a number in quotes, the rest of the numbers( after that number) will be treated as strings, and concatenated.
            => let x = 2 + 3 + 5;     // x=10
            => let x = 2 + 3 + "5";     // x= 55
            => let x = "5" + 2 + 3;     // x= 523
        => Naming the variable
            => JavaScript is case sensitive
            => Name of variable can start from uppercase, lowercase,_,$
            => Snakecase —- first_name
            => Camel case —- firstName(suitable )
            => Pascal case
            => Don't use hyphen in between
        => var
            => Can be RE-DECLARED
                => var a=6;
                => Var a;    // a does not lose its value (=6)
            => Can be RE-ASSIGNED a different value
                => var a=6;
                => var a=7;    // this actually makes a new variable 
            => The declaration of the variables defined with var are hoisted to the top.
        => let
            => Cannot be re-declared in the same block
                => let a=5;
                => let a;    // NOT ALLOWED
            => Can be reassigned a new value
                => let a=5;
                => a=6;      //ALLOWED
            => MUST be DECLARED BEFORE USE
            => It has BLOCK SCOPE
        => const
            => Must be assigned when it is declared
            => CANNOT be REASSIGNED
            => Use const when you declare:
                => A new Array
                => A new Object
                => A new Function
                => A new RegExp
            => It does not define a constant value. It defines a constant reference to a value.
            => Because of this you can NOT:
                => Reassign a constant value
                => Reassign a constant array
                => Reassign a constant object
            => But you CAN:
                => Change the elements of constant array
                => Change the properties of constant object
            => Redeclaring an existing var or let variable to const, in the same scope, is not allowed
            => Reassigning an existing const variable, in the same scope, is not allowed
            => Redeclaring a variable with const, in another scope, or in another block, is allowed

    => References :
        => https://www.w3schools.com/js/js_variables.asp
        => https://www.w3schools.com/js/js_let.asp
        => https://www.w3schools.com/js/js_const.asp

12/01/2023 (Thursday): 
    => Worked on Angler LA Project  
    => Null:
        => typeof null = "Object" 
        => The value null represents the absence of any object value
        => It is the intentional absence of the value. It is one of the primitive values of JavaScript
        => Null is also referred as false.
        => It is Primitive value in Javascript
    => undefined : 
        => It means the value does not exist in the compiler. 
        => It is the global object.
        => typeof undefined = "undefined" 
        => The undefined property indicates that a variable has not been declared at all.
        => It is an ECMAScript1 (ES1) feature.
    => Difference bw null and undefined
        => null == undefined // true
        => null === undefined // false
        => isNaN(2 +  null)      // false
        => isNaN(2 + undefined) // true
    => JavaScript ‘==’ operator:
        => also known as the loose equality operator
        => mainly used to compare two values on both sides and then return true or false.
        => This operator checks equality only after converting both the values to a common type i.e type coercion.
        => Examples 
            => console.log(21 == 21);                        //true
            => console.log(21 == '21');                      //true
            => console.log('food is love'=='food is love');  //true
            => console.log(true == 1);                       //true
            => console.log(false == 0);                      //true
            => console.log(null == undefined);               //true

            => console.log(21 == 32);                    //false
            => console.log(21 == '32');                  //false
            => console.log(true == 0);                   //false
            => console.log(null == false);               //false
    => JavaScript ‘===’ operator: 
        => Also known as strict equality operator
        => it compares both the value and the type which is why the name “strict equality”
        => Examples : 
            => console.log('hello world' === 'hello world');   //true
            => console.log(true === true);                     //true
            => console.log(5 === 5);                           //true

            => console.log(true === 1);                 //false
            => console.log(true === 'true');            //false
            => console.log(5 === '5');                  //false
    => True values : 
        => ‘0’
        => ‘false’ // false wrapped in string.
        => []
        => {}
        => function(){}
    => False Values : 
        => ” or “” // empty string
        => false
        => 0
        => null
        => undefined
        => NaN // not-a-number
    => EcmaScript
        => Ecmascript is a standard used by javascript and can be used interchangeably with js
        => ECMAScript 2015 was the second major revision to JavaScript.
        => ECMAScript 2015 is also known as ES6 and ECMAScript 6.
        => Some New features in ES6 
            => let, const, arrow functions, spread operator, promises
            => https://www.w3schools.com/js/js_es6.asp
    => Rules for choosing a variable name
        1) letters ,  underscore and $ are allowed
        2) must begin with a $, _ or an alphabet
        3) case sensitive
        4) must NOT begin with a number
    
    => References :
        => https://www.geeksforgeeks.org/undefined-vs-null-in-javascript/
        => https://www.geeksforgeeks.org/javascript-vs-comparison-operator/
        => https://www.w3schools.com/js/js_es6.asp

13/01/2023 (Friday): 
    => Worked on Angler LA Project  

16/01/2023 (Monday): 
    => Worked on Angler LA Project 
    => Non -primitive data types 
        => Array
        => Object
    => Array 
        => Creating an Array
            => Using an array literal 
                => const array_name = [item1, item2, ...];
            => Using the JavaScript Keyword new
                => const cars = new Array("Saab", "Volvo", "BMW");
            => There is no need to use new Array().
            => For simplicity, readability and execution speed, use the array literal method.
        => Accessing Array Elements
            => You access an array element by referring to the index number:
            => const cars = ["Saab", "Volvo", "BMW"];
                let car = cars[0];
        => Changing an Array Element
            => cars[0] = "Opel";
        => Arrays are objects , typeof cars returns Object
        => Arrays properties and methods
            => cars.length   // Returns the number of elements
            => cars.sort()   // Sorts the array
            => many more methods are present :   https://www.w3schools.com/js/js_array_methods.asp
    => Object 
        => Object Definition
            => You define (and create) a JavaScript object with an object literal:
            => const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
        => Object Properties
            => The name:values pairs in JavaScript objects are called properties:
        => Accessing Object Properties
            => objectName.propertyName
            => objectName["propertyName"]
        => Object Methods
            => Objects can also have methods.
            => Methods are actions that can be performed on objects.
            => Methods are stored in properties as function definitions.
            => A method is a function stored as a property.
    => Math Object
        => Unlike other objects, the Math object has no constructor.
        => The Math object is static.
        => All methods and properties can be used without creating a Math object first.
        => Math Properties (Constants) : 
            => syntax for any Math property is : Math.property
            => Math.E        // returns Euler's number
            => Math.PI       // returns PI
            => Math.SQRT2    // returns the square root of 2
        => Math Methods : 
            => The syntax for Math any methods is : Math.method(number)
            => Math.round(x)	Returns x rounded to its nearest integer
            => Math.ceil(x)	Returns x rounded up to its nearest integer
            => Math.floor(x)	Returns x rounded down to its nearest integer
            => Math.trunc(x)	Returns the integer part of x (new in ES6)

    => References : 
        => https://www.w3schools.com/js/js_arrays.asp
        => https://www.w3schools.com/js/js_array_methods.asp
        => https://www.w3schools.com/js/js_objects.asp
        => https://www.w3schools.com/js/js_math.asp

17/01/2023 (Tuesday): 
    => Worked on Angler LA Project 
    => Comparison Operators 
        => Comparison and Logical operators are used to test for true or false.
        => Comparison operators are used in logical statements to determine equality or difference between variables or values.
        => ==	equal to
        => ===	equal value and equal type
        => !=	not equal
        => !==	not equal value or not equal type
        => >	greater than
        => <	less than
        => >=	greater than or equal to
        => <=	less than or equal to
    => Logical Operators
        => Logical operators are used to determine the logic between variables or values.
        => &&	and	     : (x < 10 && y > 1) is true
        => ||	or	     : (x == 5 || y == 5) is false
        => !	not	     : !(x == y) is true
    => Shallow Copy vs Deep Copy 
        => Shallow Copy: 
            => When a reference variable is copied into a new reference variable using the assignment operator, a shallow copy of the referenced object is created. 
            => In simple words, a reference variable mainly stores the address of the object it refers to. 
            => When a new reference variable is assigned the value of the old reference variable, the address stored in the old reference variable is copied into the new one.
            => This means both the old and new reference variable point to the same object in memory. 
            => As a result if the state of the object changes through any of the reference variables it is reflected for both.
        => Deep Copy : 
            => Unlike the shallow copy, deep copy makes a copy of all the members of the old object, allocates separate memory location for the new object and then assigns the copied members to the new object.
            =>  In this way, both the objects are independent of each other and in case of any modification to either one the other is not affected. 
            => Also, if one of the objects is deleted the other still remains in the memory.
            => Now to create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods.
    
    => References :
        => https://www.w3schools.com/js/js_comparisons.asp
        => https://www.geeksforgeeks.org/what-is-shallow-copy-and-deep-copy-in-javascript/

18/01/2023 (Wednesday): 
    => Worked on Angler LA Project 
    => Conditional Statements and Loops
        => if else 
            => The if Statement
                => Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
                => if (condition) {
                     //  block of code to be executed if the condition is true
                    }
                => The else Statement
                    => Use the else statement to specify a block of code to be executed if the condition is false.
                    => if (condition) {
                         //  block of code to be executed if the condition is true
                        } else {
                                 //  block of code to be executed if the condition is false
                                }
                => The else if Statement
                    => Use the else if statement to specify a new condition if the first condition is false.
                    => if (condition1) {
                             //  block of code to be executed if condition1 is true
                        } else if (condition2) {
                              //  block of code to be executed if the condition1 is false and condition2 is true
                        } else {
                            //  block of code to be executed if the condition1 is false and condition2 is false
                        }
        => switch statement : 
            => The switch statement is used to perform different actions based on different conditions.
            => Use the switch statement to select one of many code blocks to be executed.
            => syntax : 
                => switch(expression) {
                        case x:
                            // code block
                            break;
                        case y:
                            // code block
                            break;
                        default:
                            // code block
                        }
            => This is how it works :
                => The switch expression is evaluated once.
                => The value of the expression is compared with the values of each case.
                => If there is a match, the associated block of code is executed.
                => If there is no match, the default code block is executed.
        
        => Loops : 
            => Different Kinds of Loops
                => for - loops through a block of code a number of times
                => for/in - loops through the properties of an object
                => for/of - loops through the values of an iterable object
                => while - loops through a block of code while a specified condition is true
                => do/while - also loops through a block of code while a specified condition is true
            => The For Loop
                => The for statement creates a loop with 3 optional expressions:
                => for (expression 1; expression 2; expression 3) {
                     // code block to be executed
                    }
                => Expression 1 is executed (one time) before the execution of the code block.
                => Expression 2 defines the condition for executing the code block.
                => Expression 3 is executed (every time) after the code block has been executed.
            => The While Loop
                => The while loop loops through a block of code as long as a specified condition is true.
                => while (condition) {
                     // code block to be executed
                    }
            => The Do While Loop
                => The do while loop is a variant of the while loop.
                => This loop will execute the code block once, before checking if the condition is true, 
                then it will repeat the loop as long as the condition is true.
    => Array methods & iteration
        => forEach
            => The forEach() method calls a function for each element in an array.
            => The forEach() method is not executed for empty elements.
            => syntax : array.forEach(function(currentValue, index, arr), thisValue)
                => function()	Required, A function to run for each array element.
                => currentValue	Required, The value of the current element.
                => index	Optional,The index of the current element.
                => arr	Optional,The array of the current element.
                => thisValue	Optional. Default undefined , A value passed to the function as its this value.
        => array map
            => map() creates a new array from calling a function for every array element.
            => map() calls a function once for each element in an array.
            => map() does not execute the function for empty elements.
            => map() does not change the original array.
            => syntax : array.map(function(currentValue, index, arr), thisValue)
            => Return value : An array	(The results of a function for each array element) 


    => References: 
        => https://www.w3schools.com/js/js_if_else.asp
        => https://www.w3schools.com/js/js_switch.asp
        => https://www.w3schools.com/js/js_loop_while.asp
        => https://www.w3schools.com/jsref/jsref_foreach.asp
        => https://www.w3schools.com/jsref/jsref_map.asp

        
19/01/2023 (Thursday): 
    => Some Object methods 
        => Object.keys()
            => The Object.keys() method returns an Array Iterator object with the keys of an object.
            => The Object.keys() method does not change the original object.
            => syntax : Object.keys(object)
        => Object.values()
            => The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
            => syntax: Object.values(obj)
            => Object.values() returns an array whose elements are strings corresponding to the enumerable string-keyed property values found directly upon object
        => Object.entries()
            => The Javascript Object entries() method gives an array with enumerable property key-value pairs of a specified object.
            => syntax : Object.entries(object) 
    => Spread Operator 
        => The Spread operator allows an iterable to expand in places where 0+ arguments are expected.
        => It is mostly used in the variable array where there is more than 1 value is expected. 
        => It allows us the privilege to obtain a list of parameters from an array. 
        => Uses of spread operator
            => Expand
            => copy
            => concatenate
            => math object
        => Using it for deep copy
            => when copying arrays and objects into another variable without using spread operator , any mutation in new object/array also reflects in the original 
            => to avoid this , we use spread operator for safely copying 
                => // spread operator for copying 
                => let arr = ['a','b','c'];
                => let arr2 = [...arr];     
                => console.log(arr); // [ 'a', 'b', 'c' ]      
                => arr2.push('d'); //inserting an element at the end of arr2
                => console.log(arr2); // [ 'a', 'b', 'c', 'd' ]
                => console.log(arr); // [ 'a', 'b', 'c' ]
            => Some Rules for using spread operator
                => It should be used to spread same data type ie spread an array into an array and object into object , otherwise syntax error occurs
                => It can be used for deep copy upto ine level of nesting only , after that it does shallow copy if used on nested object,array
                    => If otherwise required then use:  const arr2= JSON.parse(JSON.stringify(arr1));
        

    => References : 
        => https://www.w3schools.com/jsref/jsref_object_keys.asp
        => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
        => https://www.w3schools.blog/object-entries-javascript-js
        => https://www.geeksforgeeks.org/javascript-spread-operator/

20/01/2023 (Friday): 
    => DOM manipulation 
        => getElementById
            => The getElementById() method returns an element with a specified value.
            => The getElementById() method returns null if the element does not exist.
        => getElementsByClassName()
            => The getElementsByClassName() method returns a collection of elements with a specified class name(s).
            => The getElementsByClassName() method returns an HTMLCollection.
            => The getElementsByClassName() property is read-only.


    => References : 
        => https://www.w3schools.com/jsref/met_document_getelementbyid.asp
        => https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp

23/01/2023 (Monday): 
    => Functions: 
        => A JavaScript function is a block of code designed to perform a particular task.
        => A JavaScript function is executed when "something" invokes it (calls it).
        => Function Declaration methods : 
            => Function Declaration default method :
                => syntax : function functionName(parameters) {
                                // code to be executed
                            }
            => Function Expressions : 
                => const x = function (a, b) {return a * b};
                   let z = x(4, 3);
            => Arrow Functions : 
                => Arrow functions allow us to write shorter function syntax:
                    => let myFunction = (a, b) => { return  a * b; }
                    => If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
                        => let myFunction = (a, b) => a * b;
                    => Arrow Functions Return Value by Default:
                        => hello = () => "Hello World!";
                    => Arrow Function Without Parentheses:
                        => hello = val => "Hello " + val;
        =>  Function Parameters anmd arguments: 
            => function functionName(parameter1, parameter2, parameter3) {
                      // code to be executed
                }
            => Function parameters are the names listed in the function definition.
            => Function arguments are the real values passed to (and received by) the function.
            => Arguments Object 
                => JavaScript functions have a built-in object called the arguments object.
                => The argument object contains an array of the arguments used when the function was called (invoked).
            => Arguments are Passed by Value
            => Objects are Passed by Reference
        => IIFE (Immediately Invoked Function Expression)
            => An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 
            => Uses : Saves memory as once the function is executed , the whole function memory is garbage collected ie memory is set free

    => References :
        => https://www.w3schools.com/js/js_arrow_function.asp
        => https://www.w3schools.com/js/js_function_definition.asp
        => https://www.w3schools.com/js/js_function_parameters.asp
        => https://developer.mozilla.org/en-US/docs/Glossary/IIFE 

24/01/2023 (Tuesday):   
    => Practised functions 
    => this keyword 
        => In JavaScript, the this keyword refers to an object.
        => Which object depends on how this is being invoked (used or called).
        => The this keyword refers to different objects depending on how it is used:
            => In an object method, this refers to the object.
            => Alone, this refers to the global object.
            => In a function, this refers to the global object.
            => In a function, in strict mode, this is undefined.
            => In an event, this refers to the element that received the event.
            => Methods like call(), apply(), and bind() can refer this to any object.
        => this is not a variable. It is a keyword. You cannot change the value of this.
        => This Precedence
            => 1) bind()   2) apply() and call()      3)Object method         4)Global scope
            => Is this in a function being called using bind()?
            => Is this in a function being called using apply()?
            => Is this in a function being called using call()?
            => Is this in an object function (method)?
            => Is this in a function in the global scope.
    => call() method
        => The call() method is a predefined JavaScript method.
        => It can be used to invoke (call) a method with an owner object as an argument (parameter).
        => With call(), an object can use a method belonging to another object.
        => The call() method can also accept arguments
    => apply() method
        => With the apply() method, you can write a method that can be used on different objects.
        => The apply() method is similar to the call() method 
        => The Difference Between call() and apply() : 
            => The call() method takes arguments separately.
            => The apply() method takes arguments as an array.
    => bind() method 
        => With the bind() method, an object can borrow a method from another object.
        => Preserving this
            => Sometimes the bind() method has to be used to prevent losing this.
            => When a function is used as a callback, "this" is lost.
            => The bind() method solves this problem by binding the "this"  to specific object as provided.

    => Working Files: =>  Javascript/
                      => README.md
    => References :
        => https://www.w3schools.com/js/js_this.asp
        => https://www.w3schools.com/js/js_function_call.asp
        => https://www.w3schools.com/js/js_function_apply.asp
        => https://www.w3schools.com/js/js_function_bind.asp

25/01/2023 (Wednesday): 
    => Practiced this keyword, call() , apply(), bind()
    => Hoisting: 
        => Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors and this happens during the 1st phase (memory creation phase) of the Execution Context.
        => Features of Hoisting:
            => In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.
            => Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope(not literally, just for our understanding) regardless of whether their scope is global or local. 
            => Basically,
                => var is hoisted and assigned a value undefined
                => function() is hoisted and assigned a value of full function itself
                => let is hoisted but it stays in TEMPORAL DEAD ZONE (TDZ) before it is actually assigned a value, Usage before actual initialization of let results in ReferenceError: Cannot access 'a' before initialization
                => const also gets hoisted and remains in TDZ same as let, usage before actual initialization of const also results in ReferenceError: Cannot access 'a' before initialization
            => It allows us to call functions before even writing them in our code. 
        => JavaScript only hoists declarations, not initializations.
        => JavaScript allocates memory for all variables and functions defined in the program before execution.
        => Sequence of variable declaration:    Declaration –> Initialisation/Assignment –> Usage 
    => Working of Javascript 
    => Callstack, Event Loop, Execution Context, Callback Queue/ Task Queue, MicroTask Queue   
    => Working Files: =>  Javascript/
                      => README.md
    => References : 
        => https://www.geeksforgeeks.org/javascript-hoisting/
        => https://www.w3schools.com/js/js_hoisting.asp
        => https://www.youtube.com/watch?v=Fnlnw8uY6jo&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=4   (Hoisting)
        => https://www.youtube.com/watch?v=ZvbzSrg0afE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=2   (Working of Javascript)
        => https://www.youtube.com/watch?v=iLWTnMzWtj4&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=3   (Execution of JS Code)

27/01/2023 (Friday):
    => Practiced Hoisting
    => Worked on Angler LA
    => Working Files: =>  Javascript/
                      => README.md
30/01/2023 (Monday):
    => Destructuring:
        => Destructuring means to break down a complex structure into simpler parts.
        => With the syntax of destructuring, you can extract smaller fragments from objects and arrays. It can be used for assignments and declaration of a variable.
        => Destructuring is an efficient way to extract multiple values from data that is stored in arrays or objects. 
        => When destructuring an array, we use their positions (or index) in an assignment.
    => Array Destructuring and rest operator: 
        => By using the rest operator (…) in array destructuring, you can put all the remaining elements of an array in a new array.
        => var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];   
            var [a,b,...args] = colors;  // destructuring assignment 
    => Array destructuring and Default values
        => If you are taking a value from the array and that value is undefined, then you can assign a default value to a variable.  
        => var [x=50, y=70] = [100];  
        => console.log(x); // 100  
            console.log(y); // 70  
    => Swapping Variables
        => The values of the two variables can be swapped in one destructuring expression. 
        => The array destructuring makes it easy to swap the values of variables without using any temporary variable.
        => var x = 100, y = 200;  
            [x, y] = [y, x];  
            console.log(x); // 200  
            console.log(y); // 100 
    => Object Destructuring : 
        => It is similar to array destructuring except that instead of values being pulled out of an array, the properties (or keys) and their corresponding values can be pulled out from an object.
        => When destructuring the objects, we use keys as the name of the variable. The variable name must match the property (or keys) name of the object. If it does not match, then it receives an undefined value. This is how JavaScript knows which property of the object we want to assign.
        => const num = {x: 100, y: 200};  
            const {x, y} = num; 
            console.log(x); // 100  
            console.log(y); // 200   
        => Assigning new variable names
            => const num = {x: 100, y: 200};  
                const {x: new1, y: new2} = num;  
                console.log(new1); //100   
                console.log(new2); //200  
        => Assignment without declaration
            => if the value of the variable is not assigned when you declare it, then you can assign its value during destructuring
            => let name, division;  
                ({name, division} = {name: 'Anil', division: 'First'});   // use of () is mandatory here
                console.log(name); // Anil  
                console.log(division); // First 
            => In the above example, it is to be noted that the use of parentheses () around the assignment statement is mandatory when using variable destructuring assignment without a declaration. Otherwise, the syntax will be invalid. 
            => const numbers = [];
                const obj = { a: 1, b: 2 };
                ({ a: numbers[0], b: numbers[1] } = obj);
                // The properties `a` and `b` are assigned to properties of `numbers`
        => Object destructuring and rest operator : 
            => By using the rest operator (…) in object destructuring, we can put all the remaining keys of an object in a new object variable.
            => let {a, b, ...args} = {a: 100, b: 200, c: 300, d: 400, e: 500}  
                console.log(a);    // 100
                console.log(b);    // 200
                console.log(args);   //{ c: 300, d: 400, e: 500 }
        => Assigning new variable names and providing default values simultaneously
            => A property that is unpacked from an object can be assigned to a variable with a different name. And the default value is assigned to it in case the unpacked value is undefined.
            => const {a:num1=100, b:num2=200} = {a:300};  
                console.log(num1); //300  
                console.log(num2); //200  


    => References : 
        => https://www.javatpoint.com/es6-array-destructuring
        => https://www.w3schools.com/react/react_es6_destructuring.asp
        => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

01/02/2023 (Wednesday) : 
    => Worked on Project Repo 
    => Research on carousel 
    => Working Files :
        => Project/
        => README.md
    => References : 
        => https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/
        => https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_hide_scrollbar_keep_func
        => https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
02/02/2023 (Thursday) : 
    => Worked on Project Repo 
    => Research on carousel 
    => Working Files :
        => Project/
        => README.md
    =>  References: 
        => https://codepen.io/hershkirsh/pen/BXBprB
        => https://stackoverflow.com/questions/60577870/how-to-add-smooth-transition-between-first-and-last-slide-of-a-carousel
        => https://www.w3schools.com/howto/howto_js_toggle_class.asp
        
03/02/2023 (Friday) : 
    => Worked on Project Repo 
    => Research on carousel 
    => Working Files :
        => Project/
        => README.md
    =>  References: 
        => https://www.codementor.io/@olatundeowokoniran/javascript-tutorial-understanding-append-prepend-after-and-before-qmgkumkyn
        => https://github.com/DaveyHert/Image-carousel-slider/commit/02be3aa300e998a3bdf549004003091517215485
06/02/2023 (Monday) : 
    => Worked on Project Repo 
    => Research on carousel
    => Fully Functional Carousel except mobile version 
    => Working Files :
        => Project/
        => README.md
    =>  References: 
        => https://stackoverflow.com/questions/3557266/cant-set-disabled-false-javascript
        => https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
        => https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX
        => https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event
        => https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth
        => https://stackoverflow.com/questions/4081064/how-to-get-the-number-of-pixels-a-user-has-scrolled-down-the-page
        => https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/
        => https://web.dev/css-scroll-snap/    (Snap Scroll)
07/02/2023 (Tuesday) : 
    => Worked on Project Repo 
    => Research on carousel
    => Fully Functional Carousel
    => Worked on mobile navbar opening functionality
    => Working Files :
        => Project/
        => README.md
    =>  References: 
        => https://www.w3schools.com/howto/howto_js_curtain_menu.asp
        => https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay
        => https://levelup.gitconnected.com/how-easy-i-code-a-hamburger-menu-with-css-and-javascript-5537d5669aa
        => https://www.w3schools.com/css/css3_transitions.asp
        => https://stackoverflow.com/questions/27230955/how-to-disable-scrolling-in-the-background-when-the-mobile-menu-is-open

08/02/2023 (Wednesday) : 
    => Worked on Project Repo 
    => Completed a design of mobile navbar dropdown
    => Working Files :
        => Project/
        => README.md
    =>  References: 
        => https://zellwk.com/blog/css-values-in-js/   ( How to get CSS values in JavaScript )
        => https://www.w3schools.com/jsref/prop_element_scrollheight.asp
        => https://www.w3schools.com/jsref/prop_element_scrollwidth.asp
        => https://stackoverflow.com/questions/64216895/javascript-is-it-possible-to-determine-how-much-user-scrolls-after-reaching-the    (calculate scrolled height of body)
        => 
09/02/2023 (Thursday):
    => Practiced Sorting
    => Merge Sort : 
        => Merge Sort is a Divide and Conquer algorithm
        => It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.
        => The major portion of the algorithm is given two sorted arrays, and we have to merge them into a single sorted array. 
        => Complexity :
            => The biggest advantage of using Merge sort is that the time complexity is only n*log(n) to sort an entire Array. It is a lot better than n^2 running time of bubble sort or insertion sort.
            => Space Complexity: O(n)
    => Working Files : 
        => Javascript/index.js
        => Project/index.js
        => README.md
    => References:
        => https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/
        => https://www.youtube.com/watch?v=TzeBrDU-JaY

10/02/2023 (Friday) :  
    => Practiced Array methods
    => arr.some()
        => Syntax: arr.some(function(element,index,array){ /* … */ }, thisArg);
        =>The some() method is an iterative method. It calls a provided callbackFn function once for each element in an array, until the callbackFn returns a truthy value.
        => If such an element is found, some() immediately returns true and stops iterating through the array.
        =>  Otherwise, if callbackFn returns a falsy value for all elements, some() returns false.
        => callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.
    => arr.every()
        => Syntax: arr.every(function(element,index,array){ /* … */ }, thisArg);
        => The every() method is an iterative method. It calls a provided callbackFn function once for each element in an array, until the callbackFn returns a falsy value. 
        => If such an element is found, every() immediately returns false and stops iterating through the array. 
        => Otherwise, if callbackFn returns a truthy value for all elements, every() returns true.
    => Working Files :
        => Javascript/index.js
        => Project/
        => README.md
    =>  References: 
        => https://javascript.info/array-methods
        => https://www.w3schools.com/js/js_operators.asp
        => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
        => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

15/02/2023 (Wednesday) : 
    => Practiced Javascript problems
    => Working Files :
        => Javascript/
        => README.md
    =>  References: 
        => https://www.hackerrank.com/dashboard
16/02/2023 (Thursday) : 
    => Practiced Javascript problems
    => Working Files :
        => Javascript/
        => README.md
    =>  References: 
        => https://www.hackerrank.com/dashboard
17/02/2023 (Friday) : 
    => Studied Fetch API
    => HTTP
        => Every request is completely INDEPENDENT
    => CRUD (Create, Read, Update, Delete)
        => Create : POST
        => Read: GET
        => Update: PUT
        => Delete : DELETE
    => Fetch API
        => Syntax: fetch("url",{options object}).then(res=>res.json()).then(res=>res);
        => Fetching data from servers is a two stage process, 
            => 1. an object of response class containing "status", "ok", etc properties 
                => status: the HTTP status code eg 200
                => ok: boolean, true if status code is 200-299
            => 2. After that we need to call another method to access the response body in different formats 
                => response.text() : read and return the text
                => reponse.json() " parse the response as JSON
                => NOTE : we can use only one body reading method eg. if we already got the response with response.text() then response.json() wont work .
        => Response headers : available in Response.headers while first stage of GET process
        => Request headers : To set a request header in fetch , we can use the headers option   
            => let res= fetch(url,{
                headers:{
                    Authentication: "Secret"
                }
            });
    => Working Files :
        => Javascript/
        => https://github.com/Learner2707/react-practice/commits/master
        => README.md
    =>  References: 
        => https://www.youtube.com/watch?v=iYM2zFP3Zn0   (HTTP info)
        => https://www.youtube.com/watch?v=Atq7VjVbaA8&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=66
        => https://www.youtube.com/watch?v=guYMSP7JVTA
        => https://www.youtube.com/watch?v=hrp_RebjZE4

20/02/2023(Monday):
    => POST request using FETCH API
        => POST is used for adding new data in the api
        => The post request is widely used to submit forms to the server. Fetch also supports the POST method call.
        => To do a POST request we need to specify additional parameters with the request such as method, headers, etc
        =>For a POST request, you can use the “body” property to pass a JSON string as input. 
        => Do note that the request body should be a JSON string while the headers should be a JSON object.
    => PUT request using FETCH API: 
        => PUT is used for updating the pre-existing data in the api
    => Working Files :
        => Javascript/
        => README.md
    =>  References: 
        => https://www.geeksforgeeks.org/get-and-post-method-using-fetch-api/
        => https://www.freecodecamp.org/news/javascript-fetch-api-tutorial-with-js-fetch-post-and-header-examples/

<hr/>                                           <b>React</b> <hr/>

21/02/2023(Tuesday):
    =>DELETE request using Fetch API: 
        => DELETE is used for deleting existing data in the api
        => Synatx : fetch("url",{options object}).then(res=>res);
            => here in options object we provide the value of key "Method" as "DELETE";
    => React : SPA
        => SPA(Single Page Application): A Single Page Application is a web application or website that interacts with the web browser by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages.
        => A single-page application is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run. Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded.
    => Studied File Structure of a React App
    => React Components:  
        => A Component is one of the core building blocks of React.Components make the task of building UIs much easier
        => There are two types of components:
        => Functional Components : Functional components are simply javascript functions
            => We can create a functional component in React by writing a javascript function.
            => These functions may or may not receive data as parameters
            => Example : const Democomponent=()=>
                        {
                            return <h1>Welcome Message!</h1>;
                        }
        => Class Components: The class components are a little more complex than the functional components
            =>  The functional components are not aware of the other components in your program whereas the class components can work with each other.
            =>We can pass data from one class component to other class components
            => We can use JavaScript ES6 classes to create class-based components in React
            => SYntax : class Democomponent extends React.Component
                {
                   render(){
                        return <h1>Welcome Message!</h1>;
                    }
                }
    => Reconciliation : 
        => The reconciliation process makes React work faster.
        =>  Reconciliation is the process through which React updates the Browser DOM.
        => Important concepts behind the working of the Reconciliation process are:
                => Virtual DOM                 
                => Diffing Algorithm
        => The term rendering in React can closely be identified as making or becoming.
        => In traditional rendering, Browser does the following tasks:
                => Creates a DOM (Document Object Model) represented by a tree structure.
                => Renders any new data to the DOM even if data is similar to previous ones.
        => This rendering by Browser has a sequence of steps and is rather costly in nature. The concept of Virtual DOM used by React makes rendering much faster.
    => Working Files:
        => Javascript/
        => README.md
    => References:
        => https://jasonwatmore.com/post/2021/09/21/fetch-http-delete-request-examples
        => https://www.bloomreach.com/en/blog/2018/what-is-a-single-page-application?spz=article_var
        => https://www.geeksforgeeks.org/reactjs-components/?ref=lbp
        => https://reactjs.org/docs/reconciliation.html (Reconciliation)
        => https://www.geeksforgeeks.org/reactjs-reconciliation/

22/02/2023(Wednesday):
    => Worked on Training Plan for HTML, CSS
    => Virtual DOM : 
        => React renders JSX components to the Browser DOM, but keeps a copy of the actual DOM to itself. This copy is the Virtual DOM
        => We can think of it as the twin brother of the real or Browser DOM
        => The following actions take place in React:
            => React stores a copy of Browser DOM which is called Virtual DOM.
            => When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one.
            => Comparison is done by Diffing Algorithm. The cool fact is all these comparisons take place in the memory and nothing is yet changed in the Browser.
            => After comparing, React goes ahead and creates a new Virtual DOM having the changes. It is to note that as many as 200,000 virtual DOM nodes can be produced in a second.
            => Then it updates the Browser DOM with the least number of changes possible without rendering the entire DOM again. This changes the efficiency of an application tremendously
    => How does this Virtual DOM compare itself to its previous version?
        => This is where the Diffing Algorithm comes into play
        => Steps: 
            => Two elements of different types will produce different trees.
            => Breadth-First Search (BFS) is applied because if a node is found as changed, it will re-render the entire subtree hence Depth First Approach is not exactly optimal.
            => When comparing two elements of the same type, keep the underlying node as same and only update changes in attributes or styles.
            => React uses optimizations so that a minimal difference can be calculated in O(N) efficiently using this Algorithm.
    => References :
        => https://www.geeksforgeeks.org/reactjs-reconciliation/

23/02/2023(Thursday):
    => Worked on Training Plan HTML CSS
    => Life cycle of Component
        => Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
        => Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.
        => Updating: Updating is the stage when the state of a component is updated and the application is repainted.
        => Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.
    => Raw HTML to React :
        => You need to return a single parent element in JSX
        => To define class names and for attributes in JSX, you don't do it as class or for, since both are reserved keywords in JavaScript.
        => You actually create class components with the class keyword. So, to define class names in JSX, you do it as "className" and for attributes for labels you write "HTMLFor":
        => Write all HTML Attributes in camelCase in JSX
            => You need to write all HTML attributes and event references in camelCase while writing JSX. So, onclick becomes onClick, onmouseover becomes onMouseOver, and so on
        => All Tags Self-close in JSX
        => You can implement JS directly in JSX
            => In JSX, it is possible to write JavaScript directly. You can do this by putting the JavaScript in curly braces {...}
        => Write Inline Styles as Objects in JSX
            => < p style = { {color: "#2ecc71", fontSize: "26px"} }> Hello< /p>
            => The css property name should be in camelcase (eg: fontSize and not font-size)
    => References : 
        => https://www.geeksforgeeks.org/reactjs-lifecycle-components/?ref=lbp
        => https://www.freecodecamp.org/news/html-vs-jsx-whats-the-difference/#:~:text=HTML%20is%20a%20very%20important,a%20syntactic%20sugar%20for%20React.
        
24/02/2023(Friday):
    => Worked on Training Plan HTML CSS
    => React installing via CDN Links 
        =>  < script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></>
            < script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></>
            => Using these scripts , we can run react anywhere 
    => References: 
        => https://reactjs.org/docs/cdn-links.html 
27/02/2023(Monday):
    => Learning React from Namaste React 
    => References : 
        => https://learn.namastedev.com/
28/02/2023(Monday):
    => Learning React from Namaste React
    => Working Files: 
        => https://github.com/Learner2707/react-course/commits/master
    => References :
        =>https://stackoverflow.com/questions/30281944/how-to-add-style-to-react-element-if-its-created-this-way     (using style as prop)
        => https://learn.namastedev.com/

</pre>