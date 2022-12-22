<pre>                      <b> HTML </b>
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
            =>input element: this the tag responsible for showing the input field of different types based on its attribute "type"
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
                                        
                                        
                                        
                                        <b style="font-size:22px">CSS</b>


</pre>