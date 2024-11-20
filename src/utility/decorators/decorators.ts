import { requestService } from "../service-provider/service-provider-utility";

export function inject(dependencyName: string) {
  return (target: any, propertyKey?: any) => {
    let _value: any;
    function getter() {
      return _value === undefined
        ? (_value = requestService(dependencyName))
        : _value;
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
      enumerable: true,
    });
  };
}
