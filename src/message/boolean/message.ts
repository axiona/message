import MessageInterface from '../../message.js';

export default function Message<
    Type
>(
    value : MessageInterface,
    validation : (value:unknown)=>value is Type
) : value is MessageInterface<Type> {

    if(!validation(value.message)) {

        return false;
    }

    return true;

}
