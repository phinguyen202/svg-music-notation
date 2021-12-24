export default class Player {
    constructor(elements) {
        this.draw = () => {
            if (this.elements && this.elements.length) {
                this.elements.forEach((ele) => {
                    ele.updateProps({ x: ele.props.x + 1 });
                    console.log('call render');
                    console.log(ele.props.x);
                    ele.reRender();
                });
                window.requestAnimationFrame(this.draw);
            }
        };
        console.log(elements);
        this.elements = elements;
        this.start = 0;
        this.end = 100;
    }
    play() {
        window.requestAnimationFrame(this.draw);
    }
}
