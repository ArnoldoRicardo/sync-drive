import { useEffect, useState, useCallback, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import SimpleMDE from "react-simplemde-editor";
import easymde, { Options, toggleBold } from "easymde";

import { TOOLBAR } from "./const";
import "easymde/dist/easymde.min.css";

export const CreateNote = () => {
  const [content, setCotent] = useState("");

  const onChange = useCallback(
    (value: string) => {
      setCotent(value);
    },
    [content]
  );

  const handleSave = (editor: easymde) => {
    console.log("nueva nota");
  };

  const options = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: true,
      minHeight: "85vh",
      placeholder: "listo para comenzar una nueva nota",
      toolbar: [
        ...TOOLBAR,
        {
          name: "new",
          action: handleSave,
          className: "fa fa-star",
          title: "nueva nota",
        },
        "|",
      ],
    } as Options;
  }, []);

  return (
    <>
      <SimpleMDE options={options} value={content} onChange={onChange} />
    </>
  );
};
