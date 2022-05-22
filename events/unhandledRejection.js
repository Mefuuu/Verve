const index = require('../index.js');

module.exports = {
    name: 'unhandledRejection',
    process: true,
    async execute(error) {
        console.error(`API Error:\n${error}`);
        let id = '';
        for (let i = 0; i < 5; i++) {
            id += `${Math.floor(Math.random() * (9 - 1 + 1) + 1)}`;
        }
        index.client.channels.cache.get('973939815601045564').send(`API Error: [${id}]\n\`\`\`${error.stack}\`\`\``);
    },
};