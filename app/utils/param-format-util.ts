export default class ParamFormatUtil {
  static recreateParamSkipNullAttributes = (object: GenericParam) => {
    const objectWithoutNullAttributes: GenericParamWithoutNullAttributes = {};

    for (const key in object) {
      if (object[key] != null) {
        objectWithoutNullAttributes[key] = object[key];
      }
    }

    return objectWithoutNullAttributes;
  };
}
type GenericParam = {
  [key: string]: string | number | boolean | null;
};
type GenericParamWithoutNullAttributes = {
  [key: string]: string | number | boolean | null;
};
