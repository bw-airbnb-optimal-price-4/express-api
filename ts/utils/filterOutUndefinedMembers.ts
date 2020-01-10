interface FilterOutUndefinedMembersArg {
  obj: {
    [key: string]: any,
  },
}

interface Accumulator {
  [key: string]: any,
}

export const filterOutUndefinedMembers = ({ obj }: FilterOutUndefinedMembersArg) => Object
  .keys(obj)
  .reduce((acc: Accumulator, key: string) => {
    if (obj[key]) acc[key] = obj[key];
    return acc;
  }, {});

export default {};
