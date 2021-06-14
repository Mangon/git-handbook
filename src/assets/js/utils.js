

/**
 * 复制文本
 *
 * @param {string} text 待复制文本
 */
const copy = (text) => {
    let target = document.createElement('div');
    target.id = 'tempTarget';
    target.style.opacity = '0';
    target.innerText = text;
    document.body.appendChild(target);

    let range = document.createRange();
    range.selectNode(target);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    target.parentElement.removeChild(target);
}

const throttle = (fn, delay) => {
    let last = 0;
    return function() {
        let curr = + new Date();
        if (curr - last > delay) {
            fn.apply(this, arguments)
            last = curr;
        }
    }
}

const debounce = (fn, delay) => {
    let timer;
    return function() {
        let ctx = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(ctx, args)
        }, (delay ? delay : 300));
    };
}
export default {
    copy,
    throttle,
    debounce
}