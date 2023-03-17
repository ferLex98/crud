/** 
 * @param _enum Enum
 * @returns string type
 * @gist 
 */ 
export const EnumToString = (_enum: Object) => 
    Object.keys(_enum)
    .map(key => _enum[key])
    .filter(value => typeof value === 'string') as string[]
