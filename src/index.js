const xMin = -5;
const xMax = 5;
const yMin = -5;
const yMax = 5;
const board = JXG.JSXGraph.initBoard('jxgbox',
    { boundingbox: [xMin, yMax, xMax, yMin], axis: true });
let aValue = 1.0;
let bValue = 1.0;
let cValue = 0.0;
let dValue = 0.0;
aSlider.addEventListener('input', (evt) => {
    aValue = Number.parseFloat(aSlider.value);
    aLabel.innerText = `a = ${aValue.toFixed(1)}`;
    board.update();
});
bSlider.addEventListener('input', (evt) => {
    bValue = Number.parseFloat(bSlider.value);
    bLabel.innerText = `b = ${bValue.toFixed(1)}`;
    board.update();
});
cSlider.addEventListener('input', (evt) => {
    cValue = Number.parseFloat(cSlider.value);
    cLabel.innerText = `c = ${cValue.toFixed(1)}`;
    board.update();
});
dSlider.addEventListener('input', (evt) => {
    dValue = Number.parseFloat(dSlider.value);
    dLabel.innerText = `d = ${dValue.toFixed(1)}`;
    board.update();
});
const base = (x) => 2 * x / (1 + x * x);
const f = board.create('functiongraph',
    [(x) => base(x), xMin, xMax],
    { strokeColor: 'black', dash: 1 });
const tf = board.create('functiongraph',
    [(x) => aValue * base(bValue * x + cValue) + dValue, xMin, xMax]);
const pt = board.create('glider', [0, 0, f],
    { fillColor: 'red', strokeColor: 'red', withLabel: false });
const tpt = board.create('point',
    [() => (pt.X() - cValue) / bValue, () => aValue * pt.Y() + dValue],
    { fillColor: 'blue', strokeColor: 'blue', withLabel: false });
