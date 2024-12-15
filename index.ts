import { Ollama } from 'ollama';

const args: Array<string> = process.argv;
const prompt: string = args.slice(2).join(' ');

if (!prompt.length) process.exit(0);

const kaizOllamaHost = Bun.env['KAIZ_OLLAMA_HOST'] || 'http://0.0.0.0:11434';
const kaizOllamaModel = Bun.env['KAIZ_OLLAMA_MODEL'] || 'llama3.2:1b';

(async () => {
    const ollama = new Ollama({ host: kaizOllamaHost });    
    const response = await ollama.chat({
        model: kaizOllamaModel,
        messages: [
            { role: 'user', content: prompt }
        ],
        stream: true
    });
    for await (const chunk of response) {
        Bun.stdout.writer().write(chunk.message.content);
    }
    console.log("\n");
})();