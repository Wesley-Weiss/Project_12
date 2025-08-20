import { marked } from "marked";
marked.setOptions({
    gfm: true,
    breaks: true
});

function MarkdownPreview({ markdown }: { markdown: string }) {

    return (
        <div>
            <h2>Preview</h2>
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }} />
        </div>
    );
}

export default MarkdownPreview;