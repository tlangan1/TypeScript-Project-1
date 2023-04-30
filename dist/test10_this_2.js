function myClickHandler(event) {
    this.disabled = true;
    // 'this' implicitly has type 'any' because it does not have a type annotation.
}
myClickHandler(new Event("click")); // seems ok
var myButton = document.getElementsByTagName("button");
var boundHandler = myClickHandler.bind(myButton);
boundHandler(new Event("click")); // seems ok
