import AssertString from '../assert/message.js';
import MessageError from '../assert/throwable/message.js';
import MessageInterface from '../message.js';
import Value from '@axiona/value/value.js';

/**
 * return {@param value} is compatible with {@link MessageInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export function MessageParameters(
    value : object,
    error : (value:object)=>Error = MessageError.Parameters
) : MessageInterface {

    AssertString(value, error);

    return value;
}

export type MessageArgument = Value<object> & {error ?: (value:object)=>Error};

/**
 * return {@param value} is compatible with {@link MessageInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export function MessageParameter(
    {
        value,
        error,
    } : MessageArgument
) : MessageInterface {

    return MessageParameters(value, error);
}


namespace Message {
    export const Parameters = MessageParameters;
    export const Parameter = MessageParameter;
    export type Argument = MessageArgument;
}
export default Message;
