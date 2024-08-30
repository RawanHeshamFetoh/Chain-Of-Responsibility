// class HandlerA {
//     handle(request) {
//         if (request.type === 'A') {
//             console.log('Handled by HandlerA');
//         } else {
//             console.log('HandlerA cannot handle this request');
//         }
//     }
// }

// class HandlerB {
//     handle(request) {
//         if (request.type === 'B') {
//             console.log('Handled by HandlerB');
//         } else {
//             console.log('HandlerB cannot handle this request');
//         }
//     }
// }

// class HandlerC {
//     handle(request) {
//         if (request.type === 'C') {
//             console.log('Handled by HandlerC');
//         } else {
//             console.log('HandlerC cannot handle this request');
//         }
//     }
// }


// const handlerA = new HandlerA();
// const handlerB = new HandlerB();
// const handlerC = new HandlerC();

// const request = { type: 'B' };
// handlerA.handle(request); 
// handlerB.handle(request); 
// handlerC.handle(request); 



// Chain of Responsability

class Handler {
    constructor(nextHandler = null) {
        this.nextHandler = nextHandler;
    }

    handle(request) {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        } else {
            console.log('No handler found for this request');
        }
    }
}

class HandlerA extends Handler {
    handle(request) {
        if (request.type === 'A') {
            console.log('Handled by HandlerA');
        } else {
            super.handle(request);
        }
    }
}

class HandlerB extends Handler {
    handle(request) {
        if (request.type === 'B') {
            console.log('Handled by HandlerB');
        } else {
            super.handle(request);
        }
    }
}

class HandlerC extends Handler {
    handle(request) {
        if (request.type === 'C') {
            console.log('Handled by HandlerC');
        } else {
            super.handle(request);
        }
    }
}

const handlerC = new HandlerC();
const handlerB = new HandlerB(handlerC);
const handlerA = new HandlerA(handlerB);

const request = { type: 'B' };
handlerA.handle(request); 
