const process = require('process');
const vm = require('vm');

const api = {
    log: (message) => {
        process.send({ type: 'log', payload: { message } });
    }
}

const context = vm.createContext({
    api,
    process
});

process.on('message', (message) => {
    switch (message.type) {
        case 'run':
            {
                vm.runInContext(message.payload.code, context)
                break
            }
    }
});
