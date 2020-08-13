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
        this.container.innerText = `${text.length} character${text.length > 1 ? 's' : ''}\n${words} word${words > 1 ? 's' : ''}`;
    }
}

Quill.register('modules/counter', Counter);
