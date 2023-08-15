import {makeAutoObservable} from "mobx";
import {TextInput} from "../lib";

export class FormControl {

    name: TextInput
    password: TextInput

    constructor() {

        this.name = new TextInput('')
        this.password = new TextInput('')

        makeAutoObservable(this, {}, {autoBind: true})
    }
}