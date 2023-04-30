type FormSubmitHandler = () => {};
type MessageHandler = () => {};

function handleMainEvent(elem: HTMLFormElement, handler: FormSubmitHandler);
function handleMainEvent(elem: HTMLIFrameElement, handler: MessageHandler);
function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {}
