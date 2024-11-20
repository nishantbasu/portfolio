import litcss from 'rollup-plugin-lit-css';
import {fromRollup} from '@web/dev-server-rollup';


const rollupLitcss = fromRollup(litcss);

export default{
    ...rollupLitcss({include:['src/**/*.css']}),
    resolveMimeType(context){
        if(context.response.is('css')){
            return 'js';
        }
    }
}