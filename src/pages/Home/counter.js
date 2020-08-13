import Quill from 'quill'

class Counter {
    constructor(quill, options) {
        this.quill = quill;
        this.container = document.getElementById(options.container);

        quill.on('text-change', this.update.bind(this))
        this.update()
    }

    update() {
        const text = this.quill.getText().trim();
        const words = text.length > 0 ? text.split(/\s+/).length : 0
        const charaters = text.length

        this.container.innerText = `${charaters} character${charaters.length > 1 ? 's' : ''}\n${words} word${words.length > 1 ? 's' : ''}`;
    }
}

Quill.register('modules/counter', Counter);
