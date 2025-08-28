<!-- Answer to Q1 -->

- getElementById: only selects one element with specific ID.
- getElementsByClassName: selects all the elements with same class.
- querySelector: takes a CSS selector then returns only the first matching element
- querySelectorAll: takes a CSS selector then returns all the matching elements.

<!-- Answer to Q2 -->

----I'll create new element first----
const newDiv = document.createElement('div');
----I'll add content here, such as----
newDiv.textContent = "New text added";

----Then I'll call parent element----
const parent = document.getElementById('parent')

----Finally, I'll insert new element to parent----
parent.appendChild(newDiv);

<!-- Answer to Q3 -->

In Event bubbling, an event occurs on an element,
it first executes on that element, and then step by step propagates upward to its parent, then the parent’s parent, and so on.
That means event bubbling always works from bottom to top (child to parent).

<!-- Answer to Q4 -->

Event delegation means putting one event listener on a parent element instead of each child. Then, using the event, we can see which child was clicked. It’s easier and works even for elements added later.

<!-- Answer to Q5 -->

- preventDefault(): stops the default action of an event. Like we used it in a form from submitting.  

- stopPropagation(): stops the event from bubbling or capturing. That means parent elements won’t receive the event.