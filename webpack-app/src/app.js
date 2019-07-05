import Layer from './components/layer/layer.js';
import './css/common.css';

const App = function() {
    const dom = document.getElementById('app');
    const layer = new Layer();
    dom.innerHTML = layer.tpl({
        name: 'John',
        arr: ['apple', 'xiaomi', 'huawei']
    });
};

new App();
