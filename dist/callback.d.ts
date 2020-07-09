import Message from "./message";
import Functions from "@dikac/t-function/function";
export default class Callback<Fn extends Functions> implements Readonly<Message<ReturnType<Fn>>> {
    readonly callback: Fn;
    readonly argument: Parameters<Fn>;
    constructor(callback: Fn, argument: Parameters<Fn>);
    get message(): ReturnType<Fn>;
}
