export default class {

    observerList: any[];

    constructor() {
        this.observerList = [];
    }

    add(obj: any) {
        return this.observerList.push(obj);
    }

    ount() {
        return this.observerList.length;
    }

    get(index: number) {
        if (index > -1 && index < this.observerList.length) {
            return this.observerList[index];
        }
    }

    indexOf(obj: any, startIndex: number) {
        let i = startIndex;

        while( i < this.observerList.length ){
            if( this.observerList[i] === obj ){
                return i;
            }
            i++;
        }

        return -1;
    };

    removeAt(index: number) {
        this.observerList.splice(index, 1 );
    };
}