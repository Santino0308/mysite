// This script handles pre-filling the contact form's message textarea based on a URL query parameter.
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');

    if (service) {
        const messageTextarea = document.getElementById('message'); // Assuming your textarea has id="message"
        if (messageTextarea) {
            let predefinedMessage = '';
            switch (service) {
                case 'Interior Design':
                    predefinedMessage = 'I am interested in your Interior Design services. Please provide more information.';
                    break;
                case 'Interior Decoration':
                    predefinedMessage = 'I am interested in your Interior Decoration services. Please provide more information.';
                    break;
                case 'Fit Outs':
                    predefinedMessage = 'I am interested in your Fit Out services. Please provide more information.';
                    break;
                case 'Joinery':
                    predefinedMessage = 'I am interested in your Joinery services. Please provide more information.';
                    break;
                case 'MEP and Technical Services':
                    predefinedMessage = 'I am interested in your MEP and Technical Services. Please provide more information.';
                    break;
                default:
                    predefinedMessage = 'I am interested in your services. Please provide more information.';
            }
            messageTextarea.value = predefinedMessage;
        } else {
            console.warn('Message textarea with id="message" not found.');
        }
    }
});