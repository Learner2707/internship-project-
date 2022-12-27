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
    <hr/>                         <b>CSS</b> <hr/>

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
        => block
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
</pre>