export function splitSentenceToParagraphs(text: string){
    if (!text) return []
    const sentences = text.split(/(?<=[.!?])\s+/);
    return sentences
}

// export function highlightBeforeDash(text:string){
//     if(!text) return []
//     const sentences = text.split('–')
//     if(sentences.length === 1){
//         return sentences[0]
//     }
//     const highlight = `<span className = "font-normal">${sentences[0]}</span> + –`
//     return highlight + sentences.slice(1).join('–')
// }