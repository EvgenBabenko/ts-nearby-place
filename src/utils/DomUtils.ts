export default class {

    public reduceFormByAttr(attr: string, form: object): any {
        return Object.values(form).reduce((acc, current) => {
            const key = current[attr];

            if (key) {
                return {
                    ...acc,
                    [key]: parseFloat(current.value)
                }
            }

            return acc;
        }, {});
    }

    public createElement(tag: string, props: any, ...children: any[]): any {
        const element: any = document.createElement(tag);
    
        Object.keys(props).forEach(key => (element[key] = props[key]));
    
        children.forEach(child => {
            if (typeof child === "string") {
                child = document.createTextNode(child);
            }
    
            element.appendChild(child);
        });
    
        return element;
    }

    public clearNode(node: any): void {
        node.innerHTML = '';
    }

}