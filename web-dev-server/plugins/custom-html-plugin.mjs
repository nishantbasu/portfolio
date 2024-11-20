import importLitHtml from 'rollup-plugin-import-lithtml';

export default {
    name: 'html-plugin',
    resolveMimeType(context){
        if(context.path.endsWith('.html') && !context.path.endsWith('index.html')){
            return 'js';
        }
    },
    async transform(context){
        if(context.path.endsWith('.html') && !context.path.endsWith('index.html')){
            const result = await importLitHtml({include :/.html$/}).transform(context.body, context.path);
            return result.code;
        }
    }
}