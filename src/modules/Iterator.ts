export default class {

    radiusList: number[];

    constructor() {
        this.radiusList = [];
    }

    public generate(): any {
        return this[Symbol.iterator]();
    }

    private asymptoticApproach(lastIndex: number, direction: boolean, value: number): number {
        if (direction) {
            if (this.radiusList.length === 0 ||
                this.radiusList.length === 1 ||
                this.radiusList.length - 1 === lastIndex) {

                this.radiusList.push(value);

                return this.radiusList.length - 1;

            } else {
                return this.getNextIndex(lastIndex, direction);
            }

        } else {
            return this.getNextIndex(lastIndex, direction);
        }
    }

    private getNextIndex(index: number, direction: boolean): number {
        const value = this.radiusList[index] || 0;

        const closestIndex =  direction ? index + 1 : index - 1;

        const closestValue = this.radiusList[closestIndex];

        const middleOfInterval = this.getValueMiddleOfInterval(closestValue, value);

        const spliceIndex = direction ? closestIndex : index;

        this.radiusList.splice(spliceIndex, 0, middleOfInterval);

        return direction ? index + 1 : closestIndex + 1;
    }

    private getValueMiddleOfInterval(value_1: number, value_2: number): number {
        const minOfValues = Math.min(value_1, value_2);

        return Math.abs((value_2 - value_1) / 2) + minOfValues;
    }

    private [Symbol.iterator](): any {
        let countStep = 1;
        let currentIndex: number;

        let x = 7;
        let n = 1;

        const _this = this;

        return {
            next(flag: boolean) {
                const incrementFunction = Math.pow(x, n);

                currentIndex = _this.asymptoticApproach(currentIndex, flag, incrementFunction);

                n += 1;

                const radius = _this.radiusList[currentIndex];

                let value = (radius >= 50000) ? undefined : radius;
                let done = !value;

                console.log('countStep', countStep, radius, value, currentIndex);
                countStep += 1;

                return {
                    value,
                    done
                }
            }
        }
    }

};