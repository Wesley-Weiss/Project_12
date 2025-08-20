import type { SetStateAction } from "react";

function TextArea({ value, setValue }: { value: string; setValue: React.Dispatch<SetStateAction<string>> }) {

    return (
        <textarea
            value={value}
            placeholder="<p>Enter Markdown Here</p>"
            id="editor"
            onChange={(e) => setValue(e.target.value)}
        />
    );
    
}

 
export default TextArea;