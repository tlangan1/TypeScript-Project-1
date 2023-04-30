type FormSubmitHandler = () => {};
type MessageHandler = () => {};
declare function handleMainEvent(elem: HTMLFormElement, handler: FormSubmitHandler): any;
declare function handleMainEvent(elem: HTMLIFrameElement, handler: MessageHandler): any;
