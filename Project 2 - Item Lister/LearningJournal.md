# The Jazaltron Learning Journal

### **_This is a LessonJournal in the JS_DOM series_**

#### **_It Contains Simple Explanations On The Event Parameter Objects_**

##### (e)

    An event parameter is a parameter that can be passed into any function that is listening for an event.
    It can be used to call multiple objects and methods that can be used to modify or change the element
    from which the event is being called.

###### e.target

    When logged in the console
    gives us whatever element the event was fired from

###### e.target.id

    This gives us the id attached to the element, which the event is fired from

###### e.target.className

    This gives us all the classes attached to the element, which the event is fired from

###### e.target.classList

    This gives us an array of the classes attached to the element, which the event is fired from. it presents this in the form of a **DOMTokenList**

###### e.type

    This just tells what type of event is being fired off by the element.

###### e.clientX or e.clientY

    This just gets the position of the mouse in the X-axis or Y-axis from the browser window

###### e.offsetX or e.offsetY

    This just gets the position of the mouse in the X-axis or Y-axis from within the actual element that the event is being fired from.

###### e.altkey, e.ctrlkey, e.shiftkey

    This just basically tests to see if you are holding down any of these keys by returning a boolean of either **true** or **false**, and then you can do other things based on this result.

###### e.target.value

    This just gets the value of the element attached to the event.

#### **MouseEvents**

###### click

    **click once** for function attached to event to be executed or "called"

###### dblclick

    **click twice** for function to be called

###### mousedown

    **clickdown** for function to be executed

###### mouseup

    When you **release from a click**, that's when the event fires off

###### mouseenter

    As soon as you **enter** the element attached to the event listener the event gets fired off.

###### mouseleave

    As soon as you **leave** the element attached to the event listener the event gets fired off.

###### mouseover

    As the mouseenter is for the element itself, the mouseover applies to the inner-elements within the main element.

###### mouseout

    As the mouseout is for the element itself, the mouseout applies to the inner-elements within the main element.

###### mousemove

    It fires of whenever you are within the attached element and moving the mouse.

e.g

    {
        var box = document.getElementById('box');
        box.addEventListener('mousemove', runEvent);
        function runEvent(e){
            console.log('EVENT TYPE: 'e.type);
            box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
        }
    }

#### Keyboard and Input Events

###### keydown

    Anytime you **type a key** on your keyboard the event attached to the element gets fired off.

###### keyup

    Anytime you **letgo of a key** on your keyboard the event attached to the element gets fired off.

###### keypress

    Anytime you **press a key** on your keyboard the event attached to the element gets fired off.

###### focus

    This is when you click inside of an input, it makes live and active and focuses on the said input.

###### blur

    This is when you click outside of an input.

###### cut and paste

    it fires of an event whenever you cut or paste from and to an input.

###### input

    This simply just runs whenever you do anything within the given input.

###### change

    This fires off whenever you use/choose from options within the html select element/tag

###### submit

    By default the submit button just submits to the html page it is within.
    The way that you prevent that from happening is by taking the event parameter passed into your function and you call **e.preventDefault()**
    which is just a function that prevents that from happening(i.e submitting to the page).

###### **(itemName.toLowerCase().indexOf(text) != -1 )**

        This line simply means that the itemName which is being mapped is converted to lowercase
        Now the other part which states that if the text that is passed in is not equal to -1
        Just means that if the "text matches the itemName being mapped" then it is not equal to -1
        But if it does not match then it is equal to -1 and the item being searched will not be found
