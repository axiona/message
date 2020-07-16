import Message from "./message";
import Argument from "@dikac/t-function/argument/argument";
import Functions from "@dikac/t-function/function";

export default class Callback<
    Fn extends Functions,
> implements Readonly<Message<ReturnType<Fn>>>, Readonly<Argument<Parameters<Fn>>>
{
    constructor(
        readonly callback : Fn,
        readonly argument : Parameters<Fn>,
    ) {
    }

    get message () : ReturnType<Fn> {

        return <ReturnType<Fn>>this.callback(...this.argument);
    }


}
