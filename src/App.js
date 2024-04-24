// import-export fonction d'entrée
// on prend la fonction useState de react; C'est l'homme qui murmurait à l'oreille du DOM
import { useState } from "react";
// pour mettre en gras
import MarkdownPreview from "./MarkdownPreview.js";
//fonction de sortie
export default function MarkdownEditor() {
  //notre variable et son état par défaut
  const [postContent, setPostContent] = useState("Oh , hi, Mark!");
  //résultat
  return (
    //zone de texte
    <>
      <label>
        Enter some markdown:
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </label>
      <hr />
      <MarkdownPreview markdown={postContent} />
    </>
  );
}
