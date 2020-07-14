import Message from "./message";
import Functions from "@dikac/t-function/function";
import Argument from "@dikac/t-function/argument/argument";
import Callback from "./callback";

export default function CallbackFromObject<Fn extends Functions>(
    object : Message<Fn> & Argument<Parameters<Fn>>
) : Readonly<Message<ReturnType<Fn>> & Argument<Parameters<Fn>>> {

    return new Callback(object.message, object.argument);
}