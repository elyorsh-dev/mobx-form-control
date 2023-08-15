import {makeAutoObservable} from "mobx";
import {ChangeEvent} from "react";

export class TextInput {

    private _value = ''

    constructor(defaultValue: string = '') {

        this._value = defaultValue

        makeAutoObservable(this, {}, {autoBind: true})
    }

    public get value () {
        return this._value
    }

    public setValue (val: string) {
        this._value = val
    }

    public onChange (e: ChangeEvent<HTMLInputElement>) {
        this._value = e.target.value
    }

    public bind () {
        return {
            value: this.value,
            onChange: this.onChange
        }
    }
}