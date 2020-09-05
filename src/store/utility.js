export const updateObject = (oldObject, valuesToUpdate) => {
    return {
        ...oldObject,
        ...valuesToUpdate
    }
}