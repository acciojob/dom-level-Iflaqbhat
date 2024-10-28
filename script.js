//your JS code here. If required.
     const element = document.getElementById("level");
        const level = [...element.parentNode.children].indexOf(element);
alert(`The level of the element is: ${level}`);