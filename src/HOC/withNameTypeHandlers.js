import { useEffect } from "react";
import { useSetValues } from "../hooks/useSetValues";

const withNameTypeHandlers =
  (config = {}) =>
  (Component) => {
    const WrappedComponent = (props) => {
      // TODO: add style in HOC only
      const { data, id } = props;
      const {
        nameKey,
        typeKey,
        initialDefaultName,
        targetDefaultName,
        defaultType,
      } = config;
      const initialName =
        data?.[nameKey] ||
        (initialDefaultName && id
          ? id.replace(initialDefaultName, targetDefaultName)
          : targetDefaultName);
      const initialType = data[typeKey] ?? defaultType;

      const [currName, setCurrName, handleNameChange] =
        useSetValues(initialName);
      const [currType, setCurrType, handleTypeChange] =
        useSetValues(initialType);

      useEffect(() => {
        setCurrName(
          data?.[nameKey] ||
            (initialDefaultName && id
              ? id.replace(initialDefaultName, targetDefaultName)
              : targetDefaultName)
        );
      }, [
        data,
        id,
        initialDefaultName,
        nameKey,
        setCurrName,
        targetDefaultName,
      ]);

      useEffect(() => {
        setCurrType(data[typeKey] ?? defaultType);
      }, [data, defaultType, setCurrType, typeKey]);

      return (
        <Component
          {...props}
          currName={currName}
          currType={currType}
          handleNameChange={handleNameChange}
          handleTypeChange={handleTypeChange}
        />
      );
    };
    return WrappedComponent;
  };

export default withNameTypeHandlers;
