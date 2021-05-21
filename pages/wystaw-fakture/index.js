import dynamic from "next/dynamic";


const PDFViewer = dynamic(() => import("./InvoicesGenerator/App.js"), {
    ssr: false
});

export default function PDF() {
    return <PDFViewer />;
}