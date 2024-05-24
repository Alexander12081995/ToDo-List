import { useState } from "react";
import css from "./dropArea.module.css";

export const DropArea = ({ onDrop }: { onDrop: () => void }) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={showDrop ? css.dropArea : css.hideDrop}
    >
      Перетащите сюда
    </section>
  );
};
