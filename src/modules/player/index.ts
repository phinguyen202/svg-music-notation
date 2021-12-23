export default class Player {
    private start: number;
    private end: number;
    private elements: Array<any>
    constructor(elements: Array<any>) {
        console.log(elements);
        this.elements = elements;
        this.start = 0;
        this.end = 100;
    }

    public play() { 
        window.requestAnimationFrame(this.draw);
    }

    draw = () => {
        if (this.elements && this.elements.length) {
            this.elements.forEach((ele: any) => {
                ele.updateProps({ x: ele.props.x + 1 });
                console.log('call render');
                console.log(ele.props.x);
                
                ele.reRender();
            })
            window.requestAnimationFrame(this.draw);
        }
    }
}