import { useState, useEffect } from "react";

const withNameTypeHandlers =
  (config = {}) =>
  (Component) => {
    const WrappedComponent = (props) => {
      // TODO: use custom hook useSetvalue
      // TODO: add useEffect for both name and value
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

      const [currName, setCurrName] = useState(initialName);
      const [currType, setCurrType] = useState(initialType);

      useEffect(() => {
        setCurrName(
          data?.[nameKey] ||
            (initialDefaultName && id
              ? id.replace(initialDefaultName, targetDefaultName)
              : targetDefaultName)
        );
      }, [data, id, initialDefaultName, nameKey, targetDefaultName]);

      useEffect(() => {
        setCurrType(data[typeKey] ?? defaultType);
      }, [data, defaultType, typeKey]);

      const handleNameChange = (event) => {
        setCurrName(event.target.value);
      };

      const handleTypeChange = (e) => {
        setCurrType(e.target.value);
      };
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
