// importing Content interfaceimport { Content } from "./content-interface";
import { Content } from "./content-interface";

export class ContentList {
    private _contentArray: Content[];
    constructor() {
        this._contentArray = [];
    }
    get contentArray(): Content[] {
        return this._contentArray;
    }
    addContent(newContent: Content): void {
        this._contentArray.push(newContent);
    }
    arrayLength(): number {
        return this._contentArray.length;
    }

    generateHtml(index: number): string {
        if (index >= this._contentArray.length) {
            return `<div class="error">Nothing found at index ${index}</div>`;
        }
        return `<div class="title">${this._contentArray[index].title}</div>
        <div class="description">${this._contentArray[index].description}</div>
        <div class="creator">${this._contentArray[index].creator}</div>
        <div class="imageUrl"><img src="${this._contentArray[index].imgURL}"></div>
        <div class="type">${this._contentArray[index].type}</div>`;
    }
}