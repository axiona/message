import AssertString from "../assert/message";
import MessageError from "../assert/throwable/message-parameters";
import MessageInterface from "../message";
import Value from "@dikac/t-value/value";
import MessageParameters from "./message-parameters";

/**
 * return {@param value} is compatible with {@link MessageInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export default function MessageParameter(
    //value : object,
    //error : (value:object)=>Error = MessageError,
    {
        value,
        error,
    } : Value<object> & {error ?: (value:object)=>Error}
) : MessageInterface {

    return MessageParameters(value, error);
    // AssertString(value, error);
    //
    // return value;
}